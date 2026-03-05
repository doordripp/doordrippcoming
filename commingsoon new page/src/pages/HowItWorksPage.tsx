import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Palette,
  Zap,
  Factory,
  Scissors,
  Package,
  Radio,
  Clock,
  RefreshCw,
  Sparkles } from
'lucide-react';
import { Footer } from '../components/Footer';
interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}
export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const steps = [
  {
    icon: Compass,
    emoji: '🧭',
    title: 'Browse Ready-to-Wear Fashion',
    description:
    "Explore a curated selection of clothes, footwear, and accessories on the Doordripp app or website. Every product you see is already stocked at Doordripp's own facility, ensuring instant availability and zero waiting."
  },
  {
    icon: Palette,
    emoji: '🎨',
    title: 'Select Your Style',
    description:
    'Choose your preferred size, color, and design with clear product details. Doordripp focuses on high-demand, ready-to-wear fashion, making it easy to find the perfect outfit for last-minute plans, work, travel, or special occasions.'
  },
  {
    icon: Zap,
    emoji: '⚡',
    title: 'Fast & Secure Checkout',
    description:
    'Complete your order in just a few clicks using UPI, debit/credit cards, or cash on delivery (available in select areas). Our streamlined checkout is built for speed and convenience.'
  },
  {
    icon: Factory,
    emoji: '🏭',
    title: 'Instant In-House Order Processing',
    description:
    "Once the order is placed, it is immediately processed from Doordripp's in-stock inventory. Since we manage our own stock, there are no delays from third-party sellers or external warehouses."
  },
  {
    icon: Scissors,
    emoji: '🧵',
    title: 'Quick Quality Inspection',
    description:
    'Each item undergoes a rapid in-house quality check to verify size, color, and condition. This ensures every product reaches you clean, accurate, and ready to wear.'
  },
  {
    icon: Package,
    emoji: '📦',
    title: 'Secure Packing & Immediate Dispatch',
    description:
    'Orders are packed carefully using minimal, eco-friendly packaging. A nearby delivery partner is assigned right away, allowing dispatch within minutes of order confirmation.'
  },
  {
    icon: Radio,
    emoji: '📡',
    title: 'Live Order Tracking',
    description:
    'Track your order in real time from dispatch to doorstep. Live updates and a delivery countdown keep you informed every step of the way.'
  },
  {
    icon: Clock,
    emoji: '⏱️',
    title: '20–40 Minute Doorstep Delivery',
    description:
    'With inventory ready at our location and optimized delivery routes, Doordripp delivers your fashion essentials within 20–40 minutes.'
  },
  {
    icon: RefreshCw,
    emoji: '🔁',
    title: 'Easy Returns & Quick Exchanges',
    description:
    'If the fit or style is not right, request a return or exchange directly through the app. Our simple and hassle-free process puts customer comfort first.'
  },
  {
    icon: Sparkles,
    emoji: '✨',
    title: 'Style That Keeps Coming Back',
    description:
    'After delivery, enjoy personalized recommendations, exclusive drops, and special offers — making every future Doordripp order faster, smarter, and more relevant.'
  }];

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

              How It Works
            </motion.span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white">
              How DOORDRIPP
              <br />
              <span className="text-gold italic">Works</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              This is how Doordripp delivers fashion — fast, reliable, and ready
              when you need it.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6 mb-16">
            {steps.map((step, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05
              }}
              className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex gap-6">

                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center text-2xl">
                    {step.emoji}
                  </div>
                  <div className="text-center mt-2 text-white/30 text-sm font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

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
              Ready to experience 20–40 minute fashion?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Browse, check out, track, and wear. Doordripp brings ready-to-wear
              looks to your door in minutes.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/50 inline-flex items-center gap-2">

              Start Shopping <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>);

}