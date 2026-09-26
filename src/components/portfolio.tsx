import { ArrowUpRight,
  ArrowRight,
  BarChart3,
  Braces,
  Check,
  Code2,
  Download,
  Gauge,
  Github,
  GitBranch,
  Globe2,
  LayoutTemplate,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  MousePointer2,
  Package,
  Palette,
  Phone,
  Rocket,
  Search,
  Send,
  Sparkles,
  Target,
  TerminalSquare,
  TrendingUp,
  Wrench,
  ChevronLeft,
  ChevronRight,
  X,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const navItems = ["Home", "About", "Skills", "Services", "Projects", "Experience", "Contact"];

const services = [
  {
    number: "01",
    icon: Braces,
    title: "Frontend Development",
    description: "Responsive, polished interfaces built with a practical modern frontend stack.",
    skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Responsive Websites", "Modern UI Development"],
    tone: "frontend",
  },
  {
    number: "02",
    icon: Search,
    title: "SEO",
    description: "Search-focused improvements that strengthen website structure, relevance and visibility.",
    skills: ["Keyword Research", "On-Page SEO", "Technical SEO", "Off-Page SEO", "Google Search Console", "GA4", "SEO Audits", "Website Optimization"],
    tone: "seo",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Google Ads",
    description: "Well-organized Search campaigns built around relevant terms and practical optimization.",
    skills: ["Search Campaigns", "Keyword Research", "Negative Keywords", "Search Terms Analysis", "Campaign Optimization", "Basic Conversion Tracking"],
    tone: "ads",
  },
] as const;

// Self-assessed, editable proficiency values. Update these numbers as skills develop.
const proficiencySkills = [
  ["HTML5", 90], ["CSS3", 88], ["JavaScript", 82], ["React.js", 80],
  ["Tailwind CSS", 88], ["Bootstrap", 84], ["Responsive Design", 90], ["SEO", 82],
  ["Google Search Console", 78], ["Google Analytics 4", 74], ["Google Ads", 72],
] as const;

const tools = [
  [Code2, "VS Code"], [GitBranch, "Git & GitHub"], [Palette, "Figma"],
  [Wrench, "Chrome DevTools"], [Rocket, "Vercel"], [Package, "npm"],
  [Search, "Google Search Console"], [BarChart3, "Google Analytics"], [Target, "Google Ads"],
] as const;

// Edit project details here. Leave `github` empty to hide the Source Code button.
type Project = { name: string; type: string; description: string; skills: string[]; live: string; github: string };
const reactStack = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"];
const staticStack = ["HTML", "CSS", "JavaScript", "Responsive Design"];

const webDevelopmentProjects: Project[] = [
  { name: "Spawnli", type: "Web Application / Frontend Development", description: "Modern frontend web experience focused on responsive UI and clean user interaction.", skills: reactStack, live: "https://spawnli-seven.vercel.app/", github: "" },
  { name: "DriftCreatives", type: "Website / Frontend Development", description: "Agency-style website built with a clean layout, clear structure and responsive sections.", skills: reactStack, live: "https://driftcreatives-seo-showcase.vercel.app/", github: "" },
  { name: "Noir Bistro", type: "Restaurant Website", description: "Responsive restaurant website with a modern visual presentation and user-friendly layout.", skills: ["React", "JavaScript", "HTML", "CSS"], live: "https://restaurant-website-gray-chi.vercel.app/", github: "" },
  { name: "FitForge", type: "Gym / Fitness Website", description: "Fitness-focused web experience with responsive layouts and modern frontend interactions.", skills: ["React", "JavaScript", "HTML", "CSS"], live: "https://fitness-app-mocha-alpha.vercel.app/", github: "" },
  { name: "Portfolio", type: "Personal Portfolio", description: "Personal portfolio presenting work and skills through a clean, responsive interface.", skills: reactStack, live: "https://portfolio-next-js-seven-vert.vercel.app/", github: "" },
  { name: "Dashboard UI", type: "Dashboard Interface", description: "Dashboard interface with structured data panels and a responsive component layout.", skills: reactStack, live: "https://dashboard-ui-alpha-seven.vercel.app/", github: "" },
  { name: "LUXE.", type: "Small E-commerce / Store", description: "Minimal storefront interface with product-focused layouts and responsive browsing.", skills: reactStack, live: "https://luxe-two-black.vercel.app/", github: "" },
  { name: "Framing", type: "Website / Frontend", description: "Responsive frontend website built with semantic HTML, styled sections and simple interactions.", skills: staticStack, live: "https://lucent-sfogliatella-d10b2a.netlify.app/", github: "" },
  { name: "VastuSpaze", type: "Landing Page", description: "Landing page with a clear visual hierarchy and responsive content sections.", skills: staticStack, live: "https://taupe-flan-d8a007.netlify.app/", github: "" },
  { name: "Flowrise", type: "SaaS Landing Page", description: "SaaS landing page presenting product features through a modern, responsive layout.", skills: ["React", "JavaScript", "HTML", "CSS"], live: "https://saas-landing-page-bice-sigma.vercel.app/", github: "" },
  { name: "Panda Nutrition", type: "Landing Page", description: "Nutrition-themed landing page with readable content blocks and responsive design.", skills: staticStack, live: "https://gorgeous-starlight-51f723.netlify.app/", github: "" },
  { name: "SoundCloud Downloader", type: "Landing Page / Web Project", description: "Tool-style landing page with a focused layout and responsive frontend build.", skills: staticStack, live: "https://bucolic-cannoli-547a30.netlify.app/", github: "" },
];

const seoWork = ["Keyword Research", "On-Page SEO", "Off-Page SEO", "Technical SEO", "Google Analytics 4", "Google Search Console"];
const seoProjects: Project[] = [
  { name: "GiftDownloader", type: "SEO & Digital Marketing", description: "SEO work covering keyword research, on-page and off-page optimization, technical SEO and analytics setup.", skills: seoWork, live: "https://gifsdownloader.com", github: "" },
  { name: "PandaExpress", type: "SEO & Digital Marketing", description: "SEO work covering keyword research, on-page and off-page optimization, technical SEO and analytics setup.", skills: seoWork, live: "https://pandaexpressnutritioncalcu.com/", github: "" },
  { name: "DriftCreatives", type: "SEO & Digital Marketing", description: "Self-directed SEO project focused on on-page optimization, technical SEO and search measurement.", skills: ["On-Page SEO", "Technical SEO", "Google Analytics 4", "Google Search Console"], live: "https://driftcreatives-seo-showcase.vercel.app/", github: "" },
];

const contactLinks = {
  email: "mailto:h26291989@gmail.com",
  phone: "tel:+923192204329",
  linkedin: "https://www.linkedin.com/in/muhammad-hammad-iqbal-109523326/",
};

export function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Process />
        <Projects />
        <Experience />
        <Education />
        <WhyMe />
        <PortfolioNote />
        <Contact />
      </main>
      <Footer />
      <a className="whatsapp-float" href="https://wa.me/923192204329" target="_blank" rel="noreferrer" aria-label="Chat with Muhammad on WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav aria-label="Main navigation" className="nav-shell mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5">
        <a href="#home" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="brand-mark">HI</span>
          <span className="hidden truncate text-sm font-bold sm:block">Muhammad Hammad Iqbal</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="premium" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Let&apos;s Talk <ArrowRight /></a>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {open && (
        <div className="nav-shell mx-auto mt-2 grid max-w-7xl gap-1 p-3 lg:hidden">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="nav-link px-4 py-3" onClick={() => setOpen(false)}>{item}</a>)}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92svh] scroll-mt-24 items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pb-20">
      <div className="ambient-glow ambient-glow-one" />
      <div className="ambient-glow ambient-glow-two" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-3xl">
          <p className="eyebrow"><Sparkles /> SEO &amp; Digital Marketing Specialist</p>
          <h1 className="mt-7 text-5xl font-extrabold leading-[1.06] sm:text-6xl lg:text-7xl">
            Helping Businesses<br /><span className="gradient-text">Get Found, Grow</span><br />&amp; Convert.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            SEO strategy, Google Ads and modern web development focused on turning online traffic into real business growth — backed by a frontend development background.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="premium" size="lg"><a href="#projects">View My Work <ArrowRight /></a></Button>
            <Button asChild variant="glass" size="lg"><a href="#contact">Let&apos;s Work Together</a></Button>
            <a href="mailto:h26291989@gmail.com?subject=CV%20Request" className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"><Download className="size-4" /> Download CV</a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual reveal" aria-label="Abstract search and development performance dashboard">
      <div className="visual-grid" />
      <div className="search-pill"><Search /><span>digital growth strategy</span><span className="search-status">Optimized</span></div>
      <div className="chart-card">
        <div className="flex items-start justify-between"><div><p className="mini-label">Search visibility</p><p className="mt-1 text-2xl font-bold">Growing</p></div><span className="icon-chip"><TrendingUp /></span></div>
        <div className="chart-bars" aria-hidden="true">{[32, 43, 38, 57, 62, 78, 88].map((height) => <span key={height} style={{ height: `${height}%` }} />)}</div>
        <div className="chart-line" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      </div>
      <FloatingChip className="chip-seo" icon={<Search />} title="SEO" detail="Organic growth" />
      <FloatingChip className="chip-ads" icon={<Target />} title="Google Ads" detail="Search campaigns" />
      <FloatingChip className="chip-code" icon={<Code2 />} title="Frontend" detail="React development" />
      <div className="code-strip"><span>&lt;growth&gt;</span><span className="text-accent-cyan">strategy + code</span><span>&lt;/growth&gt;</span></div>
    </div>
  );
}

function FloatingChip({ className, icon, title, detail }: { className: string; icon: ReactNode; title: string; detail: string }) {
  return <div className={`floating-chip ${className}`}><span className="icon-chip">{icon}</span><span><b>{title}</b><small>{detail}</small></span></div>;
}

function Stats() {
  const stats = [["Web Development", "Practical Experience"], ["SEO + Google Ads", "Practical Projects"], ["React", "Frontend Experience"], ["5★", "Fiverr Rating"]];
  return <section aria-label="Professional highlights" className="px-5 sm:px-8"><div className="stats-grid mx-auto max-w-7xl">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>;
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="reveal max-w-2xl"><p className="section-kicker">{eyebrow}</p><h2 className="section-title">{title}</h2>{description && <p className="section-copy">{description}</p>}</div>;
}

function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
        <div><SectionHeading eyebrow="About me" title="Turning Technical Skills Into Digital Growth" /><div className="reveal mt-7 max-w-3xl space-y-4 text-base leading-8 text-muted-foreground"><p>I&apos;m Muhammad Hammad Iqbal, an SEO &amp; Digital Marketing professional with a technical background in Frontend Development.</p><p>I work with keyword research, on-page SEO, technical SEO, Google Search Console, GA4 and Google Ads Search campaigns. My frontend background in HTML, CSS, JavaScript and React also helps me understand websites from both a technical and marketing perspective.</p></div></div>
        <aside className="profile-card reveal"><div className="flex items-center gap-4"><span className="profile-monogram">HI</span><div><h3 className="text-lg font-bold">Muhammad Hammad Iqbal</h3><p className="text-sm text-muted-foreground">Chakwal, Punjab, Pakistan</p></div></div><div className="my-6 h-px bg-border" /><div className="space-y-3 text-sm"><ProfileLine icon={<Target />} text="SEO & Digital Marketing" /><ProfileLine icon={<Code2 />} text="Frontend Development" /><ProfileLine icon={<Mail />} text="h26291989@gmail.com" /><ProfileLine icon={<Phone />} text="+92 319 2204329" /><ProfileLine icon={<Linkedin />} text="in/muhammad-hammad-iqbal-109523326" /></div></aside>
      </div>
    </Section>
  );
}

function ProfileLine({ icon, text }: { icon: ReactNode; text: string }) { return <div className="flex items-center gap-3 text-muted-foreground"><span className="text-primary">{icon}</span><span className="min-w-0 break-words">{text}</span></div>; }

function Services() {
  return <Section id="services" tone><SectionHeading eyebrow="Services" title="How I Can Help" description="Focused digital services that connect search visibility, paid acquisition and solid website foundations." /><div className="services-grid mt-12">{services.map(({ number, icon: Icon, title, description, skills, tone }) => <motion.article key={title} className={`service-card service-card-${tone} reveal`} whileHover={{ y: -7 }} transition={{ duration: .28, ease: "easeOut" }}><div className="service-card-head"><span className="service-icon"><Icon /></span><span className="service-number">{number}</span></div><h3>{title}</h3><p>{description}</p><div className="service-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div><a className="service-cta" href="#contact">Discuss a project <ArrowRight /></a></motion.article>)}</div></Section>;
}

function Skills() {
  return <Section id="skills"><SectionHeading eyebrow="Capabilities" title="Skills Built Around Search & Craft" /><div className="skills-experience mt-12"><TechnicalProficiency /><ToolsGrid /></div></Section>;
}

function TechnicalProficiency() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: .2 });
  const reduceMotion = useReducedMotion();
  return <article ref={ref} className="skill-panel proficiency-panel reveal"><div className="panel-heading"><span className="service-icon"><TrendingUp /></span><div><p className="section-kicker">Core capabilities</p><h3>Technical Proficiency</h3></div></div><div className="proficiency-list">{proficiencySkills.map(([skill, value], index) => <div className="proficiency-item" key={skill}><div className="proficiency-label"><span>{skill}</span><strong>{value}%</strong></div><div className="proficiency-track"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: inView ? value / 100 : 0 }} transition={{ duration: reduceMotion ? 0 : .9, delay: reduceMotion ? 0 : index * .055, ease: [0.22, 1, 0.36, 1] }} /></div></div>)}</div></article>;
}

function ToolsGrid() {
  return <article className="skill-panel tools-panel reveal"><div className="panel-heading"><span className="service-icon"><TerminalSquare /></span><div><p className="section-kicker">Daily workflow</p><h3>Tools &amp; Technologies</h3></div></div><div className="tools-grid">{tools.map(([Icon, name], index) => <motion.div className="tool-card" key={name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .35, delay: index * .04 }} whileHover={{ y: -4 }}><span><Icon /></span><b>{name}</b></motion.div>)}</div></article>;
}

function Process() {
  const steps = [["01", "Research", "Understand the business, audience and search intent."], ["02", "Strategy", "Create keyword and optimization strategy."], ["03", "Optimize", "Improve content, technical SEO and website structure."], ["04", "Measure", "Monitor performance and refine the strategy."]];
  return <Section tone><SectionHeading eyebrow="Method" title="A Clear SEO Process" /><div className="process-line mt-14">{steps.map(([number, title, copy]) => <article className="process-step reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></Section>;
}

function Projects() {
  const [category, setCategory] = useState<"web" | "seo">("web");
  const [webDevelopmentIndex, setWebDevelopmentIndex] = useState(0);
  const [seoIndex, setSeoIndex] = useState(0);
  const selectCategory = (next: "web" | "seo") => {
    setWebDevelopmentIndex(0);
    setSeoIndex(0);
    setCategory(next);
  };
  return <Section id="projects"><div className="projects-heading"><SectionHeading eyebrow="Selected work" title="Projects With Practical Purpose" description="Hands-on work across organic search, digital marketing and frontend product development." /><div className="project-tabs reveal" role="tablist" aria-label="Project categories"><Button variant="ghost" role="tab" aria-selected={category === "web"} onClick={() => selectCategory("web")}>{category === "web" && <motion.span className="project-tab-indicator" layoutId="project-tab-indicator" />}<span>Web Development</span></Button><Button variant="ghost" role="tab" aria-selected={category === "seo"} onClick={() => selectCategory("seo")}>{category === "seo" && <motion.span className="project-tab-indicator" layoutId="project-tab-indicator" />}<span>SEO &amp; Digital Marketing</span></Button></div></div><div className="projects-stage"><AnimatePresence mode="wait" initial={false}>{category === "web" ? <motion.div key="web-projects" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .3, ease: "easeOut" }}><ProjectCarousel projects={webDevelopmentProjects} category="web" currentIndex={webDevelopmentIndex} setCurrentIndex={setWebDevelopmentIndex} /></motion.div> : <motion.div key="seo-projects" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .3, ease: "easeOut" }}><ProjectCarousel projects={seoProjects} category="seo" currentIndex={seoIndex} setCurrentIndex={setSeoIndex} /></motion.div>}</AnimatePresence></div></Section>;
}


function ProjectCarousel({ projects, category, currentIndex, setCurrentIndex }: { projects: Project[]; category: "web" | "seo"; currentIndex: number; setCurrentIndex: (index: number) => void }) {
  const [visibleCards, setVisibleCards] = useState(3);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const updateVisibleCards = () => setVisibleCards(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);
  const maximumIndex = Math.max(0, projects.length - visibleCards);
  useEffect(() => {
    if (currentIndex > maximumIndex) setCurrentIndex(0);
  }, [currentIndex, maximumIndex, setCurrentIndex]);
  const move = (next: number) => {
    const safeIndex = Math.max(0, Math.min(maximumIndex, next));
    setDirection(safeIndex >= currentIndex ? 1 : -1);
    setCurrentIndex(safeIndex);
  };
  const visibleProjects = projects.slice(currentIndex, currentIndex + visibleCards);
  const groupSize = Math.min(visibleCards, visibleProjects.length);
  return <div className="project-carousel reveal"><div className="project-viewport"><AnimatePresence initial={false} custom={direction} mode="popLayout"><motion.div key={`${category}-${currentIndex}-${visibleCards}`} custom={direction} variants={{ enter: (travel: number) => ({ x: reduceMotion ? 0 : travel * 54, opacity: 0, scale: .985 }), center: { x: 0, opacity: 1, scale: 1 }, exit: (travel: number) => ({ x: reduceMotion ? 0 : travel * -54, opacity: 0, scale: .985 }) }} initial="enter" animate="center" exit="exit" transition={{ duration: reduceMotion ? 0 : .42, ease: [0.22, 1, 0.36, 1] }} className={`project-visible-grid project-visible-grid-${groupSize}`} drag={visibleCards === 1 ? "x" : false} dragConstraints={{ left: 0, right: 0 }} dragElastic={.12} onDragEnd={(_, info) => { if (info.offset.x < -45) move(currentIndex + 1); if (info.offset.x > 45) move(currentIndex - 1); }}>{visibleProjects.map((project, offset) => <motion.div className="project-card-motion" key={`${category}-${project.name}`} initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .3, delay: reduceMotion ? 0 : offset * .045 }}><CompactProjectCard project={project} index={currentIndex + offset} total={projects.length} category={category} /></motion.div>)}</motion.div></AnimatePresence></div><div className="carousel-controls"><div className="carousel-arrows"><Button variant="glass" onClick={() => move(currentIndex - 1)} disabled={currentIndex === 0}><ChevronLeft /> Previous</Button><Button variant="glass" onClick={() => move(currentIndex + 1)} disabled={currentIndex === maximumIndex}>Next <ChevronRight /></Button></div><div className="carousel-dots" aria-label={`Project group ${currentIndex + 1} of ${maximumIndex + 1}`}>{Array.from({ length: maximumIndex + 1 }, (_, index) => <Button variant="ghost" size="icon" key={`${category}-${index}`} className={index === currentIndex ? "active" : ""} onClick={() => move(index)} aria-label={`Show project group ${index + 1}`} />)}</div><span className="carousel-count">{String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span></div></div>;
}

function ProjectPreview({ project, category, index }: { project: Project; category: "web" | "seo"; index: number }) {
  const [failed, setFailed] = useState(false);
  if (failed || !project.live) return category === "seo" ? <SeoMockup /> : <EditableWebMockup index={index} />;
  return <div className="project-shot"><div className="project-shot-bar"><span /><span /><span /><em>{project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}</em></div><img src={`https://image.thum.io/get/width/900/crop/620/${project.live}`} alt={`Homepage preview of ${project.name}`} loading="lazy" decoding="async" onError={() => setFailed(true)} /></div>;
}

function CompactProjectCard({ project, index, total, category }: { project: Project; index: number; total: number; category: "web" | "seo" }) {
  return <article className="compact-project-card"><div className="compact-project-visual"><span className="project-number">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span><ProjectPreview project={project} category={category} index={index} /></div><div className="compact-project-copy"><p className="project-category">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.skills.map((skill) => <span className="skill-badge" key={skill}>{skill}</span>)}</div><div className="mt-auto flex flex-wrap gap-2 pt-6"><ProjectLink href={project.live} icon={<Globe2 />} label={category === "seo" ? "Visit Website" : "Live Demo"} />{project.github && <ProjectLink href={project.github} icon={<Github />} label="Source Code" />}</div></div></article>;
}

function ProjectLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return href ? <Button asChild variant="glass" size="sm" className="project-link"><a href={href} target="_blank" rel="noopener noreferrer">{icon}{label}<ArrowUpRight className="project-link-arrow" /></a></Button> : <Button variant="glass" size="sm" disabled title="Link can be added later">{icon}{label}</Button>;
}

function SeoMockup() { return <div className="mock-window"><MockTop /><div className="mock-search"><Search /> drift creatives seo</div><div className="mock-metrics"><span><b>Keywords</b><i /></span><span><b>Pages</b><i /></span><span><b>Health</b><i /></span></div><div className="mock-graph">{[28, 40, 36, 55, 67, 63, 85].map((n) => <i key={n} style={{ height: `${n}%` }} />)}</div></div>; }
function AdsMockup() { return <div className="mock-window"><MockTop /><div className="campaign-row"><span className="status-dot" />Search campaign <b>Structured</b></div>{["Core services", "High intent", "Brand terms"].map((x, i) => <div className="ad-row" key={x}><span>{x}<small>{i + 4} keyword groups</small></span><i style={{ width: `${70 - i * 14}%` }} /></div>)}</div>; }
function FrontendMockup() { return <div className="mock-window frontend-mock"><MockTop /><div className="app-sidebar"><i /><i /><i /><i /></div><div className="app-content"><div className="app-title" /><div className="vehicle-grid"><i /><i /><i /></div><div className="app-panel"><span /><span /></div></div></div>; }
function EditableWebMockup({ index }: { index: number }) { return <div className={`mock-window editable-mock mock-variant-${(index % 3) + 1}`}><MockTop /><div className="editable-nav"><i /><i /></div><div className="editable-heading" /><div className="editable-copy" /><div className="editable-layout"><i /><i /><i /></div></div>; }
function MockTop() { return <div className="mock-top"><span /><span /><span /></div>; }

function Experience() {
  const entries = [
    { date: "September 2025 – December 2025", role: "Frontend Developer Intern", place: "Cortechsols Pvt. Ltd. · Islamabad, Pakistan", points: ["Developed responsive UI components using React and JavaScript.", "Converted Figma designs into reusable React components.", "Used Tailwind CSS and Bootstrap for modern responsive interfaces.", "Improved layouts and responsiveness across different screen sizes.", "Worked with Git and GitHub.", "Collaborated with developers on real-world frontend workflows.", "Debugged UI issues and improved usability."] },
    { date: "2026", role: "SEO & Google Ads", place: "Self-Directed Practical Experience", selfDirected: true, points: ["Keyword research and on-page SEO", "Technical SEO and website optimization", "Google Search Console, GA4 and PageSpeed Insights", "Google Ads Search campaign setup", "Keyword targeting and negative keywords", "Search terms analysis", "Conversion tracking fundamentals"] },
  ];
  return <Section id="experience" tone><SectionHeading eyebrow="Experience" title="Learning Through Real Work" /><div className="experience-list mt-12">{entries.map((entry) => <article className="experience-card reveal" key={entry.role}><div className="experience-date">{entry.date}</div><div><div className="flex flex-wrap items-center gap-3"><h3>{entry.role}</h3>{entry.selfDirected && <span className="honest-label">Self-directed</span>}</div><p className="mt-1 text-sm font-semibold text-primary">{entry.place}</p><ul>{entry.points.map((point) => <li key={point}><Check />{point}</li>)}</ul></div></article>)}</div></Section>;
}

function Education() {
  const items = [["2025", "Diploma of Associate Engineering (DAE) — Mechanical", "Punjab School of Mines, Katas, Punjab", "80%"], ["2021", "Matriculation — Computer Science", "Govt. Higher Secondary School, Choa Saiden Shah", "78%"]];
  return <Section><SectionHeading eyebrow="Education" title="Academic Foundation" /><div className="mt-10 grid gap-4 lg:grid-cols-2">{items.map(([year, title, school, grade]) => <article className="education-card reveal" key={title}><div><span>{year}</span><h3>{title}</h3><p>{school}</p></div><strong>{grade}</strong></article>)}</div></Section>;
}

function WhyMe() {
  const items: Array<[LucideIcon, string, string]> = [[Code2, "Technical Understanding", "My frontend background helps me understand websites beyond surface-level SEO."], [MousePointer2, "Practical Approach", "I focus on hands-on implementation instead of only theoretical SEO."], [BarChart3, "Data Driven", "I use tools such as GSC, GA4, PageSpeed Insights and Google Ads data."], [Sparkles, "Continuous Learning", "I continuously improve my skills across SEO, digital marketing and frontend development."]];
  return <Section tone><SectionHeading eyebrow="Working together" title="Why Work With Me?" /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map(([Icon, title, copy]) => <article className="why-card reveal" key={title}><span className="service-icon"><Icon /></span><h3>{title}</h3><p>{copy}</p></article>)}</div></Section>;
}

function PortfolioNote() { return <div className="px-5 py-16 sm:px-8"><div className="portfolio-note reveal mx-auto max-w-7xl"><MessageSquare /><div><p className="section-kicker">Building with intent</p><h2>Currently building my professional client portfolio.</h2></div></div></div>; }

function Contact() {
  return <Section id="contact"><div className="contact-shell"><div><SectionHeading eyebrow="Contact" title="Let’s Work Together" description="Have a website, SEO challenge or digital project in mind? Let’s talk." /><div className="mt-9 grid gap-3"><ContactLine icon={<Mail />} label="Email" value="h26291989@gmail.com" href={contactLinks.email} /><ContactLine icon={<Phone />} label="Phone" value="+92 319 2204329" href={contactLinks.phone} /><ContactLine icon={<WhatsAppIcon />} label="WhatsApp" value="0319 2204329" href="https://wa.me/923192204329" /><ContactLine icon={<MapPin />} label="Location" value="Chakwal, Punjab, Pakistan" /><ContactLine icon={<Linkedin />} label="LinkedIn" value="Muhammad Hammad Iqbal" href={contactLinks.linkedin} /></div></div><ContactForm /></div></Section>;
}

function ContactLine({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const content = <><span className="service-icon">{icon}</span><span><small>{label}</small><b>{value}</b></span></>;
  return href ? <a className="contact-line" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{content}</a> : <div className="contact-line">{content}</div>;
}

function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio enquiry"));
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:h26291989@gmail.com?subject=${subject}&body=${body}`;
  }
  return <form className="contact-form reveal" onSubmit={submit}><div className="grid gap-4 sm:grid-cols-2"><Field label="Name" name="name" placeholder="Your name" /><Field label="Email" name="email" placeholder="you@example.com" type="email" /></div><Field label="Subject" name="subject" placeholder="What would you like to discuss?" /><label><span>Message</span><textarea required name="message" rows={5} placeholder="Tell me about your project" /></label><Button type="submit" variant="premium" size="lg" className="w-full sm:w-auto">Send Message <Send /></Button></form>;
}
function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder: string; type?: string }) { return <label><span>{label}</span><input required type={type} name={name} placeholder={placeholder} /></label>; }

function WhatsAppIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.45 14.87L2 22l5.28-1.54A9.94 9.94 0 1 0 12.04 2Zm5.78 14.04c-.24.67-1.4 1.28-1.94 1.36-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.16-4.94-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.29.57-.36.77-.36h.55c.18.01.41-.07.64.49.24.58.81 1.99.88 2.13.07.14.12.31.02.5-.09.2-.14.31-.28.48-.14.17-.3.38-.43.5-.14.15-.29.3-.12.59.17.29.75 1.24 1.61 2.01 1.1.98 2.04 1.29 2.33 1.43.29.15.46.13.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.65-.14.26.1 1.68.79 1.96.94.29.14.48.21.55.33.08.12.08.7-.16 1.37Z"/></svg>; }

function Footer() {
  return <footer className="border-t border-border px-5 py-12 sm:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><a href="#home" className="text-lg font-extrabold">Muhammad Hammad Iqbal</a><p className="mt-2 text-sm leading-6 text-muted-foreground">SEO &amp; Digital Marketing Specialist<br />Frontend Developer</p></div><div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">{["About", "Services", "Projects", "Contact"].map((x) => <a key={x} href={`#${x.toLowerCase()}`} className="hover:text-foreground">{x}</a>)}<a href={contactLinks.email}>Email</a><a href={contactLinks.phone}>Phone</a><a href={contactLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-border pt-6 text-xs text-muted-foreground">© 2026 Muhammad Hammad Iqbal. All rights reserved.</div></footer>;
}

function Section({ id, tone, children }: { id?: string; tone?: boolean; children: ReactNode }) { return <section id={id} className={`scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 ${tone ? "section-tone" : ""}`}><div className="mx-auto max-w-7xl">{children}</div></section>; }