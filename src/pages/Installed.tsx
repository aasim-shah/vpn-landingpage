import { Shield, Zap, Globe, MousePointer, CheckCircle } from 'lucide-react';
import CountryCarousel from '../components/CountryCarousel';

export default function Installed() {
  return (
    <div className="min-h-screen bg-[#061E38] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
           
            <div className="inline-flex items-center justify-center w-44 h-44 mb-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-lg shadow-blue-500/50">
              <div className="w-full h-full rounded-full bg-[#061E38] flex items-center justify-center">
                <img src="/logo.webp" alt="EEagle VPN Logo" className="w-24 h-24" />
              </div>
            </div>

            <h1 className="text-5xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent">
            Unrivaled Vigilance. Unmatched Security.
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Secure, private and unrestricted online experience
            </p>
          </div>

          {/* 🪄 How to Use Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 mb-20 text-center">
            <h2 className="text-2xl font-semibold text-yellow-400  mb-10">Get Started in 3 Easy Steps</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <MousePointer className="w-10 h-10 text-cyan-400 mb-3" />
                <h4 className="font-medium   mb-1">1. Click the EEagle icon</h4>
                <p className="text-sm text-gray-400">Find it in the Chrome toolbar at the top-right.</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-10 h-10 text-cyan-400 mb-3" />
                <h4 className="font-medium   mb-1">2. Choose your location</h4>
                <p className="text-sm text-gray-400">Select a country from our global servers list.</p>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="w-10 h-10 text-cyan-400 mb-3" />
                <h4 className="font-medium   mb-1">3. Connect securely</h4>
                <p className="text-sm text-gray-400">Enjoy a private, fast, and safe internet .</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: <Zap className="w-7 h-7 text-cyan-400" />, title: 'Fast Connection', desc: 'Lightning-fast speeds with optimized servers worldwide.' },
              { icon: <Globe className="w-7 h-7 text-cyan-400" />, title: 'Global Servers', desc: 'Access content from anywhere with our worldwide network.' },
              { icon: <Shield className="w-7 h-7 text-cyan-400" />, title: 'No Logs', desc: 'Your privacy is our priority. We never track your activity.' },
              { icon: <MousePointer className="w-7 h-7 text-cyan-400" />, title: '1-Click Connect', desc: 'Get protected instantly with our simple one-click interface.' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
              >
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 🌐 Countries */}
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
