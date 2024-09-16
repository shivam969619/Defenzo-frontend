import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Plus and Minus icons
import { motion } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How can I reset my password?",
      answer:
        "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your email.",
    },
    {
      question: "Are there group discounts available?",
      answer:
        "Yes, we offer group discounts for corporate or team enrollments. Contact our support team for more information.",
    },
    {
      question: "Can I access the courses offline?",
      answer:
        "No, our courses are currently only available online. You need an internet connection to access the course content.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and bank transfers. For more details, please visit our payment page.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team via email at support@defenzo.com or through our contact form on the website.",
    },
    {
      question: "Can I get a refund if I’m not satisfied?",
      answer:
        "Yes, we offer a refund policy within 30 days of purchase. If you’re not satisfied with the course, please contact our support team for assistance.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="dark:text-white text-black px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
      <div>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-300 dark:border-gray-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex items-center justify-between cursor-pointer py-3 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <FaMinus className="text-xl" />
              ) : (
                <FaPlus className="text-xl" />
              )}
            </div>
            {openIndex === index && (
              <motion.div
                className="px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-lg"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-base">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
