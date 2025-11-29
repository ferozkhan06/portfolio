import { 
  FaGithub, FaLinkedin, FaInstagram, FaDatabase, FaPython, 
  FaHtml5, FaReact, FaJsSquare, FaLaptopCode, 
  FaTools, FaBrain, FaRobot, FaGoogle, FaBox, FaCodeBranch, FaBug, FaSearch, FaUser
} from "react-icons/fa";

import { 
  SiOracle, SiMysql, SiFigma
} from "react-icons/si"; 

export const details = {
  name: "FEROZ KHAN K",
  role: "Software Engineer | Oracle PeopleSoft Consultant",
  email: "ferozkhanguj@gmail.com", 
  linkedin: "https://www.linkedin.com/in/feroz-khan-k-062983228/",
  github: "https://github.com/ferozkhan06",
  instagram: "https://www.instagram.com/khxn.fero/?hl=en",
  resumeLink: "/my-portfolio/FEROZKHAN_CV.pdf",
  profile: "Software Engineer with 1+ years of experience in PeopleSoft Campus Solutions. Skilled in PeopleCode, Integration tools, and Full Stack Development. Passionate about delivering scalable, user-friendly solutions."
};

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const projects = [
  {
    title: "Student Admission Automation",
    subtitle: "PeopleSoft Campus Solutions",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
    desc: "Configured Component Interface (CI) to integrate external online admission forms with PeopleSoft using App Engine and PeopleCode.",
    tags: ["PeopleCode", "App Engine", "SQL"],
  },
  {
    title: "Accident Detection System",
    subtitle: "IoT & Embedded Systems",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    desc: "Real-time vehicle accident detection utilizing vibration sensors, GPS for tracking, and GSM for automated emergency SMS alerts.",
    tags: ["IoT", "Arduino", "GPS/GSM"],
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    desc: "A fully responsive e-commerce site with product listings, cart management, and user authentication.",
    tags: ["React", "HTML5", "CSS3"],
  },
];

export const skillCategories = [
  {
    title: "PeopleSoft Tools",
    icon: <SiOracle className="text-red-600" />, 
    skills: [
      { name: "PeopleCode", icon: <FaCodeBranch className="text-gray-400" /> },
      { name: "App Engine", icon: <FaDatabase className="text-blue-500" /> },
      { name: "App Designer", icon: <FaLaptopCode className="text-purple-500" /> },
      { name: "Comp. Interface", icon: <FaCodeBranch className="text-yellow-500" /> },
      { name: "SQR", icon: <FaDatabase className="text-green-500" /> }
    ]
  },
  {
    title: "Programming & DB",
    icon: <FaPython className="text-yellow-400" />,
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },
      { name: "Oracle SQL", icon: <SiOracle className="text-red-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> }
    ]
  },
  {
    title: "Web & UI Tech",
    icon: <FaHtml5 className="text-orange-500" />,
    skills: [
      { name: "Figma (UI)", icon: <SiFigma className="text-pink-500" /> },
      { name: "HTML5/CSS3", icon: <FaHtml5 className="text-orange-500" /> }
    ]
  },
  {
    title: "Software Testing",
    icon: <FaBug className="text-green-500" />,
    skills: [
      { name: "Manual Testing", icon: <FaBug className="text-red-400" /> },
      { name: "Functional", icon: <FaSearch className="text-blue-400" /> },
      { name: "Regression", icon: <FaTools className="text-orange-400" /> },
      { name: "UAT", icon: <FaUser className="text-purple-400" /> }
    ]
  },
  {
    title: "AI Tools",
    icon: <FaRobot className="text-pink-500" />,
    skills: [
      { name: "ChatGPT", icon: <FaRobot className="text-green-500" /> },
      { name: "DeepSeek", icon: <FaBrain className="text-blue-400" /> },
      { name: "Google AI Studio", icon: <FaGoogle className="text-yellow-400" /> },
      { name: "Copilot", icon: <FaGithub className="text-gray-300" /> },
      { name: "BlackBox AI", icon: <FaBox className="text-gray-400" /> }
    ]
  }
];

export const education = [
  {
    degree: "Masters of Business Administration in HR",
    college: "University of Madras",
    year: "2025 - 2027",
    grade: "Pursuing"
  },
  {
    degree: "B.Tech in Information Technology",
    college: "Aalim Muhammed Salegh College of Engineering",
    university: "Affiliated to Anna University, Chennai",
    year: "2020 - 2024",
    grade: "CGPA: 7.99"
  }
];

export const experience = [
  {
    title: "PeopleSoft ERP Consultant",
    company: "MCAMDOIS TECH SOLUTIONS, Chennai",
    date: "Aug 2024 – Sept 2025",
    points: [
      "Supported and customized PeopleSoft Campus Solutions modules.",
      "Developed solutions using PeopleCode, Application Engine, and CI.",
      "Designed SQR reports and PS Queries for academic operations.",
      "Performed functional, regression, and UAT testing."
    ]
  }
];

// THIS WAS MISSING AND CAUSING THE CRASH
export const softSkills = [
  "Strong Communication", "Collaborative Team Player", "Analytical Thinker", "Problem Solver"
];