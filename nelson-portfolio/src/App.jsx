import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, Code, Briefcase, Award, GraduationCap, Menu, X, User } from 'lucide-react';
import nelsonPhoto from './assets/nelson.jpeg';  // Add this line
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Smart Farming Management System",
      period: "2025",
      description: "IoT-enabled agricultural monitoring system with real-time sensor data for irrigation control, soil moisture tracking, and GPS-based fence alerts.",
      tech: ["ESP32", "Django", "REST API", "IoT Sensors", "Mobile App"],
      highlight: "Real-time monitoring & control"
    },
    {
      title: "Expense Tracking App",
      period: "Jan – May 2024",
      description: "Led a team of 5 to develop a comprehensive student expense tracking mobile application with secure authentication and collaborative features.",
      tech: ["Objective-C", "GitHub", "Mobile Development"],
      highlight: "Team Lead & Developer"
    },
    {
      title: "AI Game Solver",
      period: "Aug – Nov 2024",
      description: "Intelligent AI agent utilizing search algorithms and heuristics to solve complex board game problems with high accuracy.",
      tech: ["Python", "AI Algorithms", "Heuristics"],
      highlight: "90% success rate"
    },
    {
      title: "Cloud Cluster Deployment",
      period: "2024",
      description: "Built and configured a computing cluster with high availability, load balancing, and private cloud services for VM hosting.",
      tech: ["Cloud Infrastructure", "Virtualization", "Networking", "Automation"],
      highlight: "Distributed computing"
    }
  ];

  const skills = {
    "Programming": ["Java", "JavaScript", "Python", "React.js"],
    "Web Development": ["HTML", "CSS", "Django", "Node.js", "REST APIs"],
    "Database": ["MySQL", "MongoDB", "SQLite", "PostgreSQL"],
    "Tools & Cloud": ["GitHub", "Google Cloud", "AWS"],
    "Soft Skills": ["Teamwork", "Problem-Solving", "Communication", "Time Management"]
  };

  const certifications = [
    "IT Essentials – Cisco Networking Academy (2023)",
    "Linux Essentials – Cisco Networking Academy (2023)",
    "Linux Unhatched – Cisco Networking Academy (2023)",
    "Introduction to Data Science – Cisco Networking Academy (2025)"
  ];

  const achievements = [
    "Multiple badges on Google Cloud and AWS",
    "UNZA Innovation Challenge Participant",
    "Selected for Brilliant Catalyst Entrepreneurship Program"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold" style={{ color: '#EB9314' }}>
              NC
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors font-medium ${activeSection === section ? 'text-[#EB9314]' : 'text-gray-700 hover:text-[#EB9314]'}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize hover:text-[#EB9314] transition-colors py-2 font-medium text-gray-700"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 flex flex-col items-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#EB9314] shadow-xl">
              <img src={nelsonPhoto} alt="Nelson Chingaipe" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black">
              Nelson Chingaipe
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold">
              Computer Systems Engineering Student
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Passionate about leveraging technology to design innovative solutions for real-world challenges. 
              Specializing in IoT, AI, and full-stack development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:chingaipenelson29@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-[#EB9314] hover:bg-[#D68311] text-white rounded-lg transition-colors shadow-md">
              <Mail size={20} /> Get in Touch
            </a>
            <a href="https://github.com/chingaipe29" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors shadow-md">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nelson-chingaipe-95a940324/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors shadow-md">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-[#EB9314] hover:text-[#D68311] transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
            <GraduationCap className="inline mr-3 text-[#EB9314]" size={40} />
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#EB9314] transition-colors shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#EB9314]">Education</h3>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-black">Bachelor of Science in Computer Systems Engineering</p>
                <p className="text-gray-600">University of Zambia</p>
                <p className="text-gray-600">Expected Graduation: June 2026</p>
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-800 mb-2">Relevant Coursework:</p>
                <p className="text-sm text-gray-600">
                  Data Structures & Algorithms, Operating Systems, Database Systems, 
                  Computer Networks, AI, Cloud Computing, Data Mining & Warehousing, Distributed Systems
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#EB9314] transition-colors shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#EB9314]">Achievements</h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Award className="text-[#EB9314] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-black">Certifications</h3>
                <div className="space-y-2">
                  {certifications.map((cert, idx) => (
                    <p key={idx} className="text-sm text-gray-600">• {cert}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
            <Code className="inline mr-3 text-[#EB9314]" size={40} />
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#EB9314] transition-all hover:scale-105 duration-300 shadow-lg"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-black">{project.title}</h3>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{project.period}</span>
                </div>
                
                {project.highlight && (
                  <div className="inline-block bg-[#EB9314]/10 text-[#EB9314] px-3 py-1 rounded-full text-sm mb-3 font-semibold">
                    {project.highlight}
                  </div>
                )}
                
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="text-xs bg-black text-white px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
            <Briefcase className="inline mr-3 text-[#EB9314]" size={40} />
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#EB9314] transition-colors shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-[#EB9314]">{category}</h3>
                <div className="space-y-2">
                  {items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#EB9314] rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">Get In Touch</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or collaborations. 
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:chingaipenelson29@gmail.com"
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#EB9314] transition-all hover:scale-105 shadow-lg"
            >
              <Mail className="mx-auto mb-3 text-[#EB9314]" size={32} />
              <p className="font-semibold mb-2 text-black">Email</p>
              <p className="text-sm text-gray-600 break-all">chingaipenelson29@gmail.com</p>
            </a>

            <a 
              href="tel:0976576633"
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#EB9314] transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="mx-auto mb-3 text-[#EB9314]" size={32} />
              <p className="font-semibold mb-2 text-black">Phone</p>
              <p className="text-sm text-gray-600">0976576633</p>
              <p className="text-sm text-gray-600">0968127936</p>
            </a>

            <a 
              href="https://github.com/chingaipe29"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#EB9314] transition-all hover:scale-105 shadow-lg"
            >
              <Github className="mx-auto mb-3 text-[#EB9314]" size={32} />
              <p className="font-semibold mb-2 text-black">GitHub</p>
              <p className="text-sm text-gray-600">@chingaipe29</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-[#EB9314] to-[#FFA500] rounded-xl p-8 text-white shadow-lg">
            <p className="mb-4 text-lg">
              "Passionate about using technology to design innovative solutions to real-world challenges."
            </p>
            <p className="text-sm opacity-90">© 2025 Nelson Chingaipe. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}