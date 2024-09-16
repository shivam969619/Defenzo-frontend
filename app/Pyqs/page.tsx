"use client";
import React, { FC, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Mock data for syllabus; this can be fetched from the backend if needed
const syllabusData = [
  {
    subject: "Mathematics",
    topics: [
      { chapter: "Sets", questionsAsked: 5 },
      { chapter: "Relations and Functions", questionsAsked: 3 },
      { chapter: "Trigonometric Functions", questionsAsked: 7 },
      { chapter: "Algebra", questionsAsked: 8 },
      { chapter: "Calculus", questionsAsked: 6 },
      // Add more chapters for Mathematics from 11th and 12th class
    ],
  },
  {
    subject: "English",
    topics: [
      { chapter: "Tenses", questionsAsked: 10 },
      { chapter: "Active and Passive Voice", questionsAsked: 7 },
      { chapter: "Vocabulary", questionsAsked: 6 },
      { chapter: "Comprehension", questionsAsked: 4 },
      // Add more English grammar portions here
    ],
  },
  {
    subject: "Physics",
    topics: [
      { chapter: "Mechanics", questionsAsked: 8 },
      { chapter: "Optics", questionsAsked: 5 },
      { chapter: "Thermodynamics", questionsAsked: 7 },
      // Add more chapters for Physics from 11th and 12th class
    ],
  },
  {
    subject: "Chemistry",
    topics: [
      { chapter: "Organic Chemistry", questionsAsked: 9 },
      { chapter: "Inorganic Chemistry", questionsAsked: 4 },
      { chapter: "Physical Chemistry", questionsAsked: 6 },
      // Add more chapters for Chemistry from 11th and 12th class
    ],
  },
  {
    subject: "Biology",
    topics: [
      { chapter: "Botany", questionsAsked: 8 },
      { chapter: "Zoology", questionsAsked: 5 },
      { chapter: "Genetics", questionsAsked: 6 },
      // Add more chapters for Biology from 11th and 12th class
    ],
  },
  {
    subject: "History",
    topics: [
      { chapter: "Ancient History", questionsAsked: 7 },
      { chapter: "Medieval History", questionsAsked: 5 },
      { chapter: "Modern History", questionsAsked: 6 },
      // Add more chapters for History
    ],
  },
  {
    subject: "Geography",
    topics: [
      { chapter: "Physical Geography", questionsAsked: 5 },
      { chapter: "Human Geography", questionsAsked: 4 },
      { chapter: "Economic Geography", questionsAsked: 3 },
      // Add more chapters for Geography
    ],
  },
  {
    subject: "Current Affairs",
    topics: [
      { chapter: "National News", questionsAsked: 12 },
      { chapter: "International News", questionsAsked: 10 },
      { chapter: "Sports", questionsAsked: 8 },
      { chapter: "Awards", questionsAsked: 6 },
    ],
  },
  {
    subject: "Polity",
    topics: [
      { chapter: "Constitution", questionsAsked: 9 },
      { chapter: "Governance", questionsAsked: 5 },
      { chapter: "Public Administration", questionsAsked: 7 },
      // Add more chapters for Polity
    ],
  },
];

const Page: FC = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");
  const [pyqs, setPyqs] = useState([]); // State to store fetched PYQs
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const years = [
    { year: "2024 NDA2", papers: ["Maths", "GAT"] },
    { year: "2024 NDA1", papers: ["Maths", "GAT"] },
    { year: "2023 NDA2", papers: ["Maths", "GAT"] },
    { year: "2023 NDA1", papers: ["Maths", "GAT"] },
    { year: "2023 NDA2", papers: ["Maths", "GAT"] },
    { year: "2022 NDA1", papers: ["Maths", "GAT"] },
    { year: "2022 NDA2", papers: ["Maths", "GAT"] },
    { year: "2021 NDA1", papers: ["Maths", "GAT"] },
    { year: "2021 NDA2", papers: ["Maths", "GAT"] },
    { year: "2020 NDA1", papers: ["Maths", "GAT"] },
    { year: "2020 NDA2", papers: ["Maths", "GAT"] },
    { year: "2019 NDA1", papers: ["Maths", "GAT"] },
    { year: "2019 NDA2", papers: ["Maths", "GAT"] },
    { year: "2019 NDA1", papers: ["Maths", "GAT"] },
    { year: "2018 NDA2", papers: ["Maths", "GAT"] },
    { year: "2018 NDA1", papers: ["Maths", "GAT"] },
    { year: "2017 NDA2", papers: ["Maths", "GAT"] },
    { year: "2017 NDA1", papers: ["Maths", "GAT"] },
    { year: "2016 NDA2", papers: ["Maths", "GAT"] },
    { year: "2016 NDA1", papers: ["Maths", "GAT"] },
    { year: "2015 NDA2", papers: ["Maths", "GAT"] },
    { year: "2015 NDA1", papers: ["Maths", "GAT"] },
    { year: "2014 NDA2", papers: ["Maths", "GAT"] },
    { year: "2014 NDA1", papers: ["Maths", "GAT"] },
  ];
  return (
    <div>
      <Heading
        title="Defenzo"
        description="A Complete written guidance place"
        keywords="NDA CDS AFCAT WRITTEN"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <div className="container mx-auto p-4">
        {/* Syllabus Section */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
          NDA Syllabus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {syllabusData.map((subject, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-gray-800"
              onClick={() => setSelectedSubject(subject.subject)}
              whileHover={{ scale: 1.05 }} // Framer Motion hover effect
              whileTap={{ scale: 0.95 }} // Framer Motion tap effect
            >
              {/* Animated Text Color Change */}
              <motion.h3
                className="text-2xl font-semibold text-blue-700 dark:text-blue-400"
                initial={{ color: "#1E3A8A" }} // Tailwind's gray-800 color
                whileHover={{ color: "#E11D48" }} // Tailwind's red-600 color for better visibility
                transition={{ duration: 0.3 }}
              >
                {subject.subject}
              </motion.h3>
              <ul className="mt-4 space-y-3">
                {subject.topics.map((topic, idx) => (
                  <motion.li
                    key={idx}
                    className="text-gray-800 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }} // Staggered effect
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-indigo-600 dark:text-indigo-400">
                        {topic.chapter}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {topic.questionsAsked} Questions
                      </span>
                      <a
                        href="#"
                        className="text-red-500 hover:text-red-700 dark:text-red-300"
                      >
                        Important Formulas
                      </a>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* PYQs Section */}
        {selectedSubject && (
          <>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-center text-gray-800 dark:text-gray-200">
              Previous Year Questions: {selectedSubject}
            </h2>
            {pyqs.length > 0 ? (
              <div className="pyqs-list">
                {pyqs.map((question, index) => (
                  <div key={index} className="p-4 border-b">
                    {/* {question.questionText} */}
                    hii
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center dark:text-gray-400">
                No questions available for {selectedSubject}.
              </p>
            )}
          </>
        )}
      </div>
      <div className="container mx-auto p-4">
        {/* PYQ Section */}
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 dark:text-blue-300">
          NDA Previous Year Question Papers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {years.map((yearData, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-white dark:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                {yearData.year}
              </h3>
              <div className="flex flex-col space-y-2">
                {yearData.papers.map((paper, idx) => (
                  <button
                    key={idx}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
                  >
                    Attempt {paper} Paper
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
