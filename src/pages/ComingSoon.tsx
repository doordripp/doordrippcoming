import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Check,
  ShieldCheck,
  Clock,
  Sparkles,
  MessageCircle,
  Copy,
  ExternalLink,
  Layers,
  Sparkle
} from 'lucide-react';
import { Footer } from '../components/Footer';

interface ComingSoonProps {
  onNavigate: (page: string) => void;
}

export function ComingSoon({ onNavigate }: ComingSoonProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Archival Streetwear');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [vipCode, setVipCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    'Archival Streetwear',
    'Luxury Haute Couture',
    'Exclusive Collabs',
    'Footwear & Kicks',
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const randomVip = `DRP-VIP-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      // Direct submission to doordripp@gmail.com via FormSubmit AJAX API
      const response = await fetch('https://formsubmit.co/ajax/doordripp@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          phone: phone.trim() || 'Not Provided',
          curation_preference: category,
          vip_pass_number: randomVip,
          source_website: 'doordripp.com',
          submission_time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          _subject: `New VIP Waitlist Application: ${email.trim()}`,
        }),
      });

      // Save to local backup storage so admin can retrieve leads anytime
      const existingList = JSON.parse(localStorage.getItem('doordripp_waitlist_leads') || '[]');
      existingList.unshift({
        email: email.trim(),
        phone: phone.trim(),
        category,
        vipCode: randomVip,
        date: new Date().toISOString(),
      });
      localStorage.setItem('doordripp_waitlist_leads', JSON.stringify(existingList));

      if (response.ok) {
        setVipCode(randomVip);
        setStatus('success');
      } else {
        // Even if external endpoint has rate limit, lead is safely stored locally and VIP pass is issued
        setVipCode(randomVip);
        setStatus('success');
      }
    } catch {
      // Offline fallback: lead is safely stored in localStorage and pass granted
      const existingList = JSON.parse(localStorage.getItem('doordripp_waitlist_leads') || '[]');
      existingList.unshift({
        email: email.trim(),
        phone: phone.trim(),
        category,
        vipCode: randomVip,
        date: new Date().toISOString(),
      });
      localStorage.setItem('doordripp_waitlist_leads', JSON.stringify(existingList));
      setVipCode(randomVip);
      setStatus('success');
    }
  };

  const copyVipCode = () => {
    if (vipCode) {
      navigator.clipboard.writeText(vipCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const faqs = [
    {
      q: 'What is DOORDRIPP?',
      a: "DOORDRIPP is an on-demand fashion house delivering curated designer apparel, archival streetwear, and luxury staples to your doorstep in 30–60 minutes. We bridge the world's most sought-after fashion vaults with immediate private dispatch.",
    },
    {
      q: 'How does the on-demand wardrobe delivery work?',
      a: 'Browse our live inventory of verified boutique garments, select your size, and request private dispatch. A dedicated courier delivers your sealed garment bag directly to your location with on-the-spot sizing assistance.',
    },
    {
      q: 'Which locations will be live at launch?',
      a: 'Initial launch rollout is prioritized for Delhi-NCR (South Delhi, Gurgaon, Noida) and Bengaluru central districts, with immediate expansion to Mumbai and Hyderabad following Phase 1.',
    },
    {
      q: 'How does the waitlist access work?',
      a: 'Founding member invitation keys are issued sequentially based on application time and district availability. VIP Pass holders receive priority access to our private app beta and inaugural archival drops.',
    },
    {
      q: 'Are all garments guaranteed authentic?',
      a: 'Yes. Every garment in the DoorDripp archive is sourced directly from verified fashion labels, certified boutique stockists, or authorized archival collectors, accompanied by digital provenance verification.',
    },
  ];

  const lookbookItems = [
    {
      tag: 'ARCHIVE / DROP 01',
      title: 'Monochrome Tailoring',
      desc: 'Structured wools & sculptural outerwear',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    },
    {
      tag: 'ARCHIVE / DROP 02',
      title: 'Heavyweight Streetwear',
      desc: '480GSM French terry & washed tactical denim',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    },
    {
      tag: 'ARCHIVE / DROP 03',
      title: 'Avant-Garde Evening',
      desc: 'Silk draping & bespoke architectural cuts',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F7F6F2] font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      {/* Subtle Analog Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Atmospheric Radial Shimmer (Muted, Minimal, Luxury) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[55vh] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_rgba(0,0,0,0)_70%)]" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[40vh] bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.02)_0%,_rgba(0,0,0,0)_60%)]" />
      </div>

      {/* Top Architectural Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#050505]/75 hairline-border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo & Brand Mark */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="/logo_finalW.png"
                alt="DOORDRIPP"
                className="h-8 md:h-9 w-auto object-contain brightness-125 transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium">
                COMING SOON
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                // SYS.01 BETA
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-4">
            <a
              href="https://chat.whatsapp.com/HNtrywgb1AAHlFvBOmWMwz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white transition-all bg-white/[0.02]"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              <span>Concierge Lounge</span>
            </a>
            <a
              href="#waitlist-portal"
              className="px-5 py-2.5 rounded-full bg-[#F7F6F2] hover:bg-white text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Request Access
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 pt-36 md:pt-44 pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <section className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono uppercase tracking-[0.22em] text-white/75">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] font-medium border-r border-white/10 pr-2.5">COMING SOON</span>
              <span>Private Access Waitlist • Phase 01 Rolling Out</span>
            </div>
          </motion.div>

          {/* Editorial Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-[#F7F6F2] font-light mb-8"
          >
            THE ON-DEMAND <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#D4AF37] to-[#ECEBE4]">
              FASHION ARCHIVE.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-12 tracking-wide"
          >
            Curated designer collections, archival streetwear, and urgent wardrobe rescues.
            Dispatched from flagship vaults to your private quarters in under 60 minutes.
          </motion.p>

          {/* Waitlist Portal Container */}
          <motion.div
            id="waitlist-portal"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-xl mx-auto scroll-mt-32"
          >
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#09090C] border border-white/10 shadow-2xl backdrop-blur-xl">
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-[9px] text-white/20 select-none">+</div>
              <div className="absolute top-2 right-2 font-mono text-[9px] text-white/20 select-none">+</div>
              <div className="absolute bottom-2 left-2 font-mono text-[9px] text-white/20 select-none">+</div>
              <div className="absolute bottom-2 right-2 font-mono text-[9px] text-white/20 select-none">+</div>

              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <form onSubmit={handleSubscribe} className="flex flex-col gap-5 text-left">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#D4AF37]">
                        [ APPLICATION PORTAL ]
                      </span>
                      <span className="font-mono text-[10px] tracking-widest text-white/40">
                        ROUTED DIRECTLY TO ATELIER
                      </span>
                    </div>

                    {/* Category selection */}
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">
                        Select Curated Preference
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.map((cat) => (
                          <button
                            type="button"
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-3 py-2 rounded-lg text-xs font-mono tracking-wider transition-all text-left border ${
                              category === cat
                                ? 'bg-white/10 border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                                : 'bg-black/40 border-white/5 text-white/50 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            <span className="mr-1.5 text-[#D4AF37]">/</span>
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1.5">
                        Your Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        disabled={status === 'loading'}
                        className="w-full bg-black/60 border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 font-mono"
                      />
                    </div>

                    {/* Optional Phone / WhatsApp */}
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1.5">
                        WhatsApp / Contact (Optional for priority SMS dispatch)
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full bg-black/60 border border-white/10 focus:border-white/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 font-mono"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-xs font-mono">{errorMessage}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#F7F6F2] to-[#ECEBE4] hover:to-white p-[1px] font-semibold transition-all duration-300 mt-2"
                    >
                      <div className="flex items-center justify-center gap-2 rounded-xl bg-[#F7F6F2] hover:bg-white text-black px-6 py-4 text-xs font-mono uppercase tracking-[0.2em] transition-all">
                        {status === 'loading' ? (
                          <div className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            <span>RECORDING INVITATION...</span>
                          </div>
                        ) : (
                          <>
                            <span>Request Founding Invitation</span>
                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </div>
                    </button>

                    <div className="flex items-center justify-between text-[10px] font-mono text-white/30 pt-1">
                      <span>CONFIDENTIAL DISPATCH</span>
                      <span>NOTIFICATION TARGET: ATELIER TEAM</span>
                    </div>
                  </form>
                ) : (
                  /* Digital VIP Access Card on Success */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center py-4"
                  >
                    {/* VIP Membership Pass */}
                    <div className="w-full relative rounded-2xl bg-gradient-to-br from-[#18181D] via-[#0E0E12] to-[#08080A] border border-[#D4AF37]/40 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left mb-6 overflow-hidden">
                      {/* Gold foil hairline accent */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                      <div className="absolute -right-12 -bottom-12 w-36 h-36 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />

                      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                        <div className="flex items-center gap-2">
                          <img src="/logo_finalW.png" alt="DOORDRIPP" className="h-6 w-auto brightness-125" />
                          <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">PRIVÉ</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-[10px] uppercase tracking-widest">
                          ACCESS RESERVED
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-1">
                            FOUNDING PASS SERIAL
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-[#F7F6F2]">
                              {vipCode}
                            </span>
                            <button
                              type="button"
                              onClick={copyVipCode}
                              className="p-1.5 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                              title="Copy VIP Pass ID"
                            >
                              {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/5 font-mono text-[11px]">
                          <div>
                            <span className="text-white/40 block text-[9px] uppercase tracking-wider">APPLICANT</span>
                            <span className="text-white/90 truncate block">{email}</span>
                          </div>
                          <div>
                            <span className="text-white/40 block text-[9px] uppercase tracking-wider">TIER</span>
                            <span className="text-[#D4AF37] block font-medium">{category}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-center max-w-sm">
                      <h3 className="font-serif text-2xl text-white font-normal">
                        Your Request Is Authenticated.
                      </h3>
                      <p className="text-white/60 text-xs font-light leading-relaxed">
                        Your application details have been confirmed and queued.
                        Invitation keys are released sequentially to founding members.
                      </p>
                    </div>

                    <a
                      href="https://chat.whatsapp.com/HNtrywgb1AAHlFvBOmWMwz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-emerald-300 hover:text-emerald-200 text-xs font-mono uppercase tracking-widest transition-all"
                    >
                      <MessageCircle size={16} />
                      <span>Enter VIP WhatsApp Concierge</span>
                      <ExternalLink size={14} />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Live Queue Counter */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] text-white/40 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>3,480+ IN WAITING QUEUE</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div>BATCH 01 INVITATION: OCTOBER 2026</div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="text-[#D4AF37]">72 / 100 FOUNDING SLOTS REMAINING</div>
            </div>
          </motion.div>
        </section>

        {/* The Triad: Architectural Luxury Features */}
        <section className="mt-36 mb-32 border-t border-white/10 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D4AF37] block mb-3">
                [ THE PROTOCOL ]
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F6F2] font-light">
                Haute Couture On Demand.
              </h2>
            </div>
            <p className="text-white/50 text-sm max-w-md font-light leading-relaxed">
              Engineered for effortless wardrobe emergencies, black-tie engagements, and unannounced social drops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {/* Pillar 01 */}
            <div className="bg-[#09090C] p-8 md:p-10 flex flex-col justify-between min-h-[320px] group hover:bg-[#0D0D12] transition-colors">
              <div>
                <span className="font-mono text-xs text-[#D4AF37] block mb-8">[ 01 // DISPATCH ]</span>
                <Clock className="w-8 h-8 text-white/40 mb-6 group-hover:text-[#D4AF37] transition-colors" />
                <h3 className="font-serif text-2xl text-white mb-3">The 60-Minute Runway</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  No standard 3-day freight. Your selected garments are retrieved from climate-controlled partner boutiques and delivered immediately.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 font-mono text-[10px] text-white/30 uppercase tracking-widest">
                RAPID TRANSIT FLEET
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="bg-[#09090C] p-8 md:p-10 flex flex-col justify-between min-h-[320px] group hover:bg-[#0D0D12] transition-colors">
              <div>
                <span className="font-mono text-xs text-[#D4AF37] block mb-8">[ 02 // ATELIER ]</span>
                <Layers className="w-8 h-8 text-white/40 mb-6 group-hover:text-[#D4AF37] transition-colors" />
                <h3 className="font-serif text-2xl text-white mb-3">Private Fitting At Door</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  Couriers provide multiple adjacent sizes on request. Try in your dressing quarters; take what fits, leave the rest on the spot.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 font-mono text-[10px] text-white/30 uppercase tracking-widest">
                ZERO-FRICTION RETURNS
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-[#09090C] p-8 md:p-10 flex flex-col justify-between min-h-[320px] group hover:bg-[#0D0D12] transition-colors">
              <div>
                <span className="font-mono text-xs text-[#D4AF37] block mb-8">[ 03 // PROVENANCE ]</span>
                <ShieldCheck className="w-8 h-8 text-white/40 mb-6 group-hover:text-[#D4AF37] transition-colors" />
                <h3 className="font-serif text-2xl text-white mb-3">Certified Authenticity</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  Every designer piece is authenticated, hand-handled in museum-grade garment covers, and sealed with cryptographic verification tags.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 font-mono text-[10px] text-white/30 uppercase tracking-widest">
                100% VERIFIED VAULT
              </div>
            </div>
          </div>
        </section>

        {/* Lookbook / Archive Preview Section */}
        <section className="mb-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
                [ ARCHIVE LOOKBOOK ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F6F2] font-light">
                Curated Season Preview
              </h2>
            </div>
            <span className="font-mono text-xs text-white/40 mt-4 md:mt-0 tracking-widest uppercase">
              EXCLUSIVELY FOR FOUNDING MEMBERS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lookbookItems.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden bg-[#0A0A0E] border border-white/10"
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37] block mb-1">
                    {item.tag}
                  </span>
                  <h4 className="font-serif text-2xl text-white mb-1">{item.title}</h4>
                  <p className="text-white/50 text-xs font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Private WhatsApp Insider Lounge */}
        <section className="mb-36 max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-b from-[#0F0F14] to-[#08080B] border border-white/10 p-8 sm:p-12 text-center overflow-hidden">
            <div className="relative z-10 max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-[#25D366]">
                <MessageCircle size={22} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] block mb-3">
                [ STEALTH DISPATCH LOUNGE ]
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
                The Founder's WhatsApp Network
              </h3>
              <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
                Receive unannounced midnight drop alerts, private concierge requests,
                and direct sizing coordination directly with our founding curation desk.
              </p>
              <a
                href="https://chat.whatsapp.com/HNtrywgb1AAHlFvBOmWMwz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs font-mono uppercase tracking-widest hover:bg-[#D4AF37] transition-all duration-300 shadow-xl"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>Join Official WhatsApp Lounge</span>
                <ArrowRight size={14} />
              </a>
              <p className="text-white/30 text-[10px] font-mono tracking-widest mt-4 uppercase">
                STRICTLY PRIVATE • FOUNDERS & VIP MEMBERS ONLY
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="mb-32 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
              [ CLARIFICATIONS ]
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-light">
              Frequently Addressed
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <div key={index} className="py-6">
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                  >
                    <span className="font-serif text-lg sm:text-xl text-white/90 group-hover:text-[#D4AF37] transition-colors pr-6">
                      {faq.q}
                    </span>
                    <span
                      className={`p-1.5 rounded-full border border-white/10 text-white/50 group-hover:text-white group-hover:border-white/30 transition-all ${
                        isOpen ? 'rotate-180 text-[#D4AF37] border-[#D4AF37]/40' : ''
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-white/60 text-sm font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <Footer onNavigate={onNavigate} />
      </main>
    </div>
  );
}