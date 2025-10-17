import { Heart, MessageSquare, Download } from 'lucide-react';
import { useState } from 'react';
import FeedbackModal from '../components/FeedbackModal';

export default function Uninstalled() {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const handleFeedbackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFeedbackModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#061E38] text-white flex items-center">
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>

        <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 animate-pulse" >
            <Heart className="w-12 h-12 text-cyan-400" />
          </div>

          <h1 className="text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent">
            We're Sorry to See You Go
          </h1>

          <p className="text-xl text-gray-300/60 mb-12 max-w-xl mx-auto">
            Your privacy matters — we'd love to hear your feedback to help us improve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button
              onClick={handleFeedbackClick}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Share Feedback</span>
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="inline-flex items-center justify-center w-16 animate-bounce h-16 mb-6 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30">
              <Download className="w-8 h-8 text-cyan-400" />
            </div>

            <h2 className="text-3xl font-bold mb-4">Want to Come Back?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
              Reinstall EEagle VPN anytime and continue protecting your privacy with just one click.
            </p>

            <a
              href="#reinstall"
              className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Reinstall Now
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              Thank you for trying EEagle VPN. We hope to serve you again in the future.
            </p>
          </div>
        </div>
      </div>

      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />
    </div>
  );
}
