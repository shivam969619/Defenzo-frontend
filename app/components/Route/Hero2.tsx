import React, { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import Card2 from "./Card2";
import armyLogo from "../../assets/armyLogo.png";
import navyLogo from "../../assets/navyLogo.png";
import airforceLogo1 from "../../assets/airforceLogo.png";
import airforceLogo2 from "../../assets/airforceLogo.png";
import comp1photo from "../../assets/comp1photo.png";
import comp2photo from "../../assets/comp2photo.png";
import comp3photo from "../../assets/comp3photo.png";
import comp4photo from "../../assets/comp4photo.png";
import Link from "next/link";

type Props = {};

const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero2: FC<Props> = (props) => {
  const [currentSet, setCurrentSet] = useState(1);
  const slideAnimation = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <>
      {/* Main content area */}
      <div className="relative flex flex-col items-center justify-center md:pl-[110px] py-16 text-black dark:text-white">
        {/* Upper div with larger, bold text */}
        <div className="text-3xl font-bold text-center">
          Hear from our proud Indian Armed Forces officers
        </div>
        {/* Lower div with smaller, lighter text */}
        <div className="text-xl font-medium mt-2 text-center">
          From cadets to serving officers in the Indian Armed Forces
        </div>

        {/* Cards container */}
        <motion.div
          className="grid lg:grid-cols-2 gap-4 grid-cols-1"
          variants={slideAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 2 }}
          key={currentSet} // Use key to trigger animation on change
        >
          {/* Display the first set of cards */}
          {currentSet === 1 && (
            <>
              <Card2
                complogo={airforceLogo1}
                text1={"Serving with honor in the skies!"}
                text2="Becoming an Air Force officer was a dream come true..."
                personphoto={comp1photo}
                personname="Wing Commander Rajesh Verma"
                persondesignation="Indian Air Force"
              />
              <Card2
                complogo={armyLogo}
                text1={"Proud to serve the nation on land!"}
                text2="The Indian Army has given me the opportunity to lead..."
                personphoto={comp2photo}
                personname="Colonel Ravi Sharma"
                persondesignation="Indian Army"
              />
            </>
          )}

          {/* Display the second set of cards */}
          {currentSet === 2 && (
            <>
              <Card2
                complogo={airforceLogo2}
                text1={"Flying high with courage!"}
                text2="The training and dedication have shaped me into a better person..."
                personphoto={comp3photo}
                personname="Squadron Leader Nisha Gupta"
                persondesignation="Indian Air Force"
              />
              <Card2
                complogo={navyLogo}
                text1={"Defending the seas with pride!"}
                text2="Joining the Navy has been the most rewarding experience..."
                personphoto={comp4photo}
                personname="Commander Aditya Kumar"
                persondesignation="Indian Navy"
              />
            </>
          )}
        </motion.div>

        {/* Dots to toggle card sets */}
        <div className="flex space-x-4 mt-4">
          {/* Dot for first set */}
          <button
            className={`p-2 rounded-full ${
              currentSet === 1 ? "bg-gray-700" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSet(1)}
          >
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </button>
          {/* Dot for second set */}
          <button
            className={`p-2 rounded-full ${
              currentSet === 2 ? "bg-gray-700" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSet(2)}
          >
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero2;
