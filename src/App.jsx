import React, { useEffect, useState } from 'react'
import { prompts } from './prompts.jsx'

const processSteps = [
  {
    num: '01',
    phase: 'Discover',
    week: 'Week 0',
    title: 'Project Foundation & Human Factors Analysis',
    summary: 'Defined the project focus and used AI-assisted research to understand core user tasks, human factors, and market expectations.',
    bullets: [
      'Identified target users, their primary tasks, and key human-factors considerations such as attention and memory load.',
      'Analyzed the user environment, competitor products, and industry-standard workflows through AI-assisted research.',
      'Reviewed social media sources to capture real user frustrations, usability gaps, and design implications.',
      'Summarized domain best practices and reflected on the strengths and limitations of AI-generated insights.'
    ],
    images: [
      '/assets/Process/project_kickoff.png'
    ]
  },
  {
    num: '02',
    phase: 'Discover',
    week: 'Week 1',
    title: 'AI-Assisted Task, Observation & Interview Guides',
    summary: 'Used AI tools to structure task analysis, observation protocols, and post-session interviews for consistent and data-driven UX research.',
    bullets: [
      'Identified core user tasks, analyzed competitor workflows, and created AI-generated task analysis diagrams.',
      'Developed an AI-assisted observation guide with structured protocols for capturing user actions and behaviors.',
      'Created an interview and debrief guide using AI to surface user challenges, expectations, and emerging UX issues.',
    ],
    images: [
      '/assets/Process/AI-Assisted Task, Observation & Interview Guides.png',
    ]
  },
  {
    num: '03',
    phase: 'Discover',
    week: 'Week 1',
    title: 'Participant Access & Data Collection',
    summary: 'Outlined a clear strategy for securing user participants and organized all collected observational and interview data from research sessions.',
    bullets: [
      'Coordinated access to at least five users, secured verbal consent, and scheduled observation and debrief sessions.',
      'Submitted manually collected data: observational notes, interview responses, demographic details, and session recordings.',
      'Standardized how user session data was logged to keep research artifacts consistent and complete.'
    ],
    images: [
      '/assets/Process/Participant Access & Data Collection.png'
    ]
  },
  {
    num: '04',
    phase: 'Define',
    week: 'Week 3',
    title: 'User Research, Needs & UX Requirements',
    summary: 'Synthesized observations, interviews, and transcripts to identify user needs and translate them into actionable UX requirements across five core tasks.',
    bullets: [
      'Conducted thematic analysis in Dovetail: tagged transcript segments, highlighted insights, and organized themes by task.',
      'Formulated user needs from qualitative data and translated them into measurable UX requirements using AI-assisted refinement.',
      'Exported, cleaned, and structured the full dataset (tags, quotes, insights, user needs, and requirements) for task-level analysis.',
      'Documented supporting artifacts: Dovetail screenshots, thematic analysis links, and the final requirements spreadsheet.'
    ],
    images: [
      '/assets/Process/User Research, Needs & UX Requirements.png'
    ]
  },
  {
    num: '05',
    phase: 'Define',
    week: 'Week 4',
    title: 'Personas, Journey Maps, and Scenarios',
    summary: 'Created persona profiles, usage scenarios, and journey maps based on user research to illustrate who the intended users are and how they interact with the product.',
    bullets: [
      'Summarized demographic findings using structured tables and charts.',
      'Developed a detailed persona character grounded in real user data.',
      'Wrote a realistic usage scenario capturing expected user interaction.',
      'Mapped an end-to-end journey illustrating user goals, actions, emotions, and touchpoints.'
    ],
    images: [
      '/assets/Process/Personas, Journey Maps, and Scenarios.png'
    ]
  },
  {
    num: '06',
    phase: 'Design',
    week: 'Week 5',
    title: 'Low-Fidelity Prototype Generation',
    summary: 'Created AI-assisted low-fidelity wireframes guided by user research, focusing on fixing broken task segments and validating improved flows.',
    bullets: [
      'Produced future-state task flows and use cases for each core task, informed by prior task analysis and journey maps.',
      'Generated AI-assisted wireframes in Figma Make and linked a functional low-fidelity prototype.',
      'Documented how each redesigned flow improved over existing solutions—fewer steps, clearer interactions, and reduced memory load.',
      'Compiled PRD details and prompt logs, reflecting on prompt effectiveness and iteration choices.'
    ],
    images: [
      '/assets/Process/Low-Fidelity Prototype Generation.png'
    ]
  },
  {
    num: '07',
    phase: 'Design',
    week: 'Week 6',
    title: 'Cognitive Walkthrough and High-Fidelity Prototyping with AI',
    summary: 'Conducted a Cognitive Walkthrough with representative users, analyzed findings using AI tools, and transformed low-fidelity wireframes into an improved high-fidelity prototype.',
    bullets: [
      'Developed a complete walkthrough protocol including intro script, scenarios, prompts, and UX questions.',
      'Captured raw data from sessions: notes, transcripts, and recordings for detailed analysis.',
      'Produced a structured findings report comparing AI-generated insights with real user behavior.',
      'Redesigned wireframes to address identified UX issues and created a high-fidelity prototype with applied color schemes, typography, and annotated design changes.'
    ],
    images: [
      '/assets/Process/Cognitive Walkthrough and High-Fidelity Prototyping with AI.png'
    ]
  },
  {
    num: '08',
    phase: 'Validate',
    week: 'Week 7',
    title: 'Heuristic Evaluation',
    summary: 'Conducted an AI-assisted and expert-led heuristic review to identify usability issues, prioritize fixes, and refine the prototype.',
    bullets: [
      'Evaluated the prototype using Nielsen heuristics and accessibility checks, supported by AI-generated insights.',
      'Synthesized issues into a structured table with screenshots, heuristics, priorities, and redesign solutions.',
      'Updated the prototype in Figma Make based on identified problems and documented all AI prompts used.',
    ],
    images: [
      '/assets/Process/Heuristic Evaluation.png'
    ]
  },
  {
    num: '09',
    phase: 'Validate',
    week: 'Week 8-9',
    title: 'Usability Testing',
    summary: 'Moderated sessions with pre-scripted scenarios, timing, and quote capture.',
    bullets: [
      'Logged confusion points, guidance, and task completion for every task.',
      'Collected verbatim quotes to anchor design changes.'
    ],
    images: [
      '/assets/Process/Usability Testing.png'
    ]
  },
  {
    num: '10',
    phase: 'Validate',
    week: 'Week 10',
    title: 'Final Iteration & Decisions',
    summary: 'Prioritized fixes by severity and impact, then sharpened copy and hierarchy.',
    bullets: [
      'Clarified learning modules, mentor expectations, and AI explanations.',
      'Documented decisions and next bets for future releases.'
    ],
    images: [
      '/assets/Process/Final Iteration & Decisions.png'
    ]
  }
]

function App() {
  const [imageModal, setImageModal] = useState(null)
  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">Career Growth Platform</div>
          <ul className="nav-links">
            <li><a href="#overview">Overview</a></li>
            <li><a href="#process-overview">UX Process</a></li>
            <li><a href="#solution">Solution</a></li>
            <li><a href="#media">Media</a></li>
            <li><a href="#ai-tools">AI</a></li>
          </ul>
        </div>
      </nav>
      <main className="main-container">
      {/* HERO / PROJECT SUMMARY */}
      <header id="overview" className="section hero">
        <div className="hero-left">
          <p className="eyebrow">INFO 7375 · UX Case Study</p>
          <h1>Career Growth Platform – UX Case Study</h1>
          <p className="lead">
          A web-based career growth platform that helps students and early-career professionals
          find skill gaps, receive personalized learning paths, build a portfolio, connect with mentors
          and peers, and track progress over time.
          </p>
          <p className="lead-sub">This case study walks through the full UX lifecycle followed during the project — from kickoff to final usability testing.</p>
        <div className="hero-meta">
          <div>
            <h3>My Role</h3>
            <p>UX Research · Interaction Design · Prototyping · Usability Testing</p>
          </div>
          <div>
            <h3>Timeline</h3>
            <p>Fall 2025</p>
          </div>
          <div>
            <h3>Tools</h3>
            <p>Figma (Make, Design, Jam), Miro, Google Sheets,Dovetail, ChatGPT, Gemini, Claude MCP for Figma</p>
          </div>
        </div>
        </div>
        <div className="hero-right">
          <div className="hero-mockup card">
            {/* Embedded Figma Make iframe — if your file is public, it will load here */}
            {/**
               * Replace figmaUrl with your actual Figma Make URL (public link). The embed URL is created
               * using Figma's embed endpoint and `embed_host=share` option.
               */}
            {/** Keep a clickable overlay button for opening the Figma file full-screen */}
            {(() => {
              const figmaUrl = 'https://www.figma.com/make/FmFwZNrydnICDvkItLeZtv/Post-heuristic-High-Fidelity-Design';
              // Use an archive image inside `public/assets/Figma.png` and make the image clickable
              const assetImg = '/assets/Figma.png'
              return (
                <div className="figma-embed-wrap">
                  <a href={figmaUrl} target="_blank" rel="noopener noreferrer">
                    <img className='mockup-img' src={assetImg} alt="Project mockup — dashboard preview" onError={(e)=>{e.target.src=fallback}} />
                  </a>
                </div>
              )
            })()}
            <div className="mockup-cta">
              <a className="btn secondary" href="https://www.figma.com/make/FmFwZNrydnICDvkItLeZtv/Post-heuristic-High-Fidelity-Design" target="_blank" rel="noopener noreferrer">Open in Figma</a>
            </div>
          </div>
        </div>
      </header>

      {/* PROJECT OBJECTIVES / PROBLEM STATEMENT */}
      <section className="section objectives-section" id="objectives">
        <div className="section-header">
          <p className="eyebrow">Problem &amp; Objectives</p>
          <h2>Project Summary &amp; Objectives</h2>
          <p className="lead">
            One place for career growth: identify gaps, learn with focus, ship proof, and stay motivated with people who have your back.
          </p>
        </div>
        <div className="grid two-cols objective-grid">
          <div className="objective-card">
            <h3>Problem Statement</h3>
            <p>
              How might we help students and early-career professionals understand their current skills,
              close gaps with a personalized learning path, and stay motivated through clear progress
              tracking and social support?
            </p>
            <ul className="objective-list bullet-list">
              <li>Too many tools (LinkedIn, courses, spreadsheets) = fragmented journey.</li>
              <li>Hard to see real progress or what to do next.</li>
              <li>Little confidence that portfolios and outreach feel credible.</li>
            </ul>
            <div className="problem-meta">
              <span className="pill pill-define">Needs</span>
              <span className="pill pill-design">Pain Points</span>
            </div>
          </div>
          <div className="objective-card">
            <h3>Objectives</h3>
            <ul className="objective-list clean-list">
              <li><strong>Surface gaps:</strong> Quickly spot skill gaps from goals and profile data.</li>
              <li><strong>Guide the path:</strong> Give focused, realistic learning tracks instead of endless course lists.</li>
              <li><strong>Show proof:</strong> Help ship portfolio pieces and credentials that look credible.</li>
              <li><strong>Trusted people:</strong> Enable mentor and peer connections with clear expectations.</li>
              <li><strong>Stay motivated:</strong> Keep progress visible with lightweight tracking and streaks.</li>
            </ul>
            <div className="objective-footer">
              <span className="pill pill-validate">Success signals</span>
              <p className="mini-note">Higher task completion, fewer confusion points, and clearer proof of progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT PROCESS OVERVIEW */}
      <section className="section process-section" id="process-overview">
        <div className="process-header">
          <p className="eyebrow">Flow I followed</p>
          <h2>End-to-End UX Process</h2>
          <p className="lead">
            How the project moved from a fuzzy goal to a tested, high-fidelity concept—each step built on the evidence from the one before it.
          </p>
          <div className="process-legend">
            <span className="pill pill-discover">Discover</span>
            <span className="pill pill-define">Define</span>
            <span className="pill pill-design">Design</span>
            <span className="pill pill-validate">Validate</span>
          </div>
        </div>
        <div className="timeline process-timeline" role="list">
          {processSteps.map((step, idx) => {
            return (
              <div className="timeline-row" role="listitem" key={step.num}>
                <div className="timeline-card left-card">
                  <div className="timeline-card-top">
                    <span className={`pill pill-${step.phase.toLowerCase()}`}>{step.phase}</span>
                    <span className="microtime">{step.week}</span>
                  </div>
                  <h3>{step.title}</h3>
                  {step.images && step.images.length > 0 && (
                    <div className="timeline-thumbs" aria-label="Preview images">
                      {step.images.map((src, i) => (
                        <button
                          key={i}
                          type="button"
                          className="thumb-button"
                          onClick={() => setImageModal({ src, title: step.title })}
                        >
                          <img src={src} alt={`${step.title} mock ${i + 1}`} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="timeline-node">
                  <span className="timeline-dot"></span>
                  <span className="timeline-number">{step.num}</span>
                </div>
                <div className="timeline-card right-card">
                  <p>{step.summary}</p>
                  <ul className="micro-points">
                    {step.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* SOLUTION OVERVIEW / FINAL PRODUCT */}
      <section className="section" id="solution">
        <div className="section-header">
          <p className="eyebrow">Solution Overview</p>
          <h2>A unified career-growth platform</h2>
          <p className="lead">From assessment to portfolio to mentorship, every surface is designed to keep users moving and confident.</p>
        </div>
        <div className="solution-grid">
          <div className="solution-card">
            <div className="solution-icon">📊</div>
            <h3>Guided Skill Assessment</h3>
            <p>Resume/LinkedIn import, editable skills, and a visual radar to highlight strengths and gaps.</p>
            <ul>
              <li>Explainable AI on how scores are generated.</li>
              <li>Editable tags and manual overrides for trust.</li>
            </ul>
          </div>
          <div className="solution-card">
            <div className="solution-icon">🧭</div>
            <h3>AI-Assisted Learning Paths</h3>
            <p>Weekly structures with suggested modules that users can swap or customize.</p>
            <ul>
              <li>Type labels (course/article/project) + time expectations.</li>
              <li>Short summaries to reduce choice overload.</li>
            </ul>
          </div>
          <div className="solution-card">
            <div className="solution-icon">🗂️</div>
            <h3>Portfolio &amp; Credentials</h3>
            <p>Projects, uploads, and certifications with live preview of the public profile.</p>
            <ul>
              <li>Real-time cards mirror recruiter view.</li>
              <li>Guided prompts to make proof points credible.</li>
            </ul>
          </div>
          <div className="solution-card">
            <div className="solution-icon">🤝</div>
            <h3>Mentor &amp; Peer Community</h3>
            <p>Community tab with mentor cards, availability slots, and focused peer groups.</p>
            <ul>
              <li>Expectations and availability upfront.</li>
              <li>Structured requests to respect mentor time.</li>
            </ul>
          </div>
          <div className="solution-card">
            <div className="solution-icon">📈</div>
            <h3>Progress Dashboard</h3>
            <p>Goals, milestones, streaks, and recent activity to keep users motivated.</p>
            <ul>
              <li>Lightweight tracking with streaks and milestones.</li>
              <li>Recent activity to show momentum and next steps.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDIA / ARTIFACTS */}
      <section className="section" id="media">
        <h2>Prototype walkthrough</h2>
        <div className="card media-card">
          <div className="video-row">
            <div className="video-embed card">

              <div className="video-wrap">
                <iframe title="Prototype walkthrough" src="https://www.youtube.com/embed/zpOULjyy-n8" frameBorder="0" allowFullScreen></iframe>
              </div>
              <p className="media-caption">Short demo clip showing key flows and microinteractions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI TOOLS & REFLECTIONS */}
      <section className="section" id="ai-tools">
        <h2>AI Tools Used &amp; Reflections</h2>
        <div className="ai-grid">

          <div className="ai-card">
            <h3>How AI Was Used</h3>
            <ul className="ai-list">
              <li><strong>Miro AI – Task Analysis:</strong> Used to break down the full workflow into 5 core user tasks and auto-expand task steps.</li>
              <li><strong>Miro AI – Observation & Interview Guides:</strong> Generated structured templates for observation notes, interview prompts, and testing scripts.</li>
              <li><strong>ChatGPT – Observation Data Collection:</strong> Logged coded events (N, L, Q, P, I, G, C, E), timestamps, and synthesized behavior patterns.</li>
              <li><strong>Dovetail AI – UX Research Synthesis:</strong> Clustered qualitative insights, extracted themes, and produced user needs & design requirement statements.</li>
              <li><strong>Figma Make – Personas, Journey Maps & Scenarios:</strong> Auto-generated persona formats, scenario templates, and user journey flow structures.</li>
              <li><strong>Figma Make – Low-Fidelity Wireframes:</strong> Produced grayscale wireframes for all five tasks using AI-generated layouts.</li>
              <li><strong>GPT / Claude – Cognitive Walkthrough Scripts:</strong> Created walkthrough scripts, evaluator prompts, and task-based questioning guides.</li>
              <li><strong>Figma Make – High-Fidelity Prototyping:</strong> Generated UI components, page layouts, and visual refinements from prompts.</li>
              <li><strong>Claude MCP + Figma – Heuristic Evaluation:</strong> Analyzed the prototype using Nielsen’s heuristics & mobile heuristics and produced structured issue tables.</li>
              <li><strong>ChatGPT – Usability Test Script & Data Collection:</strong> Generated test scenarios, prompts, debrief questionnaires, and logged structured task metrics.</li>
            </ul>
          </div>

          <div className="ai-card">
            <h3>Reflection on Effectiveness</h3>
            <p>
              AI tools significantly accelerated the workflow across several stages of the UX process. 
              They were most effective when generating structured artifacts—wireframes, personas, heuristic 
              evaluations, scripts, and research summaries. They also reduced time spent on repetitive work, 
              allowing deeper focus on design insights and interaction patterns.
            </p>
            <p>
              However, AI could not replace real user behavior. Actual usability testing was essential to 
              uncover friction points, validate assumptions, and prioritize changes. The strongest results 
              came from combining AI-generated structures with authentic user insights.
            </p>
          </div>

          <div className="ai-prompts card">
            <h3>AI Prompts & Examples</h3>
            <p className="lead">
              Examples of prompts used during research, prototyping, heuristic evaluation, and usability testing.
              Click a prompt to copy it.
            </p>
            <PromptList />
          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="section closing-section" id="closing">
        <div className="section-header">
          <p className="eyebrow">Outcome &amp; Next Steps</p>
          <h2>What shipped and what’s next</h2>
          <p className="lead">A cohesive, research-led platform with clear momentum and room to grow.</p>
        </div>
        <div className="closing-grid">
          <div className="closing-card">
            <h3>Outcome</h3>
            <ul>
              <li>End-to-end prototype covering assessment, learning, portfolio, mentorship, and progress.</li>
              <li>Heuristic issues addressed; clearer copy, hierarchy, and explainable AI moments.</li>
              <li>Usability tests showed higher task completion and fewer confusion points in key flows.</li>
            </ul>
          </div>
          <div className="closing-card">
            <h3>Next Steps</h3>
            <ul>
              <li>Layer responsive patterns and microinteractions for mobile-first polish.</li>
              <li>Deepen explainability in AI recommendations and assessment scoring.</li>
              <li>Expand mentor/peer features with availability, expectations, and trust signals.</li>
              <li>Integrate lightweight analytics to show progress, streaks, and impact over time.</li>
            </ul>
          </div>
        </div>
        <p className="closing-note">
          Want a walkthrough or to see the live prototype? Reach out and I’ll share the flow and findings.
        </p>
      </section>
      {imageModal && (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label={imageModal.title} onClick={()=>setImageModal(null)}>
          <div className="image-modal-inner" onClick={e=>e.stopPropagation()}>
            <button className="image-modal-close" type="button" onClick={()=>setImageModal(null)}>✕</button>
            <img src={imageModal.src} alt={imageModal.title || 'Preview'} />
            <div className="image-modal-meta">
              <p>{imageModal.title}</p>
            </div>
          </div>
        </div>
      )}
      <MockupModal />
      <footer className="section footer card">
        <div className="grid two-cols">
          <div>
            <h3>Let's talk about this project</h3>
            <p className="lead">Interested in a walkthrough or collaboration? I'm available for freelance and project work.</p>
          </div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
            <a className="btn primary" href="mailto:waranashiwaratharva@gmail.com">Get in touch</a>
          </div>
        </div>
      </footer>
      </main>
    </div>
  )
}

function PromptList(){
  const [copied, setCopied] = useState(null)

  const onCopy = async (item) => {
    try {
      await navigator.clipboard.writeText(item.prompt)
      setCopied(item.id)
      setTimeout(() => setCopied(null), 2200)
    } catch (err) {
      console.warn('Copy failed', err)
    }
  }

  return (
    <div className='prompt-list'>
      {prompts.map(p => (
        <div key={p.id} className='prompt-card'>
          <div className='prompt-text'>
            <strong>{p.title}</strong>
            <pre className='prompt-pre'>{p.prompt}</pre>
          </div>
          <div className='prompt-actions'>
            <button
              className='btn secondary'
              onClick={() => onCopy(p)}
            >
              {copied === p.id ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}


function MockupModal(){
  const [open, setOpen] = useState(false)
  const [src, setSrc] = useState('')
  const closeRef = React.useRef(null)

  useEffect(()=>{
    const onOpen = (ev) => { setSrc(ev.detail); setOpen(true) }
    window.addEventListener('open-mockup', onOpen)
    return () => window.removeEventListener('open-mockup', onOpen)
  },[])

  useEffect(()=>{
    const onKey = (ev) => { if(ev.key === 'Escape') setOpen(false) }
    if(open){ window.addEventListener('keydown', onKey) }
    return ()=> window.removeEventListener('keydown', onKey)
  },[open])

  useEffect(()=>{
    if(open && closeRef.current){
      closeRef.current.focus()
    }
  },[open])

  if(!open) return null
  return (
    <div className="mockup-overlay" onClick={()=>setOpen(false)}>
      <div className="mockup-inner card" role="dialog" aria-modal="true" aria-label="Expanded mockup" onClick={(e)=>e.stopPropagation()}>
        <button ref={closeRef} className="mockup-close btn secondary" type="button" onClick={()=>setOpen(false)}>Close</button>
        {/* Render Figma embeds as iframe and normal images as images */}
        {src && src.includes('figma.com') ? (
          <iframe
            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(src)}`}
            title="Figma mockup"
            frameBorder="0"
            allowFullScreen
            className="mockup-modal-iframe"
          />
        ) : (
          <img src={src} alt="Expanded mockup" />
        )}
      </div>
    </div>
  )
}

export default App
export { MockupModal }
