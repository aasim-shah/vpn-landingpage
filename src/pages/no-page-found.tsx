"use client";

import { Shield, Compass, ArrowLeft, Chrome } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#061E38] text-white">
      <div className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

        <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
          {/* Icon / Logo */}
          <div className="inline-flex items-center justify-center w-28 h-28 mb-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[3px] shadow-lg shadow-blue-500/50">
            <div className="w-full h-full rounded-full bg-[#061E38] flex items-center justify-center">
              <Compass className="w-12 h-12 text-cyan-300" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent text-center">
            Page Not Found
          </h1>

          <p className="text-gray-300 mt-10 text-sm md:text-base text-center max-w-xl mb-10">
            The page you are looking for does not exist, was moved, or is no longer available.  
            You are still connected to{" "}
            <span className="font-semibold">eEagle Proxy Connector</span> — just not to this route.
          </p>

          {/* Card */}
          <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 space-y-6">
            {/* Status row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">
                  Error 404
                </p>
                <p className="text-lg md:text-xl font-semibold mt-1">
                  We could not locate this endpoint.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Chrome className="w-5 h-5 text-cyan-300" />
                </div>
                <div className="text-[11px] md:text-xs text-gray-300">
                  <p className="font-semibold text-white">
                    eEagle Proxy Connector
                  </p>
                  <p>Secure. Private. Always on route.</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mt-4">
              <div className="text-xs md:text-sm text-gray-300 max-w-md">
                You can go back to the previous page, or return to the main dashboard / homepage
                and continue browsing securely.
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-white/10 hover:border-cyan-400/70 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </button>

                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-xs md:text-sm font-medium text-white shadow-md shadow-blue-500/40 hover:opacity-90 transition-opacity"
                >
                  <Shield className="w-4 h-4" />
                  Go to Home
                </a>
              </div>
            </div>

            {/* Hint */}
            <div className="mt-4 pt-4 border-t border-white/10 text-[11px] md:text-xs text-gray-400">
              If you believe this is a mistake or you need a custom route for your deployment,
              contact us at{" "}
              <a
                href="mailto:info@eeaglevpn.com"
                className="text-cyan-300 underline-offset-2 hover:underline"
              >
                info@eeaglevpn.com
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
