import React, { useMemo, useState } from "react";
import profileImage from "../ALEX.jpeg";
const navItems = ["Home", "About", "Projects", "Skills", "Labs", "Experience", "Writing", "Contact"];

const stats = [
  { value: "6+", label: "Core focus areas" },
  { value: "5", label: "Major project concepts" },
  { value: "10+", label: "Technical lab domains" },
  { value: "Africa", label: "Main region focus" },
];

const projects = [
  {
    title: "RouterWatch Pro",
    category: "Network Monitoring SaaS",
    status: "Prototype concept and working local monitor",
    icon: "📡",
    description:
      "A practical monitoring product for small ISPs using MikroTik gateways, AP/router chains, and lightweight local dashboards. It focuses on AP presence, client counts, gateway health, CPU load, and network visibility where only the head MikroTik controls DHCP.",
    impact:
      "Designed for small ISP environments in Africa where teams need affordable visibility without enterprise NMS complexity.",
    highlights: [
      "MikroTik RouterOS monitoring through SSH/API-style data collection",
      "AP presence detection using bridge host, ARP, DHCP lease, and health data",
      "Dark NOC-style dashboard served locally with remote access options",
      "Future direction: SMS/WhatsApp alerts, multi-tenant SaaS, and white-label local deployment",
    ],
    tags: ["MikroTik", "Python", "Paramiko", "RouterOS", "SaaS", "ISP Tools", "NOC Dashboard"],
  },
  {
    title: "ISP Billing and Hotspot Platform",
    category: "Multi-Tenant SaaS Blueprint",
    status: "Business and engineering blueprint",
    icon: "🧾",
    description:
      "A full SaaS blueprint for ISP billing and hotspot management with tenant subdomains, router provisioning, mobile money payments, vouchers, customer portals, session recovery, reports, and technician workflows.",
    impact:
      "Positioned as an East African alternative to existing billing systems, with Uganda-specific mobile money and a 0 percent revenue-cut model.",
    highlights: [
      "Tenant-based architecture using tenant_id isolation and subdomain routing",
      "Mobile money direction for MTN Uganda MoMo and Airtel Money through Flutterwave",
      "MikroTik provisioning, hotspot profiles, vouchers, active sessions, and expiry scheduling",
      "Financial reports, expenses, P&L, cashier tracking, and router-wise revenue visibility",
    ],
    tags: ["Laravel", "MySQL", "Redis", "RouterOS API", "Flutterwave", "Soketi", "Multi-Tenant"],
  },
  {
    title: "Smart Maternal Health Monitoring System",
    category: "SDG 3 Health-Tech System",
    status: "Research-backed product concept",
    icon: "👶",
    description:
      "A maternal health system concept built around ANC reminders, emergency SOS, free emergency calls/SMS, USSD access, vitals integration, AI guidance, ambulance linkage, and health-worker risk dashboards.",
    impact:
      "Built around fieldwork and stakeholder feedback in Mukono, with emphasis on reducing delays in care, missed ANC visits, and poor emergency response.",
    highlights: [
      "Multi-channel access through smartphone app, USSD, SMS, and emergency calls",
      "Risk scoring from ANC data, vitals, lab results, missed visits, and medical history",
      "Role-based dashboards for doctors, lab technicians, midwives, receptionists, and administrators",
      "Field validation through feedback capture grids and health-worker interviews",
    ],
    tags: ["SDG 3", "Health Tech", "USSD", "AI Chatbot", "Risk Scoring", "Mukono", "Uganda"],
  },
];

const skillGroups = [
  {
    name: "Programming and Web",
    icon: "💻",
    items: ["Python", "Java", "C++", "PHP", "Laravel", "HTML", "CSS", "JavaScript", "React", "Blade", "Alpine.js"],
  },
  {
    name: "Data and Databases",
    icon: "🗄️",
    items: ["MySQL", "Database Design", "ERDs", "Normalization", "SQL Queries", "Data Reporting", "Dashboards", "Excel"],
  },
  {
    name: "Networking and ISP Systems",
    icon: "🌐",
    items: ["MikroTik", "RouterOS", "Hotspot", "DHCP", "ARP", "Bridge Hosts", "VLANs", "Trunking", "Static IPs", "Ping Testing"],
  },
  {
    name: "Systems and Support",
    icon: "🖥️",
    items: ["Windows Installation", "Ubuntu", "Dual Boot", "BIOS", "POST", "Device Manager", "Remote Desktop", "AnyDesk", "VirtualBox"],
  },
  {
    name: "Tools and Workflow",
    icon: "⚙️",
    items: ["GitHub", "VS Code", "Laragon", "Composer", "npm", "Overleaf", "Rufus", "Winbox", "Postman"],
  },
  {
    name: "Professional Strengths",
    icon: "✅",
    items: ["Troubleshooting", "Technical Writing", "Field Research", "Product Thinking", "Documentation", "Business Modelling"],
  },
];

const labAreas = [
  { icon: "🔩", title: "Hardware Repair", text: "Disassembly, cleaning, component identification, reassembly, POST and BIOS checks." },
  { icon: "🪟", title: "Operating Systems", text: "Windows installation, Ubuntu boot media, disk partitions, Legacy boot, and dual boot safety." },
  { icon: "🔌", title: "Networking", text: "Static IPs, ping tests, firewall checks, folder sharing, LAN troubleshooting, and adapter setup." },
  { icon: "📦", title: "Virtualization", text: "VirtualBox VM creation, ISO mounting, shared folders, Windows and Ubuntu VM workflows." },
  { icon: "🛰️", title: "Remote Support", text: "Windows Remote Desktop and AnyDesk support sessions with technician and client roles." },
  { icon: "🖨️", title: "Printer Management", text: "Drivers, ports, sharing, print queues, paper jams, faded print, and routine maintenance." },
];

const timeline = [
  {
    year: "Now",
    title: "Data Science and Analytics Student",
    place: "Uganda Christian University",
    icon: "🎓",
    text:
      "Building foundations in programming, data, databases, networks, computer systems, research, and practical computing through coursework and projects.",
  },
  {
    year: "2026",
    title: "Workshop Practice and IT Support Training",
    place: "UCU Practical Labs",
    icon: "🛠️",
    text:
      "Hands-on exposure to hardware repair, system installation, diagnostics, networking, virtual machines, remote support, printer installation, and documentation.",
  },
  {
    year: "2026",
    title: "RouterWatch Pro and ISP Automation",
    place: "Independent Builder Work",
    icon: "📡",
    text:
      "Developing practical ideas for small ISP monitoring, hotspot billing, MikroTik automation, router health visibility, client session management, and alerts.",
  },
  {
    year: "2026",
    title: "SDG 3 Maternal Health Research",
    place: "Mukono Fieldwork",
    icon: "❤️",
    text:
      "Explored high maternal mortality challenges and proposed a smart monitoring system using USSD, emergency alerts, ANC reminders, vitals, and health-worker dashboards.",
  },
];

const writing = [
  {
    title: "From Screws to Smart Systems",
    type: "Medium article",
    text:
      "A reflective article connecting hardware practice, system troubleshooting, and the growth from basic repair skills to smarter digital systems.",
  },
  {
    title: "AI Agents: Your Secret Study Buddy",
    type: "Medium article",
    text:
      "A student-focused piece explaining how AI agents can support learning, productivity, research, and technical projects.",
  },
  {
    title: "Workshop Practice LinkedIn Posts",
    type: "Professional posts",
    text:
      "Mature public updates explaining practical IT lessons, troubleshooting habits, and hands-on learning without sounding overly robotic.",
  },
];

function SectionHeader({ label, title, text }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {text && <p className="section-lead">{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeSkillName, setActiveSkillName] = useState(skillGroups[0].name);

  const activeProject = projects[activeProjectIndex];
  const activeSkillGroup = useMemo(
    () => skillGroups.find((group) => group.name === activeSkillName) || skillGroups[0],
    [activeSkillName]
  );

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Damba Alex home">
          <span className="brand-mark">DA</span>
          <span>
            <strong>Damba Alex</strong>
            <small>Portfolio</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="ghost-button" href="https://github.com/alexkwagala09" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="primary-button small" href="mailto:alexkwagala09@gmail.com">
            Contact
          </a>
        </div>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? "✕" : "☰"}
        </button>

        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="pill">Data Science Student • ISP Systems Builder • Practical IT Learner</p>
            <h1>I am a Data Science and Analytics student at Uganda Christian University with an interest in using data to solve real-world problems.</h1>
            <p className="hero-text">
              I am developing skills in programming, database management, data analysis, data visualization, and problem-solving. My goal is to use data to support better decision-making and create practical solutions for communities and organizations.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">View Projects</a>
              <a className="ghost-button" href="mailto:alexkwagala09@gmail.com">alexkwagala09@gmail.com</a>
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="profile-card">
            <div className="window-dots" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <div className="avatar">DA</div>
            <p className="availability">Available for projects</p>
            <div className="profile-photo-4-3">
              <img src={profileImage} alt="Portrait photo of Damba Alex" />
            </div>
            <h2>Builder profile</h2>
            <p>
              I like projects that connect classroom theory to working systems: router monitoring, billing platforms, maternal health systems, lab documentation, web portfolios, databases, and support workflows.
            </p>
            <div className="profile-list">
              <span>📍 Kampala, Uganda</span>
              <span>🎓 Uganda Christian University</span>
              <span>📊 Data, networks, SaaS, health-tech, IT support</span>
              <a href="https://medium.com/@alexkwagala09/a-faster-way-to-save-mothers-78d58af7227a" target="_blank" rel="noreferrer">📝 Latest article on Medium</a>
            </div>
          </aside>
        </section>

        <section id="about" className="section">
          <SectionHeader
            label="About"
            title="A practical learner with a builder mindset"
            text="My portfolio is built around real technical work: software concepts, ISP operations, health-tech research, systems support, and professional reporting."
          />

          <div className="about-grid">
            <div className="large-card">
              <h3>Professional summary</h3>
              <p>
                I am a Data Science and Analytics student developing practical skills in data analysis, systems design, and software development. My current focus is on building data-driven projects that bridge coursework with real-world applications: network analytics, health-tech systems, ISP data platforms, and data-informed decision-making tools.
              </p>
              <p>
                My work combines academic learning with hands-on project experience. I'm exploring how data science can address problems in Internet operations, digital health, and technology infrastructure—particularly in resource-constrained environments where practical solutions and actionable insights matter most.
              </p>
            </div>

            <div className="focus-grid">
              {[
                ["🌐", "ISP and Network Automation", "Designing tools for small internet providers, especially around MikroTik monitoring, hotspot billing, customer portals, alerts, and router provisioning."],
                ["❤️", "Health-Tech for Community Impact", "Exploring digital health systems that improve maternal care access, emergency response, ANC follow-up, and health-worker decision support."],
                ["🖥️", "Practical IT Support", "Working across hardware, operating systems, drivers, diagnostics, remote support, peer-to-peer networks, virtual machines, and printers."],
              ].map(([icon, title, text]) => (
                <div className="mini-card" key={title}>
                  <span className="card-icon">{icon}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeader
            label="Projects"
            title="Selected work and product thinking"
            text="Each project is presented like a professional case study, showing the problem, direction, technologies, and practical value."
          />

          <div className="project-layout">
            <div className="project-tabs">
              {projects.map((project, index) => (
                <button
                  className={`project-tab ${activeProjectIndex === index ? "active" : ""}`}
                  key={project.title}
                  onClick={() => setActiveProjectIndex(index)}
                >
                  <span>{project.icon}</span>
                  <div>
                    <small>{project.category}</small>
                    <strong>{project.title}</strong>
                    <p>{project.description}</p>
                  </div>
                </button>
              ))}
            </div>

            <article className="project-detail">
              <div className="detail-header">
                <div>
                  <p className="eyebrow">Case study</p>
                  <h3>{activeProject.title}</h3>
                </div>
                <span className="status-badge">{activeProject.status}</span>
              </div>

              <p className="detail-description">{activeProject.description}</p>

              <div className="impact-box">
                <strong>Impact direction</strong>
                <p>{activeProject.impact}</p>
              </div>

              <div className="highlight-list">
                {activeProject.highlights.map((point) => (
                  <p key={point}>✅ {point}</p>
                ))}
              </div>

              <div className="tag-list">
                {activeProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHeader
            label="Skills"
            title="Technical stack and practical abilities"
            text="The skill set is broad because my work moves from code to networks, databases, field research, reports, and real hardware."
          />

          <div className="skills-layout">
            <div className="skill-tabs">
              {skillGroups.map((group) => (
                <button
                  className={activeSkillName === group.name ? "active" : ""}
                  key={group.name}
                  onClick={() => setActiveSkillName(group.name)}
                >
                  <span>{group.icon}</span>
                  {group.name}
                </button>
              ))}
            </div>

            <div className="skill-panel">
              <p className="eyebrow">Skill group</p>
              <h3>{activeSkillGroup.icon} {activeSkillGroup.name}</h3>
              <div className="skill-tags">
                {activeSkillGroup.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="labs" className="section">
          <SectionHeader
            label="Practical labs"
            title="Hands-on technical foundation"
            text="These areas show practical competence beyond theory: setting up systems, diagnosing problems, documenting evidence, and solving issues step by step."
          />

          <div className="lab-grid">
            {labAreas.map((area) => (
              <div className="mini-card lab-card" key={area.title}>
                <span className="card-icon">{area.icon}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeader
            label="Experience"
            title="Learning journey and direction"
            text="A timeline of the areas I am actively growing in as a student, builder, researcher, and technical problem solver."
          />

          <div className="timeline-grid">
            {timeline.map((item) => (
              <div className="timeline-card" key={item.title}>
                <div className="timeline-top">
                  <span className="card-icon">{item.icon}</span>
                  <small>{item.year}</small>
                </div>
                <h3>{item.title}</h3>
                <strong>{item.place}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="writing" className="section">
          <SectionHeader
            label="Writing"
            title="Technical writing and public communication"
            text="I document what I build and learn, turning technical work into reports, guides, articles, and professional posts."
          />

          <div className="writing-grid">
            {writing.map((item) => (
              <div className="mini-card" key={item.title}>
                <small>{item.type}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#contact">View writing →</a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s build something useful.</h2>
              <p>
                I am open to collaborations, student projects, technical writing, networking tasks, web systems, data projects, ISP automation ideas, and health-tech solutions that solve real problems.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="mailto:alexkwagala09@gmail.com">Email Me</a>
                <a className="ghost-button" href="https://github.com/alexkwagala09" target="_blank" rel="noreferrer">GitHub</a>
                <a className="ghost-button" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <div className="contact-info">
              <div>
                <small>Email</small>
                <strong>alexkwagala09@gmail.com</strong>
              </div>
              <div>
                <small>Location</small>
                <strong>Kampala, Uganda</strong>
              </div>
              <div>
                <small>Current focus</small>
                <strong>Data Science, ISP automation, web systems, and technical support</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Damba Alex. Built with React, Vite, responsive design, and a practical builder mindset.
      </footer>
    </div>
  );
}

export default App;
