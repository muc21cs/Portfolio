import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";

function App() {
  const [count, setCount] = useState(0);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative min-h-screen font-sans text-gray-100 overflow-x-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900 via-indigo-900 to-black"></div>
      
      {/* Subtle Neon Grid Overlay */}
      <div className="absolute inset-0 -z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <Navbar />

      <motion.div
        className="mx-auto max-w-5xl p-6 my-12 rounded-3xl bg-white/5 backdrop-blur-md shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <motion.div
        className="mx-auto max-w-5xl p-6 my-12 rounded-3xl bg-white/5 backdrop-blur-md shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      <motion.div
        className="mx-auto max-w-5xl p-6 my-12 rounded-3xl bg-white/5 backdrop-blur-md shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      <motion.div
        className="mx-auto max-w-5xl p-6 my-12 rounded-3xl bg-white/5 backdrop-blur-md shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Experience />
      </motion.div>

      <motion.div
        className="mx-auto max-w-5xl p-6 my-12 rounded-3xl bg-white/5 backdrop-blur-md shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Education />
      </motion.div>
    </div>
  );
}

export default App;
