window.PROJECTS = [
  {
    id: "wmata-forecasting",
    title: "WMATA Ridership Forecasting",
    desc: "Forecasting station ridership with classical + ML models. Feature engineering, evaluation, and plots.",
    tags: ["Python", "Time Series", "Prophet", "LightGBM", "TFT"],
    repo: "https://github.com/RaydenDodd/WMATA-Forecasting",
    sections: [
      {
        heading: "Overview",
        body: "Compared multiple forecasting approaches for WMATA Metrorail ridership using historical entries plus weather/calendar features. Built baselines, trained models, and evaluated accuracy and error behavior."
      },
      {
        heading: "Deliverables",
        body: "Proposal + final report embedded below. Code, plots, and experiment artifacts live in the repo."
      }
    ],
    pdfs: [
      {
        label: "Proposal Paper (PDF)",
        url: "https://raw.githubusercontent.com/RaydenDodd/WMATA-Forecasting/main/Comparing_Of_Forecasting_Approaches_for_WMATA_Metro_Ridership.pdf",
        open: "https://github.com/RaydenDodd/WMATA-Forecasting/blob/main/Comparing_Of_Forecasting_Approaches_for_WMATA_Metro_Ridership.pdf"
      },
      {
        label: "Final Paper (PDF)",
        url: "https://raw.githubusercontent.com/RaydenDodd/WMATA-Forecasting/main/Comparing_Of_Forecasting_Approaches_for_WMATA_Metro_Ridership_Final_Paper-RaydenDodd.pdf",
        open: "https://github.com/RaydenDodd/WMATA-Forecasting/blob/main/Comparing_Of_Forecasting_Approaches_for_WMATA_Metro_Ridership_Final_Paper-RaydenDodd.pdf"
      }
    ]
  },

  {
    id: "distracted-driver",
    title: "Distracted Driver Detection",
    desc: "Computer vision pipeline to classify driver behavior states from images/video.",
    tags: ["Computer Vision", "Deep Learning", "Python"],
    repo: "https://github.com/RaydenDodd/distracted-driver-detection",
    live: "https://raydendodd.github.io/distracted-driver-detection/",
    noDetailPage: true
  },

  {
    id: "engine-detection",
    title: "Engine Detection",
    desc: "Model + demo for engine-related detection with a final presentation and YouTube video.",
    tags: ["ML", "Detection", "Demo"],
    repo: "https://github.com/dcgreen115/engine-detection",
    sections: [
      {
        heading: "Overview",
        body: "Final project with presentation + a demo video. Repo contains materials and setup details."
      }
    ],
    youtube: [
      {
        label: "Demo Video",
        id: "tGDF3pdVRiI"
      }
    ]
  },

  {
    id: "interactive-website",
    title: "Interactive Website Project",
    desc: "Standalone interactive website project (repo coming soon).",
    tags: ["Web", "Interactive", "JavaScript"],
    sections: [
      {
        heading: "Status",
        body: "This is a standalone interactive site. Repo link will be added once it’s published."
      }
    ]
  }
];
