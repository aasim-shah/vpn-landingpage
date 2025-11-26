"use client";

import {
  Shield,
  Lock,
  Globe,
  FileText,
  User,
  CreditCard,
  Info,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#061E38] text-white">
      <div className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          {/* Header */}
          <header className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-32 h-32 mb-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[3px] shadow-lg shadow-blue-500/50">
              <div className="w-full h-full rounded-full bg-[#061E38] flex items-center justify-center">
                <Shield className="w-14 h-14 text-cyan-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>

            <p className="text-gray-300 text-sm md:text-base">
              <span className="font-semibold">Product:</span>{" "}
              eEagle Proxy Connector (Chrome Extension)
            </p>
            <p className="text-gray-400 text-xs md:text-sm mt-2">
              Effective Date: December 1, 2025
            </p>
          </header>

          {/* Main Card */}
          <main className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 space-y-12">
            {/* Intro */}
            <Section
              icon={<Info className="w-6 h-6 text-cyan-400" />}
              title="Introduction"
            >
              <p className="text-gray-300 leading-relaxed">
                eEagle VPN Limited (<strong>&quot;eEagle&quot;</strong>,{" "}
                <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>,
                or <strong>&quot;our&quot;</strong>) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                store, and protect your information when you use the{" "}
                <strong>eEagle Proxy Connector</strong> Chrome extension
                (the <strong>&quot;Extension&quot;</strong>).
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                This policy applies <strong>only</strong> to the Chrome
                Extension and related web services. Our mobile applications and
                other products may be covered by separate privacy policies.
              </p>
            </Section>

            {/* What we collect */}
            <Section
              icon={<User className="w-6 h-6 text-cyan-400" />}
              title="1. Information We Collect"
            >
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect the minimum amount of information required to operate
                your account and manage your subscription. For the Extension, we
                only collect the following personal information:
              </p>

              <SubTitle>1.1 Information You Provide Directly</SubTitle>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm md:text-[15px]">
                <li>
                  <strong>Full Name</strong> – used for account identification
                  and communication.
                </li>
                <li>
                  <strong>Email Address</strong> – used for login,
                  subscription-related communication, and support.
                </li>
                <li>
                  <strong>Profile Photo</strong> (optional) – used to personalize
                  your account interface.
                </li>
              </ul>

              <p className="text-gray-300 leading-relaxed mt-6">
                We do <strong>not</strong> ask for or store any other personal
                information such as physical address, phone number, or
                government-issued IDs.
              </p>

              <SubTitle className="mt-8">
                1.2 Payment & Subscription Information (Stripe)
              </SubTitle>
              <div className="flex gap-4 items-start mt-4">
                <CreditCard className="w-5 h-5 text-cyan-400 mt-1" />
                <div className="space-y-3 text-gray-300 text-sm md:text-[15px]">
                  <p>
                    We use <strong>Stripe</strong> to process subscription
                    payments securely. We do <strong>not</strong> store your full
                    card number or CVV in our systems.
                  </p>
                  <p>
                    Stripe may process and store your payment information under
                    its own{" "}
                    <a
                      href="https://stripe.com/privacy"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 underline-offset-2 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    . We receive only:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email associated with your Stripe account</li>
                    <li>Subscription plan and status</li>
                    <li>Basic billing metadata (e.g., country, timestamps)</li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* What we DO NOT collect */}
            <Section
              icon={<Shield className="w-6 h-6 text-cyan-400" />}
              title="2. Information We Do NOT Collect"
            >
              <p className="text-gray-300 leading-relaxed mb-4">
                eEagle Proxy Connector is designed with privacy by default. We
                <strong> do not collect, store, or log</strong>:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300 text-sm md:text-[15px]">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Browsing history or URLs visited</li>
                  <li>Content of websites or apps</li>
                  <li>DNS queries</li>
                  <li>Traffic destination or metadata</li>
                  <li>Original or assigned IP addresses (beyond session)</li>
                </ul>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bandwidth usage tied to your identity</li>
                  <li>
                    Connection timestamps that could be used for activity
                    correlation
                  </li>
                  <li>Advertising identifiers (IDFA, AAID, etc.)</li>
                  <li>Device identifiers for marketing purposes</li>
                  <li>Any sensitive categories of personal data</li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                We also do <strong>not</strong> integrate any advertising SDKs
                or third-party tracking for the Extension. There is{" "}
                <strong>no ad-supported mode</strong> in the Chrome Extension.
              </p>
            </Section>

            {/* VPN / Proxy behavior */}
            <Section
              icon={<Globe className="w-6 h-6 text-cyan-400" />}
              title="3. VPN / Proxy No-Logs Policy"
            >
              <p className="text-gray-300 leading-relaxed">
                The Extension operates as a secure proxy/VPN connector. To
                establish and maintain your secure connection, we must
                temporarily process certain technical data in real time, such
                as:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300 text-sm md:text-[15px]">
                <li>IP address (for routing packets)</li>
                <li>Selected country or proxy/VPN server</li>
                <li>Session-related encryption keys</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-6">
                This technical data is processed in memory and is{" "}
                <strong>not written to disk</strong> or stored as user logs.
                When the session ends, this technical data is automatically
                discarded.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                As a result, we <strong>cannot</strong> provide logs of your
                online activity, even if requested by a third party or
                authority, because such logs do not exist.
              </p>
            </Section>

            {/* How we use info */}
            <Section
              icon={<FileText className="w-6 h-6 text-cyan-400" />}
              title="4. How We Use Your Information"
            >
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the limited personal information we collect for the
                following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-300 text-sm md:text-[15px]">
                <li>
                  <strong>Account Management:</strong> Creating and managing
                  your eEagle account, and enabling secure sign-in.
                </li>
                <li>
                  <strong>Subscription & Billing:</strong> Managing your
                  subscription, payment status, and entitlement via Stripe.
                </li>
                <li>
                  <strong>Customer Support:</strong> Responding to your support
                  requests and communicating about service issues.
                </li>
                <li>
                  <strong>Security:</strong> Detecting and preventing abuse,
                  fraud, or unauthorized access to our systems.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Meeting obligations under
                  applicable laws (for example, tax and audit requirements
                  related to subscriptions).
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                We do <strong>not</strong> use your data for behavioral
                advertising, profiling, or selling to third parties.
              </p>
            </Section>

            {/* Sharing */}
            <Section
              icon={<Lock className="w-6 h-6 text-cyan-400" />}
              title="5. Information Sharing & Third Parties"
            >
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information. We may
                share information only in the following limited circumstances:
              </p>

              <SubTitle>5.1 Service Providers</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px] mb-3">
                We may share minimal necessary information with trusted service
                providers that help us operate the Extension, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm md:text-[15px]">
                <li>Stripe (payment processing and subscription management)</li>
                <li>Hosting/infrastructure providers</li>
                <li>Email providers for support communication</li>
              </ul>

              <SubTitle className="mt-6">5.2 Legal Requirements</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px]">
                We may disclose information if required to do so by law or in
                response to valid legal requests (e.g., court order, government
                demand). However, because we operate a zero-log system, we
                cannot provide browsing activity logs that we do not store.
              </p>

              <SubTitle className="mt-6">5.3 Business Transfers</SubTitle>
              <p className="text-gray-300 text-sm md:text-[15px]">
                In the event of a merger, acquisition, or sale of all or a
                portion of our assets, your account information (name, email,
                profile photo, subscription details) may be transferred to the
                new entity under the same or equivalent privacy safeguards.
              </p>
            </Section>

            {/* Cookies / Storage */}
            <Section
              icon={<Lock className="w-6 h-6 text-cyan-400" />}
              title="6. Cookies, Local Storage & Tracking"
            >
              <p className="text-gray-300 leading-relaxed mb-4">
                The Extension itself does{" "}
                <strong>not use advertising cookies or tracking cookies</strong>.
                We only use:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm md:text-[15px]">
                <li>
                  <strong>Chrome local storage</strong> to store:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Authentication/session tokens</li>
                    <li>Selected server/country preferences</li>
                    <li>Basic UI or feature preferences</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                This data is used solely to provide core functionality and user
                experience and is not shared with any advertising networks.
              </p>
            </Section>

            {/* Data retention */}
            <Section
              icon={<FileText className="w-6 h-6 text-cyan-400" />}
              title="7. Data Retention"
            >
              <p className="text-gray-300 leading-relaxed">
                We retain your account information (name, email, profile photo)
                and subscription records for as long as your account is active
                or as required to fulfill the purposes outlined in this policy,
                including legal, accounting, or reporting obligations.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                VPN/proxy technical data (such as IP and routing details) is
                <strong> not retained</strong> and is discarded automatically
                when your session ends.
              </p>
            </Section>

            {/* Security */}
            <Section
              icon={<Shield className="w-6 h-6 text-cyan-400" />}
              title="8. Security"
            >
              <p className="text-gray-300 leading-relaxed">
                We use industry-standard security controls to protect your
                information, including encryption in transit, scoped access
                controls, and hardened infrastructure. However, no method of
                transmission or storage over the internet is completely secure.
                While we strive to protect your personal information, we cannot
                guarantee absolute security.
              </p>
            </Section>

            {/* Children */}
            <Section
              icon={<User className="w-6 h-6 text-cyan-400" />}
              title="9. Children’s Privacy"
            >
              <p className="text-gray-300 leading-relaxed">
                The Extension is not directed to or intended for children under
                the age of 13. We do not knowingly collect personal information
                from children. If you are a parent or guardian and believe your
                child has provided us with personal information, please contact
                us. We will promptly take steps to delete such information.
              </p>
            </Section>

            {/* Rights */}
            <Section
              icon={<Globe className="w-6 h-6 text-cyan-400" />}
              title="10. Your Rights & Region-Specific Disclosures"
            >
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding
                your personal data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm md:text-[15px]">
                <li>Right to access the personal data we hold about you</li>
                <li>Right to request correction of inaccurate information</li>
                <li>Right to request deletion of your personal information</li>
                <li>Right to restrict or object to certain processing</li>
                <li>Right to data portability (where applicable)</li>
                <li>Right to withdraw consent (where processing is based on consent)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                For users in the EU/EEA (GDPR), California (CCPA), and other
                jurisdictions with specific privacy laws, we will honor
                applicable legal rights. Because we do not sell your data or use
                it for targeted advertising, many opt-out rights related to
                &quot;sale&quot; or &quot;sharing&quot; of data are not
                applicable.
              </p>
            </Section>

            {/* Changes */}
            <Section
              icon={<FileText className="w-6 h-6 text-cyan-400" />}
              title="11. Changes to This Privacy Policy"
            >
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technologies, or legal requirements.
                When we do, we will update the &quot;Effective Date&quot; at the
                top of this page. We encourage you to review this policy
                periodically.
              </p>
            </Section>

            {/* Contact */}
            <Section
              icon={<MailIcon />}
              title="12. Contact Us"
            >
              <p className="text-gray-300 leading-relaxed">
                If you have any questions, concerns, or requests related to this
                Privacy Policy or our handling of your data, you can contact us
                at:
              </p>
              <p className="text-gray-300 mt-4">
                📧{" "}
                <a
                  href="mailto:info@eeaglevpn.com"
                  className="text-cyan-300 underline-offset-2 hover:underline"
                >
                  info@eeaglevpn.com
                </a>
              </p>
              <p className="text-gray-400 text-xs mt-6">
                Copyright © {new Date().getFullYear()} eEagle VPN Limited. All
                rights reserved.
              </p>
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
          {icon}
        </div>
        <p className="text-lg md:text-xl font-semibold">{title}</p>
      </div>
      <div className="text-sm md:text-[15px] text-gray-300 leading-relaxed space-y-4">
        {children}
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
      className={`text-sm md:text-[15px] font-semibold text-gray-100 mt-4 ${className}`}
    >
      {children}
    </p>
  );
}

function MailIcon() {
  return <Lock className="w-6 h-6 text-cyan-400" />; // keeping visual consistency
}
