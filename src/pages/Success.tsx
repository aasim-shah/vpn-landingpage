import { CheckCircle, Zap, Shield } from 'lucide-react';

export default function Success() {
  return (
    <div className="min-h-screen bg-[#061E38] text-white flex items-center">
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>

        <div className="relative max-w-3xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-28 h-28 mb-8 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 p-1 shadow-lg shadow-green-500/50 animate-pulse">
            <div className="w-full h-full rounded-full bg-[#061E38] flex items-center justify-center">
              <CheckCircle className="w-14 h-14 text-green-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-cyan-400 bg-clip-text text-transparent">
            Subscription Successful!
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Welcome to EEagle VPN Premium. Your subscription is now active and you have full access to all features.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Unlimited Speed</h3>
              <p className="text-gray-400 text-sm">
                Enjoy lightning-fast connections with no throttling.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Security</h3>
              <p className="text-gray-400 text-sm">
                Advanced encryption and complete privacy protection.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-8">
            <p className="text-gray-300 mb-6">
              Your premium access is ready to use. Launch the extension to start browsing securely.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
              Launch EEagle VPN
            </button>
          </div>

          <p className="text-gray-400 text-sm">
            Need help? Contact our support team anytime at support@eeaglevpn.com
          </p>
        </div>
      </div>
    </div>
  );
}
