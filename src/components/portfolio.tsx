import {
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  Download,
  Gauge,
  Github,
  Globe2,
  LayoutTemplate,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  MousePointer2,
  Phone,
  Search,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const navItems = ["Home", "About", "Skills", "Services", "Projects", "Experience", "Contact"];

const services = [
  [Search, "Keyword Research", "Find relevant keywords and search opportunities based on user intent and business goals."],
  [LayoutTemplate, "On-Page SEO", "Optimize titles, meta descriptions, headings, URLs, internal links and content structure."],
  [Gauge, "Technical SEO", "Improve indexing, sitemaps, robots.txt, performance and site structure."],
  [Globe2, "Off-Page SEO", "Build a practical off-page strategy focused on relevant backlinks and authority."],
  [Target, "Google Ads", "Structure Search campaigns with keyword targeting, ad groups and negative keywords."],
  [BarChart3, "SEO Audits", "Identify SEO issues, technical problems and clear optimization opportunities."],
  [Code2, "Frontend Development", "Build responsive interfaces with HTML, CSS, JavaScript, React and modern CSS tools."],
] as const;

const marketingSkills = [
  "Keyword Research", "On-Page SEO", "Technical SEO", "Off-Page SEO", "SEO Auditing",
  "Google Search Console", "GA4", "PageSpeed Insights", "Google Ads", "Search Campaigns",
  "Negative Keywords", "Search Terms Analysis", "Conversion Tracking",
];
const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Git", "GitHub"];

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
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"><Download className="size-4" /> Download CV</a>
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
  const stats = [["3+", "Months Frontend Internship"], ["SEO + Google Ads", "Practical Projects"], ["React", "Frontend Experience"], ["80%", "DAE Result"]];
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
  return <Section id="services" tone><SectionHeading eyebrow="Services" title="How I Can Help" description="Focused digital services that connect search visibility, paid acquisition and solid website foundations." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(([Icon, title, description], index) => <article key={title} className={`service-card reveal ${index === 6 ? "lg:col-span-2" : ""}`}><div className="flex items-start justify-between"><span className="service-icon"><Icon /></span><ArrowRight className="service-arrow" /></div><h3>{title}</h3><p>{description}</p></article>)}</div></Section>;
}

function Skills() {
  return <Section id="skills"><SectionHeading eyebrow="Capabilities" title="Skills Built Around Search & Craft" /><div className="mt-12 grid gap-5 lg:grid-cols-2"><SkillGroup icon={<Target />} title="SEO & Digital Marketing" skills={marketingSkills} /><SkillGroup icon={<Code2 />} title="Frontend Development" skills={frontendSkills} /></div></Section>;
}

function SkillGroup({ icon, title, skills }: { icon: ReactNode; title: string; skills: string[] }) { return <article className="skill-panel reveal"><div className="mb-7 flex items-center gap-3"><span className="service-icon">{icon}</span><h3 className="text-lg font-bold">{title}</h3></div><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="skill-badge"><Check />{skill}</span>)}</div></article>; }

function Process() {
  const steps = [["01", "Research", "Understand the business, audience and search intent."], ["02", "Strategy", "Create keyword and optimization strategy."], ["03", "Optimize", "Improve content, technical SEO and website structure."], ["04", "Measure", "Monitor performance and refine the strategy."]];
  return <Section tone><SectionHeading eyebrow="Method" title="A Clear SEO Process" /><div className="process-line mt-14">{steps.map(([number, title, copy]) => <article className="process-step reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></Section>;
}

function Projects() {
  return <Section id="projects"><SectionHeading eyebrow="Selected work" title="Projects With Practical Purpose" description="Hands-on work across organic search, paid search and frontend product development." /><div className="mt-12 space-y-6"><ProjectCard featured label="SEO Case Study" title="DriftCreatives — SEO Agency Website" description="Self-directed SEO project focused on keyword research, on-page optimization, technical SEO and search visibility." skills={["Keyword Research", "On-Page SEO", "Technical SEO", "Google Search Console", "GA4", "PageSpeed Insights"]} link="https://driftcreatives-seo-showcase.vercel.app/" visual={<SeoMockup />} /><ProjectCard label="Paid Search Project" title="Google Ads Search Campaign — SEO Agency" description="Practical Google Ads Search campaign project covering campaign structure, keyword targeting, negative keywords, ad groups, bidding, budget and search-term analysis." skills={["Google Ads", "Search Campaign", "Keyword Targeting", "Negative Keywords", "Search Terms", "Conversion Tracking"]} visual={<AdsMockup />} /><ProjectCard label="Frontend Case Study" title="Vopple / Dealer Clip" description="Frontend project developed during my internship at Cortechsols Pvt. Ltd. for a car-related application." skills={["React", "JavaScript", "Tailwind CSS", "Bootstrap", "Responsive UI", "Figma to React", "Sign In", "Sign Up", "Onboarding", "Dashboard"]} visual={<FrontendMockup />} /></div></Section>;
}

function ProjectCard({ featured, label, title, description, skills, link, visual }: { featured?: boolean; label: string; title: string; description: string; skills: string[]; link?: string; visual: ReactNode }) {
  return <article className={`project-card reveal ${featured ? "project-featured" : ""}`}><div className="project-copy"><p className="section-kicker">{label}</p><h3>{title}</h3><p>{description}</p><div className="mt-6 flex flex-wrap gap-2">{skills.map((skill) => <span className="skill-badge" key={skill}>{skill}</span>)}</div>{link && <Button asChild variant="glass" className="mt-8"><a href={link} target="_blank" rel="noreferrer">View Project <ArrowRight /></a></Button>}</div><div className="project-visual">{visual}</div></article>;
}

function SeoMockup() { return <div className="mock-window"><MockTop /><div className="mock-search"><Search /> drift creatives seo</div><div className="mock-metrics"><span><b>Keywords</b><i /></span><span><b>Pages</b><i /></span><span><b>Health</b><i /></span></div><div className="mock-graph">{[28, 40, 36, 55, 67, 63, 85].map((n) => <i key={n} style={{ height: `${n}%` }} />)}</div></div>; }
function AdsMockup() { return <div className="mock-window"><MockTop /><div className="campaign-row"><span className="status-dot" />Search campaign <b>Structured</b></div>{["Core services", "High intent", "Brand terms"].map((x, i) => <div className="ad-row" key={x}><span>{x}<small>{i + 4} keyword groups</small></span><i style={{ width: `${70 - i * 14}%` }} /></div>)}</div>; }
function FrontendMockup() { return <div className="mock-window frontend-mock"><MockTop /><div className="app-sidebar"><i /><i /><i /><i /></div><div className="app-content"><div className="app-title" /><div className="vehicle-grid"><i /><i /><i /></div><div className="app-panel"><span /><span /></div></div></div>; }
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
  const items = [[Code2, "Technical Understanding", "My frontend background helps me understand websites beyond surface-level SEO."], [MousePointer2, "Practical Approach", "I focus on hands-on implementation instead of only theoretical SEO."], [BarChart3, "Data Driven", "I use tools such as GSC, GA4, PageSpeed Insights and Google Ads data."], [Sparkles, "Continuous Learning", "I continuously improve my skills across SEO, digital marketing and frontend development."]];
  return <Section tone><SectionHeading eyebrow="Working together" title="Why Work With Me?" /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map(([Icon, title, copy]) => <article className="why-card reveal" key={title as string}><span className="service-icon"><Icon /></span><h3>{title as string}</h3><p>{copy as string}</p></article>)}</div></Section>;
}

function PortfolioNote() { return <div className="px-5 py-16 sm:px-8"><div className="portfolio-note reveal mx-auto max-w-7xl"><MessageSquare /><div><p className="section-kicker">Building with intent</p><h2>Currently building my professional client portfolio.</h2></div></div></div>; }

function Contact() {
  return <Section id="contact"><div className="contact-shell"><div><SectionHeading eyebrow="Contact" title="Let’s Work Together" description="Have a website, SEO challenge or digital project in mind? Let’s talk." /><div className="mt-9 grid gap-3"><ContactLine icon={<Mail />} label="Email" value="h26291989@gmail.com" href={contactLinks.email} /><ContactLine icon={<Phone />} label="Phone" value="+92 319 2204329" href={contactLinks.phone} /><ContactLine icon={<MapPin />} label="Location" value="Chakwal, Punjab, Pakistan" /><ContactLine icon={<Linkedin />} label="LinkedIn" value="Muhammad Hammad Iqbal" href={contactLinks.linkedin} /></div></div><ContactForm /></div></Section>;
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

function Footer() {
  return <footer className="border-t border-border px-5 py-12 sm:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><a href="#home" className="text-lg font-extrabold">Muhammad Hammad Iqbal</a><p className="mt-2 text-sm leading-6 text-muted-foreground">SEO &amp; Digital Marketing Specialist<br />Frontend Developer</p></div><div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">{["About", "Services", "Projects", "Contact"].map((x) => <a key={x} href={`#${x.toLowerCase()}`} className="hover:text-foreground">{x}</a>)}<a href={contactLinks.email}>Email</a><a href={contactLinks.phone}>Phone</a><a href={contactLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="size-4" /></a></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-border pt-6 text-xs text-muted-foreground">© 2026 Muhammad Hammad Iqbal. All rights reserved.</div></footer>;
}

function Section({ id, tone, children }: { id?: string; tone?: boolean; children: ReactNode }) { return <section id={id} className={`scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 ${tone ? "section-tone" : ""}`}><div className="mx-auto max-w-7xl">{children}</div></section>; }