import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [isFullDesktop, setIsFullDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsFullDesktop(window.innerWidth >= 1280);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const experiences = [
    {
      title: "FULL STACK DEVELOPMENT INTERN",
      company: "Extion Info Tech",
      duration: "10/2024 to 02/2025",
      responsibilities: [
        "Engineered key modules of a Blood Bank Management System that improved donor registration speed by 30%.",
        "Executed user-facing pages (donor sign-up, admin login) using React.js.",
        "Applied backend functionality using Node.js and MySQL.",
        "Enforced user roles, authentication, and data security.",
        "Collaborated with the team to debug and enhance UI/UX.",
      ],
    },
    {
      title: "Python Programming",
      company: "Training",
      duration: "10/2023 to 11/2023",
      responsibilities: [
        "Designed and developed various python projects including interactive games like Connect 4, TicTac-Toe, Snake game, and Digital Clock.",
        "Ensured seamless functionality, prioritizing user experience, and adhering strictly to project requirements.",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      id="experience"
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-purple-950 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
            Experience
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Showcasing my professional journey with hands-on experience in full-stack development and Python projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-16 mt-8">
          {/* Timeline Line for Desktop */}
          {isFullDesktop && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 rounded-full pointer-events-none"></div>
          )}

          {experiences.map((exp, index) => {
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
                  <div className="bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-gray-900/60 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/50 shadow-2xl hover:shadow-[0_0_40px_rgba(128,0,255,0.8)] hover:scale-105 transition-all duration-500">
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <h2 className="text-2xl font-bold text-white">
                        {exp.title}
                      </h2>
                      <span className="text-gray-300 italic text-sm">
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="text-purple-400 font-semibold mb-4">
                      {exp.company}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                {isFullDesktop && (
                  <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full border-4 border-purple-300 shadow-[0_0_25px_rgba(128,0,255,0.7)] z-10 animate-pulse"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
