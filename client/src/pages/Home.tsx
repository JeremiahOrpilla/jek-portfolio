import { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Github, Linkedin, Facebook, Instagram, Mail, 
  BarChart3, User, Zap, Briefcase, Lightbulb, PartyPopper, 
  Send, Database, Code2, LineChart, ChevronRight, ExternalLink,
  FolderOpen, Sheet, GraduationCap, Award, MapPin, Calendar
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Zap className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'insights', label: 'Insights', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'fun', label: 'Fun', icon: <PartyPopper className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Send className="w-4 h-4" /> },
  ];

  const skills = [
    { name: 'Python', level: 85, icon: <Code2 className="text-blue-500" />, category: 'Programming' },
    { name: 'Data Analysis', level: 93, icon: <LineChart className="text-teal-500" />, category: 'Analytics' },
    { name: 'SQL', level: 92, icon: <Database className="text-indigo-500" />, category: 'Databases' },
    { name: 'Data Visualization', level: 90, icon: <BarChart3 className="text-pink-500" />, category: 'Analytics' },
    { name: 'Full-Stack Dev', level: 60, icon: <Zap className="text-yellow-500" />, category: 'Development' },
    { name: 'Spreadsheets', level: 95, icon: <Sheet className="text-green-600" />, category: 'Productivity' },
  ];

  const experience = [
    { 
      title: 'Project Technical Assistant', 
      company: 'Department of Science and Technology II', 
      year: '2024 - Present', 
      description: 'Building data systems and dashboards for the DOST Small Enterprise Technology Upgrading Program (SETUP).',
      icon: <BarChart3 className="w-6 h-6" /> 
    },
    { 
      title: 'Technical Support', 
      company: 'Foundever Asia Inc.', 
      year: '2024', 
      description: 'Provided advanced technical troubleshooting for client devices, accounts, and network infrastructure.',
      icon: <Zap className="w-6 h-6" /> 
    },
    { 
      title: 'Database Management Officer', 
      company: 'Department of Environment and Natural Resources II', 
      year: '2023 - 2024', 
      description: 'Handled data processing and records management for the National Greening Program (NGP), including database updates and data validation.',
      icon: <Database className="w-6 h-6" /> 
    },
  ];

  const projects = [
    {
      title: 'SETUP Guru',
      subtitle: 'Knowledge Management App',
      description: 'A searchable knowledge base built for SETUP program staff and coordinators, designed to replace the need to manually browse a 102-page government guideline PDF. Cards are sourced directly from the SETUP ver 3.0 Guidelines with exact citations (section and page number), and the search engine returns the most relevant card first, followed by related references.',
      features: [
        'Live search with instant suggestions',
        'Exact guideline citations (section & page)',
        'Cross-referenced knowledge cards',
        'Personal bookmarking system',
        '55 structured knowledge cards',
      ],
      stack: ['React', 'TypeScript', 'TailwindCSS', 'tRPC', 'MySQL'],
      image: '/setup-guru.png',
      category: 'Knowledge Management',
      color: 'from-blue-500/20 to-indigo-500/20',
      accent: 'text-blue-500',
      border: 'border-blue-500/20',
    },
    {
      title: 'SETUP Monitoring Dashboard',
      subtitle: 'Project Tracking & Impact Assessment Platform',
      description: 'Real-time monitoring platform for DOST SETUP program tracking 1000+ funded MSME projects across Region 2. Consolidates project lifecycle data, beneficiary profiles, equipment procurement compliance, and multi-year impact metrics.',
      features: [
        'Executive dashboards with analytics by municipality',
        'Timeline tracking for overdue equipment procurement',
        'Multi-year impact assessment (employment & sales growth)',
        'Beneficiary profile management',
        'Proposal management with approval analytics',
      ],
      stack: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'Recharts'],
      image: '/setup-monitoring.png',
      category: 'Data Analytics Platform',
      color: 'from-teal-500/20 to-emerald-500/20',
      accent: 'text-teal-500',
      border: 'border-teal-500/20',
    },
    {
      title: 'SETUP Collections Monitoring Dashboard',
      subtitle: 'Refund Tracking & Financial Performance System',
      description: 'A Google Sheets–based collections monitoring system developed for PSTO Financial Analysts to track refund payments, overdue accounts, penalty payments, and province-level collection performance in real time. Consolidates multiple yearly collection sheets into a centralized dashboard with automated summaries, dynamic filters, and status detection logic.',
      features: [
        'Dynamic Month & Year filtering',
        'Automated Grand Total & Ongoing Collection summaries',
        'Province-level breakdown (Regular vs Past Due)',
        'Fully Paid vs With Penalties logic',
        'Auto-calculated refund end dates (with deferment adjustments)',
        'Real-time Past Due detection',
        'Penalty payment monitoring section',
      ],
      stack: ['Google Sheets', 'XLOOKUP', 'FILTER', 'ARRAYFORMULA', 'LAMBDA', 'IMPORTRANGE', 'EDATE', 'Advanced Nested IF Logic'],
      image: '/setup-collections.png',
      category: 'Data Analytics Platform',
      color: 'from-orange-500/20 to-amber-500/20',
      accent: 'text-orange-500',
      border: 'border-orange-500/20',
    },
    {
      title: 'SETUP Annual Collections Performance Report',
      subtitle: 'Multi-Year Financial Summary & PSTO Comparison Dashboard',
      description: 'A structured Google Sheets reporting system that consolidates multi-year collection data into automated semester summaries, monthly performance tracking, and PSTO-level comparisons. Transforms raw transactional data (2018–present) into visual analytics dashboards used for performance evaluation and financial monitoring.',
      features: [
        'Automated First & Second Semester summaries',
        'Monthly Collection Rate computation (Amount Due vs Payments)',
        'Per-PSTO performance comparison dashboard',
        'Multi-year trend consolidation (2018–2024)',
        'Dynamic charts with real-time recalculation',
        'Province-level contribution analysis',
        'Grand Total auto-aggregation',
      ],
      stack: ['Google Sheets', 'ARRAYFORMULA', 'SUMIFS', 'FILTER', 'Dynamic Date Logic', 'Pivot-style Aggregation', 'Chart Automation'],
      image: '/setup-annual-report.png',
      category: 'Data Reporting & Performance Analytics',
      color: 'from-purple-500/20 to-violet-500/20',
      accent: 'text-purple-500',
      border: 'border-purple-500/20',
    },
  ];

  const insights = [
    { topic: 'Data Integrity', insight: 'Garbage in, garbage out. The most sophisticated model is useless without high-quality, validated data.', icon: <Database className="w-8 h-8 text-blue-500" /> },
    { topic: 'Clean Code', insight: 'Writing code is for humans first, machines second. Clarity and documentation are the foundations of scalability.', icon: <Code2 className="w-8 h-8 text-teal-500" /> },
    { topic: 'Strategic Analysis', insight: 'The value of data is not in the numbers, but in the decisions they empower. Always ask "So what?".', icon: <LineChart className="w-8 h-8 text-indigo-500" /> },
    { topic: 'Agile Learning', insight: 'In the intersection of data and dev, the only constant is change. Adaptability is the most important skill.', icon: <Zap className="w-8 h-8 text-yellow-500" /> },
  ];

  const funFacts = [
    'Part developer, part analyst, part tech support—basically a cat with 9 lives, except each life is a different job role in the same day.',
    'I have written SQL queries that are more complex than some of my college essays.',
    'Pandas is my most-used library, and we have a love-hate relationship.',
    'I believe a well-designed dashboard is a work of art.',
    'I consider coffee to be a vital dependency for my build process.',
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/JeremiahOrpilla', icon: <Github className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'www.linkedin.com/in/jeremiah-orpilla-b612322b7', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Facebook', url: 'https://facebook.com/jeremiahorpilla00', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', url: 'https://instagram.com/jekcatsu', icon: <Instagram className="w-5 h-5" /> },
    { name: 'Email', url: 'mailto:jeremiahorpilla00@gmail.com', icon: <Mail className="w-5 h-5" /> },
  ];

  const [randomFact, setRandomFact] = useState(funFacts[0]);
  const [showCatFact, setShowCatFact] = useState(false);
  const [isCatDancing, setIsCatDancing] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [walkProgress, setWalkProgress] = useState(0);
  const [storyIndex, setStoryIndex] = useState(-1);

  const storySteps = [
    "Meow! I'm Jek's assistant. Let me tell you a story...",
    "Jek graduated from CSU in 2023 with a Meritorious Award in Programming! 🎓",
    "He's now at DOST building powerful data systems for MSMEs... 📊",
    "A wizard with Google Sheets, SQL, and Full-Stack Dev! ✨",
    "Check out his projects below! See you around! 🐾"
  ];

  const startStory = () => {
    if (isWalking) return;
    setIsWalking(true);
    setStoryIndex(0);
    setShowCatFact(true);
    
    // Sequence the walk and story
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      // Adjusted walk progress to stay within safe bounds (10% to 70% of screen width)
      setWalkProgress(prev => prev + 15);
      setStoryIndex(step);
      
      if (step >= storySteps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsWalking(false);
          setShowCatFact(false);
          setWalkProgress(0);
          setStoryIndex(-1);
        }, 3000);
      }
    }, 4000);
  };

  const triggerCatFact = () => {
    if (isWalking) return;
    setRandomFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
    setShowCatFact(true);
    setTimeout(() => setShowCatFact(false), 4000);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-bold tracking-tight text-primary flex items-center gap-2">
            <Code2 className="w-6 h-6" />
            <span>jek.sys</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeSection === item.id 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
          <button className="md:hidden p-2 text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border p-4 space-y-2">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className="flex items-center gap-3 w-full px-4 py-3 text-left rounded-md hover:bg-secondary transition-colors"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] blur-[120px]" />
          </div>
          <div className="container relative z-10 text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3 h-3" />
              Let's Make Sense of the Numbers
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Jeremiah</span>. <br />
              I build data-driven solutions.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Data Analyst & Programmer specializing in turning complex datasets into 
              intuitive, high-performance applications and actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-md hover:opacity-90 transition-all flex items-center gap-2"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4">
                {socialLinks.slice(0, 2).map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary transition-colors"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-secondary/50">
          <div className="container">
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      I bridge the gap between complex data analysis and practical software engineering. 
                      With a focus on clarity and efficiency, I develop tools that empower organizations 
                      to make data-driven decisions.
                    </p>
                    <p>
                      Currently, I serve as a Project Technical Assistant at DOST, where I architect 
                      dashboards and data pipelines that track and optimize technological upgrades 
                      for small enterprises. My work focuses on transforming raw administrative data 
                      into actionable visual intelligence.
                    </p>
                    <p>
                      I gravitate toward building tools that solve real operational problems. 
                      Whether it's a searchable knowledge base for government guidelines or a 
                      real-time financial monitoring system, I believe technology should simplify 
                      complexity and reduce manual overhead.
                    </p>
                    <p>
                      With a strong foundation in programming (Java, C#) and a passion for modern 
                      web stacks, I enjoy the full pipeline of development—from architecting 
                      scalable databases to crafting intuitive user interfaces that tell a story with data.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">What I Do</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: <LineChart className="w-5 h-5 text-teal-500" />, title: "Data Analysis & Visualization", desc: "Turning raw datasets into interactive visual stories." },
                      { icon: <Sheet className="w-5 h-5 text-green-600" />, title: "Spreadsheet Systems", desc: "Building advanced automated tools using Google Sheets." },
                      { icon: <Code2 className="w-5 h-5 text-blue-500" />, title: "Full-Stack Development", desc: "Creating high-performance web applications." },
                      { icon: <Database className="w-5 h-5 text-indigo-500" />, title: "Database Design & SQL", desc: "Architecting efficient and scalable data structures." },
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-xl border border-border bg-background/50 flex gap-4 items-start">
                        <div className="p-2 rounded-lg bg-secondary shrink-0">{item.icon}</div>
                        <div>
                          <p className="font-bold text-sm">{item.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <div className="text-primary font-bold text-2xl">2+</div>
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Years Experience</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <div className="text-primary font-bold text-2xl">5+</div>
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Organizations Supported</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent opacity-10 absolute -inset-4 rotate-3" />
                <div className="relative glass-card rounded-2xl p-8 flex flex-col items-center text-center space-y-5">

                  {/* Avatar */}
                  <div className="w-28 h-28 rounded-full border-4 border-primary/20 overflow-hidden bg-background shadow-lg">
                    <img
                      src="/avatar.png"
                      alt="Jeremiah Orpilla"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name & Location */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Jeremiah Orpilla</h3>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>Cagayan Valley, Philippines</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md bg-secondary text-muted-foreground hover:text-primary transition-colors"
                        title={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="w-full border-t border-border" />

                  {/* Academic Background */}
                  <div className="w-full text-left space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Education
                    </div>

                    <div className="space-y-1">
                      <p className="font-bold text-sm leading-snug">
                        BS Information Technology
                      </p>
                      <p className="text-xs text-primary font-semibold">
                        Major in Programming
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Cagayan State University
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 shrink-0" />
                        <span>Class of 2023</span>
                      </div>
                    </div>

                    {/* Award Badge */}
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div className="text-left">
                        <p className="text-xs font-bold text-amber-600 dark:text-amber-400">Meritorious Award</p>
                        <p className="text-xs text-muted-foreground leading-snug">
                          Proficient in Java, C#, and Database Programming
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Technical Toolkit</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive stack designed for performance, scalability, and data integrity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors space-y-4 group">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{skill.category}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-secondary/50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Professional Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My career path has been defined by a commitment to data accuracy and impactful digital transformation.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              {experience.map((exp, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                      {exp.icon}
                    </div>
                    {i !== experience.length - 1 && <div className="w-px h-full bg-border mt-2" />}
                  </div>
                  <div className="pb-8 space-y-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{exp.year}</span>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real-world applications built for the DOST SETUP program — solving operational challenges with data-driven software.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div key={i} className={`group rounded-3xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl`}>
                  <div className={`aspect-video w-full overflow-hidden bg-gradient-to-br ${project.color} p-4`}>
                    <div className="w-full h-full rounded-xl overflow-hidden border border-border shadow-2xl">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="space-y-2">
                      <span className={`text-xs font-bold uppercase tracking-widest ${project.accent}`}>{project.category}</span>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{project.subtitle}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Key Features</p>
                      <ul className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <ChevronRight className={`w-3 h-3 ${project.accent}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-secondary text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section id="insights" className="py-24 bg-secondary/50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Data & Dev Insights</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My core philosophy when it comes to building systems and analyzing data.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insights.map((insight, i) => (
                <div key={i} className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all group">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform">
                    {insight.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{insight.topic}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{insight.insight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Section */}
        <section id="fun" className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10" />
          <div className="container max-w-4xl text-center space-y-8">
            <h2 className="text-3xl font-bold">Beyond the Code</h2>
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-xl space-y-6">
              <div className="text-4xl">💡</div>
              <p className="text-xl md:text-2xl font-medium italic text-primary leading-relaxed">
                "{randomFact}"
              </p>
              <div className="pt-4">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Random Developer Insight</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container max-w-4xl">
            <div className="glass-card rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Let's Connect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have a project in mind or just want to chat about data and development? 
                  Feel free to reach out through any of these platforms.
                </p>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {link.icon}
                      </div>
                      <div>
                        <div className="font-bold text-sm">{link.name}</div>
                        <div className="text-xs text-muted-foreground">Click to visit profile</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4">
                  <h3 className="font-bold flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Direct Email
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours for professional inquiries.
                  </p>
                  <a 
                    href="mailto:jeremiahorpilla00@gmail.com" 
                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                  >
                    jeremiahorpilla00@gmail.com
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="text-center text-xs text-muted-foreground">
                  © {new Date().getFullYear()} Jeremiah Orpilla. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Jek Cat Mascot */}
      <div 
        className="fixed bottom-12 z-[100] transition-all duration-1000 ease-linear"
        style={{ 
          // Moved significantly further left to be more "center-right" (20% from the right edge)
          right: isWalking ? `calc(20% + ${walkProgress}%)` : '20%',
          transform: isWalking ? 'translateX(50%)' : 'none'
        }}
        onMouseEnter={() => !isWalking && setIsCatDancing(true)}
        onMouseLeave={() => !isWalking && setIsCatDancing(false)}
      >
        {/* Speech Bubble */}
        <div className={`absolute bottom-full mb-4 w-64 p-4 bg-card border border-border rounded-2xl shadow-2xl transition-all duration-500 ${showCatFact ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} left-1/2 -translate-x-1/2`}>
          <p className="text-sm leading-relaxed font-medium text-center">
            {isWalking ? storySteps[storyIndex] : `"${randomFact}"`}
          </p>
          {/* Arrow pointing to the cat - centered under the bubble */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-r border-b border-border rotate-45 -mt-2" />
        </div>

        {/* The Cat */}
        <div className="relative group">
          <button 
            onClick={isWalking ? undefined : startStory}
            onContextMenu={(e) => { e.preventDefault(); triggerCatFact(); }}
            className={`relative w-20 h-20 flex items-center justify-center transition-all duration-500 ${isCatDancing || isWalking ? 'scale-110' : 'scale-100 hover:scale-110'}`}
            title={isWalking ? "I'm telling a story!" : "Click to hear my story, Right-click for a fact!"}
          >
            {/* The Cat - Note: isWalking uses normal scale, idle/dancing uses -scale-x-100 to face left (default) */}
            <div className={`text-5xl transition-all duration-300 ${isCatDancing || isWalking ? 'animate-bounce' : ''} ${isWalking ? '' : '-scale-x-100'}`}>
              {isWalking ? '🐈' : (isCatDancing ? '😸' : '🐱')}
            </div>
            
            {/* Interactive Glow */}
            <div className={`absolute inset-0 bg-primary/20 blur-xl rounded-full transition-opacity duration-500 ${isWalking ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

            {/* Sparkles */}
            {(isCatDancing || isWalking) && (
              <>
                <div className="absolute -top-4 -left-4 animate-ping text-sm">✨</div>
                <div className="absolute -top-2 -right-2 animate-pulse text-sm delay-75">✨</div>
                <div className="absolute -bottom-2 -left-2 animate-pulse text-sm delay-150">✨</div>
              </>
            )}
          </button>
          
          {/* Instructions Hint */}
          {!isWalking && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-background/80 backdrop-blur-sm border border-border rounded text-[10px] font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Click to Start Story
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-bold text-foreground">
            <Code2 className="w-4 h-4" />
            jek.sys
          </div>
          <div>Built with React, Vite, and Tailwind CSS</div>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} className="hover:text-primary transition-colors">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
