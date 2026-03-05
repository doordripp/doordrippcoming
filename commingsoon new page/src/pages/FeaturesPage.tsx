import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Rocket,
  ShoppingBag,
  MapPin,
  Brain,
  Radio,
  CheckCircle,
  RefreshCw,
  CreditCard,
  Gift,
  Leaf } from
'lucide-react';
import { Footer } from '../components/Footer';
interface FeaturesPageProps {
  onNavigate: (page: string) => void;
}
export function FeaturesPage({ onNavigate }: FeaturesPageProps) {
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
      <main className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
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

              Features
            </motion.span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white">
              What Makes DOORDRIPP
              <br />
              <span className="text-gold italic">Different</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Discover the features that make DOORDRIPP India's fastest wardrobe
              rescue platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Feature 1 */}
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
                <Rocket className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Fashion Delivered in 20–40 Minutes
              </h3>
              <p className="text-white/60 leading-relaxed">
                No waiting. No planning ahead. Doordripp brings clothes,
                footwear, and accessories straight to your door in as little as
                20 minutes, powered by hyperlocal fashion hubs and
                lightning-fast delivery partners.
              </p>
            </motion.div>

            {/* Feature 2 */}
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
                <ShoppingBag className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Everything Fashion. One Platform.
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                From everyday essentials to last-minute outfits: Clothing,
                Footwear, Accessories. One app. One checkout. Zero hassle.
              </p>
              <ul className="text-white/50 text-sm space-y-1">
                <li>• Clothing – casual, party, ethnic, office, streetwear</li>
                <li>• Footwear – sneakers, heels, formals, sports shoes</li>
                <li>• Accessories – watches, bags, belts, sunglasses & more</li>
              </ul>
            </motion.div>

            {/* Feature 3 */}
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
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Hyperlocal Fashion Hubs
              </h3>
              <p className="text-white/60 leading-relaxed">
                We don't ship from faraway warehouses. Doordripp uses city-based
                micro style hubs, stocked with trending items near you —
                enabling faster delivery and fresher fashion.
              </p>
            </motion.div>

            {/* Feature 4 */}
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
                <Brain className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Smart Style Suggestions
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Not sure what to wear? We've got you.
              </p>
              <ul className="text-white/50 text-sm space-y-1">
                <li>• Instant outfit suggestions by occasion & trend</li>
                <li>• "Style Now" picks complete looks in seconds</li>
                <li>• Daily updated trending styles — not outdated catalogs</li>
              </ul>
            </motion.div>

            {/* Feature 5 */}
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
                delay: 0.3
              }}
              className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8">

              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <Radio className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Live Delivery Tracking
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Full transparency from click to doorstep:
              </p>
              <ul className="text-white/50 text-sm space-y-1">
                <li>• Order packed instantly</li>
                <li>• Rider dispatched in minutes</li>
                <li>• Live countdown till arrival</li>
                <li>• You always know when your drip arrives.</li>
              </ul>
            </motion.div>

            {/* Feature 6 */}
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
                delay: 0.35
              }}
              className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8">

              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Quality-Checked Before Dispatch
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Every order goes through a quick inspection:
              </p>
              <ul className="text-white/50 text-sm space-y-1">
                <li>• Correct size & color</li>
                <li>• Damage-free & wearable condition</li>
                <li>• Secure, minimal packaging</li>
                <li>• Arrives ready to wear — not ready to return.</li>
              </ul>
            </motion.div>

            {/* Feature 7 */}
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
                delay: 0.4
              }}
              className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8">

              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Easy Returns & Quick Swaps
              </h3>
              <p className="text-white/60 leading-relaxed">
                Didn't like the fit? Simple exchange & return flow with fast
                pickup support and customer-first assistance. Because fast
                fashion should also be easy fashion.
              </p>
            </motion.div>

            {/* Feature 8 */}
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
                delay: 0.45
              }}
              className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8">

              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Fast & Flexible Payments
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Pay your way:
              </p>
              <ul className="text-white/50 text-sm space-y-1">
                <li>• UPI (GPay, PhonePe, Paytm)</li>
                <li>• Debit / Credit Cards</li>
                <li>• Cash on Delivery (select areas)</li>
                <li>• Checkout in seconds.</li>
              </ul>
            </motion.div>

            {/* Feature 9 */}
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
                delay: 0.5
              }}
              className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8">

              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <Gift className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Flash Drops & Limited Drips
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Exclusive to Doordripp:
              </p>
              <ul className="text-white/50 text-sm space-y-1">
                <li>• Time-limited fashion drops</li>
                <li>• City-exclusive styles</li>
                <li>• Countdown deals you don't want to miss</li>
                <li>• Once it's gone — it's gone.</li>
              </ul>
            </motion.div>

            {/* Feature 10 */}
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
                delay: 0.55
              }}
              className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8">

              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Built for a Smarter Future
              </h3>
              <p className="text-white/60 leading-relaxed">
                Shorter delivery routes = lower emissions. Local sourcing
                supports nearby sellers. Minimal, eco-friendly packaging. Fast
                fashion, done responsibly.
              </p>
            </motion.div>
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
              Why Choose DOORDRIPP?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-white/70 mb-8">
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm">
                Fashion in 20–40 minutes
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm">
                Clothes, footwear & accessories in one place
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm">
                Smart styling, not endless scrolling
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm">
                Hyperlocal, fast & reliable
              </span>
            </div>
            <p className="text-gold text-xl font-serif font-bold">
              Your Style. Delivered Instantly.
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>);

}