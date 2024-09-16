import React, { FC } from "react";
import Image from "next/image";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import { motion } from "framer-motion"; // Import Framer Motion
import Link from "next/link";
type Props = {};
const texts = [
  "Interactive live classes with expert instructors.",
  "Flexible scheduling for your convenience.",
  "Access to all recorded sessions for easy review.",
  "Comprehensive study materials provided.",
  "Join a community of learners in real-time discussions.",
];

const texts1 = [
  "Downloadable, detailed notes for each topic covered.",
  "Regular revision sessions to reinforce learning.",
  "Organized, subject-wise notes for easy reference.",
  "Access to revision quizzes to assess your understanding.",
  "Stay prepared with last-minute revision guides.",
];

const texts2 = [
  "Timed mock tests to simulate real exam conditions.",
  "Instant feedback and detailed performance analysis.",
  "Track your progress with personalized reports.",
  "Mock tests covering a wide range of difficulty levels.",
  "Regular evaluations to keep you on track for success.",
];

const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const Hero1: FC<Props> = (props) => {
  return (
    <>
      <div className="">
        {/* Header Section */}
        <div className="pt-[90px] text-3xl font-bold flex flex-col items-center text-center px-4 text-black dark:text-white">
          <h1>Whether you’re a 11th,12th or a dropper ,</h1>
          <h1>here’s why Defenzo is your best choice</h1>
        </div>

        {/* First Card Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 items-center justify-items-center"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src={card1}
            width={200}
            height={200}
            quality={100}
            alt="Card"
            className="w-full h-auto sm:h-[200px] sm:w-[200px] md:h-[400px] md:w-[600px] object-contain"
          />
          <div className="md:pl-[40px] px-4 md:w-3/4 lg:w-2/3 text-black dark:text-white">
            <h1 className="text-3xl font-bold">Regular Class</h1>
            {texts.map((text, index) => (
              <div
                className="pt-[20px] flex items-center text-black dark:text-white"
                key={index}
              >
                <Image
                  className="mr-2"
                  width={25}
                  height={25}
                  src="https://mydukaan.io/_next/static/media/star-purple.3a0f99650c0ab639cf633cf46e9a29ae.svg"
                  alt="Star"
                />
                <span className="text-black dark:text-white">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Second Card Section - Text First, Image Second */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 items-center justify-items-center md:flex-row-reverse"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="md:pr-[40px] px-4 md:w-3/4 lg:w-2/3">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              Notes and Revision
            </h1>
            {texts1.map((text2, index) => (
              <div
                className="pt-[20px] flex items-center text-black dark:text-white"
                key={index}
              >
                <Image
                  className="mr-2"
                  width={25}
                  height={25}
                  src="https://mydukaan.io/_next/static/media/star-blue.f616f6970481413e436c6ec2ad621545.svg"
                  alt="Star"
                />
                <span className="text-black dark:text-white">{text2}</span>
              </div>
            ))}
          </div>
          <Image
            src={card2}
            width={200}
            height={200}
            alt="Card"
            className="w-full h-auto sm:h-[200px] sm:w-[200px] md:h-[400px] md:w-[600px] object-contain"
          />
        </motion.div>

        {/* Third Card Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 items-center justify-items-center"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src={card3}
            width={200}
            height={200}
            alt="Card"
            className="w-full h-auto sm:h-[200px] sm:w-[200px] md:h-[400px] md:w-[600px] object-contain"
          />
          <div className="md:pl-[40px] px-4 md:w-3/4 lg:w-2/3 text-black dark:text-white">
            <h1 className="text-3xl font-bold ">Test series & Evaluation</h1>
            {texts2.map((text2, index) => (
              <div className="pt-[20px] flex items-center" key={index}>
                <Image
                  className="mr-2"
                  width={25}
                  height={25}
                  src="https://mydukaan.io/_next/static/media/star-gray.1f0c906d374a9e78df3310d226fb00d9.svg"
                  alt="Star"
                />
                <span>{text2}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero1;
