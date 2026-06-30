import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Brain,
  Code2,
  ShieldCheck,
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  Database,
  Terminal,
  Cpu,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Utkarsh — AI Enthusiast | DSA Learner | Ethical Hacker" },
      {
        name: "description",
        content:
          "Portfolio of Utkarsh, a student exploring Artificial Intelligence, Data Structures & Algorithms, and Ethical Hacking.",
      },
      { property: "og:title", content: "Utkarsh — AI · DSA · Ethical Hacking" },
      {
        property: "og:description",
        content:
          "Personal portfolio showcasing projects, skills and learning journey across AI, DSA and Cybersecurity.",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

function Portfolio() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="w-8 h-8 rounded-lg gradient-bg grid place-items-center text-primary-foreground">
              Utkarsh
            </span>
            <span className="gradient-text">Utkarsh.dev</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:gradient-bg after:transition-all hover:after:w-full"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full gradient-bg px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Let's talk <ArrowRight className="w-4 h-4" />
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
            <ul className="px-6 py-4 flex flex-col gap-4 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block text-muted-foreground hover:text-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
            Available for collaboration & internships
          </div>
          <h1 className="mt-6 text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.05]">
            Hi, I'm <span className="gradient-text">Utkarsh</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
            AI Enthusiast <span className="text-brand-blue">·</span> DSA Learner{" "}
            <span className="text-brand-purple">·</span> Ethical Hacker
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground/80">
            A curious student building intelligent systems, cracking algorithms, and exploring
            the security side of the web — one line of code at a time.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-medium text-primary-foreground glow hover:scale-105 transition-transform"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3 text-sm font-medium hover:border-brand-purple/60 hover:bg-card transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* floating chips */}
        <div className="hidden md:block">
          <FloatingChip className="top-32 left-10" icon={<Brain className="w-4 h-4" />} label="AI" />
          <FloatingChip className="top-48 right-12" icon={<Code2 className="w-4 h-4" />} label="DSA" />
          <FloatingChip className="bottom-10 left-24" icon={<ShieldCheck className="w-4 h-4" />} label="Hacking" />
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About Me" title="A student-developer with a tinkerer's mind">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a tech student passionate about understanding how things work — from neural
              networks that recognise faces, to the algorithms that power search engines, to
              the vulnerabilities that hide in everyday systems.
            </p>
            <p>
              My focus is on three frontiers: <span className="text-foreground">Artificial
              Intelligence</span>, <span className="text-foreground">Data Structures & Algorithms</span>,
              and <span className="text-foreground">Ethical Hacking</span>. I learn by building,
              breaking, and rebuilding.
            </p>
            <p>
              When I'm not coding, I'm reading research papers, solving CTF challenges, or
              grinding LeetCode.
            </p>
          </div>
          <div className="gradient-border rounded-2xl p-6 space-y-4">
            <Stat label="Problems solved" value="200+" />
            <Stat label="AI experiments" value="15+" />
            <Stat label="CTFs played" value="10+" />
            <Stat label="Currently learning" value="Always" />
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="What I'm building with">
        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard
            icon={<Brain className="w-6 h-6" />}
            title="Artificial Intelligence"
            items={["Python", "TensorFlow / PyTorch", "NumPy & Pandas", "Scikit-learn", "Neural Networks"]}
          />
          <SkillCard
            icon={<Code2 className="w-6 h-6" />}
            title="DSA & Programming"
            items={["C++", "Java", "Python", "Problem Solving", "System Design Basics"]}
          />
          <SkillCard
            icon={<ShieldCheck className="w-6 h-6" />}
            title="Ethical Hacking"
            items={["Kali Linux", "Burp Suite", "Wireshark", "Nmap", "CTF / Web Security"]}
          />
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Projects" title="Things I've built while learning">
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            icon={<Cpu className="w-5 h-5" />}
            tag="AI"
            title="Handwritten Digit Recognizer"
            description="A CNN trained on the MNIST dataset that classifies hand-drawn digits with 98% accuracy, served via a small web demo."
            stack={["Python", "TensorFlow", "Flask"]}
          />
          <ProjectCard
            icon={<Database className="w-5 h-5" />}
            tag="DSA"
            title="Algorithm Visualizer"
            description="An interactive tool that animates sorting and pathfinding algorithms to help beginners understand how they work step by step."
            stack={["JavaScript", "HTML5 Canvas", "CSS"]}
          />
          <ProjectCard
            icon={<Terminal className="w-5 h-5" />}
            tag="Security"
            title="Port Scanner CLI"
            description="A lightweight Python port scanner with banner grabbing and threaded scanning — built to learn networking and TCP fundamentals."
            stack={["Python", "Sockets", "Threading"]}
          />
          <ProjectCard
            icon={<Brain className="w-5 h-5" />}
            tag="AI"
            title="Sentiment Analyzer"
            description="An NLP model that classifies tweets and reviews as positive, negative or neutral using a fine-tuned transformer."
            stack={["Python", "Hugging Face", "Streamlit"]}
          />
        </div>
      </Section>

      {/* JOURNEY */}
      <Section id="journey" eyebrow="Education & Journey" title="My current learning path">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px gradient-bg opacity-30" />
          <div className="space-y-10">
            <TimelineItem
              side="left"
              icon={<GraduationCap className="w-4 h-4" />}
              title="Computer Science Student"
              meta="Ongoing"
              body="Building strong foundations in mathematics, programming and computer systems."
            />
            <TimelineItem
              side="right"
              icon={<Brain className="w-4 h-4" />}
              title="Artificial Intelligence Track"
              meta="In progress"
              body="Studying ML fundamentals, deep learning, and working through hands-on projects with PyTorch."
            />
            <TimelineItem
              side="left"
              icon={<Code2 className="w-4 h-4" />}
              title="Data Structures & Algorithms"
              meta="Daily practice"
              body="Solving problems on LeetCode and Codeforces — focusing on patterns, recursion, graphs and dynamic programming."
            />
            <TimelineItem
              side="right"
              icon={<ShieldCheck className="w-4 h-4" />}
              title="Ethical Hacking & Cybersecurity"
              meta="Exploring"
              body="Learning web security, networking and exploitation through TryHackMe rooms and CTF challenges."
            />
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's build something together">
        <div className="gradient-border rounded-3xl p-8 md:p-12 text-center">
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open to internships, collaborations, study groups or just a friendly chat about AI,
            algorithms or hacking. Drop a message — I'll reply.
          </p>
          <a
            href="mailto:sk@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-medium text-primary-foreground glow hover:scale-105 transition-transform"
          >
            <Mail className="w-4 h-4" /> sk@gmail.com
          </a>
          <div className="mt-8 flex items-center justify-center gap-3">
            <SocialIcon href="https://github.com" label="GitHub"><Github className="w-5 h-5" /></SocialIcon>
            <SocialIcon href="https://linkedin.com" label="LinkedIn"><Linkedin className="w-5 h-5" /></SocialIcon>
            <SocialIcon href="https://twitter.com" label="Twitter"><Twitter className="w-5 h-5" /></SocialIcon>
            <SocialIcon href="mailto:sk@gmail.com" label="Email"><Mail className="w-5 h-5" /></SocialIcon>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-8 px-6 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} <span className="gradient-text font-medium">Utkarsh</span>. Crafted with curiosity & caffeine.
        </p>
      </footer>
    </div>
  );
}

/* ---------------- helpers ---------------- */

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-block text-xs uppercase tracking-[0.2em] gradient-text font-semibold">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function SkillCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card/60 backdrop-blur p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/50 hover:bg-card">
      <div className="w-12 h-12 rounded-xl gradient-bg grid place-items-center text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full gradient-bg" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  icon,
  tag,
  title,
  description,
  stack,
}: {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  stack: string[];
}) {
  return (
    <article className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/50">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
          {icon} {tag}
        </span>
        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

function TimelineItem({
  side,
  icon,
  title,
  meta,
  body,
}: {
  side: "left" | "right";
  icon: React.ReactNode;
  title: string;
  meta: string;
  body: string;
}) {
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
      <div
        className={`pl-12 md:pl-0 ${
          side === "left" ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
        }`}
      >
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5 hover:border-brand-purple/50 transition-colors">
          <div className="flex items-center gap-2 md:justify-start text-xs text-muted-foreground">
            <span className="px-2 py-0.5 rounded-full bg-secondary">{meta}</span>
          </div>
          <h3 className="mt-2 text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{body}</p>
        </div>
      </div>
      <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2">
        <div className="w-8 h-8 rounded-full gradient-bg grid place-items-center text-primary-foreground glow">
          {icon}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-xl font-display font-bold gradient-text">{value}</span>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-11 h-11 grid place-items-center rounded-full border border-border bg-card/60 backdrop-blur text-muted-foreground hover:text-foreground hover:border-brand-purple hover:-translate-y-0.5 transition-all"
    >
      {children}
    </a>
  );
}

function FloatingChip({
  className,
  icon,
  label,
}: {
  className: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className={`absolute ${className} inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground animate-fade-in`}
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      <span className="text-brand-purple">{icon}</span>
      {label}
    </div>
  );
}
