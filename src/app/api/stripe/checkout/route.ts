import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe, PLANS, PlanKey } from "@/lib/stripe";
import { db } from "@/lib/db";
import { subscriptions, orgMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const plan = body.plan as PlanKey;

  if (!plan || !PLANS[plan] || plan === "free") {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  const priceId = PLANS[plan].priceId;
  if (!priceId) {
    return NextResponse.json(
      { error: "Plan not configured" },
      { status: 400 }
    );
  }

  // Get the user's organization
  const membership = await db.query.orgMembers.findFirst({
    where: eq(orgMembers.userId, session.user.id),
  });

  if (!membership) {
    return NextResponse.json(
      { error: "No organization found" },
      { status: 400 }
    );
  }

  // Check for existing Stripe customer
  const existingSub = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.organizationId, membership.organizationId),
  });

  let customerId = existingSub?.stripeCustomerId;

  if (!customerId) {
    const customer = await stripe.customers.create({
      email: session.user.email ?? undefined,
      metadata: {
        organizationId: membership.organizationId,
        userId: session.user.id,
      },
    });
    customerId = customer.id;
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXTAUTH_URL}/agents?checkout=success`,
    cancel_url: `${process.env.NEXTAUTH_URL}/pricing?checkout=canceled`,
    metadata: {
      organizationId: membership.organizationId,
      plan,
    },
  });

  return NextResponse.json({ url: checkoutSession.url });
}
