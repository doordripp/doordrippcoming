import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, ChevronDown, ArrowRight, Instagram, Twitter, Mail, Sparkles } from 'lucide-react';
// Fashion background images (high-quality Unsplash fashion photos)
const fashionImages = ['https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80', 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80', 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80', 'https://images.unsplash.com/photo-1558769132-cb1aea1c8b5a?w=1200&q=80' // Designer clothes
];
// --- Components ---
const Logo = () => <motion.div className="relative h-12 w-auto" whileHover={{
  scale: 1.05
}} transition={{
  type: 'spring',
  stiffness: 400
}}>
    <img src="/image.png" alt="DOORDRIPP Logo" className="h-full w-auto object-contain" />
  </motion.div>;
const GlassCard = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => <motion.div whileHover={{
  scale: 1.02,
  y: -5
}} transition={{
  type: 'spring',
  stiffness: 300
}} className={`backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl ${className}`}>
    {children}
  </motion.div>;
const FloatingImage = ({
  src,
  delay,
  className
}: {
  src: string;
  delay: number;
  className: string;
}) => <motion.div initial={{
  opacity: 0,
  scale: 0.8,
  rotate: -10
}} animate={{
  opacity: [0.3, 0.6, 0.3],
  scale: [0.8, 1, 0.8],
  rotate: [-10, 10, -10],
  y: [0, -20, 0]
}} transition={{
  duration: 8,
  delay,
  repeat: Infinity,
  ease: 'easeInOut'
}} className={`absolute pointer-events-none ${className}`}>
    <div className="relative overflow-hidden rounded-2xl border border-white/10">
      <img src={src} alt="Fashion" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  </motion.div>;
const MarqueeText = () => {
  const words = ['LUXURY', 'INSTANT', 'EXCLUSIVE', 'FASHION', 'DELIVERED', 'PREMIUM', 'STYLE', 'DOORDRIPP'];
  return <div className="overflow-hidden py-8 border-y border-white/5 my-20">
      <motion.div animate={{
      x: [0, -1000]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'linear'
    }} className="flex gap-8 whitespace-nowrap">
        {[...words, ...words, ...words].map((word, i) => <span key={i} className="text-6xl md:text-8xl font-serif font-bold text-white/20">
            {word}
          </span>)}
      </motion.div>
    </div>;
};
const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return <motion.div initial={false} className="border-b border-white/10 last:border-none">
      <button onClick={onClick} className="w-full py-6 flex items-center justify-between text-left focus:outline-none group">
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-white group-hover:text-gold-light'}`}>
          {question}
        </span>
        <motion.span animate={{
        rotate: isOpen ? 180 : 0
      }} transition={{
        duration: 0.3
      }} className={`ml-4 flex-shrink-0 ${isOpen ? 'text-gold' : 'text-white/50'}`}>
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }} className="overflow-hidden">
            <p className="pb-6 text-white/70 leading-relaxed">{answer}</p>
          </motion.div>}
      </AnimatePresence>
    </motion.div>;
};
export function ComingSoon() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {
    scrollYProgress
  } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  // Rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % fashionImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };
  const faqs = [{
    q: 'What is DOORDRIPP?',
    a: "DOORDRIPP is the world's first ultra-luxury fashion delivery service. We partner with exclusive boutiques to bring high-end fashion to your doorstep instantly."
  }, {
    q: 'When do you launch?',
    a: 'We are currently in an exclusive beta phase in selected cities. The public launch is scheduled for late 2026. Join the waitlist to secure your spot.'
  }, {
    q: 'What areas do you deliver to?',
    a: 'Our initial launch covers areas near Delhi-NCR . We are rapidly expanding to other fashion capitals.'
  }, {
    q: 'How fast is instant delivery?',
    a: 'We use a dedicated fleet of secure couriers to ensure your luxury items arrive safely and swiftly, right when you need them.'
  }];
  const titleWords = ['Fashion', 'Delivered', 'Instantly'];
  return <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black font-sans overflow-x-hidden">
      {/* Animated Background with Fashion Images */}
      <div className="fixed inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div key={currentImageIndex} initial={{
          opacity: 0,
          scale: 1.1
        }} animate={{
          opacity: 0.15,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.95
        }} transition={{
          duration: 1.5
        }} className="absolute inset-0">
            <img src={fashionImages[currentImageIndex]} alt="Fashion background" className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        {/* Animated Gradient Orbs */}
        <motion.div style={{
        y: y1
      }} className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold/20 rounded-full blur-[150px]" />
        <motion.div style={{
        y: y2
      }} className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[150px]" />
      </div>

      {/* Floating Fashion Images */}
      <FloatingImage src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" delay={0} className="hidden lg:block top-32 left-10 w-48 h-64 opacity-40" />
      <FloatingImage src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" delay={2} className="hidden lg:block top-64 right-20 w-56 h-72 opacity-40" />
      <FloatingImage src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&q=80" delay={4} className="hidden xl:block bottom-32 left-32 w-52 h-68 opacity-40" />

      {/* Header */}
      <motion.header initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      duration: 0.8,
      ease: 'easeOut'
    }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 flex justify-center items-center backdrop-blur-xl bg-black/30 border-b border-white/10">
        <Logo />
        <motion.a href="#waitlist" whileHover={{
        scale: 1.05,
        x: 5
      }} whileTap={{
        scale: 0.95
      }} className="hidden md:flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors absolute right-6 md:right-12">
          <Sparkles size={16} className="text-gold" />
          Join Waitlist
        </motion.a>
      </motion.header>

      <main className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
        {/* Hero Section */}
        <motion.section className="w-full flex flex-col items-center text-center mb-24 md:mb-32">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="mb-8 inline-block">
            <motion.span animate={{
            boxShadow: ['0 0 20px rgba(212, 175, 55, 0.3)', '0 0 40px rgba(212, 175, 55, 0.5)', '0 0 20px rgba(212, 175, 55, 0.3)']
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="px-6 py-2 rounded-full border border-gold/50 bg-gold/10 text-gold text-sm md:text-base font-medium tracking-widest uppercase backdrop-blur-xl">
              Coming Soon • Exclusive Launch
            </motion.span>
          </motion.div>

          {/* Animated Title */}
          <div className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold leading-tight mb-8 overflow-hidden">
            {titleWords.map((word, i) => <motion.div key={i} initial={{
            y: 100,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.3 + i * 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}>
                {i === 2 ? <motion.span className="text-gold italic inline-block" animate={{
              textShadow: ['0 0 20px rgba(212, 175, 55, 0.5)', '0 0 40px rgba(212, 175, 55, 0.8)', '0 0 20px rgba(212, 175, 55, 0.5)']
            }} transition={{
              duration: 2,
              repeat: Infinity
            }}>
                    {word}
                  </motion.span> : <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60">
                    {word}
                  </span>}
              </motion.div>)}
          </div>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1
        }} className="text-lg md:text-2xl text-white/70 max-w-3xl mb-16 leading-relaxed font-light">
            Experience the future of luxury shopping. Exclusive collections from
            top designers, delivered to your door instantly.
          </motion.p>

          {/* Waitlist Form */}
          <motion.div id="waitlist" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 1.2
        }} className="w-full max-w-lg">
            <GlassCard className="p-3 flex flex-col md:flex-row gap-3">
              <input type="email" placeholder="Enter your email address" value={email} onChange={e => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }} className="flex-1 bg-black/30 border border-white/10 focus:border-gold/50 rounded-xl px-5 py-4 text-white placeholder-white/40 outline-none transition-all backdrop-blur-xl" disabled={status === 'loading' || status === 'success'} />
              <motion.button onClick={handleSubscribe} disabled={status === 'loading' || status === 'success'} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap
                  ${status === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/50'}
                `}>
                {status === 'loading' ? <motion.div animate={{
                rotate: 360
              }} transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'linear'
              }} className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full" /> : status === 'success' ? "✓ You're In!" : <>
                    Join Waitlist <ArrowRight size={18} />
                  </>}
              </motion.button>
            </GlassCard>
            {status === 'error' && <motion.p initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-red-400 text-sm mt-3 text-left pl-4">
                Please enter a valid email address.
              </motion.p>}
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 1.4
        }} className="mt-8">
            <motion.a href="https://chat.whatsapp.com/HNtrywgb1AAHlFvBOmWMwz" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.05,
            x: 5
          }} className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm backdrop-blur-xl bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <MessageCircle size={18} />
              <span>Or join via WhatsApp for VIP access</span>
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Marquee */}
        <MarqueeText />

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-32">
          {[{
          title: 'Curated Luxury',
          desc: "Hand-picked items from the world's most exclusive boutiques and emerging designers.",
          icon: '✨'
        }, {
          title: 'Instant Delivery',
          desc: 'From runway to your door. Fashion at the speed of now.',
          icon: '⚡'
        }, {
          title: 'White Glove Service',
          desc: 'Premium packaging and secure handling by professional couriers who understand luxury.',
          icon: '🎁'
        }].map((item, i) => <motion.div key={i} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.6,
          delay: i * 0.15
        }}>
              <GlassCard className="p-10 h-full group cursor-pointer">
                <motion.div className="text-5xl mb-6" whileHover={{
              scale: 1.2,
              rotate: 10
            }} transition={{
              type: 'spring',
              stiffness: 400
            }}>
                  {item.icon}
                </motion.div>
                <h3 className="font-serif text-3xl font-bold mb-4 text-white group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </GlassCard>
            </motion.div>)}
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-3xl mb-32">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/50 text-lg">
              Everything you need to know about DOORDRIPP.
            </p>
          </motion.div>

          <GlassCard className="p-8 md:p-10">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} isOpen={openFAQ === i} onClick={() => setOpenFAQ(openFAQ === i ? null : i)} />)}
          </GlassCard>
        </section>

        {/* Footer */}
        <motion.footer initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} className="w-full flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-white/40 text-sm gap-6">
          <div className="flex flex-col gap-2">
            <div>
              &copy; {new Date().getFullYear()} DOORDRIPP. All rights reserved.
            </div>
            <a href="mailto:support@doordripp.com" className="hover:text-gold transition-colors flex items-center gap-2">
              <Mail size={16} />
              support@doordripp.com
            </a>
          </div>
          <div className="flex gap-8">
            {[{
            icon: Instagram,
            href: 'https://www.instagram.com/doordripp?igsh=MXI3MXJibjUweWx1YQ==&utm_source=ig_contact_invite',
            label: 'Instagram'
          }, {
            icon: Twitter,
            href: 'https://x.com/doordripp?t=C3ZAb5wjDvzzHv_kq7MV9A&s=08',
            label: 'Twitter'
          }, {
            icon: MessageCircle,
            href: 'https://chat.whatsapp.com/HNtrywgb1AAHlFvBOmWMwz',
            label: 'WhatsApp'
          }].map((social, i) => <motion.a key={i} href={social.href} target={social.label === 'WhatsApp' ? '_blank' : undefined} rel={social.label === 'WhatsApp' ? 'noopener noreferrer' : undefined} whileHover={{
            scale: 1.2,
            y: -3
          }} whileTap={{
            scale: 0.9
          }} className="hover:text-gold transition-colors" title={social.label}>
                <social.icon size={22} />
              </motion.a>)}
          </div>
        </motion.footer>
      </main>
    </div>;
}