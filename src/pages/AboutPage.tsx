import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Clock, Heart } from 'lucide-react';
import { Footer } from '../components/Footer';
interface AboutPageProps {
  onNavigate: (page: string) => void;
}
export function AboutPage({ onNavigate }: AboutPageProps) {
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

              About Us
            </motion.span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white">
              India's Fastest
              <br />
              <span className="text-gold italic">Wardrobe Rescue</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              DOORDRIPP is not just a platform; we are India's newest and most
              essential fashion-tech platform, here to solve your wardrobe
              emergencies, one minute at a time.
            </p>
          </div>

          {/* Promise Section */}
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

            <h2 className="font-serif text-3xl font-bold text-gold mb-6">
              The DOORDRIPP Promise: Style in a Snap
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Imagine this scenario: You have a meeting in an hour and you do
              not have a formal white shirt. Stress? Not anymore.
            </p>
            <p className="text-white text-lg leading-relaxed">
              You simply order it on the DOORDRIPP app and it will be delivered
              to the doorstep in minutes. We're changing the game by bringing
              the future of fashion directly to your doorstep — delivered
              instantly.
            </p>
          </motion.div>

          {/* Why DOORDRIPP */}
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
            className="mb-16">

            <h2 className="font-serif text-3xl font-bold text-white text-center mb-12">
              Why DOORDRIPP?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">
                  Instant Solutions
                </h3>
                <p className="text-white/60">
                  Your life shouldn't be governed by shipping times. We deliver
                  fashion when you need it most.
                </p>
              </div>
              <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">
                  20-40 Minutes
                </h3>
                <p className="text-white/60">
                  From order to doorstep in minutes. Live spontaneously knowing
                  we're always minutes away.
                </p>
              </div>
              <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">
                  Peace of Mind
                </h3>
                <p className="text-white/60">
                  If your outfit plan fails, we are literally minutes away from
                  saving the day.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Commitment */}
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

            <h2 className="font-serif text-3xl font-bold text-white mb-6">
              Our Commitment
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
              "We are committed to partnering primarily with local and ethical
              retailers who prioritize quality and sustainable practices. Fast
              fashion doesn't have to mean throwaway fashion."
            </p>
            <div className="mt-8 pt-8 border-t border-gold/30">
              <p className="text-gold font-medium">
                DOORDRIPP is owned by Doordripp
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>);

}