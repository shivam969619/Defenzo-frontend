import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../assets/armyLogo.png"; // Adjust the path as needed

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-12">
      <div className="w-[95%] md:w-[80%] lg:w-[70%] m-auto text-center">
        {/* Header Section */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What is <span className="text-[#FF9933]">Defenzo</span>?
        </motion.h1>

        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={logo}
            alt="Defense Aspirant Logo"
            width={150}
            height={150}
          />
        </motion.div>

        {/* Main Content Section */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome toDefenzo, where we are dedicated to guiding and preparing the
          future leaders of our armed forces. Our mission is to provide aspiring
          officers with the resources and support necessary to excel in their
          pursuit of a career in the defense sector.
          <br />
          <br />
          At Defenzo, we understand the rigorous demands of preparing for
          defense exams and the importance of a structured, comprehensive
          approach. Our platform offers a range of services, including expert
          coaching, detailed study materials, and practice tests designed to
          give you an edge in your preparation.
          <br />
          <br />
          Our team, comprising seasoned professionals and retired defense
          officers, brings firsthand experience and insights to help you
          navigate the challenges of defense examinations and selection
          processes. We are committed to ensuring that you receive the best
          possible guidance every step of the way.
          <br />
          <br />
          Join our community of dedicated aspirants and take the first step
          towards a distinguished career in the armed forces. With our
          personalized support, you can confidently face the challenges ahead
          and achieve your goals.
        </motion.p>

        {/* Signature Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-2xl font-semibold">Shivam Dubey</span>
          <h5 className="text-xl font-light mt-2">
            Founder and CEO, DefenzDefenzo
          </h5>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
