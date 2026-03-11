import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Cpu,
  Globe,
  Menu,
  X,
  FileText,
} from "lucide-react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { resumeData } from "./ResumeData";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Splash = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="text-6xl font-bold tracking-tighter text-white">
          {resumeData.basics.initials}
        </div>
        <motion.div
          className="absolute -inset-4 border border-blue-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-white">
          {resumeData.basics.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
         <a
            href={
              /Mobi|Android|iPhone/i.test(navigator.userAgent)
                ? `tel:${resumeData.basics.phone}`
                : "#contact"
            }
            className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white/60 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
            Available for New Opportunities
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            {resumeData.basics.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-medium mb-8 max-w-2xl mx-auto">
            {resumeData.basics.title}
          </p>
          <p className="text-lg text-white/40 max-w-3xl mx-auto mb-12 leading-relaxed">
            {resumeData.basics.summary}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#experience"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              View Experience
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="/somdutt-vernekar-resume.pdf"
              download
              className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold border border-white/10 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
              Experience
            </h2>
            <p className="text-white/40 max-w-md">
              A journey through high-performance engineering and AI integration.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {resumeData.experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="grid md:grid-cols-[200px_1fr] gap-8">
                <div className="md:text-right">
                  <h3 className="text-2xl font-bold text-white">
                    {exp.company}
                  </h3>
                </div>
                <div className="space-y-6">
                  {exp.roles.map((role, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.07] transition-all group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {role.title}
                        </h4>
                        <span className="text-sm font-mono text-white/40">
                          {role.dates}
                        </span>
                      </div>
                      {role.bullets && (
                        <ul className="space-y-2 mb-4">
                          {role.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="text-sm text-white/60 flex gap-2"
                            >
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-16">
          Key Projects
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {resumeData.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                  <Code2 size={32} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-white/60 leading-relaxed max-w-4xl mb-6">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-16 text-center">
          Impact Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.achievements.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-black border border-white/10 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {ach.type === "metric" ? (
                  <Award size={80} />
                ) : ach.type === "skill" ? (
                  <Cpu size={80} />
                ) : (
                  <Briefcase size={80} />
                )}
              </div>
              <div className="text-5xl font-bold text-blue-500 mb-4">
                {ach.value}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{ach.title}</h3>
              <p className="text-white/40">{ach.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const allSkills = Object.values(resumeData.skills).flat();

  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-16">
          Skills Matrix
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicate skills to create infinite effect */}
            {[...allSkills, ...allSkills].map((skill, index) => (
              <span
                key={index}
                className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white/80 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-12 text-center">
            Education
          </h2>
          <div className="space-y-8">
            {resumeData.education.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl relative"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-blue-400 font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm font-mono text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {edu.dates}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">
            {resumeData.basics.name}
          </h3>
          <p className="text-white/40 text-sm">
            Building the future of AI-powered systems.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${resumeData.basics.email}`}
            className="text-white/40 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
          {resumeData.basics.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              {link.label === "LinkedIn" ? (
                <Linkedin size={24} />
              ) : (
                <Github size={24} />
              )}
            </a>
          ))}
        </div>
        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} Somdutt Vernekar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-black text-white selection:bg-blue-500 selection:text-white font-sans">
      <AnimatedBackground />

      <AnimatePresence>
        {loading && <Splash onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
            style={{ scaleX }}
          />

          <div className="print:hidden">
            <Navbar />

            <main>
              <Hero />
              <Achievements />
              <Experience />
              <Projects />
              <Skills />
              <Education />
            </main>

            <Footer />
          </div>
        </motion.div>
      )}

      {/* Print-only Resume View */}
      <div className="hidden print:block bg-white text-black p-10 font-serif">
        <h1 className="text-4xl font-bold mb-2">{resumeData.basics.name}</h1>
        <p className="text-xl mb-4">{resumeData.basics.title}</p>
        <div className="flex gap-4 text-sm mb-8">
          <a href={`mailto:${resumeData.basics.email}`}>
            {resumeData.basics.email}
          </a>

          <a href={`tel:${resumeData.basics.phone}`}>
            {resumeData.basics.phone}
          </a>

          <span>{resumeData.basics.location}</span>
        </div>
        <h2 className="text-2xl font-bold border-b-2 border-black mb-4">
          Summary
        </h2>
        <p className="mb-8">{resumeData.basics.summary}</p>

        <h2 className="text-2xl font-bold border-b-2 border-black mb-4">
          Experience
        </h2>
        {resumeData.experience.map((exp) => (
          <div key={exp.company} className="mb-6">
            <h3 className="text-xl font-bold">{exp.company}</h3>
            {exp.roles.map((role) => (
              <div key={role.title} className="mb-4">
                <div className="flex justify-between font-bold">
                  <span>{role.title}</span>
                  <span>{role.dates}</span>
                </div>
                {role.bullets && (
                  <ul className="list-disc ml-5 mt-2">
                    {role.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}

        <h2 className="text-2xl font-bold border-b-2 border-black mb-4">
          Projects
        </h2>
        {resumeData.projects.map((project) => (
          <div key={project.title} className="mb-6">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm mt-2">{project.description}</p>
          </div>
        ))}

        <h2 className="text-2xl font-bold border-b-2 border-black mb-4">
          Education
        </h2>
        {resumeData.education.map((edu) => (
          <div key={edu.institution} className="mb-4">
            <div className="flex justify-between font-bold">
              <span>{edu.institution}</span>
              <span>{edu.dates}</span>
            </div>
            <p>{edu.degree}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
