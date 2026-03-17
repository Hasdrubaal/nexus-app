import Link from "next/link";

const features = [
  {
    title: "AI Agent Teams",
    description:
      "Deploy pre-built teams of AI agents for marketing, sales, support, and ops. They coordinate autonomously — you stay in control.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "5-Minute Setup",
    description:
      "Pick a template, connect your tools, and launch. No AI expertise needed. Your agents start working immediately.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Built for SMEs",
    description:
      "Enterprise-grade AI automation at a fraction of the cost. Pay only for what you use. Scale up as you grow.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

const useCases = [
  {
    role: "Marketing Team",
    tasks:
      "Content creation, SEO optimization, social media scheduling, campaign analytics",
  },
  {
    role: "Sales Team",
    tasks:
      "Lead qualification, outreach sequences, CRM updates, pipeline reporting",
  },
  {
    role: "Support Team",
    tasks:
      "Ticket triage, FAQ responses, escalation routing, satisfaction tracking",
  },
  {
    role: "Operations Team",
    tasks:
      "Invoice processing, inventory alerts, vendor communication, report generation",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with AI automation",
    features: [
      "Up to 3 AI agents",
      "100 agent runs / month",
      "Pre-built templates",
      "Community support",
    ],
    cta: "Get Started Free",
    ctaHref: "/register",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing teams that need more power",
    features: [
      "Unlimited AI agents",
      "10,000 agent runs / month",
      "Custom agent workflows",
      "Priority support",
      "API access",
      "Advanced analytics",
    ],
    cta: "Start 14-Day Trial",
    ctaHref: "/register?plan=pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Unlimited agent runs",
      "Custom model selection",
      "SSO & SAML",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    ctaHref: "mailto:sales@nexus.ai",
    highlight: false,
  },
];

const testimonials = [
  {
    quote:
      "Nexus replaced three separate tools for us. Our marketing team now runs campaigns end-to-end with AI agents while I focus on strategy.",
    name: "Sarah Chen",
    title: "Founder, BrightPath Digital",
  },
  {
    quote:
      "We went from spending 20 hours a week on support tickets to 4. The AI agents handle triage and routine responses perfectly.",
    name: "Marcus Johnson",
    title: "CEO, FastTrack Logistics",
  },
  {
    quote:
      "The 5-minute setup claim is real. I had agents handling our social media and lead qualification within my first afternoon.",
    name: "Priya Patel",
    title: "Operations Manager, GreenLeaf Co",
  },
];

const faqs = [
  {
    q: "What are AI agents?",
    a: "AI agents are autonomous programs powered by large language models. They can read, write, analyze data, and take actions on your behalf — like having a virtual team member that works 24/7.",
  },
  {
    q: "Do I need technical skills to use Nexus?",
    a: "Not at all. Pick a pre-built template, customize it with plain English instructions, and launch. No coding or AI expertise required.",
  },
  {
    q: "What happens when I hit the free tier limit?",
    a: "Your existing agents keep running. You simply won't be able to create more than 3 agents until you upgrade. No surprise charges, ever.",
  },
  {
    q: "How is my data handled?",
    a: "Your data stays yours. We use enterprise-grade encryption at rest and in transit. Agents only access the tools and data you explicitly connect. We never train on your data.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. Downgrade to the free tier whenever you want and keep your first 3 agents running.",
  },
  {
    q: "What AI models do you use?",
    a: "Nexus runs on Anthropic's Claude models by default. Pro and Enterprise plans let you choose between different model tiers to balance speed, cost, and capability.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200/60 bg-zinc-50/80 backdrop-blur-lg dark:border-zinc-800/60 dark:bg-black/80">
        <div className="flex items-center justify-between px-8 py-4 max-w-6xl mx-auto w-full">
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Nexus
          </span>
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#use-cases"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="#faq"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Blog
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center">
        {/* Hero */}
        <section className="flex max-w-4xl flex-col items-center gap-8 px-8 pt-24 pb-20 text-center">
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            Now in early access — free to start
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
            Stop hiring.
            <br />
            Start deploying.
          </h1>
          <p className="max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            Nexus gives your small business a team of AI agents that handle
            marketing, sales, support, and operations — so you can focus on what
            actually grows revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/register"
              className="rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Deploy Your First Agent Free
            </Link>
            <Link
              href="#use-cases"
              className="rounded-full border border-zinc-300 px-8 py-3.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              See How It Works
            </Link>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            No credit card required. Free for up to 3 agents.
          </p>
        </section>

        {/* Features */}
        <section id="features" className="w-full max-w-6xl px-8 py-20">
          <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Everything you need to automate your business
          </h2>
          <p className="text-center text-lg text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl mx-auto">
            Stop drowning in repetitive tasks. Deploy AI agent teams that work
            together to run your operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  <svg
                    className="h-5 w-5 text-zinc-900 dark:text-zinc-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="w-full max-w-6xl px-8 py-20">
          <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            One platform, every department
          </h2>
          <p className="text-center text-lg text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl mx-auto">
            Pick a pre-built agent team template and customize it for your
            business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.role}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="mb-2 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {uc.role}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {uc.tasks}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full max-w-6xl px-8 py-20">
          <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-center text-lg text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl mx-auto">
            Start free. Upgrade when you need more power. No surprises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.highlight
                    ? "border-zinc-900 bg-white ring-1 ring-zinc-900 dark:border-zinc-50 dark:bg-zinc-900 dark:ring-zinc-50"
                    : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white dark:bg-zinc-50 dark:text-zinc-900">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-zinc-500">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {plan.description}
                </p>
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900 dark:text-zinc-50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaHref}
                  className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-medium transition-colors ${
                    plan.highlight
                      ? "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                      : "border border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <section className="w-full max-w-6xl px-8 py-20">
          <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-16">
            Trusted by growing businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {t.name}
                  </p>
                  <p className="text-sm text-zinc-500">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full max-w-3xl px-8 py-20">
          <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-16">
            Frequently asked questions
          </h2>
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-zinc-900 dark:text-zinc-50">
                  {faq.q}
                  <svg
                    className="h-5 w-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="w-full max-w-4xl px-8 py-20 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Ready to put AI to work?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
            Join the early access program and deploy your first agent team
            today. Free to start, scales with your business.
          </p>
          <Link
            href="/register"
            className="inline-flex rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Get Started Free
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-zinc-500">
            Nexus. AI-powered business automation.
          </span>
          <div className="flex gap-6">
            <Link
              href="#pricing"
              className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              FAQ
            </Link>
          </div>
          <span className="text-sm text-zinc-400">Early Access 2026</span>
        </div>
      </footer>
    </div>
  );
}
