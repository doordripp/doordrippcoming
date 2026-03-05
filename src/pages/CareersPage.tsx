import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Zap,
  Target,
  Users,
  TrendingUp,
  Mail,
  ExternalLink } from
'lucide-react';
import { Footer } from '../components/Footer';
interface CareersPageProps {
  onNavigate: (page: string) => void;
}
export function CareersPage({ onNavigate }: CareersPageProps) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black font-sans">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[150px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center backdrop-blur-xl bg-black/30 border-b border-white/10">
        <motion.button
          onClick={() => onNavigate('home')}
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95
          }}
          className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors">

          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back</span>
        </motion.button>
        <motion.div
          whileHover={{
            scale: 1.05
          }}
          className="cursor-pointer"
          onClick={() => onNavigate('home')}>

          <img
            src="/image.png"
            alt="DOORDRIPP Logo"
            className="h-10 w-auto object-contain" />

        </motion.div>
      </header>

      {/* Content */}
      <main className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}>

          {/* Hero */}
          <div className="text-center mb-16">
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                delay: 0.2
              }}
              className="inline-block px-6 py-2 rounded-full border border-gold/50 bg-gold/10 text-gold text-sm font-medium tracking-widest uppercase mb-6">

              Careers
            </motion.span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white">
              Careers at
              <br />
              <span className="text-gold italic">Doordripp</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Build the Future of Instant Fashion
            </p>
          </div>

          {/* Intro */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-16">

            <p className="text-white/70 text-lg leading-relaxed mb-6">
              At Doordripp, we are building where style meets speed. If you love
              fashion, tech, ops, or crafting seamless customer experiences,
              join a team that moves fast and delivers impact.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              We thrive on innovation, ownership, and execution. You will work
              in a high-energy environment where ideas matter, decisions move
              fast, and your work directly shapes how customers experience
              fashion—from in-house inventory and rapid deliveries to intuitive
              digital experiences and trend-forward collections.
            </p>
            <p className="text-gold text-lg font-medium">
              We believe great teams create great products. Every role plays a
              key part in our success.
            </p>
          </motion.div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-white text-center mb-12">
              Why Work With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.1
                }}
                className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8">

                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  Build Fast
                </h3>
                <p className="text-white/60 leading-relaxed">
                  High-energy startup environment where ideas ship quickly and
                  your work shapes how customers experience instant fashion.
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.15
                }}
                className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8">

                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  Visible Impact
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Work on real problems across fashion, tech, and
                  operations—with direct ownership and measurable outcomes.
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.2
                }}
                className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8">

                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  Collaborative Culture
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Transparent, performance-driven teams that value initiative,
                  clarity, and execution.
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.25
                }}
                className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8">

                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  Grow with Us
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Competitive pay, growth-based incentives, and opportunities to
                  take on big challenges early.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Opportunities */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-16">

            <h2 className="font-serif text-2xl font-bold text-white mb-6">
              Opportunities at Doordripp
            </h2>
            <p className="text-white/70 mb-6">We hire across multiple teams:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/60">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Operations & Inventory Management
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Fashion Buying & Merchandising
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Technology & Product Development
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Marketing, Growth & Brand
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Customer Support & Experience
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Delivery & Logistics Operations
              </li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="backdrop-blur-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-2xl p-8 md:p-12 text-center">

            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              📩 Join Us
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Ready to move fast, think bold, and deliver style in minutes? We
              would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:support@doordripp.com"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/50 inline-flex items-center justify-center gap-2">

                <Mail size={18} />
                Email Your Resume
              </motion.a>
              <motion.a
                href="https://doordripp.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="px-8 py-4 rounded-xl font-semibold bg-white/10 border border-white/20 text-white inline-flex items-center justify-center gap-2 hover:bg-white/20 transition-colors">

                <ExternalLink size={18} />
                Visit Our Website
              </motion.a>
            </div>
            <p className="text-white/50 text-sm mt-8">
              Build fast. Think fashion.
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>);

}