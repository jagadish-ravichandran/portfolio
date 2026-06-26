import {
  SiOpenjdk,
  SiPython,
  SiJavascript,
  SiGnubash,
  SiSpringboot,
  SiSpringsecurity,
  SiReact,
  SiNodedotjs,
  SiDjango,
  SiFlask,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMinio,
  SiDocker,
  SiGithubactions,
  SiJunit5,
  SiCucumber,
  SiSonarqubecloud,
  SiTelegram,
  SiClaude,
  SiAnthropic,
} from 'react-icons/si'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { VscDebug, VscServerProcess } from 'react-icons/vsc'
import { useState, useEffect } from 'react'
import { GoGitBranch, GoWorkflow, GoFile, GoPlug, GoPerson, GoStar, GoRepoForked } from 'react-icons/go'

function Nav() {
  const links = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-14">
        <a href="#" className="text-sm font-medium text-stone-900">
          JR
        </a>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/jagadish-ravichandran/resume/blob/main/Jagadish_Ravichandran_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-accent border border-accent/30 rounded-lg px-3 py-1.5 hover:bg-accent hover:text-white transition-colors"
          >
            <GoFile className="text-base" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-svh flex flex-col items-center justify-center px-6"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-5">
        Software Engineer
      </p>
      <h1 className="text-4xl sm:text-5xl font-medium text-stone-900 text-balance text-center max-w-2xl leading-[1.15] tracking-tight">
        Jagadish Ravichandran
      </h1>
      <p className="mt-5 text-lg sm:text-xl text-stone-500 text-center max-w-lg text-balance leading-relaxed">
        I design and build scalable backend systems.
      </p>
      <p className="mt-6 text-stone-500 text-center max-w-lg text-balance leading-relaxed">
        I build systems that are designed to last — with clean architecture,
        well-considered tradeoffs, and a focus on delivering real value. I care
        about software quality, developer experience, and turning complexity
        into clarity.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="text-sm font-medium text-white bg-accent rounded-lg px-5 py-2.5 hover:brightness-110 transition-all"
        >
          View Projects
        </a>
        <a
          href="#experience"
          className="text-sm font-medium text-accent border border-accent/30 rounded-lg px-5 py-2.5 hover:bg-accent hover:text-white transition-all"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-accent border border-accent/30 rounded-lg px-5 py-2.5 hover:bg-accent hover:text-white transition-all"
        >
          Get in Touch
        </a>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <a
          href="https://github.com/jagadish-ravichandran"
          target="_blank"
          rel="noreferrer"
          className="text-stone-400 hover:text-stone-900 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/jagadish-r-b4822b216"
          target="_blank"
          rel="noreferrer"
          className="text-stone-400 hover:text-stone-900 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="https://github.com/jagadish-ravichandran/resume/blob/main/Jagadish_Ravichandran_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-stone-400 hover:text-stone-900 transition-colors"
          aria-label="Resume"
        >
          <GoFile className="text-xl" />
        </a>
      </div>
    </section>
  )
}

function Experience() {
  const roles = [
    {
      company: "Axelate Solutions",
      title: "Software Engineer",
      period: "Jun 2025 – Jun 2026",
      color: "#2563eb",
      highlights: [
        "Designed domain-driven backend services for a multi-tenant B2B SaaS platform, keeping business logic cleanly separated from application and infrastructure concerns.",
        "Owned database schema evolution end-to-end using PostgreSQL and Liquibase, ensuring data integrity and backward compatibility through every production deployment.",
        "Built tenant-aware authentication and authorization systems with JWT, OTP, and DPoP, enforcing domain-level isolation across the stack.",
        "Led integrations with external business platforms — navigating ambiguous documentation, resolving production issues, and delivering solutions that supported critical business operations.",
        "Raised engineering quality standards through behavior-driven testing, containerized integration tests, and automated quality gates.",
        "Established CI/CD pipelines and cloud infrastructure on DigitalOcean for reliable, scalable application delivery.",
      ],
    },
    {
      company: "Crayon Data",
      title: "Associate Software Engineer",
      period: "Aug 2023 – Jun 2025",
      color: "#059669",
      highlights: [
        "Developed GraphQL APIs using Hasura that enabled flexible, efficient data retrieval for a configuration-driven mobile application.",
        "Built a resilient email notification service in Spring Boot with automatic retry mechanisms for fault-tolerant message delivery.",
        "Improved backend performance and security for a digital banking platform through targeted database optimization and code obfuscation.",
      ],
    },
    {
      company: "Inoesis Technologies",
      title: "Software Developer Intern",
      period: "Aug 2021 – Feb 2022",
      color: "#d97706",
      highlights: [
        "Delivered REST APIs and integrated Twilio Video APIs for teleconsultation and appointment management features in healthcare applications.",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-24 px-6 border-t border-stone-200/60"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.2em] text-stone-500 mb-12">
          Experience
        </h2>
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[11px] sm:left-[15px] top-0 bottom-0 w-px bg-stone-200" />
          {roles.map((role, idx) => (
            <div key={role.company} className="relative pb-16 last:pb-0 group">
              <div
                className="absolute left-[-28px] sm:left-[-34px] top-[3px] w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full border-2 bg-white flex items-center justify-center"
                style={{ borderColor: role.color }}
              >
                <div
                  className="w-[7px] h-[7px] sm:w-[9px] sm:h-[9px] rounded-full"
                  style={{ backgroundColor: role.color }}
                />
              </div>
              <div
                className="rounded-lg border border-transparent transition-all duration-200 -m-3 p-3"
                style={{ '--c': role.color }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = role.color + '66'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-stone-900">
                      {role.company}
                    </h3>
                    <p className="text-sm text-stone-500">{role.title}</p>
                  </div>
                  <p className="text-sm text-stone-400 mt-1 sm:mt-0">
                    {role.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-sm text-stone-600 leading-relaxed pl-5 relative"
                    >
                      <span
                        className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: role.color }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    name: "Personal Expense Tracker",
    image: "/projects/personal-expense-tracker.png",
    description: "Track and visualize personal spending with a category-based dashboard and monthly breakdowns.",
    link: "https://personal-expense-management-app.onrender.com",
    github: "https://github.com/SSN-MiniProjects/personal-expense-tracker",
    repo: "SSN-MiniProjects/personal-expense-tracker",
    tech: [
      { name: "Flask", icon: SiFlask },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    name: "Form Bot",
    image: "/projects/formbot.jpg",
    description: "Create and manage forms entirely through Telegram with automated response collection.",
    link: "https://telegram.me/formspot_bot",
    github: "https://github.com/jagadish-ravichandran/Form_Telegram_Bot",
    repo: "jagadish-ravichandran/Form_Telegram_Bot",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Telegram", icon: SiTelegram },
    ],
  },
  {
    name: "TOTP Spring Boot App",
    image: "/projects/totp.jpg",
    description: "Production-ready two-factor authentication (2FA) with TOTP — AES-256-GCM encrypted secrets, QR code setup, and Spring Security integration.",
    github: "https://github.com/jagadish-ravichandran/totp-spring-boot-app",
    repo: "jagadish-ravichandran/totp-spring-boot-app",
    tech: [
      { name: "Java", icon: SiOpenjdk },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    name: "Put.io Telegram Bot",
    image: "/projects/putiobot.jpg",
    description: "Telegram bot to download torrents and generate direct download links using put.io integration.",
    github: "https://github.com/jagadish-ravichandran/Putio-Telegram-Bot",
    repo: "jagadish-ravichandran/Putio-Telegram-Bot",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "Telegram", icon: SiTelegram },
    ],
  },
]

function GitHubStats({ repo }) {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    if (!repo) return
    fetch(`https://api.github.com/repos/${repo}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStats({ stars: data.stargazers_count, forks: data.forks_count })
        }
      })
      .catch(() => {})
  }, [repo])

  if (!stats) return null

  return (
    <span className="flex items-center gap-3 text-xs text-stone-400">
      <span className="flex items-center gap-1">
        <GoStar /> {stats.stars}
      </span>
      <span className="flex items-center gap-1">
        <GoRepoForked /> {stats.forks}
      </span>
    </span>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 border-t border-stone-200/60"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.2em] text-stone-500 mb-12">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div key={p.name} className="border border-stone-200 rounded-lg overflow-hidden flex flex-col justify-between">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-medium text-stone-900 mb-2">
                    {p.name}
                  </h3>
                  <div className="shrink-0 flex items-center gap-2 mt-0.5">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-stone-400 hover:text-stone-900 transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub className="text-base" />
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-accent hover:text-stone-900 transition-colors"
                      >
                        Live &rarr;
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t.name}
                    className="flex items-center gap-1 text-xs text-stone-500"
                  >
                    <t.icon className="text-sm" />
                    {t.name}
                  </span>
                ))}
                {p.repo && <GitHubStats repo={p.repo} />}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ icon: Icon, name }) {
  return (
    <div className="flex items-center gap-2.5 p-3 rounded-lg border border-stone-200 bg-white hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default">
      <Icon className="text-lg text-stone-600 shrink-0" />
      <span className="text-sm text-stone-600 leading-tight">
        {name}
      </span>
    </div>
  )
}

function Skills() {
  const categories = [
    {
      name: "Core Technologies",
      items: [
        { name: "Java", icon: SiOpenjdk },
        { name: "Python", icon: SiPython },
        { name: "SQL", icon: SiPostgresql },
        { name: "JavaScript", icon: SiJavascript },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MinIO", icon: SiMinio },
        { name: "Bash", icon: SiGnubash },
      ],
    },
    {
      name: "Frameworks",
      items: [
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "Spring Security", icon: SiSpringsecurity },
        { name: "Spring Data JPA", icon: SiSpringboot },
        { name: "GraphQL", icon: SiGraphql },
        { name: "React.js", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Django", icon: SiDjango },
        { name: "Flask", icon: SiFlask },
      ],
    },
    {
      name: "Engineering Practices",
      items: [
        { name: "SonarCloud", icon: SiSonarqubecloud },
        { name: "CI/CD", icon: GoWorkflow },
        { name: "Docker", icon: SiDocker },
        { name: "GitHub Actions", icon: SiGithubactions },
        { name: "JUnit", icon: SiJunit5 },
        { name: "Cucumber", icon: SiCucumber },
        { name: "Testcontainers", icon: VscServerProcess },
        { name: "WireMock", icon: VscDebug },
      ],
    },
    {
      name: "AI-Assisted Development",
      items: [
        { name: "Spec-Driven Development", icon: GoFile },
        { name: "Claude Code", icon: SiClaude },
        { name: "AI-Assisted Engineering", icon: SiAnthropic },
        { name: "MCP (GitHub & Jira)", icon: GoPlug },
        { name: "Human-in-the-Loop Review", icon: GoPerson },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-24 px-6 border-t border-stone-200/60"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.2em] text-stone-500 mb-12">
          Skills
        </h2>
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-sm font-medium text-stone-900 mb-4">
                {cat.name}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {cat.items.map((item) => (
                  <SkillCard key={item.name} icon={item.icon} name={item.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-stone-200/60"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-[0.2em] text-stone-500 mb-6">
          Contact
        </h2>
        <p className="text-stone-600 leading-relaxed text-balance mb-10">
          Looking for an engineer who cares about architecture, quality, and
          delivery? Let's talk.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
          <a
            href="mailto:jagadishr6300@gmail.com"
            className="text-accent hover:text-stone-900 transition-colors"
          >
            jagadishr6300@gmail.com
          </a>
          <a
            href="https://github.com/jagadish-ravichandran"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:text-stone-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jagadish-r-b4822b216"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:text-stone-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-6 text-xs text-stone-400">
          +91 9597867439
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-stone-200/60">
      <div className="max-w-5xl mx-auto flex items-center justify-center text-xs text-stone-400">
        <p>&copy; {new Date().getFullYear()} Jagadish Ravichandran</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
