import { useEffect, useRef, useState } from 'react';
import {
  GraduationCap,
  Target,
  MapPin,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="text-center max-w-4xl">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-royal to-emerald-accent p-1 mb-8">
            <div className="w-full h-full rounded-full bg-midnight flex items-center justify-center">
              <span className="text-5xl font-bold text-white">HE</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Hussein ElSayed
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-sky-accent mb-6">
          Software Engineer | Mobile Developer
        </h2>

        <p className="text-slate-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Building modern Android and cross-platform applications with Kotlin, Java, and Flutter.
          Passionate about creating clean, user-friendly experiences and continuously learning new technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-royal hover:bg-royal-hover text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-royal/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-xl transition-all duration-300 hover:border-emerald-accent hover:text-emerald-accent"
          >
            Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-muted animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            About Me
          </h2>
          <p className="text-slate-muted text-center mb-12 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnimatedSection delay={100} className="lg:col-span-2">
            <div className="bg-midnight-light/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full card-hover">
              <h3 className="text-xl font-semibold text-white mb-4">About Me</h3>
              <p className="text-slate-muted leading-relaxed text-lg">
                I'm a Software Engineering student with a passion for mobile application development.
                I'm focused on building Android applications using Kotlin and Java while expanding my
                expertise in Flutter for cross-platform development. I enjoy turning ideas into
                real-world applications, writing clean and maintainable code, and continuously
                improving my technical and problem-solving skills.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={200}>
              <div className="bg-midnight-light/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-royal/20 flex items-center justify-center">
                    <GraduationCap className="text-royal" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Education</h3>
                </div>
                <p className="text-slate-muted">
                  Bachelor's Degree in Software Engineering
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-midnight-light/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-accent/20 flex items-center justify-center">
                    <Target className="text-emerald-accent" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Career Objective</h3>
                </div>
                <p className="text-slate-muted text-sm leading-relaxed">
                  Seeking an opportunity as a Software Engineer | Mobile Developer where I can
                  contribute to real-world projects, strengthen my technical skills, and continue
                  growing as a professional developer.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay?: number;
}

function SkillCategory({ title, skills, delay = 0 }: SkillCategoryProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-midnight-light/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 card-hover">
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Kotlin', 'Java', 'Dart'],
    },
    {
      title: 'Mobile Development',
      skills: ['Android SDK', 'Flutter', 'XML', 'Jetpack Compose'],
    },
    {
      title: 'Databases',
      skills: ['Firebase', 'SQLite', 'Room Database'],
    },
    {
      title: 'Software Engineering',
      skills: ['OOP', 'MVVM', 'SOLID Principles', 'Clean Code'],
    },
    {
      title: 'Tools',
      skills: ['Git & GitHub', 'REST APIs', 'Postman', 'Figma'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-midnight-light/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Skills
          </h2>
          <p className="text-slate-muted text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  emoji: string;
  description: string;
  tags: string[];
  linkUrl: string;
  linkIcon: 'github' | 'external';
  delay?: number;
}

function ProjectCard({ title, emoji, description, tags, linkUrl, linkIcon, delay = 0 }: ProjectCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-midnight-light/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 card-hover h-full flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-3">
          {emoji} {title}
        </h3>
        <p className="text-slate-muted leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-800/80 text-emerald-accent text-sm rounded-lg border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-muted hover:text-white transition-colors"
          >
            {linkIcon === 'github' ? (
              <Github size={20} />
            ) : (
              <ExternalLink size={20} />
            )}
            <span className="text-sm">View Project</span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: 'Football Jersey Store',
      emoji: '⚽',
      description:
        'A modern Android e-commerce application that allows users to browse football jerseys, manage their shopping cart, and enjoy a seamless shopping experience.',
      tags: ['Java', 'XML', 'Firebase'],
      linkUrl: 'https://github.com/husseinelsayed04/Football-Jersey-Store',
      linkIcon: 'github' as const,
    },
    {
      title: 'Library Management System',
      emoji: '📚',
      description:
        'A desktop application developed in Java using Object-Oriented Programming (OOP) principles to manage books, members, borrowing, and return operations.',
      tags: ['Java', 'OOP'],
      linkUrl: 'https://github.com/husseinelsayed04/LibraryManagement',
      linkIcon: 'github' as const,
    },
    {
      title: 'Noon UI/UX Redesign',
      emoji: '🎨',
      description:
        'A UI/UX redesign concept for the Noon mobile application focused on improving usability, simplifying navigation, and creating a modern, user-centered experience.',
      tags: ['Figma'],
      linkUrl: 'https://www.behance.net/gallery/240688633/noon?platform=direct',
      linkIcon: 'external' as const,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Projects
          </h2>
          <p className="text-slate-muted text-center mb-12 max-w-2xl mx-auto">
            Some of my recent work
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-midnight-light/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-muted text-center mb-12">
            Feel free to reach out for collaborations or opportunities
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:hussainelsayed04@gmail.com"
              className="bg-midnight-light/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-royal/20 flex items-center justify-center group-hover:bg-royal/30 transition-colors">
                  <Mail className="text-royal" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-slate-muted">hussainelsayed04@gmail.com</p>
                </div>
              </div>
            </a>

            <div className="bg-midnight-light/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-accent/20 flex items-center justify-center">
                  <MapPin className="text-emerald-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-slate-muted">Egypt</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/hussein-elsayed-2914b4334"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-midnight-light/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-accent/20 flex items-center justify-center group-hover:bg-sky-accent/30 transition-colors">
                  <Linkedin className="text-sky-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                  <p className="text-slate-muted">Hussein ElSayed</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/husseinelsayed04"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-midnight-light/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center group-hover:bg-slate-600/50 transition-colors">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">GitHub</h3>
                  <p className="text-slate-muted">@husseinelsayed04</p>
                </div>
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-muted">
          © {new Date().getFullYear()} Hussein ElSayed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
