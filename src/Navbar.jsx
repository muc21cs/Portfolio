import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
  ];

  // Update active section while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section, div[id]");
    const handleScroll = () => {
      let current = activeSection;
      let minDistance = Infinity;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - 80);
        if (distance < minDistance) {
          minDistance = distance;
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Smooth scroll to section
  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // close mobile menu
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(href.substring(1));
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md shadow-lg border-b border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-purple-400 tracking-wider">
            Mugilan C
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center relative">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-2 py-1 font-medium transition-all duration-300
                  ${activeSection === link.href.substring(1) ? "text-purple-500" : "text-gray-200 hover:text-purple-400"}
                `}
              >
                {link.name}
                {/* Active underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500
                    ${activeSection === link.href.substring(1) ? "w-full" : "w-0"}
                  `}
                ></span>
              </a>
            ))}

            {/* Social Icons */}
            <a
              href="https://github.com/muc21cs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-purple-400 transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mugilan-c-773898295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-purple-400 transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-200 hover:text-purple-400">
              {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden bg-gray-900/90 backdrop-blur-lg border-t border-purple-500/30 px-4 pt-4 pb-6 space-y-3 shadow-xl"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`block text-gray-200 hover:text-purple-400 font-medium transition-colors duration-300 relative
                  ${activeSection === link.href.substring(1) ? "text-purple-500" : ""}
                `}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500
                    ${activeSection === link.href.substring(1) ? "w-full" : "w-0"}
                  `}
                ></span>
              </a>
            ))}
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/muc21cs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-purple-400 transition-colors duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/mugilan-c-773898295/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-purple-400 transition-colors duration-300"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
