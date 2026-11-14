import ToolsDex from './ToolsDex';
import { useState } from 'react'
import {
  Menu, X, UserRound, Code2, FolderKanban, Award, Mail,
  Github, Linkedin, ArrowUpRight, Monitor, ShieldCheck,
  Wrench, Network, Terminal, ChevronDown, Sparkles, Zap,
} from 'lucide-react'

const navItems = [
  { label: 'Home', id: 'home', icon: Sparkles },
  { label: 'About Me', id: 'about', icon: UserRound },
  { label: 'Skills', id: 'skills', icon: Code2 },
  { label: 'IT Tools', id: 'tools', icon: Terminal },
  { label: 'Projects', id: 'projects', icon: FolderKanban },
  { label: 'Achievements', id: 'achievements', icon: Award },
  { label: 'Contact', id: 'contact', icon: Mail },
]

const skills = [
  { name: 'IT Support', value: 90, icon: Monitor, color: 'blue', detail: 'User assistance & troubleshooting' },
  { name: 'Problem Solving', value: 88, icon: Wrench, color: 'red', detail: 'Investigating and resolving issues' },
  { name: 'Networking', value: 70, icon: Network, color: 'blue', detail: 'Network fundamentals' },
  { name: 'Security Awareness', value: 78, icon: ShieldCheck, color: 'red', detail: 'Safe handling of user information' },
  { name: 'Technical Tools', value: 82, icon: Terminal, color: 'blue', detail: 'Documentation & productivity tools' },
]

const projects = [
  { number: '001', title: 'IT Support Knowledge Base', type: 'Documentation', description: 'A structured collection of troubleshooting steps, ticket notes, and support procedures.', tags: ['IT Support', 'Documentation'], icon: '📘' },
  { number: '002', title: 'Personal Portfolio', type: 'Web Development', description: 'A responsive portfolio that presents my skills, projects, and professional journey.', tags: ['React', 'CSS'], icon: '💻' },
  { number: '003', title: 'Ticket Tracking Concept', type: 'Process Improvement', description: 'A simple concept for organizing ticket status, follow-ups, and action-required items.', tags: ['Workflow', 'Support'], icon: '🎫' },
]

function Pokeball({ small = false }) {
  return <span className={`pokeball ${small ? 'pokeball-small' : ''}`} aria-hidden="true"><span /></span>
}

function SectionTitle({ eyebrow, title, number }) {
  return (
    <div className="section-title">
      <div className="section-title-icon"><Pokeball small /></div>
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      <span className="section-number">{number}</span>
    </div>
  )
}

function App() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const goTo = (id) => {
    setActive(id)
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <img src="/profile2.png" alt="Pixel trainer" style={{ width: 90, height: 90, objectFit: "contain", imageRendering: "pixelated" }} />
          <div className="brand-title">TRAINER<span>PORTFOLIO</span></div>
          <p>Catch my skills. <span>✦</span></p>
        </div>
        <nav className="side-nav" aria-label="Main navigation">
          {navItems.map(({ label, id, icon: Icon }) => (
            <button key={id} className={`nav-link ${active === id ? 'active' : ''}`} onClick={() => goTo(id)}>
              <Icon size={19} strokeWidth={2.5} /><span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="mini-trainer">✦</div>
          <p className="tiny-label">CURRENT QUEST</p>
          <strong>Level up every day.</strong>
          <span className="online-dot">Available for opportunities</span>
        </div>
      </aside>

      <main className="main-content">
        <header className="mobile-header">
          <div className="mobile-brand"><Pokeball small /> TRAINER PORTFOLIO</div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>

        <section className="hero" id="home">
          <div className="hero-topline"><span><Pokeball small /> IT PROFILE / NO. 001</span><span className="status"><i /> OPEN TO OPPORTUNITIES</span></div>
          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-kicker">HELLO, WORLD! I'M</p>
              <h1>[ALFIE REAL]<span className="name-dot">.</span></h1>
              <div className="role-line">IT SUPPORT <b>✦</b> TECH ENTHUSIAST <b>✦</b> PROBLEM SOLVER</div>
              <p className="hero-description">I help people solve tech problems, keep systems running, and turn every challenge into an opportunity to learn.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => goTo('projects')}>Explore my projects <ArrowUpRight size={17} /></button>
                <button className="button button-ghost" onClick={() => goTo('contact')}>Contact me <Mail size={17} /></button>
              </div>
              <div className="hero-caption"><span className="caption-line" /> MY NEXT ADVENTURE STARTS HERE</div>
            </div>
            <div className="hero-art" aria-label="Decorative Poké Ball illustration">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="hero-spark spark-a">✦</div><div className="hero-spark spark-b">✧</div>

              <img src="/logo.png" alt="IT support" style={{ width: 280, height: 280, objectFit: "contain", imageRendering: "pixelated" }} />
              {/*<div className="hero-pokeball"><Pokeball /></div>*/}
              <div className="hero-level"><span>Years of Experience</span><strong>05</strong><small>READY TO GROW</small></div>
              <div className="hero-chip">IT • SUPPORT • TECH</div>
            </div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><ChevronDown size={16} /><span className="hero-bottom-line" /></div>
        </section>

        <section className="content-section about-section" id="about">
          <SectionTitle eyebrow="GET TO KNOW YOUR TRAINER" title="About Me" number="01 / PROFILE" />
          <div className="about-grid">
            <div className="trainer-card">
              <div className="trainer-card-top"><span>PROFESIONAL CARD</span><span>NO. 001</span></div>


              {/* LINE ADDED */}
              <div className="avatar-placeholder"><img src="/profile.png" alt="My photo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} /><span className="avatar-star">✦</span></div>
              {/* <div className="avatar-placeholder"><UserRound size={62} /><span className="avatar-star">✦</span></div> */}
              <h3>[ALFIE REAL]</h3><p className="trainer-role">IT SUPPORT SPECIALIST</p>
              <div className="trainer-card-bottom"><span><i /> ACTIVE TRAINER</span><Pokeball small /></div>
            </div>
            <div className="about-copy">
              <span className="red-label">A LITTLE ABOUT MY JOURNEY</span>
              <h3>Curious mind. Helpful nature. <em>Always learning.</em></h3>
              <p>I'm an aspiring IT professional who enjoys helping users, troubleshooting technical issues, and learning how technology works. I believe every ticket solved is experience gained and every challenge is a chance to improve.</p>
              <p>My goal is to keep growing my technical knowledge while delivering clear, reliable, and friendly support.</p>
              <div className="info-pills"><span>📍 Philippines</span><span>💡 Continuous learner</span><span>🛠️ IT Support</span></div>
            </div>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <SectionTitle eyebrow="YOUR TRAINER STATS" title="Skills & Abilities" number="02 / STATS" />
          <div className="skills-layout">
            <div className="skills-list">
              {skills.map(({ name, value, icon: Icon, color, detail }) => (
                <div className="skill-row" key={name}>
                  <div className={`skill-icon ${color}`}><Icon size={19} /></div>
                  <div className="skill-info"><div className="skill-name"><strong>{name}</strong><span>{value}/100</span></div><div className="skill-track"><span style={{ width: `${value}%` }} /></div><small>{detail}</small></div>
                </div>
              ))}
            </div>
            <div className="stats-card">
              <div className="stats-card-head"><span>TRAINER ATTRIBUTES</span><Zap size={17} /></div>
              <div className="stat-orb"><div className="stat-orb-inner"><span>LV.</span><strong>01</strong><small>AND GROWING</small></div></div>
              <div className="stat-foot"><span>✦ LEARNING MODE: <b>ON</b></span><span>EXP <b>+100</b></span></div>
            </div>
          </div>
          <p className="section-note">Skills shown are a starting template. Update the ratings to reflect your actual experience.</p>
        </section>

        <ToolsDex />
        <section className="content-section projects-section" id="projects">
          <SectionTitle eyebrow="YOUR ADVENTURE LOG" title="Featured Projects" number="03 / POKÉDEX" />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top"><span>ENTRY #{project.number}</span><span className="project-type">{project.type}</span></div>
                <div className="project-art">{project.icon}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <button className="project-link" onClick={() => goTo('contact')}>Ask me about this <ArrowUpRight size={15} /></button>
              </article>
            ))}
          </div>
          <p className="section-note">Replace these sample entries with your real projects, screenshots, and repository links.</p>
        </section>

        <section className="content-section achievements-section" id="achievements">
          <SectionTitle eyebrow="MILESTONES UNLOCKED" title="Achievements" number="04 / BADGES" />
          <div className="badges-grid">
            <div className="badge-item"><div className="badge-medal red-medal">✦</div><strong>Problem Solver</strong><span>For every challenge faced</span></div>
            <div className="badge-item"><div className="badge-medal blue-medal"><ShieldCheck /></div><strong>Support Hero</strong><span>Helping users move forward</span></div>
            <div className="badge-item"><div className="badge-medal gold-medal"><Zap /></div><strong>Fast Learner</strong><span>Always gaining EXP</span></div>
            <div className="badge-item"><div className="badge-medal silver-medal"><Award /></div><strong>Team Player</strong><span>Better work, together</span></div>
          </div>
          <p className="section-note">Add your actual certificates, training, and accomplishments here.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy"><span className="eyebrow">READY FOR THE NEXT QUEST?</span><h2>Let's build something <em>great.</em></h2><p>Have an opportunity, a project, or just want to connect? I'd be happy to hear from you.</p></div>
          <a className="button button-light" href="mailto:your.email@example.com">Send me an email <Mail size={17} /></a>
          <div className="contact-decoration"><Pokeball /></div>
        </section>

        <footer className="footer"><div className="footer-brand"><Pokeball small /><span>TRAINER PORTFOLIO</span></div><p>MADE WITH CURIOSITY, COURAGE & A LITTLE BIT OF CODE.</p><div className="footer-links"><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a></div><span className="copyright">© {new Date().getFullYear()} [Your Name]</span></footer>
      </main>
    </div>
  )
}

export default App
