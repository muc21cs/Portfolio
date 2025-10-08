import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      type: "Frontend",
      emoji: "💻",
      gradient: "bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500",
      skills: [
        { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      type: "Backend",
      emoji: "⚙️",
      gradient: "bg-gradient-to-tr from-rose-500 via-orange-400 to-yellow-300",
      skills: [
        { name: "Node Js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express Js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      ],
    },
    {
      type: "Languages",
      emoji: "🔤",
      gradient: "bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600",
      skills: [
        { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
    },
  ];

  return (
    <div id="skills" className="min-h-screen relative py-24 px-4 overflow-hidden bg-gray-900">
      {/* Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-pulse-slow bg-[radial-gradient(circle_at_top_left,rgba(255,0,255,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 animate-pulse-slow animation-delay-2000 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.1),transparent_60%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide drop-shadow-lg">
            Skills
          </h1>
          <div className="w-28 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x shadow-lg"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto drop-shadow-md">
            Explore my technical expertise in frontend, backend, and programming languages with a vibrant, dynamic design.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-col gap-16">
          {skillCategories.map((category) => (
            <motion.div
              key={category.type}
              className={`relative p-1 rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:shadow-[0_0_80px_rgba(255,255,255,0.25)] transition-all duration-500 ${category.gradient}`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-black/20 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl animate-bounce">{category.emoji}</span>
                  <h2 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
                    {category.type}
                  </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center gap-3 p-6 rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-lg shadow-white/30 bg-black/10 backdrop-blur-md border border-white/20"
                      whileHover={{ rotate: [0, 5, -5, 0], scale: 1.15 }}
                    >
                      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-md shadow-inner shadow-black/50 hover:shadow-indigo-400/40 transition-all duration-500">
                        <img src={skill.img} alt={skill.name} className="w-12 h-12" />
                      </div>
                      <span className="text-white font-semibold text-lg drop-shadow-md">{skill.name}</span>
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse mt-1"></span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extra animations */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
