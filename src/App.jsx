import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { details, navLinks, skillCategories, projects, experience, education, softSkills } from './constants';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaFileDownload, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

// --- 3D TILT CARD COMPONENT ---
const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.1}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileHover={{ cursor: "grab" }}
      className={`neon-card relative overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
      {children}
    </motion.div>
  );
};

function App() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        from_phone: form.phone,
        to_name: details.name,
        message: form.message,
      },
      import.meta.env.VITE_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      alert('Message Sent Successfully!');
      setForm({ name: '', email: '', phone: '', message: '' });
    }, (error) => {
      setLoading(false);
      alert('Failed to send. Please check connection.');
    });
  };

  return (
    <div className="min-h-screen relative bg-[#050816] text-white selection:bg-[#915eff] selection:text-white">
      
      {/* CYBER GRID BACKGROUND */}
      <div className="fixed inset-0 cyber-grid z-0 pointer-events-none" />
      
      {/* GLOW ORBS */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 px-6 py-4 top-0">
        <div className="max-w-7xl mx-auto neon-card px-8 py-4 flex justify-between items-center rounded-full bg-[#050816]/80 backdrop-blur-md">
          <a href="#" className="text-xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            FerozKhan.
          </a>
          <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-300">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="hover:text-cyan-400 transition-colors uppercase text-xs cursor-pointer">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- UPDATED HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-20 gap-12 z-10">
        
        {/* LEFT CONTENT */}
        <div className="max-w-2xl space-y-6 z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00d4ff] drop-shadow-md">
              Feroz Khan
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-semibold">
            Software Engineer & <br/> Oracle PeopleSoft Consultant
          </p>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            I specialize in PeopleSoft Campus Solutions, FSCM, and building
            modern full-stack applications using React and Automation tools.
            Passionate about delivering scalable, optimized solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-[#915eff] to-blue-600 hover:scale-105 transition-transform rounded-xl text-white font-bold shadow-[0_0_20px_rgba(145,94,255,0.4)]"
            >
              View My Work
            </a>
            <a
            href={details.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border border-purple-400/50 text-purple-300 hover:bg-purple-500/10 rounded-xl font-bold flex items-center justify-center gap-2"
          >
          <FaFileDownload /> Download Resume
          </a>
          </div>
          
          {/* Social Links Hero */}
          <div className="flex gap-6 text-2xl pt-4 justify-center md:justify-start text-gray-400">
             <a href={details.linkedin} target="_blank" className="hover:text-[#00d4ff] transition-colors"><FaLinkedin /></a>
             <a href={details.github} target="_blank" className="hover:text-white transition-colors"><FaGithub /></a>
             <a href={details.instagram} target="_blank" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
          </div>
        </div>

        {/* RIGHT 3D ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center perspective-1000"
        >
          <TiltCard className="rounded-3xl bg-transparent border-none shadow-none">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {/* Glowing Background for Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
              
              {/* 3D Floating Image */}
              <motion.img
                src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974925-2477356.png"
                alt="3D Tech Illustration"
                className="relative w-full h-full object-contain drop-shadow-2xl z-10"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </TiltCard>
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
          <div className="neon-card p-8 md:p-12 text-lg leading-relaxed text-gray-300 border-l-4 border-[#915eff]">
            {details.profile}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="border-b-4 border-[#00d4ff] pb-2">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <TiltCard key={index} className="rounded-2xl bg-[#151030]">
                <div className="h-48 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[#00d4ff] font-bold border border-[#00d4ff] px-4 py-2 rounded-full uppercase text-xs tracking-wider">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[#915eff] text-xs font-bold uppercase mb-2 tracking-wider">{project.subtitle}</h4>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#00d4ff] transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/10">#{tag}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 px-6 z-10 relative bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#915eff]">Technical Arsenal</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, index) => (
              <TiltCard key={index} className="p-6 rounded-2xl bg-[#151030]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/10">
                    <span className="text-3xl">{cat.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2 bg-black/40 rounded-lg border border-white/5 hover:border-[#00d4ff]/50 transition-colors">
                      {skill.icon} <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
          
          {/* Soft Skills */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
             {softSkills.map((skill, i) => (
               <span key={i} className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 text-sm font-semibold hover:border-[#915eff] hover:text-[#915eff] transition-colors cursor-default">
                 {skill}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE & EDUCATION --- */}
      <section id="education" className="py-20 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#00d4ff]"><FaLaptopCode /> Experience</h3>
            {experience.map((exp, i) => (
              <div key={i} className="neon-card p-8 rounded-2xl border-l-4 border-[#00d4ff] mb-6 relative hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-shadow">
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <div className="flex justify-between items-center mt-1 mb-4">
                  <span className="text-[#915eff] font-semibold">{exp.company}</span>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded">{exp.date}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
                  {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#915eff]"><FaGraduationCap /> Education</h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="neon-card p-6 rounded-2xl border-l-4 border-[#915eff] hover:shadow-[0_0_20px_rgba(145,94,255,0.2)] transition-shadow">
                   <h4 className="text-lg font-bold">{edu.degree}</h4>
                   <p className="text-gray-400 mt-1">{edu.college}</p>
                   {edu.university && <p className="text-gray-500 text-xs">{edu.university}</p>}
                   <p className="text-xs text-[#00d4ff] mt-2 font-mono">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section id="contact" className="py-20 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black mb-6">Let's Work <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-pink-600">Together.</span></h2>
            <p className="text-gray-400 mb-8">
              I'm open to freelance opportunities and full-time roles. Connect with me!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 neon-card p-4 rounded-xl">
                 <div className="p-3 bg-[#00d4ff]/20 rounded-full text-[#00d4ff]"><FaEnvelope/></div>
                 <div><p className="text-xs text-gray-500">Email</p><p className="font-bold">{details.email}</p></div>
              </div>
              <div className="flex items-center gap-4 neon-card p-4 rounded-xl">
                 <div className="p-3 bg-[#915eff]/20 rounded-full text-[#915eff]"><FaLinkedin/></div>
                 <a href={details.linkedin} target="_blank" rel="noreferrer" className="font-bold hover:text-[#915eff]">LinkedIn Profile</a>
              </div>
            </div>
          </div>

          <TiltCard className="p-8 rounded-3xl bg-black/50 border border-white/10">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#00d4ff] transition-colors" required />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#00d4ff] transition-colors" required />
              <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#00d4ff] transition-colors" />
              <textarea rows="4" name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#00d4ff] transition-colors" required />
              
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#00d4ff] to-blue-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-[#00d4ff]/50 transition-all flex items-center justify-center gap-2">
                {loading ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
              </button>
            </form>
          </TiltCard>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center border-t border-white/10 bg-black/40">
        <div className="flex justify-center gap-8 mb-6 text-2xl">
           <a href={details.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#00d4ff] transition-transform hover:scale-125"><FaLinkedin /></a>
           <a href={details.github} target="_blank" rel="noreferrer" className="hover:text-white transition-transform hover:scale-125"><FaGithub /></a>
           <a href={details.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-transform hover:scale-125"><FaInstagram /></a>
        </div>
        <p className="text-gray-500 text-sm">© 2024 {details.name}. Crafted with React & Tailwind.</p>
      </footer>

    </div>
  );
}

export default App;