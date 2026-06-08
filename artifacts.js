/**
 * Portfolio artifacts.
 *
 * Add, remove, or reorder entries here — the page rebuilds from this array.
 * Required fields per entry: title, description, contribution, audience, value.
 * Set `placeholder: true` to render the "To be populated" badge.
 */
window.ARTIFACTS = [
  {
    title: "AI/ML History Timeline",
    description:
      "Built a visual timeline tracking the development of artificial intelligence and machine learning from early symbolic systems through modern frontier models. Designed as both a personal learning artifact and a scannable reference for colleagues new to the field.",
    contribution:
      "Domain literacy. Understanding the historical lineage of AI/ML developments is a useful filter for separating genuine novelty from rebranded prior work when evaluating vendor claims.",
    audience:
      "IT colleagues, faculty, and institutional decision-makers who want orientation to the field without committing to a textbook. Useful in higher-ed conversations where stakeholders may not have a technical background.",
    value:
      "A reference resource for situating current AI developments in their historical context, especially helpful for explaining why a particular technology matters now versus five years ago.",
    link: "https://www.tiki-toki.com/timeline/entry/2248215/AIML-Timeline/",
    linkLabel: "View the timeline \u2192",
  },
  {
    title: "AI Help Desk Triage Assistant (Design Thinking Cycle)",
    description:
      "A complete design-thinking cycle applied to building an AI-powered help desk triage assistant for higher-education IT. The process began with structured experimentation across multiple LLMs, custom GPTs, and research tools to extract interaction-design patterns (the most useful being that well-designed support assistants frontload clarifying questions rather than guess from ambiguous input), then implemented those patterns in a working prototype in Chatbase, grounded in a redacted institutional knowledge base.",
    contribution:
      "Combines all four elements of the value proposition: institutional fluency (a real Huntington University use case), FERPA-aware design (synthetic and redacted KB content rather than live institutional data), local-first considerations (Claude Project as a deployment alternative analyzed), and end-user focus (the design pattern of asking before assuming).",
    audience:
      "IT leadership at small institutions evaluating whether AI triage can reduce first-line ticket volume, and hiring committees looking for evidence of design thinking applied to actual AI deployment rather than theoretical exercises.",
    value:
      "A working prototype demonstrating that thoughtful AI deployment for institutional support is achievable on free-tier tools with appropriate attention to data governance. The artifact shows the full process from observation through implementation, not just a finished product.",
    link: "https://www.chatbase.co/NP0utbglTnwGv86Cgn5q6/help",
    linkLabel: "Open the live prototype \u2192",
  },
  {
    title: "Leading as a Learner: Self-Assessment with Critical Revision",
    description:
      "Completed self-assessments on AI/ML leadership and change management, identified specific strengths and growth areas, and proposed structured improvements to both instruments. The meta-move (assessing the assessment itself) elevates the artifact from compliance with an exercise into a model of how to engage critically with professional development tools.",
    contribution:
      "Self-awareness in service of institutional fit. Naming a specific weakness like \"I'm not yet fluent in enterprise AI/ML hardware pricing trends, which would block me from credibly proposing budgets for AI initiatives\" is more actionable than a generic gap statement and signals readiness to do the work rather than perform humility.",
    audience:
      "Hiring committees and mentors who value honest self-diagnosis over polished self-presentation, and colleagues considering similar self-assessment practices.",
    value:
      "A documented commitment to professional growth with concrete weaknesses named (enterprise hardware pricing literacy, change management framework familiarity) and concrete proposals to improve the assessment instruments themselves (adding prompt engineering and frontier model literacy to AI/ML; adding leadership style identification with mitigation planning to Change Management).",
  },
];
