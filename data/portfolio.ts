export interface CaseStudyGalleryItem {
  type: "image" | "placeholder" | "metric-card" | "quote";
  caption: string;
  placeholderLabel?: string;
  placeholderType?: "Reel / Video Script" | "Social Grid" | "Campaign Moodboard" | "Research Matrix" | "Poster Series";
  aspectRatio?: "video" | "square" | "landscape" | "portrait";
  highlight?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: "social-media" | "brand-communication" | "campaigns" | "research";
  role: string;
  timeline: string;
  clientOrContext: string;
  summary: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  context: string;
  challenge: string;
  approach: string;
  execution: { title: string; description: string }[];
  outcome: string;
  learnings: string;
  gallery: CaseStudyGalleryItem[];
  featured: boolean;
  accentColor?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  type: "Internship" | "Leadership" | "Committee";
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "Yuvika Sharma",
    title: "Branding × Content × Creative Strategy",
    tagline: "Bridging analytical marketing strategy with memorable creative execution.",
    corePhilosophy:
      "I enjoy the space where strategic thinking meets creativity — understanding what a brand wants to communicate, why it should communicate it, and how to turn that thinking into content people notice and remember.",
    email: "yuvika.mba25@nbs.edu.in",
    linkedin: "https://www.linkedin.com/in/yuvika-sharma-676132354/",
    location: "Ahmedabad, India",
    availability: "Available for Brand Strategy & Creative Content roles",
    resumeUrl: "/Yuvika_Sharma_Resume.pdf",
    shortBio:
      "Marketing postgraduate (MBA + PGPCE at Narayana Business School) with hands-on experience driving brand communication across 7+ brands, scaling social media to 600K+ reach, and shaping brand narratives through video production, scriptwriting, and creative strategy.",
  },

  skillsCategorized: {
    brand: [
      "Brand Positioning & Architecture",
      "Brand Voice & Tone Guidelines",
      "Core Messaging Hierarchies",
      "Visual Identity Consistency",
    ],
    content: [
      "Short-Form Video Scriptwriting",
      "Editorial & Narrative Design",
      "Content Calendar Architecture",
      "Visual Storyboarding",
    ],
    social: [
      "Channel Launch from 0 to Scale",
      "Community Engagement & Growth",
      "Organic Reach Optimization",
      "Influencer & Creator Collaboration",
    ],
    strategy: [
      "Consumer Psychology & Insights",
      "Field Market Research",
      "Campaign Concepting",
      "Performance & Metric Analysis",
    ],
    tools: [
      "Canva",
      "MS Excel",
      "Power BI",
      "Office 365",
      "Meta Business Suite",
      "HubSpot Marketing Suite",
    ],
  },

  experiences: [
    {
      id: "vacha-inc",
      role: "Brand Executive Intern",
      organization: "Vacha.inc",
      period: "Jun 2025 – Aug 2025",
      location: "Ahmedabad, India",
      type: "Internship",
      description:
        "Handled end-to-end brand communication, content strategy, and creative video direction independently across seven diverse client brands.",
      highlights: [
        "Worked across 7+ brands independently, managing brand communication, positioning, and content calendars.",
        "Authored scripts and directed short-form video production for clients including Mission Health.",
        "Managed influencer marketing workflows from creator vetting and briefing to campaign delivery.",
        "Took on diverse creative roles including on-camera modelling and brand representation, demonstrating versatile 360° execution.",
      ],
      skills: [
        "Brand Communication",
        "Content Strategy",
        "Script Writing",
        "Video Production",
        "Influencer Marketing",
        "On-Camera Modelling",
      ],
    },
    {
      id: "tedx-nbs",
      role: "Social Media Manager",
      organization: "TEDxNarayanaBusinessSchool",
      period: "Nov 2025 – Present",
      location: "NBS, Ahmedabad",
      type: "Leadership",
      description:
        "Built and scaled the digital brand presence and communication engine for TEDxNarayanaBusinessSchool from the ground up.",
      highlights: [
        "Built the official TEDx social media presence completely from scratch, establishing tone of voice and visual identity.",
        "Achieved 600K+ organic reach within the first month through hook-focused content and community storytelling.",
        "Created compelling multi-format content to promote TEDx events, speakers, themes, and ticket announcements.",
        "Fostered high community interaction and engagement across collegiate student networks.",
      ],
      skills: [
        "Social Media Management",
        "Brand Identity",
        "Content Strategy",
        "600K+ Reach",
        "Event Promotion",
      ],
    },
    {
      id: "smc-nbs",
      role: "Social Media Committee Member",
      organization: "Narayana Business School",
      period: "Aug 2025 – Present",
      location: "Ahmedabad, India",
      type: "Committee",
      description:
        "Active member of the core creative wing, driving campus visibility, engagement campaigns, and student culture storytelling.",
      highlights: [
        "Led creative ideation sessions, brainstorming engaging content ideas aligned with club objectives and flagship college events.",
        "Planned content calendars, structured promotional campaigns, and executed visual storytelling formats.",
        "Collaborated with cross-functional teams on trending video formats, audience targeting, and community engagement.",
      ],
      skills: [
        "Creative Ideation",
        "Content Calendars",
        "Campaign Planning",
        "Visual Storytelling",
        "Audience Engagement",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "MBA + PGPCE",
      field: "Marketing Specialization",
      institution: "Narayana Business School",
      location: "Ahmedabad, India",
      period: "Jul 2025 – Jul 2027",
      details: "Comprehensive study of Brand Management, Consumer Behavior, Integrated Marketing Communications, and Strategic Marketing.",
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      field: "Commerce & Business Studies",
      institution: "Jai Narain Vyas University",
      location: "Jodhpur, India",
      period: "2022 – 2025",
      details: "Strong foundation in commercial principles, financial economics, and business operations.",
    },
  ] as EducationItem[],

  certifications: [
    {
      name: "Digital Marketing Certified",
      issuer: "HubSpot Academy",
      description: "In-depth training in SEO, inbound marketing, video content strategy, and digital campaign optimization.",
    },
    {
      name: "Content Marketing Certified",
      issuer: "HubSpot Academy",
      description: "Frameworks for storytelling, content creation, distribution strategy, and performance measurement.",
    },
    {
      name: "Advanced Excel + Office Automation",
      issuer: "Tally Education",
      description: "Advanced data manipulation, pivot tables, data visualization, and workflow automation.",
    },
  ] as CertificationItem[],

  creativeInterests: [
    {
      title: "Visual Storytelling & Ad Analysis",
      desc: "Deconstructing why certain brand narratives linger in cultural memory while others fade into background noise.",
    },
    {
      title: "Journal Writing",
      desc: "Observing everyday human habits, consumer quirks, and cultural micro-trends.",
    },
    {
      title: "Dance & Rhythm",
      desc: "Developing timing, cadence, and expression — qualities that translate directly into video editing rhythm and creative presentation.",
    },
  ],

  projects: [
    {
      id: "tedx-nbs",
      slug: "tedx-narayana-business-school",
      title: "Building TEDxNBS Digital Identity from Ground Zero",
      subtitle: "Constructing a fresh intellectual brand presence and scaling organic reach to 600,000+ in the first 30 days.",
      category: "Social Media / Brand Communication / Content",
      categorySlug: "social-media",
      role: "Social Media Manager",
      timeline: "Nov 2025 – Present",
      clientOrContext: "TEDxNarayanaBusinessSchool (NBS, Ahmedabad)",
      summary:
        "Built the digital presence and communication engine for a newly chartered TEDx chapter from scratch, generating over 600K+ impressions and authentic collegiate buzz in Month 1.",
      metrics: [
        { label: "Organic Reach (Month 1)", value: "600K+" },
        { label: "Channel Baseline", value: "Zero to Active" },
        { label: "Core Content Pillars", value: "4 Series" },
      ],
      tags: ["Brand Launch", "Content Strategy", "600K+ Reach", "Visual Identity", "TEDx"],
      context:
        "TEDxNarayanaBusinessSchool is an independently organized TED event platform chartered to bring visionary thinkers, innovators, and students together. As Social Media Manager, I was tasked with establishing the chapter's digital identity with no pre-existing audience or historical assets.",
      challenge:
        "How do you build anticipation, intellectual credibility, and high engagement for an event brand starting with 0 followers, in an environment saturated with generic student club announcements?",
      approach:
        "Rather than posting repetitive promotional flyers, I structured our communication around idea-driven storytelling. We treated TEDxNBS as a digital media brand first and an event ticket promoter second. The strategy rested on 3 core pillars: 'Ideas in 30 Seconds' (hook-driven micro concepts), 'Behind the Curator' (speaker discovery stories), and 'Campus Conversations' (relatable debates on innovation and culture).",
      execution: [
        {
          title: "Visual Identity & Grid Architecture",
          description:
            "Designed a crisp, typography-first visual template adhering strictly to global TEDx guidelines while feeling dynamic, editorial, and youth-centric.",
        },
        {
          title: "Short-Form Video Scripting",
          description:
            "Drafted high-retention video scripts for Instagram Reels and LinkedIn, focusing on 2-second visual/text hooks that distilled complex speaker themes into bite-sized perspectives.",
        },
        {
          title: "Community & Pre-Buzz Momentum",
          description:
            "Orchestrated interactive story countdowns, thought-provoking quote carousels, and speaker clue drops to ignite curiosity and organic peer-to-peer shares.",
        },
      ],
      outcome:
        "Crossed 600,000+ organic impressions within the first 30 days of launch. Elevated community engagement rates and established a premium brand benchmark recognized across campus and collegiate circles.",
      learnings:
        "In modern brand communication, people don't follow announcements — they follow perspectives and ideas. Giving value before asking for an event signup creates lasting brand loyalty.",
      gallery: [
        {
          type: "placeholder",
          caption: "Editorial Grid Concept & Typography System for TEDxNBS",
          placeholderLabel: "TEDx Digital Identity & Brand Grid",
          placeholderType: "Social Grid",
          aspectRatio: "landscape",
          highlight: "600K+ Monthly Reach",
        },
        {
          type: "placeholder",
          caption: "Hook-Driven Reel Scripts & Video Concepting Frames",
          placeholderLabel: "Short-Form Video Script & Storyboard Deck",
          placeholderType: "Reel / Video Script",
          aspectRatio: "portrait",
          highlight: "30-Second Idea Formats",
        },
        {
          type: "placeholder",
          caption: "Speaker Announcement Campaign & Engagement Analytics",
          placeholderLabel: "Campaign Performance & Metric Dashboards",
          placeholderType: "Campaign Moodboard",
          aspectRatio: "landscape",
          highlight: "High Organic Share Ratio",
        },
      ],
      featured: true,
      accentColor: "#EB0028",
    },
    {
      id: "vacha-multi-brand",
      slug: "vacha-multi-brand-creative-direction",
      title: "Multi-Brand Communication & Video Direction across 7+ Brands",
      subtitle: "Scriptwriting, creative direction, on-camera representation, and influencer strategy for seven diverse consumer brands.",
      category: "Brand Communication / Content / Influencer Marketing",
      categorySlug: "brand-communication",
      role: "Brand Executive Intern",
      timeline: "Jun 2025 – Aug 2025",
      clientOrContext: "Vacha.inc (including Mission Health)",
      summary:
        "Directed end-to-end brand communication, scripted high-retention video campaigns, and coordinated influencer collaborations across seven distinct lifestyle, healthcare, and consumer client accounts.",
      metrics: [
        { label: "Brands Managed", value: "7+" },
        { label: "Key Healthcare Client", value: "Mission Health" },
        { label: "Creative Roles", value: "360° Script to Screen" },
      ],
      tags: ["Creative Strategy", "Video Production", "Scriptwriting", "Influencer Marketing", "Brand Communication"],
      context:
        "Vacha.inc is a dynamic branding and creative communication agency managing accounts across healthcare, lifestyle, retail, and consumer products. Starting as a part-time contributor, I transitioned into a full-time Brand Executive Intern managing 7+ client accounts independently.",
      challenge:
        "Juggling distinct brand voices, contrasting audience demographics (from specialized physiotherapy patients to lifestyle shoppers), and producing fresh video content weekly without diluting individual brand identities.",
      approach:
        "I established unique 'Voice & Emotion Playbooks' for each client. For Mission Health, I de-jargonized clinical physical therapy terms into empathy-first patient relief stories focusing on daily mobility wins. For lifestyle brands, I focused on high-energy visual pacing and creator-led social proof.",
      execution: [
        {
          title: "Scriptwriting & Video Production",
          description:
            "Penned detailed video scripts with explicit visual hooks, dialogue pacing, and on-screen text cues. Coordinated live shoot logistics and stepped in for on-camera modeling when authentic brand representation was required.",
        },
        {
          title: "Influencer Outreach & Creative Briefing",
          description:
            "Identified, vetted, and briefed micro-influencers with concise creative guidelines ensuring brand compliance while allowing genuine creator tone.",
        },
        {
          title: "End-to-End Account Management",
          description:
            "Handled monthly content calendars, client review presentations, post-production revisions, and publishing schedules across seven accounts.",
        },
      ],
      outcome:
        "Consistently produced high-engagement video assets with strong client retention. Successfully shifted Mission Health's social perception from a sterile clinic to an approachable, everyday wellness partner.",
      learnings:
        "A great brand strategist must be versatile. The ability to shift from an empathetic healthcare script at 10 AM to a fast-paced lifestyle campaign brief at 2 PM is where true creative discipline lives.",
      gallery: [
        {
          type: "placeholder",
          caption: "Mission Health Video Script Deck & Production Storyboards",
          placeholderLabel: "Mission Health Script & Shoot Direction",
          placeholderType: "Reel / Video Script",
          aspectRatio: "landscape",
          highlight: "Empathy-First Healthcare Narrative",
        },
        {
          type: "placeholder",
          caption: "Multi-Brand Content Playbook & Tone of Voice Guidelines",
          placeholderLabel: "Voice & Tone Playbook for 7+ Brands",
          placeholderType: "Campaign Moodboard",
          aspectRatio: "portrait",
          highlight: "Custom Brand Personalities",
        },
        {
          type: "placeholder",
          caption: "Influencer Marketing Campaign Briefs & Output Showcase",
          placeholderLabel: "Creator Briefs & Deliverables Matrix",
          placeholderType: "Social Grid",
          aspectRatio: "landscape",
          highlight: "High Creator Compliance",
        },
      ],
      featured: true,
      accentColor: "#E84A27",
    },
    {
      id: "smc-nbs",
      slug: "social-media-committee-narayana-business-school",
      title: "Amplifying Campus Brand Voice & Viral Campaigns",
      subtitle: "Driving student engagement, cultural trend-jacking, and event storytelling as an active member of the creative team.",
      category: "Social Media / Creative Content / Campaigns",
      categorySlug: "campaigns",
      role: "Social Media Committee Member",
      timeline: "Aug 2025 – Present",
      clientOrContext: "Narayana Business School",
      summary:
        "Collaborated with the creative team to brainstorm, script, and launch viral social content, structured event campaigns, and interactive student storytelling.",
      metrics: [
        { label: "Role", value: "Creative Strategist" },
        { label: "Content Types", value: "Reels & Carousels" },
        { label: "Focus", value: "Community & Culture" },
      ],
      tags: ["Campus Branding", "Trend Jacking", "Content Calendars", "Audience Engagement"],
      context:
        "The Social Media Committee at Narayana Business School is the central creative engine responsible for showcasing institutional life, student achievements, flagship festivals, and academic culture across social platforms.",
      challenge:
        "Moving beyond conventional administrative campus updates to create content that students actually want to share on their personal stories while maintaining the institution's professional academic prestige.",
      approach:
        "Introduced a balance of 'Relatable Student Culture' (micro-trends, behind-the-scenes exam prep, MBA life observations) alongside 'High-Stakes Flagship Highlights' (guest lectures, corporate conclaves, fest celebrations) to make the page dynamic and community-driven.",
      execution: [
        {
          title: "Content Ideation & Brainstorming",
          description:
            "Led creative brainstorming sessions identifying trending audio formats and cultural moments that could be seamlessly adapted to business school themes.",
        },
        {
          title: "Interactive Storytelling & Coverage",
          description:
            "Created live-event coverage frameworks using quick-cut recap reels, attendee interview bites, and audience polls.",
        },
        {
          title: "Cross-Functional Collaboration",
          description:
            "Worked alongside photography, design, and events teams to ensure synchronized content delivery across platforms.",
        },
      ],
      outcome:
        "Elevated peer engagement rates, amplified event attendance, and established a modern, highly relatable social media voice for the college community.",
      learnings:
        "Campus and community marketing thrives on relatable authenticity. Showing the genuine human journey creates far more engagement than polished perfection.",
      gallery: [
        {
          type: "placeholder",
          caption: "MBA Life Video Series & Trend Adaptation Frames",
          placeholderLabel: "Viral Campus Trend Formats & Reels",
          placeholderType: "Reel / Video Script",
          aspectRatio: "portrait",
          highlight: "High Student Shareability",
        },
        {
          type: "placeholder",
          caption: "Flagship Event Campaign Moodboard & Content Flow",
          placeholderLabel: "Conclave & Event Campaign Calendar",
          placeholderType: "Campaign Moodboard",
          aspectRatio: "landscape",
          highlight: "Live Event Engagement",
        },
      ],
      featured: true,
      accentColor: "#10B981",
    },
    {
      id: "street-market-pricing",
      slug: "street-market-consumer-pricing-research",
      title: "Micro-Behaviors: Pricing Strategies & Consumer Psychology in Street Markets",
      subtitle: "An empirical field study decoding price elasticity, bargaining cues, and dynamic vendor pricing in unorganized commerce.",
      category: "Academic / Market Research",
      categorySlug: "research",
      role: "Lead Field Researcher",
      timeline: "Sep 2025",
      clientOrContext: "Academic Field Research, Narayana Business School",
      summary:
        "A deep qualitative and empirical field investigation observing how informal vendors dynamic-price goods, read non-verbal consumer signals, and navigate price elasticity.",
      metrics: [
        { label: "Research Method", value: "Field & Observational" },
        { label: "Focus", value: "Consumer Psychology" },
        { label: "Core Concept", value: "Perceived Value Cues" },
      ],
      tags: ["Consumer Psychology", "Pricing Strategy", "Field Research", "Microeconomics"],
      context:
        "Conducted as part of the Marketing and Microeconomics curriculum at Narayana Business School, this study investigated the real-world micro-behaviors governing pricing in traditional Indian street bazaars.",
      challenge:
        "Deconstructing unwritten microeconomic principles and non-verbal psychological nudges in an informal marketplace where prices fluctuate without printed menus or digital algorithms.",
      approach:
        "Combined direct vendor shadowing with real-time customer transaction tracking, analyzing how vendor anchor pricing, quantity discounting, and buyer bargaining tactics influenced final deal closure.",
      execution: [
        {
          title: "Vendor Observational Shadowing",
          description:
            "Monitored pricing variations based on customer demographics, time of day, product perishability, and stall aesthetic placement.",
        },
        {
          title: "Bargaining Cue Analysis",
          description:
            "Categorized verbal and non-verbal bargaining cues that signal high vs. low customer price sensitivity.",
        },
        {
          title: "Framework Synthesis",
          description:
            "Linked informal retail pricing instincts with formal microeconomic elasticity and modern brand value-perception theory.",
        },
      ],
      outcome:
        "Derived actionable insights demonstrating how price discovery in informal markets reflects the fundamental principles of perceived fairness, anchoring, and emotional status.",
      learnings:
        "Price is rarely just a calculation of cost + margin. It is a psychological agreement of perceived value and status.",
      gallery: [
        {
          type: "placeholder",
          caption: "Field Data Observations & Dynamic Pricing Matrix",
          placeholderLabel: "Field Research Notes & Price Elasticity Curves",
          placeholderType: "Research Matrix",
          aspectRatio: "landscape",
          highlight: "Empirical Behavioral Data",
        },
        {
          type: "placeholder",
          caption: "Consumer Bargaining Signal Typology & Decision Trees",
          placeholderLabel: "Psychological Bargaining Framework Diagram",
          placeholderType: "Campaign Moodboard",
          aspectRatio: "landscape",
          highlight: "Behavioral Cues Model",
        },
      ],
      featured: false,
      accentColor: "#7048E8",
    },
    {
      id: "satvam-octapace",
      slug: "satvam-nutrifoods-cultural-audit",
      title: "OCTAPACE Framework Analysis — Satvam Nutrifoods Ltd.",
      subtitle: "Evaluating internal organizational climate and brand alignment across 8 cultural dimensions.",
      category: "Academic / Brand Strategy",
      categorySlug: "research",
      role: "Strategy & Organizational Analyst",
      timeline: "Nov 2025 – Dec 2025",
      clientOrContext: "Satvam Nutrifoods Ltd. / Narayana Business School",
      summary:
        "Analyzed how internal organizational culture, trust, autonomy, and collaboration impact a corporate brand's agility and market execution.",
      metrics: [
        { label: "Framework", value: "OCTAPACE" },
        { label: "Dimensions", value: "8 Core Pillars" },
        { label: "Application", value: "Internal Brand Alignment" },
      ],
      tags: ["Internal Branding", "Organizational Culture", "Strategic Audit", "Brand Alignment"],
      context:
        "Evaluated the internal organizational climate of Satvam Nutrifoods Ltd. to understand how internal employee perception and cross-departmental dynamics influence external brand execution.",
      challenge:
        "Identifying cultural barriers that hinder bottom-up creative initiative, risk-taking, and inter-departmental trust within a fast-moving food manufacturing enterprise.",
      approach:
        "Applied the OCTAPACE model (Openness, Confrontation, Trust, Authenticity, Proaction, Autonomy, Collaboration, Experimentation) to diagnose gaps in communication and organizational agility.",
      execution: [
        {
          title: "8-Dimension Cultural Audit",
          description:
            "Surveyed and evaluated key cultural dimensions impacting employee motivation, innovation, and risk-taking.",
        },
        {
          title: "Gap Identification",
          description:
            "Pinpointed bottlenecks in information sharing and bottom-up feedback loops that slowed marketing agility.",
        },
        {
          title: "Strategic Recommendations",
          description:
            "Proposed internal communication rituals and recognition systems to align company culture with brand promises.",
        },
      ],
      outcome:
        "Delivered a clear cultural roadmap illustrating that brand authenticity externally starts with psychological safety and collaboration internally.",
      learnings:
        "A brand's external marketing promise is only as credible as its internal team's lived reality.",
      gallery: [
        {
          type: "placeholder",
          caption: "OCTAPACE 8-Dimensional Radar Chart & Audit Scores",
          placeholderLabel: "OCTAPACE Cultural Assessment Radar Chart",
          placeholderType: "Research Matrix",
          aspectRatio: "landscape",
          highlight: "8 Cultural Dimensions",
        },
      ],
      featured: false,
      accentColor: "#3B82F6",
    },
  ] as Project[],
};
