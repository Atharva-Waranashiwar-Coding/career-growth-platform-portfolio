// src/prompts.jsx

export const prompts = [
  {
    id: 1,
    title: 'Task Analysis + Observation & Interview Guides (Miro AI)',
    prompt: `You are a UX researcher using Miro AI to prepare for a new Career Growth Platform project.

1) Task Analysis
- Break down the platform into 5 core user tasks:
  1. Finding out skill gaps
  2. Receiving a personalized learning path
  3. Building a portfolio and credentials
  4. Connecting with mentors and peers
  5. Tracking progress and growth
- For each task, list:
  • Trigger / motivation
  • Main user goal
  • Environment and constraints
  • Key subtasks and decision points
  • Potential breakdowns or cognitive load issues

2) Observation Guide
- Create a structured observation guide with sections for:
  • Participant ID and context
  • Task ID and description
  • Space for observed behaviors, navigation paths, and visible confusion
  • Time-stamped notes
- Output in a Miro-friendly format (cards / sticky notes structure) that can be dropped directly on a board.

3) Interview & Debrief Guide
- Draft a semi-structured interview guide to use after each observation session.
- Include:
  • Warm-up questions
  • Task-specific follow-ups (per the 5 core tasks)
  • Questions about expectations vs. actual experience
  • Final reflections and “one thing you would change” prompts.

Goal:
Return a clear, structured output I can copy into Miro and arrange as cards and frames without rewriting.`
  },
  {
    id: 2,
    title: 'Observation Data Collection – Silent UX Log Assistant (ChatGPT)',
    prompt: `Silent UX Log Assistant. Log only. No conversational output except on explicit commands or end markers.
Role: Record, structure, and summarize real-time observations for UX sessions on the Career Growth Platform.

Hierarchy: Session → Platform → Task → Observations.

Session start:
• When I declare participant name or ID plus context, open a new session and route all entries to it until a new participant is declared.

Platform scope:
• When I say “PLATFORM [name] – [context or goal]”, open a platform section inside the current session.
• Keep it active until I switch platforms or complete the session.
• Optional “END PLATFORM” triggers a platform roll-up summary.

Task scope:
• When I say “TASK [ID] – [description]”, open a task under the active platform.
• Keep all notes under this task until “END TASK”.

Observations:
• During a task, I will log shorthand entries.
• Optionally, I may open a focused observation thread with “OBS [feature or micro-goal]” and close it with “END OBS”.
• Each note must be time-stamped in HH:MM:SS.

Shorthand categories:
X = Error
C = Confusion
G = Guidance provided
N = Observation
Q = Direct user quote (verbatim)
I = Insight
P = Pain point
L = Positive reaction

Required behavior:
• Remain silent during active logging.
• For every note, capture timestamp, category, active platform, active task, and content.
• Do not paraphrase quotes.
• Only interpret when marking an Insight (I), and keep it concise.

Automatic summaries:
• At “END OBS”: duration, count by category, and one key takeaway (1 sentence).
• At “END TASK”: duration, counts of insights and errors, and one key takeaway.
• At “END PLATFORM”: top 3 pain points, top 3 positives, notable quotes.
• At “COMPLETE”: full session report.

Final export on COMPLETE:
• Master session summary (participant, date/time, total duration, platforms covered).
• Per-platform summaries with key insights and issues.
• Per-task summaries with durations, counts (X, C, I, P, L), and takeaways.
• Chronological ledger of all time-stamped notes with categories.
• Two formats: Markdown tables and JSON suitable for analysis tools.`
  },
  {
    id: 3,
    title: 'Personas, Journey Maps & Scenarios – Figma Make',
    prompt: `Visualize three User Journey Maps for the Career Growth Platform using existing research data.
Do not rewrite or summarize the text — only format it visually in a journey map layout.

Personas and Tasks:
1. Aanya Deshmukh — Early-Career Student Explorer (Task: Finding Out Skill Gaps)
2. Lucas Ramirez — Career-Focused Self-Improver (Task: Receiving a Personalized Learning Path)
3. Meera Patel — Working Professional Upskiller (Task: Connecting with Mentors and Peers)

Journey structure (5 columns):
1. Trigger / Motivation
2. Exploration / Interaction
3. Action / Task Execution
4. Reflection / Evaluation
5. Outcome / Next Steps

Under each column, include:
• User Actions
• Thoughts
• Emotions (🙂😐😟)
• Pain Points
• Opportunities for Improvement

Formatting:
• Each persona in a separate horizontal frame.
• Color-code emotions (🙂 green, 😐 yellow, 😟 red).
• Add a simple dotted emotional line graph across stages.
• Put persona name, archetype, and task title in the top-left corner.
• Use bold for stage headers; regular text for actions/thoughts; italics for quotes.
• Below each map, include the matching “Insight Summary” paragraph exactly as provided.

Design theme:
• Aanya: Teal #00B3B3
• Lucas: Blue #0078D7
• Meera: Purple #7B61FF
• Background: #F9F9FB
• Font: Inter or Open Sans, 14–16pt body, 18–20pt headers.

Goal:
Produce 3 presentation-ready journey map frames in Figma without altering any text content.`
  },
  {
    id: 4,
    title: 'Low-Fidelity Wireframes – Figma Make',
    prompt: `Create a strictly low-fidelity prototype (black-and-white wireframes only) for the Career Growth Platform.

Requirements:
• Visualize all five major user tasks step-by-step.
• Each task = separate page/frame.
• Each screen = simple monochrome line-based components (no color, shading, gradients, or images).
• Use grayscale boxes, outlined icons, and text placeholders only.

Overall design rules:
• Style: pure low-fidelity, no UI kits.
• Colors: #000 / #FFF / #CCC only.
• Font: basic sans-serif like “Aa Text.”
• Layout width: 1440px desktop.
• Show interactions with arrows or labels (“Next,” “Back,” “Upload → Analyzing”).
• Keep components minimal: rectangles, lines, simple circles.
• Label all buttons and input fields with short descriptive text.
• Include consistent nav bars and breadcrumbs.

TASK 1 — Finding Skill Gaps
Goal: User uploads résumé / LinkedIn and sees AI analysis.

TASK 2 — Receiving Personalized Learning Path
Goal: Show generated roadmap with rationale.

TASK 3 — Building a Portfolio
Goal: Upload and verify credentials.

TASK 4 — Connecting with Mentors and Peers
Goal: Match mentors and join peer groups.

TASK 5 — Tracking Progress and Growth
Goal: Visualize learning progress and goals.

Final instructions:
• Keep every frame strictly monochrome.
• Use placeholder boxes and labels, no photos or shadows.
• Emphasize structure, hierarchy, and user flow arrows (e.g., “Upload → Analyze → Results”).
• Include basic desktop nav bars, buttons, and minimal outlined icons.
• Output 10–12 frames total (one per key screen).
• Title each screen at top center in uppercase.

Goal:
Produce a coherent, low-fidelity prototype ready for iterative UX testing and concept validation—nothing high-fidelity.`
  },
  {
    id: 5,
    title: 'High-Fidelity Design – Figma Make',
    prompt: `Transform the approved low-fidelity wireframes of the Career Growth Platform into a high-fidelity desktop prototype.

Constraints:
• Keep the existing information architecture and task flows intact.
• Apply a professional, accessible visual system suitable for a career-growth product.

Instructions:
• Define a base style system:
  • Colors for background, primary, secondary, and accent.
  • Text styles (H1–H4, body, captions).
  • Button and input components with hover and focus states.
• Upgrade key surfaces:
  • Skill assessment, learning path, portfolio, community, and dashboard screens.
• Add:
  • Clear hierarchy via spacing, typography, and grouping.
  • Subtle affordances for clickable items (buttons, cards, tags).
  • Clear labels and helper text where AI or automation is involved (explainability).
• Ensure:
  • WCAG-compliant contrast.
  • Consistent alignment and spacing scales.
  • Reusable components and variants.

Goal:
Produce a clickable high-fidelity prototype in Figma that stays faithful to the research, flows, and UX decisions while being visually ready for stakeholder review.`
  },
  {
    id: 6,
    title: 'Live Usability Evaluation Assistant – GPT',
    prompt: `You are my silent AI assistant for real-time moderated usability testing of the Career Growth Platform. Log events based on short commands I speak or type. I’ll name the task once — log everything under it until I say it’s done.

Capture these metrics:
• Task start / end timestamps
• Task duration
• Number of errors
• Number of confusion events
• Number of user assistance requests
• Number of guidance events I provide
• Task success or failure
• Success and failure rates across tasks
• Overall usability score (0–10)

TASK FLOW
S [Task ID]: [Brief description]
→ Start this task, initialize counters.
E
→ End the current task, compute duration, success (0 errors) or failure (≥1 error), update session totals.
After each task, output:
“Task T1 complete — [duration], [#] errors, [#] confusion notes, [#] guidance, [#] assistance requests.”

DURING A TASK
X: [Error] → increment error count
C: [Confusion] → log confusion
G: [Guidance] → log what I told them
A: [Assistance] → log explicit help request
N: [Observation] → general observation

SESSION MANAGEMENT
T → Show current task status and running time
P / R → Pause or resume the session
Save → Save a timestamped session backup
Session Complete → Export full log with all metrics

At Session Complete, calculate:
• Task success rate and failure rate
• Overall usability score (0–10), weighted:
  • 40% = Task success rate
  • 30% = Error frequency (fewer errors = higher score)
  • 20% = Guidance + assistance frequency (less = higher score)
  • 10% = Task duration vs. expected efficiency

Return the final score and a compact summary of all metrics.`
  }
]