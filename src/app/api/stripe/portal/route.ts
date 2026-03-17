import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { subscriptions, orgMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const membership = await db.query.orgMembers.findFirst({
    where: eq(orgMembers.userId, session.user.id),
  });

  if (!membership) {
    return NextResponse.json(
      { error: "No organization found" },
      { status: 400 }
    );
  }

  const sub = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.organizationId, membership.organizationId),
  });

  if (!sub?.stripeCustomerId) {
    return NextResponse.json(
      { error: "No billing account found" },
      { status: 400 }
    );
  }

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: sub.stripeCustomerId,
    return_url: `${process.env.NEXTAUTH_URL}/agents`,
  });

  return NextResponse.json({ url: portalSession.url });
}
