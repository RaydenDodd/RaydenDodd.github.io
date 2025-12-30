window.PROJECTS = [
  {
    id: "wmata",
    title: "WMATA Ridership Forecasting",
    desc: "Forecasting station ridership with classical + ML models. Feature engineering, evaluation, and plots.",
    tags: ["Python", "Time Series", "Prophet", "LightGBM", "TFT"],
    repo: "https://github.com/RaydenDodd/WMATA-Forecasting",
    live: null,
    heroImage: "../assets/1C15215B-51D5-48B0-B963-667BA2DA95B7.png",
    sections: [
      {
        heading: "Overview",
        body:
          "Compared multiple forecasting approaches on WMATA Metrorail ridership with weather + calendar features. Built baselines, trained models, and evaluated accuracy and error behavior across time."
      },
      {
        heading: "Deliverables",
        body: "Proposal + final paper (embedded below), plus code and plots in the repo."
      }
    ],
    pdfs: [
      {
        label: "Proposal Paper (PDF)",
        url: "https://raw.githubusercontent.com/RaydenDodd/WMATA-Forecasting/main/Comparing_Of_Forecasting_Approaches_for_WMATA_Metro_Ridership.pdf"
      },
      {
        label: "Final Paper (PDF)",
        url: "https://raw.githubusercontent.com/RaydenDodd/WMATA-Forecasting/main/Comparing_Of_Forecasting_Approaches_for_WMATA_Metro_Ridership_Final_Paper-RaydenDodd.pdf"
      }
    ],
    youtube: []
  },

  {
    id: "distracted",
    title: "Distracted Driving Detector",
    desc: "Computer vision pipeline to classify driver behavior states from images/video.",
    tags: ["Computer Vision", "Deep Learning", "Python"],
    repo: "https://github.com/RaydenDodd/distracted-driver-detection",
    live: "https://raydendodd.github.io/distracted-driver-detection/",
    heroImage: "../assets/1C15215B-51D5-48B0-B963-667BA2DA95B7.png",
    sections: [
      {
        heading: "Overview",
        body:
          "End-to-end CV project for distracted driving classification with training, evaluation, and a clean web demo."
      },
      {
        heading: "Try it",
        body: "Use the live site link below, or browse the repo for training + evaluation details."
      }
    ],
    pdfs: [],
    youtube: []
  },

  {
    id: "engine",
    title: "Engine Detection",
    desc: "Model + demo for engine-related detection with a final presentation and YouTube video.",
    tags: ["ML", "Detection", "Demo"],
    repo: "https://github.com/dcgreen115/engine-detection",
    live: null,
    heroImage: "../assets/1C15215B-51D5-48B0-B963-667BA2DA95B7.png",
    sections: [
      {
        heading: "Overview",
        body:
          "Project repo includes the final presentation and supporting materials. The demo video is embedded below."
      }
    ],
    pdfs: [],
    youtube: [
      {
        label: "Final Demo Video",
        id: "PASTE_YOUTUBE_VIDEO_ID_HERE"
      }
    ]
  },

  {
    id: "interactive",
    title: "Interactive Website Project",
    desc: "Standalone interactive website project (repo coming soon).",
    tags: ["Web", "Interactive", "JavaScript"],
    repo: null,
    live: "PASTE_LIVE_SITE_URL_HERE",
    heroImage: "../assets/1C15215B-51D5-48B0-B963-667BA2DA95B7.png",
    sections: [
      {
        heading: "Overview",
        body:
          "Interactive project site. Repo will be added once published."
      }
    ],
    pdfs: [],
    youtube: []
  }
];
