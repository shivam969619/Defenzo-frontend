"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import privacyImage from "../assets/privacy-image.png"; // Update with your image path
import secureImage from "../assets/secure-image.png"; // Update with your image path
import Image from "next/image";

const ElearningPrivacyPolicy: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(6);
  const [route, setRoute] = useState("Login");

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <Header
        open={open}
        setOpen={setOpen}
        setRoute={setRoute}
        activeItem={activeItem}
        route={route}
      />
      <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Privacy Policy for Defenzo
          </motion.h1>

          <motion.div
            className="text-lg md:text-xl mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={imageAnimation}
              initial="hidden"
              animate="visible"
              className="w-full h-auto mb-4 rounded-lg overflow-hidden"
            >
              <Image
                src={privacyImage}
                alt="Privacy"
                layout="responsive"
                width={1200}
                height={600}
                quality={100}
                className="object-cover"
              />
            </motion.div>
            <p>
              At Defenzo, we are committed to protecting your privacy. This
              Privacy Policy outlines how we collect, use, disclose, and
              safeguard your information when you use our website and services.
            </p>
          </motion.div>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Information We Collect
          </motion.h2>
          <motion.div
            className="text-lg mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={imageAnimation}
              initial="hidden"
              animate="visible"
              className="w-full h-auto mb-4 rounded-lg overflow-hidden"
            >
              <Image
                src={secureImage}
                alt="Security"
                layout="responsive"
                width={1200}
                height={600}
                quality={100}
                className="object-cover"
              />
            </motion.div>
            <p>
              We may collect personal information that you voluntarily provide
              to us when using our website or services. This information may
              include:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>User-generated content</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </motion.div>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            How We Use Your Information
          </motion.h2>
          <motion.div
            className="text-lg mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <p>
              We may use the information we collect for various purposes,
              including:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>Providing and personalizing our services</li>
              <li>Improving our website and services</li>
              <li>Communicating with you</li>
              <li>Responding to your inquiries</li>
              <li>Sending promotional materials</li>
            </ul>
          </motion.div>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Sharing Your Information
          </motion.h2>
          <motion.div
            className="text-lg mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <p>
              We may share your information with third parties only in the ways
              described in this Privacy Policy or with your explicit consent.
            </p>
          </motion.div>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Security
          </motion.h2>
          <motion.div
            className="text-lg mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <p>
              We take reasonable measures to protect your information from
              unauthorized access, disclosure, alteration, and destruction.
            </p>
          </motion.div>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Changes to This Privacy Policy
          </motion.h2>
          <motion.div
            className="text-lg mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes.
            </p>
          </motion.div>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Contact Us
          </motion.h2>
          <motion.div
            className="text-lg mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <p>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at{" "}
              <a
                href="mailto:contact@defenzo.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                contact@defenzo.com
              </a>
              .
            </p>
          </motion.div>

          <p className="text-lg mb-6">
            This Privacy Policy was last updated on 5 sept.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ElearningPrivacyPolicy;
