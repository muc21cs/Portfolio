import React, { useState } from "react";
import { motion } from "framer-motion";

const profileImage = "public/Images/Profile pic.jpg"; // Replace with your image
const email = "mugilanc1@gmail.com"; // Replace with your email

const About = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1a2e] via-[#0f223a] to-[#0a1a2e] text-gray-100"
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/40 to-blue-500/30 rounded-full top-[-100px] left-[-100px] blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-pink-500/30 to-purple-500/20 rounded-full bottom-[-80px] right-[-80px] blur-2xl"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center md:justify-between gap-16">
        {/* Left Side - Text Section */}
        <motion.div
          className="flex-[1.3] text-center md:text-left bg-gradient-to-br from-white/5 via-white/2 to-white/5 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/10 space-y-6"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-wide text-lg sm:text-xl">
            Aspiring Full Stack Developer
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
            Hi, I'm <span className="text-pink-400">Mugilan C</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            Crafting modern, scalable, and visually striking web applications with passion and precision.
          </p>

          <p className="text-gray-400 text-md sm:text-lg italic leading-relaxed">
            Turning ideas into code, and code into impactful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-8 gap-4">
            <a
              href="public/Images/Mugilan_C_Resume_2025.pdf"
              download
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-2xl shadow-lg shadow-cyan-400/40 transition-all text-lg transform hover:scale-105"
            >
              Download CV
            </a>

            {/* Contact Me Button */}
            <button
              onClick={() => setShowEmail(!showEmail)}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-2xl shadow-lg shadow-pink-400/40 transition-all text-lg transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Email Display */}
          {showEmail && (
            <p className="mt-4 text-cyan-300 font-medium text-lg">
              📧 {email}
            </p>
          )}
        </motion.div>

        {/* Right Side - Image Section */}
        <motion.div
          className="flex-[0.7] flex justify-center md:justify-end relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-pink-500 blur-3xl opacity-30 group-hover:opacity-50 animate-pulse transition-all"></div>
            <img
              src={profileImage}
              alt="Mugilan"
              className="relative w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(0,255,255,0.4)] group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Particle Dots */}
      {Array.from({ length: 30 }).map((_, idx) => (
        <div
          key={idx}
          className={`absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </section>
  );
};

export default About;
