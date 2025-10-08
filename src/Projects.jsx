import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Online Coding Platform",
    description:
      "A full-featured coding platform where users can practice coding challenges online, including exciting 1v1 coding battles. Features include leaderboard ranking, problem categorization, and real-time code evaluation.",
    tech: ["Java", "Spring Boot", "React", "MongoDB", "Redux", "Tailwind CSS"],
    image: "/Images/online_coding.png",
    link: "https://github.com/muc21cs/Online-Coding-Platform/tree/master/Online_Coding_Platform",
    gradient: "from-indigo-500 via-purple-600 to-pink-500",
  },
  {
    name: "Bike Rental System",
    description:
      "The system allows customers to reserve bikes online and manage the rental process. Key features include availability checking, rental fees calculation, reservations, and processing pick-up and return.",
    tech: ["HTML", "CSS", "JavaScript", "Next JS", "Django"],
    image: "/Images/Bike rental.png",
    link: "https://github.com/muc21cs/Bike-Rental-System",
    gradient: "from-green-400 via-teal-500 to-blue-500",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen relative py-24 px-4 bg-gray-900 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-pulse-slow bg-[radial-gradient(circle_at_top_left,rgba(255,0,255,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 animate-pulse-slow animation-delay-2000 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.05),transparent_70%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">Projects</h1>
          <div className="w-28 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x shadow-lg"></div>
          <p className="text-gray-300 max-w-3xl mx-auto drop-shadow-md">
            Some of my notable projects demonstrating full-stack development expertise with dynamic UI effects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              className={`relative p-1 rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:shadow-[0_0_80px_rgba(255,255,255,0.25)] transition-all duration-500 bg-gradient-to-br ${project.gradient}`}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-6 h-full flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Project Image */}
                <div className="overflow-hidden rounded-2xl mb-6 shadow-lg">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-56 object-cover rounded-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Project Content */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-white drop-shadow-md">{project.name}</h2>
                  <p className="text-gray-200">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-semibold shadow-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 self-start"
                  >
                    View Project
                  </a>
                </div>

                {/* Neon Glow */}
                <span className="absolute inset-0 rounded-3xl border-2 border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.2)] pointer-events-none"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes gradient-x {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-pulse-slow {
          animation: pulse 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Projects;
