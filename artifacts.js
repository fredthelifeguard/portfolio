/**
 * Portfolio artifacts.
 *
 * Add, remove, or reorder entries here — the page rebuilds from this array.
 * Required fields per entry: title, description, contribution, audience, value.
 * Set `placeholder: true` to render the "To be populated" badge.
 */
window.ARTIFACTS = [
  {
    title: "AI/ML History Timeline (Workshop 1.5.1)",
    description:
      "Built a visual timeline tracking the development of artificial intelligence and machine learning from early symbolic systems through modern frontier models. Designed as both a personal learning artifact and a scannable reference for colleagues new to the field.",
    contribution:
      "Domain literacy. Understanding the historical lineage of AI/ML developments is a useful filter for separating genuine novelty from rebranded prior work when evaluating vendor claims.",
    audience:
      "IT colleagues, faculty, and institutional decision-makers who want orientation to the field without committing to a textbook. Useful in higher-ed conversations where stakeholders may not have a technical background.",
    value:
      "A reference resource for situating current AI developments in their historical context, especially helpful for explaining why a particular technology matters now versus five years ago.",
    image: "Timelinescreenshot.png",
    imageAlt: "Screenshot of the AI/ML history timeline showing entries from 1950 through 1997, including the Turing Test, Dartmouth Workshop, and Deep Blue defeating Kasparov.",
    link: "https://www.tiki-toki.com/timeline/entry/2248215/AIML-Timeline/",
    linkLabel: "View the timeline \u2192",
  },
  {
    title: "AI Help Desk Triage Assistant (Workshop 1.5.2)",
    description:
      "A complete design-thinking cycle applied to building an AI-powered help desk triage assistant for higher-education IT. Result is a working prototype in Chatbase, grounded in a redacted institutional knowledge base.",
    contribution:
      "Combines the elements of the value proposition: institutional fluency (a real Huntington University use case), FERPA-aware design (synthetic and redacted KB content rather than live institutional data), and end-user focus (the design pattern of asking before assuming).",
    audience:
      "IT leadership at small institutions evaluating whether AI triage can reduce first-line ticket volume, and hiring committees looking for evidence of design thinking applied to actual AI deployment rather than theoretical exercises.",
    value:
      "A working prototype demonstrating that thoughtful AI deployment for institutional support is achievable on free-tier tools with appropriate attention to data governance. The artifact shows the full process from observation through implementation, not just a finished product.",
    image: "Chatbasescreenshot.png",
    imageAlt: "Screenshot of the Huntington University help desk chatbot interface, showing a prompt asking 'How can I help you today?' with contact information for the IT help desk below.",
    link: "https://www.chatbase.co/NP0utbglTnwGv86Cgn5q6/help",
    linkLabel: "Open the live prototype \u2192",
  },
  {
    title: "Machine Learning vs Deep Learning (Workshop 2.5)",
    description:
      "An informative, brief paper using real-world use cases to describe the differences between machine learning and deep learning.",
    contribution:
      "Demonstrates the ability to ground abstract knowledge in real-world examples and to make difficult concepts approachable for non-technical individuals.",
    audience:
      "Business leadership and other readers who would benefit from a stronger understanding of AI concepts.",
    value:
      "A written exploration of the distinction between classical machine learning and deep learning, framed around the engineering judgment that actually matters: matching the approach to the problem rather than defaulting to the more powerful tool. Uses spam filtering and computer vision as contrasting cases to show why 'more capable' and 'more appropriate' are different questions.",
    image: "mlvsdlinfographic.png",
    imageAlt: "Infographic titled 'Machine Learning vs. Deep Learning Explained,' using a decision-tree format. A traditional programming section notes that a human writes the rules and no learning is involved, followed by side-by-side machine learning and deep learning columns posing questions that guide the reader toward the right approach for their problem.",
    link: "mlvsdl.pdf",
    linkLabel: "Read the paper \u2192",
  },
  {
    title: "AI as a Learning Medium (Workshop 3.5)",
    description:
      "Used a conversational AI tutor to learn neural network fundamentals, then stepped back to evaluate the tool itself as a teaching medium: where the tutored, dialogic format genuinely aided understanding, and where it fell short of a lecture or a text. A reflection on AI-mediated learning from the inside.",
    contribution:
      "Pedagogical evaluation. Assessing where conversational AI succeeds and fails as a teaching tool, the meta-skill required to responsibly recommend or deploy AI tutors for faculty development and student learning, rather than simply consuming the output. Demonstrates judgment about the medium, not just familiarity with it.",
    audience:
      "Faculty, instructional designers, and committees weighing whether to bring AI tutoring tools onto campus. Useful for decision-makers who need someone able to critically assess AI as a learning medium before it reaches students, not just operate it.",
    value:
      "A firsthand, critical read on AI-mediated learning: what the format does well, where it misleads or oversimplifies, and what that implies for deploying these tools at an institution. The judgment that has to come before any responsible classroom recommendation.",
    image: "schoolai.png",
    imageAlt: "Screenshot of the SchoolAI tutoring session on neural network fundamentals.",
    link: "",  // SchoolAI session isn't publicly linkable; add a PDF export here to give this artifact an outbound link
  },
{
    title: "AI Governance Operating Framework (Workshop 4.5)",
    description:
      "A personal governance framework for evaluating AI tools before institutional adoption, built from a single foundational principle: AI is a contained tool, not a neutral one. Moves from that principle to three concrete operating practices covering tool provenance, on-premises deployment, and automation bias.",
    contribution:
      "AI governance and risk judgment. Articulating not just whether a tool works but whether it should be adopted, where its data lives, and what bias it carries, the judgment that has to precede deployment at a FERPA-bound institution. Demonstrates a defensible, repeatable basis for saying no, or saying not yet, to an AI initiative.",
    audience:
      "IT and academic leadership, data governance stakeholders, and committees fielding a constant stream of AI adoption requests. Useful for decision-makers who need someone able to vet tools against institutional risk and bias before they reach a student, not just stand them up.",
    value:
      "A clear, principled stance on AI adoption that turns an abstract commitment to responsible AI into operational practice: interrogate provenance, prefer infrastructure you control, and govern against a model's tendency to tell users what they want to hear. The reasoning an institution needs in the room before the enthusiasm outruns the safeguards.",
    image: "governanceframework.png",
    imageAlt: "First page of the AI Governance Operating Framework, showing the foundational principle that AI is a contained rather than neutral tool, followed by three numbered operating practices.",
    link: "aigovernance.pdf",
    linkLabel: "Read the framework \u2192",
  },
  
];
