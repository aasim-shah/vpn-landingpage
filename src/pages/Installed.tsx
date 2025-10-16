import { Shield, Zap, Globe, MousePointer } from 'lucide-react';
import CountryCarousel from '../components/CountryCarousel';

export default function Installed() {
  return (
    <div className="min-h-screen bg-[#061E38] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-lg shadow-blue-500/50">
              <div className="w-full h-full rounded-full bg-[#061E38] flex items-center justify-center">
                <Shield className="w-12 h-12 text-cyan-400" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent">
              Welcome to EEagle VPN
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Your connection is now secure and private.
            </p>

            <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
              <span className="relative z-10">Launch VPN</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Connection</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lightning-fast speeds with optimized servers worldwide.
              </p>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Servers</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Access content from anywhere with our worldwide network.
              </p>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Logs</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your privacy is our priority. We never track your activity.
              </p>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MousePointer className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1-Click Connect</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get protected instantly with our simple one-click interface.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Connect to Servers Worldwide</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Access our global network of high-speed VPN servers across all major countries.
              </p>
            </div>
            <CountryCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
