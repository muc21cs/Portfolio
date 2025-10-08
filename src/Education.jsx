import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Education = () => {
  const [isFullDesktop, setIsFullDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsFullDesktop(window.innerWidth >= 1280);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const educationData = [
    {
      title: "Bachelor of Engineering (B.E.)",
      institution: "CMR Institute of Technology, Bengaluru",
      duration: "2021 - 2025",
      grade: "7.99 CGPA",
      description:
        "Graduated with a Bachelor of Engineering in Computer Science and Engineering, gaining practical experience in software development, data structures, algorithms, databases, and AI. Published research papers and contributed to multiple scalable projects.",
      image: "/Images/CMRIT_logo.jpg",
    },
    {
      title: "Higher Secondary (12th Grade)",
      institution: "CMR National PU College, Bengaluru",
      duration: "2019 - 2021",
      grade: "80.66%",
      description:
        "Completed PUC in Science (PCMC) under the Karnataka PUE Board with 80.66%, developing a strong foundation in Mathematics, Physics, and Chemistry.",
      image: "/Images/12th_board_logo.webp",
    },
    {
      title: "Secondary School (10th Grade)",
      institution: "Poornaprajna Education Centre, Bengaluru",
      duration: "2018 - 2019",
      grade: "82.08%",
      description:
        "Completed Secondary School education under KSEEB with 82.08%, excelling in core subjects and preparing for higher studies in Science and Engineering.",
      image: "/Images/10th_board_logo.webp",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      id="education"
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-purple-950 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
            Education
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Showcasing a strong academic background in Computer Science & Engineering, along with excellence in core sciences.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-16 mt-8">
          {/* Timeline line for desktop */}
          {isFullDesktop && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 rounded-full pointer-events-none"></div>
          )}

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`relative flex ${
                  isFullDesktop
                    ? isLeft
                      ? "justify-start"
                      : "justify-end"
                    : "justify-center"
                }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Card */}
                <div
                  className={`${
                    isFullDesktop ? "w-5/12" : "w-full max-w-xl"
                  }`}
                >
                  <div className="bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-gray-900/60 backdrop-blur-lg rounded-3xl p-6 border border-purple-500/50 shadow-2xl hover:shadow-[0_0_30px_rgba(128,0,255,0.7)] hover:scale-105 transition-all duration-500">
                    {/* Image + Title */}
                    <div className="flex items-center gap-6 mb-4">
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        className="w-20 h-20 rounded-xl object-cover border-2 border-purple-500 shadow-lg"
                      />
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          {edu.title}
                        </h2>
                        <h3 className="text-purple-400 font-semibold">
                          {edu.institution}
                        </h3>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="text-gray-300 text-sm italic mb-2">
                      {edu.duration} | Grade: {edu.grade}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                {isFullDesktop && (
                  <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full border-4 border-purple-300 shadow-[0_0_20px_rgba(128,0,255,0.7)] z-10 animate-pulse"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
