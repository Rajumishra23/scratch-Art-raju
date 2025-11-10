import React from "react";
import { motion } from "framer-motion";

const TermsConditions = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-10 px-6 sm:px-10 font-sans text-gray-800">
      {/* 🔹 Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm sm:text-base text-gray-600 italic">
          Please read these Terms carefully before using our website and services.
        </p>
      </motion.div>

      {/* 🔸 Main Content */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-100 leading-relaxed space-y-6"
      >
        <p>
          Access to and use of <strong>Portraits Maker & Sketch Artist Studio.com</strong> and the products and services
          available through the website are subject to the following terms, conditions and notices
          (“Terms of Service”). By using the services provided by our website, you agree to all
          Terms of Service along with our Privacy Policy, which may be updated from time to time.
        </p>

        <p>
          We reserve the right to review, withdraw, or amend the services without notice. We will
          not be liable if this website is unavailable at any time or for any period. Access to some
          parts or all of this website may be restricted occasionally.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Introduction</h2>
        <p>
          The domain name <strong>www.Portraits Maker & Sketch Artist Studio.com</strong> is operated by Portraits Maker & Sketch Artist Studio, registered
          with GSTIN <strong>09BQWPC2818R2ZX</strong> in Gautam Buddha District, Uttar Pradesh.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Services</h2>
        <p>
          Portraits Maker & Sketch Artist Studio is an online retailer of personalized sketches, paintings, arts, crafts, and
          gifts offered at great value to customers. Upon placing an order, Portraits Maker & Sketch Artist Studio.com ships the
          product and is entitled to payment for the service.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Third Party Websites & Content</h2>
        <p>
          Our website provides links to third-party websites like Facebook and Twitter for sharing
          purposes. We take no responsibility for these third-party websites or their content and
          disclaim any liability arising from their use.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Privacy</h2>
        <p>
          Our <strong>Privacy Policy</strong>, incorporated by reference, explains how we use
          personal information provided by users. By using this site, you agree to be bound by it.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Exactness of the Product</h2>
        <p>
          Product images on the website are for illustration purposes only. Although we strive for
          accuracy, actual product colors may differ slightly due to display variations.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Pricing</h2>
        <p>
          Prices are for retail sales only and include GST. Portraits Maker & Sketch Artist Studio reserves the right to modify
          prices without notice for new orders. Prices for confirmed orders remain unchanged.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Delivery</h2>
        <p>
          Delivery duration options depend on the order type and location. Delays due to unforeseen
          issues may occur, but we will inform you via email or SMS. Compensation for such delays is
          not possible.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Intellectual Property Rights</h2>
        <p>
          All intellectual property rights related to Portraits Maker & Sketch Artist Studio products remain the sole property
          of the company.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Law & Jurisdiction</h2>
        <p>
          These terms are governed by the laws of India. Any disputes are subject to the exclusive
          jurisdiction of the courts at <strong>Sullia-574239</strong>.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Portraits Maker & Sketch Artist Studio and its team from any claims or
          damages arising from your use of the website or violation of these Terms.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Violation & Termination</h2>
        <p>
          Portraits Maker & Sketch Artist Studio may terminate your access without prior notice if you violate these Terms or
          other policies. You remain liable for any payments due for services already provided.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Signature</h2>
        <p>
          All Portraits Maker & Sketch Artist Studio products may or may not contain the artist’s signature.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Replacement Policy</h2>
        <p>
          Replacement is available only for damaged products reported within 3 days of delivery,
          with valid proof. Handmade paintings and pencil sketches are excluded unless damaged.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Cancellation & Refund Policy</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Before processing begins — 90% of order value refunded.</li>
          <li>
            After processing begins — refund minus charges for the work completed.
          </li>
          <li>
            After sketching or painting — no refund.
          </li>
          <li>
            Damaged products will be re-shipped after proof is submitted within 3 days.
          </li>
        </ul>
        <p>Refunds will be processed to the original payment method within 7 working days.</p>

        <h2 className="text-xl font-bold text-orange-600">Customisation Charges</h2>
        <p>
          Customisation charges are additional fees for special artistic requests, communicated
          before or during processing through official contact methods. Portraits Maker & Sketch Artist Studio reserves all
          rights to estimate and apply such charges.
        </p>

        <h2 className="text-xl font-bold text-orange-600">Disclaimer</h2>
        <p className="text-gray-700">
          IN NO EVENT WILL THE COMPANY OR ITS REPRESENTATIVES BE LIABLE FOR ANY DAMAGES ARISING OUT
          OF MISUSE OF PERSONAL INFORMATION. Customers are advised never to share confidential data
          such as passwords, OTPs, or card details with anyone claiming to be from Portraits Maker & Sketch Artist Studio. We
          never ask for such information.
        </p>

        <p>
          For any questions or requests related to these Terms, please contact us through our
          official communication channels.
        </p>
      </motion.div>

      {/* Footer Note */}
      <p className="text-center text-xs sm:text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Portraits Maker & Sketch Artist Studio — All Rights Reserved.
      </p>
    </section>
  );
};

export default TermsConditions;
