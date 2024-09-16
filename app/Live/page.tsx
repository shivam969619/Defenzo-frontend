"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPlayCircle } from "react-icons/fa"; // Icon for play button
import { motion } from "framer-motion"; // For animations
import Image from "next/image";

const Page: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Chat");
  const upcomingClasses = [
    {
      date: "2024-09-10",
      time: "4:00 PM",
      topic: "Introduction to Defence Forces",
    },
    {
      date: "2024-09-12",
      time: "4:00 PM",
      topic: "Strategy and Preparation Techniques",
    },
    {
      date: "2024-09-15",
      time: "4:00 PM",
      topic: "Fitness and Training Regimens",
    },
  ];

  return (
    <>
      <Heading
        title="Live - Defenzo"
        description="Defenzo is a learning management system for helping defence aspirants."
        keywords="army, navy, airforce"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
              alt="Live Classes"
              width={1200}
              height={675}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaPlayCircle className="text-6xl text-white animate-pulse" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold">Live at 4 PM</h2>
                <p className="mt-2 text-lg">
                  Currently, there are no live classes. Check out our upcoming
                  scheduled classes below.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-left mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-6">Upcoming Live Classes</h3>
            <div className="space-y-6">
              {upcomingClasses.map((classItem, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-1/3">
                   
                  </div>
                  <div className="w-2/3 pl-4">
                    <h4 className="text-xl font-semibold">{classItem.topic}</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {classItem.date} at {classItem.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
