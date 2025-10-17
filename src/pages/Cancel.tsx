import { XCircle, RefreshCw, MessageSquare, X, Mail, User, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Cancel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for contacting us! We\'ll get back to you soon.');
    setIsModalOpen(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
              You can try subscribing again or continue using eEagle VPN with limited features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
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

      {/* Contact Support Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#061E38] rounded-3xl border border-white/20 shadow-2xl shadow-cyan-500/20">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Contact Support</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-red-400/50 flex items-center justify-center transition-all duration-300 group"
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-red-400" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-300 mb-6">
                We're here to help! Send us a message and our support team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select a topic</option>
                    <option value="billing">Billing & Payment Issues</option>
                    <option value="technical">Technical Support</option>
                    <option value="account">Account Issues</option>
                    <option value="cancellation">Cancellation Request</option>
                    <option value="refund">Refund Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Describe your issue or question in detail..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-gray-400/50 rounded-xl font-semibold transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-center text-sm text-gray-400">
                  Need immediate help? Email us directly at{' '}
                  <a href="mailto:support@eeaglevpn.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    support@eeaglevpn.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
