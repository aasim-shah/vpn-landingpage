import { XCircle, RefreshCw, MessageSquare } from 'lucide-react';

export default function Cancel() {
  return (
    <div className="min-h-screen bg-[#061E38] text-white flex items-center">
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex animate-pulse  items-center  justify-center w-28 h-28 mb-8 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/30 border border-orange-500/30">
            <XCircle className="w-14 h-14 text-orange-400" />
          </div>

          <h1 className="text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
            Subscription Cancelled
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Your payment was not completed. No charges have been made to your account.
          </p>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What would you like to do?</h2>
            <p className="text-gray-300 mb-8">
              You can try subscribing again or continue using EEagle VPN with limited features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>

              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                <MessageSquare className="w-5 h-5" />
                <span>Contact Support</span>
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-400">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 py-10">
              <p className="font-semibold text-white mb-1">Secure Payment</p>
              <p>Protected by Stripe</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 py-10">
              <p className="font-semibold text-white mb-1">Money-Back Guarantee</p>
              <p>30-day refund policy</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 py-10">
              <p className="font-semibold text-white mb-1">24/7 Support</p>
              <p>We're here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
