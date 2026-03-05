import React from 'react';
import { motion } from 'framer-motion';
import {
  Instagram,
  Twitter,
  MessageCircle,
  Mail,
  Phone,
  MapPin } from
'lucide-react';
interface FooterProps {
  onNavigate: (page: string) => void;
}
export function Footer({ onNavigate }: FooterProps) {
  return (
    <motion.footer
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.6
      }}
      className="w-full relative z-10">

      {/* Main Footer Content */}
      <div className="border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <motion.div
                whileHover={{
                  scale: 1.02
                }}
                className="mb-6">

                <img
                  src="/image.png"
                  alt="DOORDRIPP Logo"
                  className="h-10 w-auto object-contain" />

              </motion.div>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                India's fastest wardrobe rescue. Fashion delivered in 20–40
                minutes.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                <motion.a
                  href="https://instagram.com/doordripp"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    y: -3
                  }}
                  whileTap={{
                    scale: 0.9
                  }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-colors"
                  aria-label="Instagram">

                  <Instagram size={18} />
                </motion.a>
                <motion.a
                  href="https://twitter.com/doordripp"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    y: -3
                  }}
                  whileTap={{
                    scale: 0.9
                  }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-colors"
                  aria-label="Twitter">

                  <Twitter size={18} />
                </motion.a>
                <motion.a
                  href="https://wa.me/919286819662"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    y: -3
                  }}
                  whileTap={{
                    scale: 0.9
                  }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-colors"
                  aria-label="WhatsApp">

                  <MessageCircle size={18} />
                </motion.a>
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-white/50 hover:text-gold transition-colors text-sm">

                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('features')}
                    className="text-white/50 hover:text-gold transition-colors text-sm">

                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('works')}
                    className="text-white/50 hover:text-gold transition-colors text-sm">

                    Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('careers')}
                    className="text-white/50 hover:text-gold transition-colors text-sm">

                    Career
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Legal
              </h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => onNavigate('terms')}
                    className="text-white/50 hover:text-gold transition-colors text-sm">

                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('privacy')}
                    className="text-white/50 hover:text-gold transition-colors text-sm">

                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:support@doordripp.com"
                    className="text-white/50 hover:text-gold transition-colors text-sm flex items-start gap-3">

                    <Mail size={16} className="mt-0.5 flex-shrink-0" />
                    <span>support@doordripp.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919286819662"
                    className="text-white/50 hover:text-gold transition-colors text-sm flex items-start gap-3">

                    <Phone size={16} className="mt-0.5 flex-shrink-0" />
                    <span>+91 9286819662</span>
                  </a>
                </li>
                <li>
                  <div className="text-white/50 text-sm flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <span>
                      7/1, B-Block, Gokul Vihar,
                      <br />
                      Rohta Road, Meerut,
                      <br />
                      Uttar Pradesh – 250001, India
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Doordripp. All rights reserved.
            </p>
            <p className="text-white/30 text-xs">Made with ♥ in India</p>
          </div>
        </div>
      </div>
    </motion.footer>);

}