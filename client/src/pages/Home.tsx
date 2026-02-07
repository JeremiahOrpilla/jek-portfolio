import { useState, useEffect, useRef } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const elements = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setFloatingElements(elements);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'opinions', label: 'Opinions', icon: '💭' },
    { id: 'fun', label: 'Fun', icon: '🎉' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  const skills = [
    { name: 'JavaScript', level: 95, icon: '⚙️' },
    { name: 'React', level: 92, icon: '⚛️' },
    { name: 'TypeScript', level: 88, icon: '📘' },
    { name: 'Tailwind CSS', level: 90, icon: '🎨' },
    { name: 'Web Design', level: 85, icon: '🖌️' },
    { name: 'Problem Solving', level: 98, icon: '🧠' },
  ];

  const experience = [
    { title: 'Senior Developer', company: 'Tech Startup', year: '2022 - Present', description: 'Building amazing web experiences', icon: '🚀' },
    { title: 'Full Stack Developer', company: 'Digital Agency', year: '2020 - 2022', description: 'Creating interactive websites', icon: '💻' },
    { title: 'Junior Developer', company: 'Web Studio', year: '2018 - 2020', description: 'Learning and growing', icon: '📚' },
  ];

  const opinions = [
    { topic: 'Web Design', opinion: 'Good design is invisible. It should feel natural and intuitive.', emoji: '🎨' },
    { topic: 'Code Quality', opinion: 'Clean code is like a good joke. If you have to explain it, it is not that good.', emoji: '✨' },
    { topic: 'User Experience', opinion: 'Users do not care about your tech stack. They care about how your product makes them feel.', emoji: '❤️' },
    { topic: 'Remote Work', opinion: 'Remote work is amazing, but coffee shops are not offices.', emoji: '☕' },
  ];

  const funFacts = [
    'Cats are liquid. They can fit into any container.',
    'I have beaten every Mario game in my dreams.',
    'Pizza is a vegetable if you count tomato sauce.',
    'I am not saying I am a wizard, but I can make bugs disappear.',
    'My code does not have bugs, it has undocumented features.',
    'My code compiles on the first try... said no developer ever.',
    'I am not lazy, I am just on energy-saving mode.',
    'I do not always test my code, but when I do, it breaks in production.',
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: '👍' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📸' },
    { name: 'Gmail', url: 'mailto:your.email@gmail.com', icon: '✉️' },
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

  const heroBgUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/IX0F2Pag2k8M9pOT0Z4n8E/sandbox/shbUvX6ifiaew5Q0ZZmOOR-img-1_1770455562000_na1fn_aGVyby1uZW9uLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80';
  const aboutBgUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/IX0F2Pag2k8M9pOT0Z4n8E/sandbox/shbUvX6ifiaew5Q0ZZmOOR-img-2_1770455560000_na1fn_YWJvdXQtc2VjdGlvbi1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80';
  const skillsBgUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/IX0F2Pag2k8M9pOT0Z4n8E/sandbox/shbUvX6ifiaew5Q0ZZmOOR-img-3_1770455565000_na1fn_c2tpbGxzLXNlY3Rpb24tYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80';
  const funBgUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/IX0F2Pag2k8M9pOT0Z4n8E/sandbox/shbUvX6ifiaew5Q0ZZmOOR-img-4_1770455567000_na1fn_ZnVuLXNlY3Rpb24tYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80';
  const catIconUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/IX0F2Pag2k8M9pOT0Z4n8E/sandbox/shbUvX6ifiaew5Q0ZZmOOR_1770455570471_na1fn_ZmxvYXRpbmctY2F0LWljb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80';

  return (
    <div ref={containerRef} className="min-h-screen bg-[#1a1a2e] text-white overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((el) => (
          <div key={el.id} className="absolute w-32 h-32 rounded-full opacity-10 border-2 border-[#00f5ff]" style={{ left: `${el.x}%`, top: `${el.y}%`, transform: `translate(${(mousePos.x - window.innerWidth / 2) * 0.02}px, ${(mousePos.y - window.innerHeight / 2) * 0.02}px)`, transition: 'transform 0.3s ease-out' }} />
        ))}
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/95 backdrop-blur border-b border-[#0f3460] neon-border-cyan">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold neon-glow">&lt;/Dev&gt;</div>
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-4 py-2 rounded transition-all duration-300 ${activeSection === item.id ? 'bg-[#ff006e] text-white neon-border' : 'hover:bg-[#16213e] hover:border hover:border-[#00f5ff]'}`}>
                {item.icon} {item.label}
              </button>
            ))}
          </div>
          <button className="md:hidden p-2 hover:bg-[#16213e] rounded" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#16213e] border-t border-[#0f3460] animate-slide-in-left">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="w-full text-left px-4 py-3 hover:bg-[#0f3460] border-b border-[#0f3460] transition-colors">
                {item.icon} {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-16 relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: `url(${heroBgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container text-center relative z-10 animate-fade-in">
            <div className="mb-6 text-6xl md:text-8xl font-bold neon-glow animate-glow-pulse">Hello, World! 👋</div>
            <div className="text-2xl md:text-4xl font-bold mb-4 text-[#00f5ff]">I am a Creative Developer</div>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Building playful, interactive experiences with code and creativity. Welcome to my digital playground!</p>
            <button onClick={() => scrollToSection('about')} className="px-8 py-3 bg-[#ff006e] hover:bg-[#ff0080] text-white font-bold rounded transition-all duration-300 transform hover:scale-105 neon-border">Explore My Work ↓</button>
          </div>
        </section>

        <section id="about" className="min-h-screen py-20 relative" style={{ backgroundImage: `url(${aboutBgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center neon-glow">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">I am a passionate developer who loves creating interactive, playful web experiences. With a background in both design and development, I bring a unique perspective to every project.</p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">When I am not coding, you will find me exploring new technologies, playing with design tools, or contemplating the meaning of life (and bugs in production).</p>
                <div className="space-y-3">
                  <p className="text-[#ffbe0b] font-bold">🎓 Education</p>
                  <p className="text-gray-300">B.S. in Computer Science</p>
                  <p className="text-[#00f5ff] font-bold mt-4">🏆 Achievements</p>
                  <p className="text-gray-300">5+ years of web development experience</p>
                  <p className="text-gray-300">Led 20+ successful projects</p>
                  <p className="text-gray-300">Mentored junior developers</p>
                </div>
              </div>
              <div className="flex justify-center animate-float">
                <img src={catIconUrl} alt="Neon Cat" className="w-64 h-64 object-contain drop-shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen py-20 relative" style={{ backgroundImage: `url(${skillsBgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center neon-glow">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group p-6 bg-[#16213e]/80 rounded border border-[#0f3460] hover:border-[#ff006e] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff006e]/50 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{skill.icon}</span>
                      <h3 className="text-xl font-bold text-[#00f5ff] group-hover:text-[#ffbe0b] transition-colors">{skill.name}</h3>
                    </div>
                    <span className="text-[#ff006e] font-bold text-lg">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#0f3460] rounded-full h-3 overflow-hidden border border-[#00f5ff]/30">
                    <div className="bg-gradient-to-r from-[#ff006e] to-[#00f5ff] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="min-h-screen py-20 bg-[#1a1a2e]">
          <div className="container">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center neon-glow">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.title} className="group p-8 bg-[#16213e] rounded border-l-4 border-[#ff006e] hover:border-[#00f5ff] hover:shadow-lg hover:shadow-[#00f5ff]/30 transition-all duration-300 transform hover:translate-x-2 animate-slide-in-left" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{exp.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#ff006e] group-hover:text-[#ffbe0b] transition-colors">{exp.title}</h3>
                      <p className="text-[#00f5ff] font-semibold">{exp.company}</p>
                      <p className="text-[#ffbe0b] text-sm mt-1">{exp.year}</p>
                      <p className="text-gray-300 mt-3">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="opinions" className="min-h-screen py-20 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
          <div className="container">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center neon-glow">My Opinions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {opinions.map((item, index) => (
                <div key={item.topic} className="group p-6 bg-[#16213e]/50 rounded border border-[#0f3460] hover:border-[#00f5ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#00f5ff]/30 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-5xl mb-4 group-hover:animate-wobble">{item.emoji}</div>
                  <h3 className="text-xl font-bold text-[#ff006e] mb-3">{item.topic}</h3>
                  <p className="text-gray-300 leading-relaxed">"{item.opinion}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fun" className="min-h-screen py-20 relative" style={{ backgroundImage: `url(${funBgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center neon-glow">Fun & Silly Stuff</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-[#16213e]/80 p-8 rounded border-2 border-[#ffbe0b] hover:border-[#ff006e] transition-all duration-300 hover:shadow-lg hover:shadow-[#ffbe0b]/50 animate-scale-in">
                <h3 className="text-2xl font-bold text-[#ffbe0b] mb-6">Random Fun Fact 🎲</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed h-24 flex items-center">{randomFact}</p>
                <button onClick={() => setRandomFact(funFacts[Math.floor(Math.random() * funFacts.length)])} className="w-full px-6 py-3 bg-[#ff006e] hover:bg-[#ff0080] text-white font-bold rounded transition-all duration-300 transform hover:scale-105 neon-border">Get Another Fact 🔄</button>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-[#16213e]/80 rounded border border-[#00f5ff] hover:border-[#ffbe0b] transition-all duration-300 hover:shadow-lg hover:shadow-[#00f5ff]/30 group cursor-pointer">
                  <p className="text-lg font-bold text-[#00f5ff] group-hover:text-[#ffbe0b] transition-colors">Q: Why do programmers prefer dark mode?</p>
                  <p className="text-gray-300 mt-2">A: Because light attracts bugs! 🐛</p>
                </div>
                <div className="p-6 bg-[#16213e]/80 rounded border border-[#ff006e] hover:border-[#00f5ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff006e]/30 group cursor-pointer">
                  <p className="text-lg font-bold text-[#ff006e] group-hover:text-[#00f5ff] transition-colors">Q: How many developers does it take to change a light bulb?</p>
                  <p className="text-gray-300 mt-2">A: None, that is a hardware problem! 💡</p>
                </div>
                <div className="p-6 bg-[#16213e]/80 rounded border border-[#ffbe0b] hover:border-[#ff006e] transition-all duration-300 hover:shadow-lg hover:shadow-[#ffbe0b]/30 group cursor-pointer">
                  <p className="text-lg font-bold text-[#ffbe0b] group-hover:text-[#ff006e] transition-colors">Q: Why did the developer go broke?</p>
                  <p className="text-gray-300 mt-2">A: Because he used up all his cache! 💸</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen py-20 bg-[#1a1a2e]">
          <div className="container">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center neon-glow">Let us Connect</h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-6 bg-[#16213e] rounded border border-[#0f3460] hover:border-[#ff006e] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff006e]/50 hover:scale-110 animate-fade-in">
                    <span className="text-4xl mb-2 group-hover:animate-wobble">{link.icon}</span>
                    <span className="text-sm font-bold text-[#00f5ff] group-hover:text-[#ffbe0b] transition-colors">{link.name}</span>
                  </a>
                ))}
              </div>
              <div className="bg-[#16213e] p-8 rounded border-2 border-[#00f5ff] text-center">
                <h3 className="text-2xl font-bold text-[#ff006e] mb-4">Send me a message!</h3>
                <p className="text-gray-300 mb-6">Got a project idea? Want to collaborate? Or just want to chat about code and cats? Drop me a line!</p>
                <a href="mailto:your.email@gmail.com" className="inline-block px-8 py-3 bg-[#ff006e] hover:bg-[#ff0080] text-white font-bold rounded transition-all duration-300 transform hover:scale-105 neon-border">📧 Send Email</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f3460] border-t border-[#00f5ff] py-8 text-center">
        <div className="container">
          <p className="text-gray-400 mb-2">Made with <Heart className="inline text-[#ff006e]" size={16} /> by a playful developer</p>
          <p className="text-sm text-gray-500">© 2024 My Playful Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
