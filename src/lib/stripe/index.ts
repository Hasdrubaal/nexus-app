import Stripe from "stripe";

function createStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY environment variable is required");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
    typescript: true,
  });
}

let _stripe: Stripe | undefined;

export const stripe = new Proxy({} as Stripe, {
  get(_target, prop, receiver) {
    if (!_stripe) _stripe = createStripe();
    return Reflect.get(_stripe, prop, receiver);
  },
});

export const PLANS = {
  free: {
    name: "Free",
    agentLimit: 3,
    runsPerMonth: 100,
    priceId: null,
  },
  pro: {
    name: "Pro",
    agentLimit: Infinity,
    runsPerMonth: 10_000,
    priceId: process.env.STRIPE_PRO_PRICE_ID ?? null,
  },
  enterprise: {
    name: "Enterprise",
    agentLimit: Infinity,
    runsPerMonth: Infinity,
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID ?? null,
  },
} as const;

export type PlanKey = keyof typeof PLANS;
