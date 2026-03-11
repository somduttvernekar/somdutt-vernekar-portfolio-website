export const resumeData = {
  basics: {
    name: "Somdutt Vernekar",
    initials: "SV",
    title: "Backend & Generative AI Engineer",
    summary: "Software Engineer skilled in Generative AI, building end-to-end AI powered solutions. Backend proficient in Python, Node.js, and .NET. Experienced in integrating various LLMs to solve complex business challenges. Dedicated to building high-performance systems that leverage innovative AI technologies.",
    location: "Goa, India",
    email: "somvernekar55@gmail.com",
    phone: "8552875676",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/somduttvernekar-204603169"
      }
    ]
  },
  experience: [
    {
      company: "Claysys Technologies",
      roles: [
        {
          title: "Sr. Software Engineer",
          dates: "2023 – Present",
          bullets: [
            "Leading multiple production GenAI projects with 4+ live RAG chatbots serving both client and internal environments, including Employee Assistance chatbot serving a leading US Credit Union, and Internal chatbots like Meeting Insights, RPA manual-trained assistance bot and Support bot.",
            "Resolved critical RAG retrieval accuracy issues by implementing enhanced contextual retrieval techniques, significantly improving response quality and LLM performance across production systems.",
            "Built PMHeatmap which analyzes project meeting transcripts and emails and visualizes key insights including key concerns, risk matrix, action items, trending topics, sentiment analysis, and project health metrics converting unstructured data like documents, email or Transcripts into structured formats.",
            "Architected and implemented comprehensive deduplication system using vector embeddings and similarity search, eliminating duplicate insights data and improving system efficiency by significant margins.",
            "Conducted comprehensive code reviews and pull request evaluations, ensuring code quality, best practices adherence, and maintaining system integrity across multiple development teams.",
            "Reviewed and evaluated hackathon projects as part of company recruitment process, assessing technical implementation, code quality, and problem-solving approaches of potential candidates."
          ]
        },
        {
          title: "Software Engineer",
          dates: "2022 – 2023",
          bullets: [
            "Led and architected Feedback Resolution Mechanism where it trains the bot by taking user feedbacks if the LLM is not able to generate the correct response.",
            "Maintained and upgraded Core Chatbot Backend API for storing and maintaining critical data including chat conversations, user details, and system configurations, serving as the primary backend for chatbot operations",
            "Handled production chatbot deployments and maintenance, serving as the first point of contact for system issues, troubleshooting, and performance optimization for a leading US Credit Union"
          ]
        }
      ]
    },
    {
      company: "Cloud Counselage Pvt. Ltd.",
      roles: [
        {
          title: "Web Developer Intern",
          dates: "07/2021 – 08/2021",
          bullets: [
            "Led development of an online code editor that allowed programmers to write and execute HTML, CSS and JavaScript code within a single editor.",
            "My performance on this project earned me a Certificate of Appreciation from the Company."
          ]
        }
      ]
    }
  ],
  skills: {
    languages: ["Python", "Typescript/Javascript (Node.js)", "C#", "HTML/CSS"],
    frameworks: ["FastAPI", "LangChain", "LlamaIndex", ".Net", "Vue.js", "Express.js"],
    databases: ["Qdrant", "SQL Server"],
    cloud: ["Azure OpenAI", "Azure App Service", "Azure Key Vault"]
  },
  education: [
    {
      institution: "Don Bosco College of Engineering",
      degree: "B.E in Computer Engineering",
      dates: "06/2018 – 07/2022"
    }
  ],
  projects: [
    {
      title: "Diagnosis of Multiple Diseases using Machine Learning Techniques on Retinal Images",
      description: "This project is based on using the VGG-16 machine learning model to automatically diagnose multiple diseases from digital fundus images. The automated approach aims to reduce the time required for manual examination of numerous retinal images by ophthalmologists."
    }
  ],
  achievements: [
    {
      title: "GenAI Leadership",
      value: "4+",
      context: "Production RAG chatbots deployed",
      type: "metric"
    },
    {
      title: "System Efficiency",
      value: "High",
      context: "Architected vector deduplication system",
      type: "capability"
    },
    {
      title: "Recognition",
      value: "Award",
      context: "Certificate of Appreciation from Cloud Counselage",
      type: "metric"
    }
  ]
};
