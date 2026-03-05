import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
interface PrivacyPageProps {
  onNavigate: (page: string) => void;
}
export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
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
      <main className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
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

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">
            Privacy Policy
          </h1>
          <p className="text-white/50 mb-12">Last Updated: February 20, 2026</p>

          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 leading-relaxed mb-8">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>

              <h3 className="text-lg font-semibold text-gold mb-3">
                A. Personal Information
              </h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-6">
                <li>Full name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Delivery address</li>
                <li>Billing address</li>
                <li>
                  Payment details (processed via secure third-party gateways)
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gold mb-3">
                B. Account Information
              </h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-6">
                <li>Username</li>
                <li>Order history</li>
                <li>Preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-gold mb-3">
                C. Device & Technical Information
              </h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-6">
                <li>IP address</li>
                <li>Device type</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Location data (for delivery purposes)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gold mb-3">
                D. Transaction Information
              </h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Products purchased</li>
                <li>Payment method</li>
                <li>Transaction amount</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use your data to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-4">
                <li>Process and deliver orders</li>
                <li>Provide customer support</li>
                <li>Improve our services and user experience</li>
                <li>Send order updates and service-related notifications</li>
                <li>Prevent fraud and unauthorized transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
                <p className="text-gold font-medium">
                  We do not sell your personal data to third parties.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                3. Legal Basis for Processing
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We process your personal data based on:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-4">
                <li>Your consent</li>
                <li>Performance of a contract (order fulfillment)</li>
                <li>Compliance with legal obligations</li>
                <li>Legitimate business purposes</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                You may withdraw your consent at any time by contacting us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                4. Data Sharing & Disclosure
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-4">
                <li>Delivery partners</li>
                <li>Payment gateway providers</li>
                <li>Technology and hosting service providers</li>
                <li>Government authorities when required by law</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                All third parties are required to maintain confidentiality and
                data protection standards.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                5. Data Security
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We implement reasonable security practices including:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-4">
                <li>Secure servers</li>
                <li>Encryption protocols</li>
                <li>Restricted internal access</li>
                <li>Secure payment processing systems</li>
              </ul>
              <p className="text-white/50 text-sm italic">
                While we strive to protect your information, no system can
                guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                6. Data Retention
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We retain personal data:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>For as long as your account remains active</li>
                <li>As required under tax and regulatory laws</li>
                <li>
                  As necessary for dispute resolution and fraud prevention
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                7. Your Rights
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-4">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent</li>
                <li>File a grievance</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                Requests can be made by contacting us at the details below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                8. Cookies Policy
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-4">
                <li>Enhance user experience</li>
                <li>Analyze platform performance</li>
                <li>Improve our services</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                You may disable cookies through your browser settings, but some
                features may not function properly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Our services are not intended for individuals under 18 years of
                age.
              </p>
              <p className="text-white/70 leading-relaxed">
                We do not knowingly collect personal data from minors.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                10. Third-Party Links
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Our platform may contain links to external websites.
              </p>
              <p className="text-white/70 leading-relaxed">
                We are not responsible for their privacy practices or content.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                11. Changes to This Policy
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. Updated
                versions will be posted on this page with a revised "Last
                Updated" date.
              </p>
              <p className="text-white/70 leading-relaxed">
                Continued use of our services constitutes acceptance of the
                revised policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                12. Grievance Officer & Contact Details
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                In accordance with applicable Indian laws, the details of the
                Grievance Officer are:
              </p>
              <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white font-semibold mb-2">
                  Grievance Officer
                </p>
                <p className="text-white/70 mb-1">Name: Sarvesh Kumar Tiwari</p>
                <p className="text-white/70 mb-1">
                  Email: support@doordripp.com
                </p>
                <p className="text-white/70 mb-1">
                  Contact Number: +91 9286819663
                </p>
                <p className="text-white/70">
                  Registered Address: 7/1, B-Block, Gokul Vihar, Rohta Road,
                  Meerut, Uttar Pradesh – 250001, India
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>);

}