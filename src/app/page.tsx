import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Server,
  Mic,
  Globe,
  Mail,
  Github,
  MapPin,
  Code2,
  Check,
  ArrowRight,
  MessageSquare,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Your own private server",
    description:
      "One dedicated server per customer. Not shared. Not multi-tenant. Your data never touches anyone else's.",
  },
  {
    icon: Mic,
    title: "Voice notes",
    description:
      "Talk instead of typing. Your assistant transcribes and responds naturally.",
  },
  {
    icon: Globe,
    title: "Web browsing",
    description:
      "Ask it to look things up. Real-time web search built in.",
  },
  {
    icon: Mail,
    title: "Gmail & Drive",
    description:
      "Read emails, send replies, access and manage your files — all from one conversation.",
  },
  {
    icon: Github,
    title: "GitHub backup",
    description:
      "Daily full backup of your assistant to a private GitHub repo. Restore any time.",
  },
  {
    icon: MapPin,
    title: "Local business search",
    description:
      "Find restaurants, cafes, services — live Google ratings, hours, and addresses.",
  },
  {
    icon: Code2,
    title: "Built on open source",
    description:
      "Every line of code is public. No hidden backdoors. No secret data collection.",
  },
  {
    icon: Shield,
    title: "Private by default",
    description:
      "Your conversations are never shared or used for training. End-to-end privacy.",
  },
];

const diySteps = [
  "Rent and configure a virtual server",
  "Generate SSH keys and store securely",
  "Connect via terminal",
  "Install Node.js and dependencies",
  "Download and install OpenClaw",
  "Configure assistant settings",
  "Connect to an AI provider",
  "Link to Telegram",
];

const easySteps = [
  { step: 1, label: "Sign in with Google", time: "10 sec" },
  { step: 2, label: "Choose Telegram or WhatsApp", time: "1 min" },
  { step: 3, label: "Pick your assistant and pay", time: "1 min" },
];

const plans = [
  {
    name: "Intern",
    price: "$19.99",
    tagline: "Punches above its weight.",
    features: [
      "16 AI models included",
      "$5/mo in AI credits",
      "Basic personality + task manager",
      "2 skills",
    ],
    popular: false,
  },
  {
    name: "Associate",
    price: "$29.99",
    tagline: "Learns how you work.",
    features: [
      "16 AI models included",
      "$8/mo in AI credits",
      "Adaptive personality + structured workflow",
      "7 skills",
      "Local business search",
    ],
    popular: false,
  },
  {
    name: "Executive",
    price: "$39.99",
    tagline: "Runs your day with proactive execution.",
    features: [
      "16 AI models included",
      "$12/mo in AI credits",
      "Proactive personality + daily planning",
      "10 skills",
      "Dual channel (Telegram + WhatsApp)",
      "Local business search",
    ],
    popular: true,
  },
  {
    name: "Chief of Staff",
    price: "$69.99",
    tagline: "Runs your week, goals, and accountability loop.",
    features: [
      "16 AI models included",
      "$25/mo in AI credits",
      "Executive operating cadence + goals",
      "13 skills",
      "Dual channel (Telegram + WhatsApp)",
      "Local business search",
    ],
    popular: false,
  },
];

const testimonials = [
  {
    quote:
      "Setup OpenClaw yesterday... claw can just keep building upon itself... The future is already here.",
    author: "Jonah",
    handle: "@jonahships",
  },
  {
    quote:
      "First time I have felt like I am living in the future since the launch of ChatGPT.",
    author: "Dave Morin",
    handle: "@davemorin",
  },
  {
    quote:
      "Very impressed how many hard things Claw gets right. Persistent memory, persona onboarding, comms integration. The end result is AWESOME.",
    author: "Aryeh Dubois",
    handle: "@AryehDubois",
  },
  {
    quote: "It's running my company.",
    author: "Therno",
    handle: "@therno",
  },
  {
    quote:
      "A smart model with eyes and hands at a desk with keyboard and mouse... everything a person could do with that Mac mini.",
    author: "Nathan Clark",
    handle: "@nathanclark",
  },
  {
    quote:
      "Yeah this was 1,000% worth it. Autonomously running tests on my app and capturing errors... The future is here.",
    author: "Nat Eliason",
    handle: "@nateliason",
  },
  {
    quote:
      "When you experience @openclaw it gives the same kick as when we first saw the power of ChatGPT and Claude Code.",
    author: "Abhi Katiyar",
    handle: "@abhi_katiyar",
  },
  {
    quote:
      "24/7 assistant with access to its own computer... running 24/7 in the cloud with access to your files, Gmail, calendar...",
    author: "Nick Vasiles",
    handle: "@nickvasiles",
  },
];

const faqs = [
  {
    question: "Do I need any technical skills?",
    answer:
      "Not at all. Sign up, pick your assistant, and start chatting. We handle all the technical setup — servers, security, AI configuration, and channel connection.",
  },
  {
    question: "How long does setup take?",
    answer:
      "About 3 minutes. Sign in with Google, choose your messaging platform (Telegram or WhatsApp), pick a plan, and you're ready to go.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Every customer gets their own dedicated server. Your conversations are never shared, never used for training, and never accessible to other users.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "Your AI assistant runs on its own dedicated server with persistent memory, proactive scheduling, and deep integrations with your tools (Gmail, Drive, Calendar). It's always available in your preferred messaging app.",
  },
  {
    question: "What can my AI assistant actually do?",
    answer:
      "Browse the web, manage your emails, search local businesses, take voice notes, schedule tasks, access your Google Drive, and much more. Every plan ships with powerful built-in capabilities.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no lock-in. Cancel your subscription anytime and your service stops at the end of the billing period. All plans come with a 7-day money-back guarantee.",
  },
  {
    question: "What's the Architect plan?",
    answer:
      "The Architect plan is $14.99/mo and lets you bring your own API key from OpenRouter, Anthropic, OpenAI, Google, or others. You get unlimited messages while only paying for the AI usage you actually use.",
  },
];

const everyPlanFeatures = [
  { icon: Globe, label: "Web browsing" },
  { icon: Mail, label: "Gmail integration" },
  { icon: Mic, label: "Voice notes" },
  { icon: Zap, label: "Scheduled tasks" },
  { icon: Github, label: "GitHub backup" },
  { icon: Shield, label: "Private by default" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-36 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Copy */}
            <div className="pt-4">
              <p className="mb-5 flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                <span className="h-px w-4 bg-border" />
                Clawdoes · Personal AI
              </p>
              <h1 className="font-serif text-5xl font-normal leading-[1.04] tracking-[-0.025em] md:text-6xl lg:text-7xl">
                Your own{" "}
                <em className="font-light italic text-muted-foreground">
                  AI assistant
                </em>
                , set in ink.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
                Private, personal, and right inside{" "}
                <strong className="font-semibold text-foreground">
                  Telegram
                </strong>{" "}
                &{" "}
                <strong className="font-semibold text-foreground">
                  WhatsApp
                </strong>
                .
              </p>
              <p className="mt-5 max-w-md border-l border-border pl-4 font-serif text-base italic text-muted-foreground">
                &ldquo;Draft a reply to that investor — friendly but
                firm&rdquo;
              </p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Sign up, pick your assistant, and start chatting in{" "}
                <strong className="font-medium text-foreground">
                  3 minutes
                </strong>
                . Your assistant runs on its own server — your conversations are{" "}
                <strong className="font-medium text-foreground">
                  never shared or used for training
                </strong>
                .
              </p>
              <div className="mt-7 flex items-center gap-5 font-mono text-[12px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Server className="size-3.5 text-foreground" />
                  Your own server
                </span>
                <span className="text-border">/</span>
                <span className="flex items-center gap-1.5">
                  <Shield className="size-3.5 text-foreground" />
                  Private by default
                </span>
                <span className="text-border">/</span>
                <span className="flex items-center gap-1.5">
                  <Zap className="size-3.5 text-foreground" />
                  Ready in 3 min
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#pricing">
                  <Button
                    size="lg"
                    className="h-12 rounded-full px-7 text-base font-medium"
                  >
                    Get my assistant
                    <ArrowRight className="ml-1.5 size-4" />
                  </Button>
                </Link>
                <Link href="#pricing">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-full px-7 text-base"
                  >
                    View pricing
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                From $14.99/mo with BYOK &middot; Cancel anytime &middot; No
                contracts
              </p>
            </div>

            {/* Right: Interactive Preview Card */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-6">
                <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Step 1
                </p>
                <p className="mb-3 text-sm font-semibold">
                  Where should it live?
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 rounded-lg border border-foreground bg-muted/40 px-3.5 py-2.5 text-sm font-medium">
                    <MessageSquare className="size-4" />
                    Telegram
                    <Badge className="ml-auto h-5 text-[9px]">
                      Recommended
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border px-3.5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-foreground/30">
                    <MessageSquare className="size-4" />
                    WhatsApp
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border/60 px-3.5 py-2.5 text-sm text-muted-foreground/60">
                    <MessageSquare className="size-4" />
                    Discord
                    <span className="ml-auto font-mono text-[10px]">Soon</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border/60 px-3.5 py-2.5 text-sm text-muted-foreground/60">
                    <MessageSquare className="size-4" />
                    Slack
                    <span className="ml-auto font-mono text-[10px]">Soon</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-5">
                <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Step 2
                </p>
                <p className="mb-3 text-sm font-semibold">
                  Pick your assistant
                </p>
                <div className="space-y-2">
                  {["Intern", "Associate", "Executive", "Chief of Staff"].map(
                    (plan, i) => {
                      const prices = ["$19.99", "$29.99", "$39.99", "$69.99"];
                      const credits = ["$5", "$8", "$12", "$25"];
                      const isSelected = plan === "Executive";
                      return (
                        <div
                          key={plan}
                          className={`flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-sm transition-colors ${
                            isSelected
                              ? "border-foreground bg-muted/40"
                              : "border-border hover:border-foreground/30"
                          }`}
                        >
                          <div>
                            <span
                              className={`font-medium ${isSelected ? "text-foreground" : ""}`}
                            >
                              {plan}
                            </span>
                            {isSelected && (
                              <Badge className="ml-2 h-5 text-[9px]">
                                Recommended
                              </Badge>
                            )}
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {credits[i]}/mo in AI credits
                            </p>
                          </div>
                          <span className="font-serif text-lg font-medium tabular-nums">
                            {prices[i]}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
                <Link href="#pricing" className="mt-4 block">
                  <Button
                    className="h-11 w-full rounded-lg text-sm font-medium"
                    size="lg"
                  >
                    Get my assistant — $39.99/mo
                  </Button>
                </Link>
                <p className="mt-2.5 text-center text-xs text-muted-foreground">
                  From $14.99/mo with BYOK
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="border-t border-border bg-muted/40 px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            01 — Capabilities
          </p>
          <h2 className="max-w-lg font-serif text-3xl font-normal leading-[1.1] tracking-[-0.02em] md:text-4xl lg:text-[2.75rem]">
            Everything included,
            <br />
            <em className="font-light italic text-muted-foreground">
              out of the box.
            </em>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            No plugins to install, no APIs to configure. Every plan ships with
            the tools your assistant needs to be genuinely useful.
          </p>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-background p-5 transition-colors hover:border-foreground/30"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-muted">
                  <feature.icon className="size-5 text-foreground" />
                </div>
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skip the Hard Part Section */}
      <section className="border-t border-border px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            02 — Why bother with all that?
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] md:text-4xl lg:text-[2.75rem]">
            Skip the hard part.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* DIY */}
            <div className="rounded-2xl border border-border bg-card p-6 text-left md:p-8">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Do it yourself
              </p>
              <p className="mt-3 font-serif text-7xl font-normal tabular-nums tracking-[-0.03em] text-muted-foreground">
                60
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                minutes, minimum
              </p>
              <ul className="mt-6 space-y-2">
                {diySteps.map((step) => (
                  <li
                    key={step}
                    className="rounded-lg border border-border px-4 py-2.5 text-sm text-muted-foreground"
                  >
                    {step}
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-serif text-sm italic text-muted-foreground">
                Non-technical? Multiply every line by 10.
              </p>
            </div>

            {/* With Clawdoes */}
            <div className="rounded-2xl border border-foreground bg-card p-6 text-left md:p-8">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-foreground">
                With Clawdoes
              </p>
              <p className="mt-3 font-serif text-7xl font-normal tabular-nums tracking-[-0.03em]">
                3
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                minutes, total
              </p>
              <ul className="mt-6 space-y-2.5">
                {easySteps.map(({ step, label, time }) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground font-mono text-xs font-medium text-background">
                      {step}
                    </span>
                    <span className="text-sm font-medium">{label}</span>
                    <span className="ml-auto rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-lg border border-border bg-background p-4">
                <p className="text-sm font-semibold">We handle the rest</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Server, security, AI setup, channel connection — all done
                  before your coffee gets cold.
                </p>
              </div>
              <Link href="#pricing" className="mt-6 block">
                <Button
                  className="h-11 w-full rounded-lg font-medium"
                  size="lg"
                >
                  Build my assistant — from $14.99/mo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-t border-border bg-muted/40 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                03 — Community
              </p>
              <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] md:text-4xl lg:text-[2.75rem]">
                What people are doing{" "}
                <em className="font-light italic text-muted-foreground">
                  with it.
                </em>
              </h2>
            </div>
          </div>
          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {testimonials.map((t) => (
              <div
                key={t.handle}
                className="mb-4 break-inside-avoid rounded-xl border border-border bg-background p-5 transition-colors hover:border-foreground/30"
              >
                <p className="font-serif text-[15px] leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 border-t border-border pt-3">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {t.author}
                    </span>{" "}
                    {t.handle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="#pricing">
              <Button
                size="lg"
                className="h-11 rounded-full px-7 font-medium"
              >
                Build yours in 3 minutes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="border-t border-border px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            04 — Pricing
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] md:text-4xl lg:text-[2.75rem]">
            Simple plans.{" "}
            <em className="font-light italic text-muted-foreground">
              Swap anytime.
            </em>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            All plans include access to 16 AI models, your own private server,
            and 24/7 availability. Plans differ by credits, features, and smart
            routing.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  plan.popular
                    ? "border-foreground bg-card"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="rounded-full px-3 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em]">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {plan.name}
                </p>
                <p className="mt-3 font-serif text-4xl font-normal tabular-nums tracking-[-0.025em]">
                  {plan.price}
                  <span className="ml-0.5 font-sans text-sm font-normal text-muted-foreground">
                    /mo
                  </span>
                </p>
                <p className="mt-1.5 font-serif text-sm italic text-muted-foreground">
                  {plan.tagline}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="mt-0.5 size-3.5 shrink-0 text-foreground" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#pricing" className="mt-6 block">
                  <Button
                    className="h-10 w-full rounded-lg font-medium"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Choose {plan.name}
                  </Button>
                </Link>
                <p className="mt-2.5 text-center font-mono text-[11px] text-muted-foreground">
                  7-day money-back guarantee
                </p>
              </div>
            ))}
          </div>

          {/* Every plan includes */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-xl border border-border bg-card px-6 py-4 text-sm">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Every plan
            </span>
            {everyPlanFeatures.map((f) => (
              <span
                key={f.label}
                className="flex items-center gap-1.5 text-muted-foreground"
              >
                <f.icon className="size-3.5 text-foreground/70" />
                {f.label}
              </span>
            ))}
          </div>

          {/* Architect plan */}
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Architect · BYOK
                </p>
                <p className="mt-2 font-serif text-3xl font-normal tabular-nums tracking-[-0.025em]">
                  $14.99
                  <span className="ml-0.5 font-sans text-sm font-normal text-muted-foreground">
                    /mo
                  </span>
                </p>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Bring your own API key from OpenRouter, Anthropic, OpenAI,
                  Google, or others. Unlimited messages.
                </p>
              </div>
              <Link href="#pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 rounded-full px-6 font-medium"
                >
                  Explore Architect Plan
                  <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="border-t border-border bg-muted/40 px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                05 — FAQ
              </p>
              <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] md:text-4xl">
                Common
                <br />
                <em className="font-light italic text-muted-foreground">
                  questions.
                </em>
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Can&apos;t find what you&apos;re looking for?{" "}
                <a
                  href="mailto:support@clawdoes.com"
                  className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  Get in touch
                </a>
                .
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-[15px] font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="font-serif text-2xl font-normal tracking-[-0.02em] md:text-3xl">
              Ready for your own AI assistant?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Set up in 3 minutes. No technical skills required.
            </p>
          </div>
          <Link href="#pricing">
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base font-medium"
            >
              Create my assistant
              <ArrowRight className="ml-1.5 size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
