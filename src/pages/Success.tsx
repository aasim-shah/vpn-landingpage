import { CheckCircle, Zap, Shield } from 'lucide-react';
import CountryCarousel from '../components/CountryCarousel';

export default function Success() {
  return (
    <div className="min-h-screen bg-[#061E38] text-white flex items-center">
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-28 h-28 mb-8 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 p-1 shadow-lg shadow-green-500/50 animate-pulse">
            <div className="w-full h-full rounded-full bg-[#061E38] flex items-center justify-center">
              <CheckCircle className="w-14 h-14 text-green-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-cyan-400 bg-clip-text text-transparent">
            Subscription Successful!
          </h1>

          <p className="text-xl text-gray-200/50 mb-12 max-w-2xl  mx-auto">
            Welcome to eEagle VPN Premium. Your subscription is now active and you have full access to all features.
          </p>

         



 <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10 mt-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Connect to Servers Worldwide</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Access our global network of high-speed VPN servers across all major countries.
              </p>
            </div>
            <CountryCarousel />
          </div>
         
          <p className="text-gray-400 text-sm mt-10">
            Need help? Contact our support team anytime at support@eeaglevpn.com
          </p>
        </div>
      </div>
    </div>
  );
}
