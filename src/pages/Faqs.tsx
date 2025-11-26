"use client";

import { useState } from "react";
import {
  Shield,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Chrome,
  Server,
  Globe2,
  Zap,
  Lock,
} from "lucide-react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
  category?: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is eEagle Proxy Connector?",
    category: "General",
    answer: (
      <>
        eEagle Proxy Connector is a Chrome Extension that routes your browser
        traffic through secure proxy/VPN servers, helping you stay private,
        encrypted, and location-flexible while browsing, streaming, or working
        online.
      </>
    ),
  },
  {
    question: "Do you log or track my browsing activity?",
    category: "Privacy & Security",
    answer: (
      <>
        No. eEagle Proxy Connector is built on a strict{" "}
        <strong>no-logs architecture</strong>. We do not store browsing history,
        DNS queries, IP logs, connection timestamps, or any activity that can be
        linked back to what you do online. Technical data is processed in memory
        only for the duration of the session and then discarded.
      </>
    ),
  },
  {
    question: "How is the Chrome extension different from a full VPN app?",
    category: "General",
    answer: (
      <>
        The Chrome Extension secures and routes traffic from{" "}
        <strong>your browser</strong> only (and any requests Chrome makes).
        Native VPN apps typically route <strong>all device traffic</strong>.
        eEagle Proxy Connector is optimized for secure, fast, browser-centric
        usage like work, SaaS apps, and websites.
      </>
    ),
  },
  {
    question: "What is a dedicated server and how does it work for premium users?",
    category: "Dedicated Servers",
    answer: (
      <>
        For premium plans, each user gets a <strong>dedicated server</strong>{" "}
        instead of a shared node. That means:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>You are the only user on that server.</li>
          <li>
            Full bandwidth and CPU resources are reserved for your traffic (no
            noisy neighbors).
          </li>
          <li>
            You can choose a region and we deploy or assign a server in that
            location for your exclusive use.
          </li>
        </ul>
        This setup is ideal for performance, consistency, and predictable
        latency.
      </>
    ),
  },
  {
    question: "Can I choose the region for my dedicated server?",
    category: "Dedicated Servers",
    answer: (
      <>
        Yes. During or after upgrade, you can select from our available regions
        (e.g., US, EU, Asia, etc.). We then allocate a dedicated server in that
        region. If you need a custom location for business use, you can contact
        support and we&apos;ll review feasibility.
      </>
    ),
  },
  {
    question: "Can I change my dedicated server region later?",
    category: "Dedicated Servers",
    answer: (
      <>
        In most cases, yes. Region changes may require:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Short downtime while we migrate or reassign your server.</li>
          <li>
            Possible pricing adjustments if the new region has different
            infrastructure costs.
          </li>
        </ul>
        Just reach out to support and we&apos;ll guide you through the process.
      </>
    ),
  },
  {
    question: "Does using eEagle Proxy Connector slow down my internet?",
    category: "Performance",
    answer: (
      <>
        Any proxy/VPN layer adds a small amount of overhead due to encryption
        and routing. However, our infrastructure and dedicated premium servers
        are optimized for <strong>low latency and high throughput</strong>.
        Premium users on dedicated servers typically see very stable speeds and
        predictable performance.
      </>
    ),
  },
  {
    question: "Which platforms and browsers are supported?",
    category: "Installation & Usage",
    answer: (
      <>
        eEagle Proxy Connector is designed for{" "}
        <strong>Google Chrome and Chromium-based browsers</strong> (e.g. Brave,
        Edge, Arc) that support Chrome Web Store extensions. Behavior and UI are
        optimized for desktop usage.
      </>
    ),
  },
  {
    question: "Do I need an account to use the extension?",
    category: "Account & Billing",
    answer: (
      <>
        For basic usage, you may be able to connect without a full account
        depending on how your plan is configured. However,{" "}
        <strong>premium features and dedicated servers</strong> require an
        authenticated account with an active subscription so we can:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Validate your plan</li>
          <li>Assign your dedicated server</li>
          <li>Sync preferences and access</li>
        </ul>
      </>
    ),
  },
  {
    question: "How is payment handled? Is Stripe secure?",
    category: "Account & Billing",
    answer: (
      <>
        All subscriptions are processed by{" "}
        <strong>Stripe, a PCI-DSS compliant provider</strong>. We never store
        your full card number or CVV. Stripe securely handles payment
        authorization, and we only receive subscription status and basic billing
        metadata (like country and timestamps).
      </>
    ),
  },
  {
    question: "Can I use my account on multiple devices?",
    category: "Account & Billing",
    answer: (
      <>
        Yes, in most cases you can use your eEagle account across multiple
        Chrome profiles or devices, as long as it complies with the fair-use
        and concurrency limits defined in your plan. If you need higher
        concurrency (for a team or organization), contact us for a tailored
        plan.
      </>
    ),
  },
  {
    question: "What happens if my dedicated server goes down?",
    category: "Dedicated Servers",
    answer: (
      <>
        If a dedicated server experiences an issue, our monitoring automatically
        flags it. We will either:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Restore the same server, or</li>
          <li>Provision a new dedicated server for you in the same region.</li>
        </ul>
        During such events, the extension may briefly show a disconnected state
        until the new endpoint is ready.
      </>
    ),
  },
  {
    question: "Does the extension work with streaming and geo-restricted content?",
    category: "Usage",
    answer: (
      <>
        In many cases, yes. eEagle Proxy Connector can help access
        region-specific content. However, streaming platforms may update their
        detection methods and we can&apos;t guarantee access to every service at
        all times. Dedicated servers often perform better for consistent access.
      </>
    ),
  },
  {
    question: "How do I uninstall eEagle Proxy Connector?",
    category: "Installation & Usage",
    answer: (
      <>
        You can uninstall it directly from Chrome:
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li>Open Chrome and go to <strong>chrome://extensions</strong>.</li>
          <li>Find <strong>eEagle Proxy Connector</strong> in the list.</li>
          <li>Click <strong>Remove</strong> and confirm.</li>
        </ol>
        Uninstalling the extension will stop all proxy/VPN routing from that
        browser.
      </>
    ),
  },
  {
    question: "Can I get a refund if I’m not satisfied?",
    category: "Account & Billing",
    answer: (
      <>
        We follow a transparent refund policy that may vary based on region and
        payment provider constraints. If you&apos;re facing issues, contact
        support within the specified refund window and we&apos;ll review your
        case individually.
      </>
    ),
  },
  {
    question: "Is my data shared with advertisers or analytics providers?",
    category: "Privacy & Security",
    answer: (
      <>
        No. The Chrome Extension does <strong>not</strong> include ad SDKs or
        marketing trackers. We don&apos;t show ads inside the extension, don&apos;t
        share your browsing data with advertisers, and don&apos;t monetize data
        via third parties.
      </>
    ),
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[#061E38] text-white">
      <div className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          {/* Header */}
          <header className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center justify-center w-32 h-32 mb-6 md:mb-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[3px] shadow-lg shadow-blue-500/50">
              <div className="w-full h-full rounded-full bg-[#061E38] flex items-center justify-center">
                <HelpCircle className="w-14 h-14 text-cyan-400" />
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>

            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
              Everything you need to know about{" "}
              <span className="font-semibold">
                eEagle Proxy Connector (Chrome Extension)
              </span>{" "}
              — privacy, performance, dedicated servers, and more.
            </p>
          </header>

          {/* Main Card */}
          <main className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10">
            {/* Top badges / highlights */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 md:mb-10">
              <HighlightCard
                icon={<Shield className="w-5 h-5" />}
                title="Zero-Logs"
                desc="We don’t log browsing activity, DNS queries, or IP history."
              />
              <HighlightCard
                icon={<Server className="w-5 h-5" />}
                title="Dedicated Servers"
                desc="Each premium user can get their own region-specific server."
              />
              <HighlightCard
                icon={<Chrome className="w-5 h-5" />}
                title="Chrome Native"
                desc="Built specifically for Chrome & Chromium-based browsers."
              />
            </div>

            {/* FAQ List */}
            <div className="divide-y divide-white/10">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="py-4 md:py-5">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-start justify-between gap-4 text-left"
                    >
                      <div className="flex flex-row  w-full items-center gap-5">
                       
                        <p className="text-sm md:text-base font-semibold text-white flex items-center gap-2">
                          {item.question}
                        </p>
                        <div className="flex items-center gap-2 mb-1">
                          {item.category && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-cyan-500/40 text-[11px] uppercase tracking-wide text-cyan-300 bg-cyan-500/5">
                              {item.category}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-1 shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-cyan-300" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-cyan-300" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="mt-3 text-xs md:text-[15px] text-gray-300 leading-relaxed space-y-2">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom note */}
            <div className="mt-10 md:mt-12 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#061E38] flex items-center justify-center border border-cyan-500/50">
                <Lock className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <p className="text-sm md:text-base font-semibold text-white">
                  Still have questions?
                </p>
                <p className="text-xs md:text-sm text-gray-300 mt-1">
                  Reach out to us anytime at{" "}
                  <a
                    href="mailto:info@eeaglevpn.com"
                    className="text-cyan-300 underline-offset-2 hover:underline"
                  >
                    info@eeaglevpn.com
                  </a>{" "}
                  — especially if you need a custom dedicated server setup or
                  team deployment.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function HighlightCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
        <span className="text-cyan-300">{icon}</span>
      </div>
      <div>
        <p className="text-xs md:text-sm font-semibold text-white flex items-center gap-1">
          {title}
        </p>
        <p className="text-[11px] md:text-xs text-gray-300 mt-1">{desc}</p>
      </div>
    </div>
  );
}
