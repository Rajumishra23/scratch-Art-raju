import React from "react";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-10 px-6 sm:px-10 font-sans text-gray-800">
      {/* 🔹 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Replacement, Cancellation & Refund Policy
        </h1>
        <p className="text-sm sm:text-base text-gray-600 italic">
          We aim to ensure your complete satisfaction with every order you place.
        </p>
      </motion.div>

      {/* 🔸 Replacement Policy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 mb-8 border border-gray-100"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-orange-600 mb-4 border-b border-gray-200 pb-2">
          Replacement Policy
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Replacement is possible if the customer receives a damaged product. The complete product
          will be replaced without any extra cost. The replacement request with valid proof (proof
          of damaged product) has to be raised by the customer within{" "}
          <span className="font-semibold text-gray-900">3 days</span> of product delivery.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          The replacement will be shipped to the customer’s address in the chosen order duration (
          <span className="font-semibold">Normal / Express</span>).
        </p>
        <p className="text-gray-700 leading-relaxed">
          The total product replacement is not applicable for{" "}
          <span className="font-semibold">Handmade Painting</span> and{" "}
          <span className="font-semibold">Pencil Sketch</span> if the artwork is not damaged.
        </p>
      </motion.div>

      {/* 🔸 Cancellation & Refund Policy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-100"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-orange-600 mb-4 border-b border-gray-200 pb-2">
          Cancellation & Refund Policy
        </h2>

        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
          <li>
            If any order is cancelled <strong>before processing begins</strong>,{" "}
            <span className="font-semibold">90%</span> of the order value will be refunded.
          </li>
          <li>
            If any order is cancelled <strong>after processing begins</strong>, and during the
            sketch or painting, cancellation charges equivalent to work done charges are applicable.
          </li>
          <li>
            If any order is cancelled <strong>after sketching or painting</strong>, no refund is
            possible.
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-3">
          If the customer receives a damaged product, the product will be re-shipped to the
          customer’s address. This damage request with{" "}
          <span className="font-semibold">visual proof of the damaged product</span> has to be
          raised by the customer within 3 days of receiving the product.
        </p>

        <p className="text-gray-700 leading-relaxed">
          All refunds, as applicable, will be initiated to the{" "}
          <span className="font-semibold">original payment method</span> within{" "}
          <span className="font-semibold text-gray-900">7 working days</span>.
        </p>
      </motion.div>

      {/* 🔹 Footer Note */}
      <p className="text-center text-xs sm:text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Your Company Name — All Rights Reserved.
      </p>
    </section>
  );
};

export default RefundPolicy;
