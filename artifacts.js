/**
 * Portfolio artifacts.
 *
 * Add, remove, or reorder entries here — the page rebuilds from this array.
 * Required fields per entry: title, description, contribution, audience, value.
 * Set `placeholder: true` to render the "To be populated" badge.
 */
window.ARTIFACTS = [
  {
    title: "LLM Convergence as a Reliability Signal",
    description:
      "Ran the same real-workplace prompt (a help desk taxonomy redesign for Huntington University's Jitbit instance) across three independent LLM conversations and analyzed the agreement pattern. Where the models converged marked safe ground; where they diverged flagged the genuinely contested design choices that required human judgment.",
    contribution:
      "Institutional fluency: brought a live operational problem to AI tools instead of a hypothetical exercise, and evaluated the output as a practitioner.",
    audience:
      "IT decision-makers at small institutions weighing how much to trust LLM-generated recommendations on operational design.",
    value:
      "A repeatable calibration technique for using AI-generated work product confidently in institutional workflows, without requiring external expert verification on every output.",
  },
  {
    title: "Conversational AI Design from Observed Behavior",
    description:
      "Documented how a well-designed IT support GPT handles ambiguous user input (a deliberately vague iPhone water-damage scenario), then translated the observed question-asking pattern into a working help desk triage assistant built in Chatbase on synthetic, FERPA-safe KB content.",
    contribution:
      "End-user focus paired with FERPA-aware deployment: real institutional design context, no real institutional data.",
    audience:
      "IT support managers and help desk teams in small institutions evaluating AI assistants for first-line ticket triage.",
    value:
      "A concrete design pattern (frontload clarifying questions over fast guessing) demonstrated through both observation and implementation, with a live prototype as proof of concept.",
  },
  {
    title: "Auditing Generative Research Tools with Subject Expertise",
    description:
      "Used STORM AI to generate a research article on Unified Memory Architecture, the platform that runs my personal AI workstation, and evaluated the output as a domain practitioner rather than as a novice exploring an unfamiliar topic.",
    contribution:
      "Technical capability paired with critical evaluation: subject-matter expertise functioning as a quality filter on AI-generated content.",
    audience:
      "Faculty and instructional designers weighing how to scaffold student use of generative research tools without ceding judgment to the tools themselves.",
    value:
      "A worked example of where AI research tools are reliable, where they oversimplify, and how to teach students to spot the difference.",
  },
  // remaining placeholders kept below if you want to add more later
];
