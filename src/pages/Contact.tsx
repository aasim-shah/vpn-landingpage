import React, { useEffect, useState } from 'react';
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react';

type ToastState = {
  message: string;
  type?: 'success' | 'error';
} | null;

export default function Contact() {
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(id);
  }, [toast]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: replace with real API call (fetch('/api/contact', ...))
    // For now, just show a success toast.
    setToast({
      message: 'Message submitted. Our support team will contact you via email.',
      type: 'success',
    });

    // Optionally clear form fields:
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-[#061E38] text-white">
      <div className="relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

        {/* Toast */}
        {toast && (
          <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
            <div
              className={`pointer-events-auto max-w-xl rounded-2xl border px-4 py-3 shadow-lg backdrop-blur-md ${
                toast.type === 'error'
                  ? 'border-red-400/50 bg-red-900/80 text-red-50'
                  : 'border-emerald-400/40 bg-emerald-900/80 text-emerald-50'
              }`}
              role="status"
            >
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Hero */}
          <header className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-32 h-32 mb-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px] shadow-md shadow-blue-500/30">
              <div className="w-full h-full rounded-full bg-[#061E38] flex items-center justify-center">
                <img
                  src="/logo.webp"
                  alt="EEagle VPN Logo"
                  className="w-16 h-16"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-3xl font-semibold mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
              Contact Support
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              If you&apos;re facing connection issues, account problems, or have
              a question about eEagle VPN, use the form below or reach us
              through the provided contact details.
            </p>
          </header>

          {/* Layout: Info + Form */}
          <main className="grid lg:grid-cols-[1.05fr,1.4fr] gap-10 items-start">
            {/* Left: Contact Info */}
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6">
              <h2 className="text-lg font-semibold">Contact Details</h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                Our support team monitors requests during business hours. For a
                faster resolution, include your device, OS, and a short
                description of the issue when you contact us.
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">Support Email</p>
                    <p className="font-medium">info@eeaglevpn.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">Phone (Business Hours)</p>
                    <p className="font-medium">+1 226-939-1991</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">Support Hours</p>
                    <p className="font-medium">
                      Monday – Friday, 09:00–18:00 (UTC)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">Office</p>
                    <p className="font-medium">
                      eEagle VPN Limited
                    </p>
                    <p className="font-medium">
                      1055 11 St SW Suite 4002 Calgary, AB T2R 1G8 CA
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-400 pt-2">
                For account-related help, use the same email that you used to
                register your eEagle VPN account.
              </p>
            </section>

            {/* Right: Contact Form */}
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h2 className="text-lg font-semibold mb-2">Send a Message</h2>
              <p className="text-sm text-gray-300 mb-8">
                Fill in the form below. We&apos;ll review your request and get
                back to you via email.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl bg-[#031326] border border-white/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder:text-gray-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl bg-[#031326] border border-white/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder:text-gray-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full rounded-xl bg-[#031326] border border-white/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder:text-gray-500"
                      placeholder="Connection issue, billing, etc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-xs font-medium mb-1.5"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="w-full rounded-xl bg-[#031326] border border-white/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      defaultValue="support"
                    >
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing</option>
                      <option value="account">Account</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl bg-[#031326] border border-white/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder:text-gray-500 resize-none"
                    placeholder="Include device, OS, app version, and steps to reproduce if you are reporting an issue."
                  />
                </div>

                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-0.5 rounded border-white/40 bg-[#031326] text-cyan-500 focus:ring-cyan-500"
                  />
                  <label htmlFor="consent">
                    I agree to be contacted regarding this request and confirm
                    that the details I have provided are correct.
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2.5 text-sm font-semibold shadow-md shadow-cyan-500/30 hover:shadow-cyan-500/40 hover:scale-[1.015] transition-transform duration-150"
                >
                  <Send className="w-4 h-4" />
                  Submit
                </button>

                <p className="text-[11px] text-gray-400 mt-2">
                  You&apos;ll receive a confirmation at your provided email
                  address once we log your request.
                </p>
              </form>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
