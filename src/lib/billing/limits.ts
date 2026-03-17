import { db } from "@/lib/db";
import { agents, subscriptions } from "@/lib/db/schema";
import { eq, and, count } from "drizzle-orm";
import { PLANS, PlanKey } from "@/lib/stripe";

export async function getOrganizationPlan(
  organizationId: string
): Promise<PlanKey> {
  const sub = await db.query.subscriptions.findFirst({
    where: and(
      eq(subscriptions.organizationId, organizationId),
      eq(subscriptions.status, "active")
    ),
  });

  return (sub?.plan as PlanKey) ?? "free";
}

export async function canCreateAgent(
  organizationId: string
): Promise<{ allowed: boolean; reason?: string; currentCount: number; limit: number }> {
  const plan = await getOrganizationPlan(organizationId);
  const limit = PLANS[plan].agentLimit;

  const [result] = await db
    .select({ count: count() })
    .from(agents)
    .where(eq(agents.organizationId, organizationId));

  const currentCount = result?.count ?? 0;

  if (currentCount >= limit) {
    return {
      allowed: false,
      reason: `You've reached the ${PLANS[plan].name} plan limit of ${limit} agents. Upgrade to create more.`,
      currentCount,
      limit,
    };
  }

  return { allowed: true, currentCount, limit };
}
