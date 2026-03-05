import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
interface TermsPageProps {
  onNavigate: (page: string) => void;
}
export function TermsPage({ onNavigate }: TermsPageProps) {
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
            Terms & Conditions
          </h1>
          <p className="text-white/50 mb-12">Last Updated: February 23, 2026</p>

          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 leading-relaxed mb-8">
              Please read these terms carefully before using our platform. By
              accessing or using Doordripp, you agree to be bound by these Terms
              and Conditions.
            </p>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                1. About Doordripp
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Doordripp is a Quick Commerce B2C platform that enables
                customers to purchase products for rapid delivery.
              </p>
              <p className="text-white/70 leading-relaxed">
                We operate in accordance with applicable Indian laws and
                regulations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                2. Eligibility
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                By using our platform, you confirm that:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>You are at least 18 years of age</li>
                <li>
                  You are legally capable of entering into binding contracts
                </li>
                <li>
                  The information provided by you is accurate and complete
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                3. Orders & Acceptance
              </h2>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>
                  All orders placed through our platform are subject to
                  acceptance and availability.
                </li>
                <li>
                  We reserve the right to cancel or refuse any order at our sole
                  discretion.
                </li>
                <li>
                  Order confirmation does not guarantee delivery if product
                  availability changes.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                4. Pricing & Payment
              </h2>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>
                  All prices are listed in INR and include applicable GST unless
                  stated otherwise.
                </li>
                <li>Prices may change without prior notice.</li>
                <li>
                  Payment must be completed through approved payment gateways
                  before order processing.
                </li>
                <li>
                  In case of pricing errors, we reserve the right to cancel the
                  order and refund the amount paid.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                5. Delivery Policy
              </h2>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>
                  Delivery timelines shown on the platform are estimates and may
                  vary due to traffic, weather, operational issues, or
                  unforeseen circumstances.
                </li>
                <li>
                  You are responsible for providing accurate delivery details.
                </li>
                <li>
                  If delivery fails due to incorrect address or unavailability,
                  re-delivery charges may apply.
                </li>
                <li>
                  Risk and ownership of products pass to you upon successful
                  delivery.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                6. Cancellation Policy
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Orders may be cancelled:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-4">
                <li>Before dispatch (if applicable)</li>
                <li>If delayed beyond reasonable delivery time</li>
                <li>If products are unavailable</li>
              </ul>
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-4">
                <p className="text-gold font-medium">
                  Important: Once an order is out for delivery, cancellation may
                  not be possible.
                </p>
              </div>
              <p className="text-white/70 leading-relaxed">
                We reserve the right to cancel orders in cases of suspected
                fraud or policy violations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                7. Returns & Refunds
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Returns are only accepted in the following cases:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-4">
                <li>Damaged product at the time of delivery</li>
                <li>Wrong product delivered</li>
                <li>Expired product (if applicable)</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-4">
                Customers must raise a complaint within 24 hours of delivery
                with proof (images/video).
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Refunds, if approved, will be processed to the original payment
                method within 5–7 business days.
              </p>
              <p className="text-white/70 leading-relaxed">
                Perishable goods, opened items, or used products are
                non-returnable unless defective.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                8. User Responsibilities
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mb-4">
                <li>Use the platform for unlawful activities</li>
                <li>Provide false or misleading information</li>
                <li>Abuse delivery personnel or customer support</li>
                <li>Attempt to disrupt platform operations</li>
              </ul>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <p className="text-red-400 font-medium">
                  Warning: Violation may result in account suspension or
                  permanent ban.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                9. Intellectual Property
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                All content on this platform, including but not limited to
                logos, branding, design elements, images, and text, are the
                exclusive property of Doordripp.
              </p>
              <p className="text-white/70 leading-relaxed">
                Unauthorized reproduction or misuse is strictly prohibited.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>
                  Doordripp shall not be liable for indirect, incidental, or
                  consequential damages.
                </li>
                <li>
                  Our total liability shall not exceed the amount paid for the
                  specific order in dispute.
                </li>
                <li>
                  We do not guarantee uninterrupted or error-free service.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                11. Force Majeure
              </h2>
              <p className="text-white/70 leading-relaxed">
                We shall not be held liable for delays or failure in performance
                caused by events beyond our reasonable control, including
                natural disasters, strikes, government restrictions, or
                technical failures.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                12. Governing Law & Jurisdiction
              </h2>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>These Terms shall be governed by the laws of India.</li>
                <li>
                  All disputes shall be subject to the exclusive jurisdiction of
                  the courts of Meerut, Uttar Pradesh.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                13. Modifications to Terms
              </h2>
              <p className="text-white/70 leading-relaxed">
                We reserve the right to modify these Terms at any time. Updated
                Terms will be posted on the platform. Continued use of our
                services constitutes acceptance of revised Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                14. Contact Us
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                For any queries regarding these Terms:
              </p>
              <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white font-semibold mb-2">Doordripp</p>
                <p className="text-white/70 mb-1">
                  Email: support@doordripp.com
                </p>
                <p className="text-white/70 mb-1">Phone: +91 9286819662</p>
                <p className="text-white/70">
                  Registered Office: 7/1, B-Block, Gokul Vihar, Rohta Road,
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