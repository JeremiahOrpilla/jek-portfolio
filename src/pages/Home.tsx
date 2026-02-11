import { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Github, Linkedin, Facebook, Instagram, Mail, 
  BarChart3, User, Zap, Briefcase, Lightbulb, PartyPopper, 
  Send, Database, Code2, LineChart, ChevronRight, ExternalLink
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
    { id: 'insights', label: 'Insights', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'fun', label: 'Fun', icon: <PartyPopper className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Send className="w-4 h-4" /> },
  ];

  const skills = [
    { name: 'Python', level: 85, icon: <Code2 className="text-blue-500" />, category: 'Programming' },
    { name: 'Data Analysis', level: 93, icon: <LineChart className="text-teal-500" />, category: 'Analytics' },
    { name: 'SQL', level: 92, icon: <Database className="text-indigo-500" />, category: 'Databases' },
    { name: 'Data Visualization', level: 90, icon: <BarChart3 className="text-pink-500" />, category: 'Analytics' },
    { name: 'Full-Stack Dev', level: 80, icon: <Zap className="text-yellow-500" />, category: 'Development' },
    { name: 'Project Management', level: 88, icon: <Briefcase className="text-slate-500" />, category: 'Management' },
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
      description: 'Led the development and automation of the National Greening Program (NGP) records system.',
      icon: <Database className="w-6 h-6" /> 
    },
  ];

  const insights = [
    { topic: 'Data Integrity', insight: 'Garbage in, garbage out. The most sophisticated model is useless without high-quality, validated data.', icon: <Database className="w-8 h-8 text-blue-500" /> },
    { topic: 'Clean Code', insight: 'Writing code is for humans first, machines second. Clarity and documentation are the foundations of scalability.', icon: <Code2 className="w-8 h-8 text-teal-500" /> },
    { topic: 'Strategic Analysis', insight: 'The value of data is not in the numbers, but in the decisions they empower. Always ask "So what?".', icon: <LineChart className="w-8 h-8 text-indigo-500" /> },
    { topic: 'Agile Learning', insight: 'In the intersection of data and dev, the only constant is change. Adaptability is the most important skill.', icon: <Zap className="w-8 h-8 text-yellow-500" /> },
  ];

  const funFacts = [
    'I once debugged a production issue for 3 hours only to find a missing semicolon.',
    'My favorite weekend activity is exploring new data visualization libraries.',
    'I have written SQL queries that are more complex than some of my college essays.',
    'Pandas is my most-used library, and we have a love-hate relationship.',
    'I believe a well-designed dashboard is a work of art.',
    'I consider coffee to be a vital dependency for my build process.',
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/JeremiahOrpilla', icon: <Github className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/jeremiah-orpilla-b612322b7', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Facebook', url: 'https://facebook.com/jeremiahorpilla00', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', url: 'https://instagram.com/jekcatsu', icon: <Instagram className="w-5 h-5" /> },
    { name: 'Email', url: 'mailto:jeremiahorpilla00@gmail.com', icon: <Mail className="w-5 h-5" /> },
  ];

  const [randomFact, setRandomFact] = useState(funFacts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
            <span>Jek.dev</span>
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
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Jeremiah</span>. <br />
              I build data-driven solutions.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Data Analyst & Full-Stack Developer specializing in turning complex datasets into 
              intuitive, high-performance applications and actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-md hover:opacity-90 transition-all flex items-center gap-2"
              >
                View Portfolio <ChevronRight className="w-4 h-4" />
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
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
                    for small enterprises.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <div className="text-primary font-bold text-2xl">2+</div>
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Years Experience</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <div className="text-primary font-bold text-2xl">50+</div>
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Projects Completed</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent opacity-10 absolute -inset-4 rotate-3" />
                <div className="relative glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Jeremiah Orpilla</h3>
                  <p className="text-sm text-muted-foreground">Based in Cagayan Valley, Philippines</p>
                  <div className="flex gap-2">
                    {socialLinks.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-md bg-secondary text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.icon}
                      </a>
                    ))}
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
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-secondary/30">
          <div className="container space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Work Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {experience.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-border pb-8 last:pb-0">
                  <div className="absolute -left-[13px] top-0 p-1 rounded-full bg-background border-2 border-primary">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="glass-card p-6 rounded-xl space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{item.year}</span>
                    </div>
                    <div className="text-muted-foreground font-medium flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {item.company}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section id="insights" className="py-24">
          <div className="container space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Insights & Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {insights.map((item, idx) => (
                <div key={idx} className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-secondary">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.topic}</h3>
                  <p className="text-muted-foreground leading-relaxed italic">"{item.insight}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Section */}
        <section id="fun" className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <PartyPopper className="w-64 h-64" />
          </div>
          <div className="container relative z-10 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Just for Fun</h2>
            <div className="max-w-2xl mx-auto min-h-[100px] flex items-center justify-center">
              <p className="text-2xl md:text-3xl font-medium italic animate-fade-in" key={randomFact}>
                "{randomFact}"
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground/20" />
              <div className="w-2 h-2 rounded-full bg-primary-foreground/60" />
              <div className="w-2 h-2 rounded-full bg-primary-foreground/20" />
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

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-bold text-foreground">
            <Code2 className="w-4 h-4" />
            Jek.dev
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
