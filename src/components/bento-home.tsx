import { resumeData } from "@/data/resume";

const skillLabels: Record<string, string> = {
  Frontend: "Frontend",
  Backend: "Backend",
  Salesforce: "Salesforce",
  CloudDevOps: "Cloud & DevOps",
  AIData: "AI & Data",
};

const socials = [
  { name: "GitHub", url: "https://github.com/pouyapanahandeh" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/pouyapan/" },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/6927069/pooya-panahandeh",
  },
];

function displayPhone(phone: string) {
  if (phone === "+36307363426") return "+36 30 736 3426";
  return phone;
}

export function BentoHome() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top">
            <span className="mark" aria-hidden="true" />
            POOYA
          </a>
          <nav aria-label="Page">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" className="page">
        <div className="wrap">
          <section className="bento hero" id="top" aria-labelledby="hero-title">
            <article className="tile name-tile">
              <p className="eyebrow">{resumeData.title}</p>
              <h1 id="hero-title">
                Pooya
                <br />
                Panahandeh
              </h1>
              <p className="pill">
                <span className="pulse" aria-hidden="true" /> Available for new
                opportunities
              </p>
              <div className="actions">
                <a className="btn" href={`mailto:${resumeData.email}`}>
                  Email me
                </a>
                <a className="btn ghost" href="#work">
                  Selected work
                </a>
              </div>
            </article>

            <article
              className="tile art-tile"
              aria-label="Flat illustration of a geometric builder with a layout, a plant, and a paper plane"
            >
              <svg viewBox="0 0 440 520" role="img">
                <title>Colorful flat illustration of an engineer assembling a page</title>
                <g className="float-a">
                  <circle cx="330" cy="78" r="46" fill="#ddf56a" />
                </g>
                <rect x="48" y="70" width="280" height="340" rx="36" fill="#fffdf8" />
                <rect x="74" y="98" width="228" height="150" rx="18" fill="#e4deff" />
                <circle cx="96" cy="120" r="6" fill="#ff7a3c" />
                <circle cx="116" cy="120" r="6" fill="#ddf56a" />
                <circle cx="136" cy="120" r="6" fill="#2a38e6" />
                <rect x="92" y="142" width="120" height="16" rx="8" fill="#161616" />
                <rect x="92" y="168" width="78" height="54" rx="10" fill="#ffd7cc" />
                <rect x="178" y="168" width="100" height="24" rx="8" fill="#2a38e6" />
                <rect x="178" y="198" width="100" height="24" rx="8" fill="#ddf56a" />
                <g className="float-b">
                  <rect x="78" y="270" width="86" height="64" rx="16" fill="#ff7a3c" />
                  <rect x="92" y="284" width="58" height="10" rx="5" fill="#fffdf8" />
                  <rect x="92" y="302" width="40" height="10" rx="5" fill="#161616" />
                </g>
                <g className="float-c">
                  <circle cx="250" cy="292" r="28" fill="#f3c2a0" />
                  <path
                    d="M226 286c4-28 18-36 28-34 16 2 26 16 24 36-12-6-20-4-28 2-8-8-16-8-24-4z"
                    fill="#161616"
                  />
                  <circle cx="240" cy="296" r="3" fill="#161616" />
                  <circle cx="260" cy="296" r="3" fill="#161616" />
                  <path
                    d="M242 308c4 4 12 4 16 0"
                    fill="none"
                    stroke="#161616"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <rect x="222" y="318" width="64" height="78" rx="24" fill="#2a38e6" />
                </g>
                <g className="float-a">
                  <path
                    d="M360 250l48 14-28 18 8 22-24-14-22 16 4-24-22-12 28-4z"
                    fill="#ff4f8b"
                  />
                </g>
                <rect x="40" y="430" width="36" height="28" rx="8" fill="#c7321a" />
                <circle cx="48" cy="400" r="22" fill="#1f6a4e" />
                <circle cx="70" cy="386" r="18" fill="#2f9e6b" />
                <circle cx="34" cy="384" r="14" fill="#7dcea0" />
              </svg>
            </article>

            <article className="tile bio-tile" id="about">
              <h2 className="section-title about-title">About</h2>
              <p className="lede">{resumeData.bio}</p>
            </article>

            <article className="tile stat lime years">
              <strong>6+</strong>
              <span>Years shipping platforms for startups and global teams.</span>
            </article>
            <article className="tile stat blush now">
              <strong>EF</strong>
              <span>
                Software developer in Budapest since Dec 2022. Next.js, Salesforce,
                Cultural Care.
              </span>
            </article>
            <article className="tile stat lilac base">
              <strong>Budapest</strong>
              <span>Based in Hungary. Happy to talk about the next thing.</span>
            </article>
            <article className="tile stat school">
              <strong>ELTE</strong>
              <span>
                Computer Science BSc, then an AI MSc left incomplete — face swap,
                2D-to-3D, behavior prediction.
              </span>
            </article>
          </section>

          <h2 className="section-title" id="work">
            Selected work
          </h2>
          <div className="work">
            <article className="featured s4">
              <div>
                <p className="index">01 · 2021 – 2022</p>
                <h3>Banzzay PWA</h3>
                <p>
                  The whole product, from concept to a progressive web app. People
                  pin a shortcut to their own account on the home screen. Vue.js and
                  Quasar, start to finish.
                </p>
                <ul className="tags">
                  <li>Vue.js</li>
                  <li>Quasar</li>
                  <li>PWA</li>
                </ul>
              </div>
              <svg className="flat featured-art" viewBox="0 0 160 160" aria-hidden="true">
                <rect x="48" y="12" width="64" height="120" rx="16" fill="#fffdf8" />
                <rect x="60" y="28" width="40" height="64" rx="8" fill="#2a38e6" />
                <circle cx="80" cy="112" r="6" fill="#ddf56a" />
                <path
                  d="M80 40l4 9 10 1-7 6 2 10-9-5-9 5 2-10-7-6 10-1z"
                  fill="#ddf56a"
                />
              </svg>
            </article>

            <article className="s2">
              <div className="icon-row">
                <p className="index">02</p>
                <svg className="flat" viewBox="0 0 72 72" aria-hidden="true">
                  <rect x="8" y="40" width="12" height="20" rx="4" fill="#2a38e6" />
                  <rect x="26" y="26" width="12" height="34" rx="4" fill="#ff7a3c" />
                  <rect x="44" y="34" width="12" height="26" rx="4" fill="#ddf56a" />
                  <path
                    d="M10 28c12-16 28-8 44 2"
                    fill="none"
                    stroke="#161616"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Churn &amp; tasks</h3>
              <p>
                Customer-churn prediction and a task recommendation system for
                Banzzay.
              </p>
              <ul className="tags">
                <li>Python</li>
                <li>PyTorch</li>
                <li>Firebase</li>
              </ul>
            </article>

            <article className="s2">
              <div className="icon-row">
                <p className="index">03</p>
                <svg className="flat" viewBox="0 0 72 72" aria-hidden="true">
                  <circle cx="36" cy="40" r="18" fill="#ff4f8b" />
                  <rect x="30" y="12" width="6" height="16" rx="3" fill="#161616" />
                  <circle cx="33" cy="10" r="6" fill="#161616" />
                  <rect
                    x="44"
                    y="16"
                    width="6"
                    height="14"
                    rx="3"
                    fill="#161616"
                    transform="rotate(20 47 23)"
                  />
                </svg>
              </div>
              <h3>madj.club</h3>
              <p>Co-founder and frontend. Nuxt.js, Vue.js, Vuetify. 2017–2019.</p>
              <ul className="tags">
                <li>Nuxt.js</li>
                <li>Vue.js</li>
              </ul>
            </article>

            <article className="s2">
              <div className="icon-row">
                <p className="index">04</p>
                <svg className="flat" viewBox="0 0 72 72" aria-hidden="true">
                  <path d="M10 24h24l8 10h20v26H10z" fill="#ddf56a" />
                  <circle cx="48" cy="46" r="6" fill="#2a38e6" />
                  <path
                    d="M18 48c8-8 14-2 20 2"
                    fill="none"
                    stroke="#161616"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Manytours</h3>
              <p>UI/UX and frontend for manytours.com — tourflow.co.</p>
              <ul className="tags">
                <li>UI/UX</li>
                <li>Vue.js</li>
              </ul>
            </article>

            <article className="s2">
              <div className="icon-row">
                <p className="index">05</p>
                <svg className="flat" viewBox="0 0 72 72" aria-hidden="true">
                  <circle cx="20" cy="28" r="10" fill="#2a38e6" />
                  <circle cx="42" cy="20" r="8" fill="#ff7a3c" />
                  <circle cx="36" cy="44" r="12" fill="#ddf56a" />
                  <rect x="50" y="36" width="14" height="24" rx="4" fill="#161616" />
                </svg>
              </div>
              <h3>WAAC</h3>
              <p>
                Swarm and Neuron: UI/UX, a Spring Boot API gateway, and a native
                Android app.
              </p>
              <ul className="tags">
                <li>Spring Boot</li>
                <li>Android</li>
              </ul>
            </article>

            <article className="s3">
              <div className="icon-row">
                <p className="index">06 · 2019 – 2021</p>
                <svg className="flat" viewBox="0 0 72 72" aria-hidden="true">
                  <rect x="8" y="14" width="36" height="44" rx="6" fill="#e4deff" />
                  <rect x="16" y="24" width="20" height="6" rx="3" fill="#2a38e6" />
                  <rect x="16" y="34" width="14" height="6" rx="3" fill="#161616" />
                  <rect x="40" y="30" width="24" height="30" rx="4" fill="#ffd7cc" />
                </svg>
              </div>
              <h3>Vodafone Business</h3>
              <p>
                Website features, a console editor for components, PDF-to-HTML with
                preview, and landing pages.
              </p>
              <ul className="tags">
                <li>JavaScript</li>
                <li>SASS</li>
                <li>HTML</li>
              </ul>
            </article>

            <article className="s3">
              <div className="icon-row">
                <p className="index">07 · ELTE AI</p>
                <svg className="flat" viewBox="0 0 72 72" aria-hidden="true">
                  <circle cx="24" cy="36" r="16" fill="#ffd7cc" />
                  <circle cx="48" cy="36" r="16" fill="#ddf56a" />
                  <circle cx="20" cy="34" r="3" fill="#161616" />
                  <circle cx="44" cy="34" r="3" fill="#161616" />
                </svg>
              </div>
              <h3>Real-time face swap</h3>
              <p>
                Kotlin, during the AI master’s at ELTE. A live swap, not a filter
                you wait on.
              </p>
              <ul className="tags">
                <li>Kotlin</li>
                <li>Vision</li>
              </ul>
            </article>

            <article className="s3">
              <div className="icon-row">
                <p className="index">08 · ELTE AI</p>
                <svg className="flat" viewBox="0 0 72 72" aria-hidden="true">
                  <rect x="8" y="22" width="30" height="30" rx="6" fill="#e4deff" />
                  <path d="M36 16l22 12v26L36 66 28 56V28z" fill="#2a38e6" />
                </svg>
              </div>
              <h3>2D to 3D</h3>
              <p>Generating a 3D model from a single 2D picture. Python.</p>
              <ul className="tags">
                <li>Python</li>
                <li>3D</li>
              </ul>
            </article>

            <article className="s3">
              <div className="icon-row">
                <p className="index">09 · ELTE AI</p>
                <svg className="flat" viewBox="0 0 72 72" aria-hidden="true">
                  <circle cx="26" cy="24" r="12" fill="#ffd7cc" />
                  <rect x="14" y="40" width="28" height="22" rx="11" fill="#ff7a3c" />
                  <circle cx="52" cy="30" r="5" fill="#2a38e6" />
                  <circle cx="60" cy="44" r="4" fill="#161616" />
                </svg>
              </div>
              <h3>Behavior prediction</h3>
              <p>
                Human behavior prediction in Python, alongside the other ELTE AI
                projects.
              </p>
              <ul className="tags">
                <li>Python</li>
                <li>ML</li>
              </ul>
            </article>

            <article className="s6 hack-grid">
              <article className="hack">
                <p className="year">2017</p>
                <h3>EIT Climathon</h3>
                <p>Android application.</p>
              </article>
              <article className="hack">
                <p className="year">2018</p>
                <h3>Accor Hotel</h3>
                <p>Smart mirror.</p>
              </article>
              <article className="hack">
                <p className="year">2019</p>
                <h3>Nokia internal</h3>
                <p>Tracking system.</p>
              </article>
              <article className="hack">
                <p className="year">2019</p>
                <h3>Junction X Budapest</h3>
                <p>PWA game.</p>
              </article>
            </article>

            <article className="oss s3">
              <p className="index">OPEN SOURCE</p>
              <h3>Treewise</h3>
              <p>TypeScript library for tree and forest data structures.</p>
            </article>
            <article className="oss s3">
              <p className="index">NPM</p>
              <h3>country-phonecode-flag</h3>
              <p>Lightweight package for country flags and phone codes.</p>
            </article>
          </div>

          <h2 className="section-title" id="experience">
            Experience
          </h2>
          <div className="exp-list">
            <article>
              <div className="exp-top">
                <h3>EF · Budapest</h3>
                <p className="dates">Dec 2022 – Present</p>
              </div>
              <p className="role">Software Developer · ILS</p>
              <ul>
                <li>
                  Salesforce engineering for the ILS division, after earlier feature
                  work on the Cultural Care au pair app.
                </li>
                <li>Landing pages for marketing initiatives. Next.js, React, TypeScript.</li>
                <li>
                  Salesforce implementation for the sales process: custom development
                  with Apex, LWC, flows, and the data model.
                </li>
                <li>Integrations that connect Salesforce with other systems through APIs.</li>
                <li>Building and implementing AI agents with Salesforce Agentforce.</li>
              </ul>
            </article>
            <article>
              <div className="exp-top">
                <h3>Banzzay · Budapest</h3>
                <p className="dates">Dec 2021 – June 2022</p>
              </div>
              <p className="role">Full Stack Developer</p>
              <ul>
                <li>
                  Built the PWA from scratch, including the home-screen account
                  shortcut. Vue.js, Quasar.
                </li>
                <li>Customer-churn prediction. Python, PyTorch, Firebase Functions.</li>
                <li>Task recommendation system. Python, PyTorch.</li>
              </ul>
            </article>
            <article>
              <div className="exp-top">
                <h3>Vodafone · Budapest</h3>
                <p className="dates">Oct 2019 – Oct 2021</p>
              </div>
              <p className="role">Web Developer Intern</p>
              <ul>
                <li>Vodafone Business websites. JavaScript, HTML5, CSS3, SASS.</li>
                <li>Online editor for testing components via the developer console.</li>
                <li>PDF to HTML, including preview, and business landing pages.</li>
              </ul>
            </article>
            <article>
              <div className="exp-top">
                <h3>Nokia · Budapest</h3>
                <p className="dates">Feb 2019 – August 2019</p>
              </div>
              <p className="role">Intern Web Developer</p>
              <ul>
                <li>
                  Management tools: features and bug fixes with Express.js and vanilla
                  JavaScript.
                </li>
              </ul>
            </article>
            <article>
              <div className="exp-top">
                <h3>Manytours, madj.club, WAAC</h3>
                <p className="dates">Sep 2017 – Sep 2019</p>
              </div>
              <p className="role">Software Programmer &amp; UI Developer</p>
              <ul>
                <li>Manytours / tourflow.co: UI and frontend. Nuxt.js, Vue.js, Vuetify.</li>
                <li>madj.club: co-founder and frontend. Nuxt.js, Vue.js, Vuetify.</li>
                <li>
                  WAAC: Swarm and Neuron UI/UX, Spring Boot API gateway, Android app
                  in Java.
                </li>
              </ul>
            </article>
          </div>

          <h2 className="section-title">Education</h2>
          <div className="oss-grid">
            <article className="oss">
              <p className="index">FEB 2016 – JUNE 2019</p>
              <h3>ELTE · Computer Science BSc</h3>
              <p>
                Thesis: a new encryption method for p2p connections (Java). TDK: TCP
                connection over blockchain (Java).
              </p>
            </article>
            <article className="oss">
              <p className="index">SEP 2019 – JAN 2021</p>
              <h3>ELTE · AI MSc, incomplete</h3>
              <p>
                Real-time face swap (Kotlin), 3D models from 2D pictures (Python),
                human behavior prediction (Python).
              </p>
            </article>
          </div>

          <h2 className="section-title" id="skills">
            Skills
          </h2>
          <div className="skills">
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <article key={category}>
                <h3>{skillLabels[category] ?? category}</h3>
                <ul className="skill-pills">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <section className="contact-tile" id="contact" aria-labelledby="contact-title">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Let’s build the next one.</h2>
            </div>
            <ul className="contact-links">
              <li>
                <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
              </li>
              <li>
                <a href={`tel:${resumeData.phone}`}>{displayPhone(resumeData.phone)}</a>
              </li>
              <li>{resumeData.location}</li>
              <li>
                {socials.map((social, index) => (
                  <span key={social.name}>
                    {index > 0 ? " · " : null}
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </span>
                ))}
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <p>
            © {year} {resumeData.name}.
          </p>
        </div>
      </footer>
    </>
  );
}
