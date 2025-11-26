"use client";

import {
  Shield,
  FileText,
  Globe,
  User,
  CreditCard,
  AlertTriangle,
  Info,
  Chrome,
  Server,
  Scale,
  Lock,
} from "lucide-react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-[#061E38] text-white">
      <div className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          {/* Header */}
          <header className="mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[3px] shadow-lg shadow-blue-500/40">
                  <div className="w-full h-full rounded-full bg-[#061E38] flex items-center justify-center">
                    <Scale className="w-12 h-12 text-cyan-300" />
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80 mb-2">
                    Legal
                  </p>
                  <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent">
                    Terms of Use
                  </h1>
                  <p className="text-sm md:text-base text-gray-300 mt-2">
                    Product: <span className="font-semibold">eEagle Proxy Connector (Chrome Extension)</span>
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">
                    Effective Date: December 1, 2025
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 max-w-sm ml-auto">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <Chrome className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Chrome Extension Only
                    </p>
                    <p className="text-xs text-gray-300">
                      These Terms apply to the eEagle Proxy Connector extension, not the mobile apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Card */}
          <main className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-14 space-y-12">
            {/* Intro */}
            <Section
              number="0"
              icon={<Info className="w-6 h-6 text-cyan-400" />}
              title="Acceptance of Terms"
            >
              <p className="text-gray-300 leading-relaxed">
                These Terms of Use (<strong>&quot;Terms&quot;</strong>) govern your access to and use of
                the <strong>eEagle Proxy Connector</strong> Chrome extension (the{" "}
                <strong>&quot;Extension&quot;</strong>) provided by eEagle VPN Limited, a company
                registered in Alberta, Canada (<strong>&quot;eEagle&quot;</strong>,{" "}
                <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>, or{" "}
                <strong>&quot;our&quot;</strong>).
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                By installing, enabling, or using the Extension, you acknowledge that you have read,
                understood, and agree to be bound by these Terms. If you do not agree to these Terms,
                you must not install or use the Extension.
              </p>
            </Section>

            {/* 1. Eligibility & Accounts */}
            <Section
              number="1"
              icon={<User className="w-5 h-5 text-cyan-400" />}
              title="Eligibility & User Accounts"
            >
              <SubTitle>1.1 Eligibility</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                You may use the Extension only if you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300 text-sm md:text-[15px]">
                <li>Are at least 13 years of age (or older where required by local law);</li>
                <li>Have the legal capacity to enter into a binding agreement;</li>
                <li>Are not prohibited from using such services under any applicable laws.</li>
              </ul>

              <SubTitle className="mt-6">1.2 User Accounts</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                To access certain features, including premium plans or dedicated servers, you may
                be required to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300 text-sm md:text-[15px]">
                <li>Providing accurate and up-to-date registration information;</li>
                <li>Maintaining the confidentiality of your login credentials;</li>
                <li>All activity that occurs under your account.</li>
              </ul>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mt-3">
                You must notify us immediately if you suspect any unauthorized access or use of your
                account.
              </p>
            </Section>

            {/* 2. License & IP */}
            <Section
              number="2"
              icon={<FileText className="w-5 h-5 text-cyan-400" />}
              title="License & Intellectual Property"
            >
              <SubTitle>2.1 Limited License</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                Subject to your compliance with these Terms, we grant you a limited, revocable,
                non-exclusive, non-transferable, and non-sublicensable license to install and use
                the Extension solely for your personal or internal business use, in accordance with
                applicable laws.
              </p>

              <SubTitle className="mt-6">2.2 Ownership</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                All rights, title, and interest in and to the Extension, including but not limited
                to software, interfaces, design, logos, trademarks, and documentation, are owned by
                eEagle VPN Limited or its licensors. These Terms do not grant you any rights to our
                intellectual property except for the limited license described above.
              </p>
            </Section>

            {/* 3. Permitted & Prohibited Use */}
            <Section
              number="3"
              icon={<Shield className="w-5 h-5 text-cyan-400" />}
              title="Permitted Use & Prohibited Conduct"
            >
              <SubTitle>3.1 Permitted Use</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                You may use the Extension only for lawful purposes and in accordance with these
                Terms. You are responsible for ensuring that your use complies with all applicable
                laws in your jurisdiction.
              </p>

              <SubTitle className="mt-6">3.2 Prohibited Conduct</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                You agree not to use the Extension to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300 text-sm md:text-[15px]">
                <li>
                  Engage in any <strong>illegal activity</strong>, including but not limited to
                  copyright infringement, distribution of illegal content, fraud, hacking,
                  unauthorized access, or identity theft.
                </li>
                <li>
                  Harm, threaten, or exploit others, including distributing malware, launching
                  denial-of-service (DoS/DDoS) attacks, or attempting to compromise networks.
                </li>
                <li>
                  Interfere with, disrupt, or compromise the integrity or performance of the
                  Extension, eEagle&apos;s servers, or any connected networks.
                </li>
                <li>
                  Access or distribute content that infringes intellectual property, privacy, or
                  other rights of third parties.
                </li>
                <li>
                  Reverse engineer, decompile, or attempt to derive the source code of the
                  Extension except where explicitly permitted by law.
                </li>
                <li>
                  Circumvent, disable, or interfere with security or authentication mechanisms.
                </li>
                <li>
                  Resell, lease, or otherwise provide the Extension or dedicated server access to
                  third parties without our written consent.
                </li>
              </ul>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mt-3">
                We reserve the right to investigate and take appropriate action (including
                suspension or termination) in response to suspected misuse or violations.
              </p>
            </Section>

            {/* 4. Subscriptions & Dedicated Servers */}
            <Section
              number="4"
              icon={<Server className="w-5 h-5 text-cyan-400" />}
              title="Subscriptions, Billing & Dedicated Servers"
            >
              <SubTitle>4.1 Subscription Plans</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                Certain features of the Extension, including access to dedicated servers or higher
                bandwidth tiers, may require a paid subscription. The details of each plan, including
                pricing and features, are described at the time of purchase.
              </p>

              <SubTitle className="mt-6">4.2 Payment Processing</SubTitle>
              <div className="flex gap-3 items-start mt-2">
                <CreditCard className="w-4 h-4 text-cyan-400 mt-1" />
                <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                  Payments are processed by <strong>Stripe</strong> or other approved payment
                  providers. By subscribing, you authorize us and our payment processor to charge
                  the applicable fees, including recurring subscription fees where applicable.
                </p>
              </div>

              <SubTitle className="mt-6">4.3 Dedicated Server Service</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                For eligible premium plans, we may provide a{" "}
                <strong>dedicated server</strong> allocated to a single user in a chosen or available
                region. While we strive to maintain high availability and performance:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300 text-sm md:text-[15px]">
                <li>Dedicated servers are still subject to maintenance, outages, and network limits.</li>
                <li>
                  We may reassign or migrate your dedicated server (e.g., for security, performance,
                  or infrastructure reasons) while striving to maintain similar region and quality.
                </li>
                <li>
                  Any region change requests, concurrency limits, or business use cases may require a
                  custom plan and our prior approval.
                </li>
              </ul>

              <SubTitle className="mt-6">4.4 Renewals & Cancellations</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                Unless otherwise specified, subscriptions may renew automatically at the end of each
                billing cycle. You can manage or cancel your subscription via the account or billing
                portal made available to you. Cancellation takes effect at the end of your current
                billing period; access to premium features will then be reduced or removed.
              </p>
            </Section>

            {/* 5. Privacy & Data */}
            <Section
              number="5"
              icon={<LockIcon />}
              title="Privacy & Data Protection"
            >
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                Our collection and use of personal information in connection with the Extension are
                governed by our <strong>Privacy Policy</strong>. By using the Extension, you
                acknowledge that you have reviewed and understood the Privacy Policy and consent to
                the collection and use of your information as described there.
              </p>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mt-3">
                For clarity, the Extension is designed with a <strong>no-logs architecture</strong>:
                we do not record your browsing history, DNS queries, or connection timestamps that
                could identify your online activity.
              </p>
            </Section>

            {/* 6. Third-Party Services */}
            <Section
              number="6"
              icon={<Globe className="w-5 h-5 text-cyan-400" />}
              title="Third-Party Services & Stores"
            >
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                The Extension may rely on or interact with third-party services, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300 text-sm md:text-[15px]">
                <li>Payment processors (e.g., Stripe)</li>
                <li>Hosting and infrastructure providers</li>
                <li>Browser extension platforms (e.g., Chrome Web Store)</li>
              </ul>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mt-3">
                Your use of those third-party services may be subject to their own terms and
                policies. In addition, your use of the Extension via the Chrome Web Store is
                subject to the applicable store&apos;s terms and policies, which you agree to comply
                with.
              </p>
            </Section>

            {/* 7. Disclaimers */}
            <Section
              number="7"
              icon={<AlertTriangle className="w-5 h-5 text-yellow-400" />}
              title="Disclaimers of Warranties"
            >
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                The Extension and all related services are provided on an{" "}
                <strong>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</strong> basis, without any
                warranties of any kind, whether express, implied, or statutory. To the fullest
                extent permitted by law, we expressly disclaim all warranties, including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300 text-sm md:text-[15px]">
                <li>Warranties of merchantability or fitness for a particular purpose;</li>
                <li>Non-infringement of intellectual property rights;</li>
                <li>Uninterrupted, error-free, or fully secure operation of the Extension;</li>
                <li>
                  Compatibility with all networks, websites, services, or geographic restrictions.
                </li>
              </ul>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mt-3">
                You acknowledge that no online service can be fully secure or free from
                vulnerabilities, and that obfuscation or IP masking via a proxy/VPN does not make
                any activity lawful or risk-free.
              </p>
            </Section>

            {/* 8. Limitation of Liability */}
            <Section
              number="8"
              icon={<Scale className="w-5 h-5 text-cyan-400" />}
              title="Limitation of Liability"
            >
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                To the maximum extent permitted by law, in no event shall eEagle VPN Limited, its
                affiliates, directors, employees, or agents be liable for any:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300 text-sm md:text-[15px]">
                <li>Indirect, incidental, special, consequential, or punitive damages;</li>
                <li>Loss of profits, revenue, data, goodwill, or business opportunities;</li>
                <li>
                  Damages arising from or related to your use or inability to use the Extension,
                  even if we have been advised of the possibility of such damages.
                </li>
              </ul>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mt-3">
                Where liability cannot be excluded, our aggregate liability arising out of or in
                connection with the Extension and these Terms shall be limited to the amount you
                paid (if any) for the Extension or subscription in the six (6) months preceding the
                event giving rise to the claim.
              </p>
            </Section>

            {/* 9. Indemnification */}
            <Section
              number="9"
              icon={<Shield className="w-5 h-5 text-cyan-400" />}
              title="Indemnification"
            >
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                You agree to indemnify, defend, and hold harmless eEagle VPN Limited and its
                officers, directors, employees, and agents from and against any claims, liabilities,
                damages, losses, and expenses (including reasonable legal fees) arising out of or in
                any way connected with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300 text-sm md:text-[15px]">
                <li>Your use or misuse of the Extension;</li>
                <li>Your violation of these Terms;</li>
                <li>Your violation of any applicable laws or third-party rights.</li>
              </ul>
            </Section>

            {/* 10. Termination */}
            <Section
              number="10"
              icon={<AlertTriangle className="w-5 h-5 text-cyan-400" />}
              title="Termination & Suspension"
            >
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                We may, at our sole discretion and without liability, suspend or terminate your
                access to the Extension at any time, with or without notice, if we reasonably
                believe that:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300 text-sm md:text-[15px]">
                <li>You have violated these Terms or applicable laws;</li>
                <li>Your use poses a security, legal, or operational risk;</li>
                <li>We are required to do so by law or regulatory authority.</li>
              </ul>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mt-3">
                Upon termination, your right to use the Extension will immediately cease. Sections
                that by their nature should survive termination (including intellectual property,
                disclaimers, limitations of liability, and indemnification) shall continue in full
                force and effect.
              </p>
            </Section>

            {/* 11. Governing Law */}
            <Section
              number="11"
              icon={<Globe className="w-5 h-5 text-cyan-400" />}
              title="Governing Law & Jurisdiction"
            >
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the{" "}
                <strong>Province of Alberta, Canada</strong>, without regard to its conflict of law
                rules.
              </p>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mt-3">
                You agree that any dispute arising out of or relating to these Terms or your use of
                the Extension shall be submitted to the exclusive jurisdiction of the courts located
                in Alberta, Canada, unless applicable law requires otherwise.
              </p>
            </Section>

            {/* 12. Changes */}
            <Section
              number="12"
              icon={<FileText className="w-5 h-5 text-cyan-400" />}
              title="Changes to the Terms & Service"
            >
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                We may update or modify these Terms from time to time, for example to reflect
                changes in our services, technology, or legal requirements. When we do, we will
                revise the Effective Date at the top of this page and may provide additional notice
                where appropriate.
              </p>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mt-3">
                Your continued use of the Extension after changes become effective constitutes your
                acceptance of the revised Terms. If you do not agree with the updated Terms, you
                must stop using the Extension and uninstall it from your browser.
              </p>
            </Section>

            {/* 13. Misc + Contact */}
            <Section
              number="13"
              icon={<Info className="w-5 h-5 text-cyan-400" />}
              title="Miscellaneous & Contact"
            >
              <SubTitle>13.1 Entire Agreement</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                These Terms, together with our Privacy Policy and any plan-specific terms or
                addenda, constitute the entire agreement between you and eEagle VPN Limited with
                respect to your use of the Extension.
              </p>

              <SubTitle className="mt-6">13.2 Severability</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                If any provision of these Terms is held to be invalid or unenforceable, that
                provision shall be enforced to the maximum extent permissible and the remaining
                provisions shall remain in full force and effect.
              </p>

              <SubTitle className="mt-6">13.3 Contact Us</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                If you have any questions about these Terms or the Extension, you can contact us at:
              </p>
              <p className="text-gray-300 text-sm md:text-[15px] mt-3">
                📧{" "}
                <a
                  href="mailto:info@eeaglevpn.com"
                  className="text-cyan-300 underline-offset-2 hover:underline"
                >
                  info@eeaglevpn.com
                </a>
              </p>

              <p className="text-gray-400 text-[11px] mt-5">
                By installing or using the eEagle Proxy Connector, you acknowledge that you have
                read, understood, and agree to be bound by these Terms of Use.
              </p>
              <p className="text-gray-500 text-[11px] mt-1">
                Copyright © {new Date().getFullYear()} eEagle VPN Limited. All rights reserved.
              </p>
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}

function Section({
  number,
  icon,
  title,
  children,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div className="flex items-start gap-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 shrink-0">
          <span className="text-sm font-semibold text-cyan-200">{number}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#061E38] border border-white/10 flex items-center justify-center">
              {icon}
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              {title}
            </h2>
          </div>
          <div className="text-sm md:text-base text-gray-300 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function SubTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-sm md:text-[15px] font-semibold text-gray-100 mt-2 ${className}`}
    >
      {children}
    </p>
  );
}

function LockIcon() {
  return <Lock className="w-5 h-5 text-cyan-400" />;
}
