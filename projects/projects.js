window.PROJECTS = [
  {
    id: "wmata-forecasting",
    title: "WMATA Ridership Forecasting",
    desc: "Forecasting station ridership with classical and machine learning time-series models.",
    tags: ["Python", "Time Series", "Prophet", "LightGBM", "TFT"],
    repo: "https://github.com/RaydenDodd/WMATA-Forecasting",
    sections: [
      {
        heading: "Overview",
        body: "Compared multiple forecasting approaches for WMATA Metrorail ridership using historical entries with weather and calendar features. Built baselines, trained models, and evaluated error behavior."
      },
      {
        heading: "Deliverables",
        body: "Proposal and final report are embedded below."
      }
    ],
    pdfs: [
      {
        label: "Proposal Paper",
        url: "https://raw.githubusercontent.com/RaydenDodd/WMATA-Forecasting/main/Comparing_Of_Forecasting_Approaches_for_WMATA_Metro_Ridership.pdf",
        open: "https://github.com/RaydenDodd/WMATA-Forecasting/blob/main/Comparing_Of_Forecasting_Approaches_for_WMATA_Metro_Ridership.pdf"
      },
      {
        label: "Final Paper",
        url: "https://raw.githubusercontent.com/RaydenDodd/WMATA-Forecasting/main/Comparing_Of_Forecasting_Approaches_for_WMATA_Metro_Ridership_Final_Paper-RaydenDodd.pdf",
        open: "https://github.com/RaydenDodd/WMATA-Forecasting/blob/main/Comparing_Of_Forecasting_Approaches_for_WMATA_Metro_Ridership_Final_Paper-RaydenDodd.pdf"
      }
    ]
  },

  {
    id: "wmata-visualization",
    title: "WMATA Ridership Dashboard",
    desc: "Interactive Dash and Plotly dashboard for WMATA ridership analysis.",
    tags: ["Python", "Dash", "Plotly", "Data Visualization", "Docker"],
    repo: "https://github.com/RaydenDodd/WMATA-Visualization",
    live: "https://dashapp-278644791327.us-east1.run.app",
    sections: [
      {
        heading: "Overview",
        body: "Interactive visualization of WMATA ridership data from 2012–2025, including cleaning, outlier detection, dimensionality reduction, transformations, and statistical summaries."
      },
      {
        heading: "Deliverables",
        body: "Final report embedded below. Presentation slides can be added here when uploaded."
      }
    ],
    pdfs: [
      {
        label: "Final Report",
        url: "https://raw.githubusercontent.com/RaydenDodd/WMATA-Visualization/main/Project_Report_Rayden_Dodd.pdf",
        open: "https://github.com/RaydenDodd/WMATA-Visualization/blob/main/Project_Report_Rayden_Dodd.pdf"
      }
    ]
  },

  {
    id: "distracted-driver",
    title: "Distracted Driver Detection",
    desc: "Computer vision system to classify driver behavior states from images and video.",
    tags: ["Computer Vision", "CNN", "ResNet-50", "Transfer Learning", "Optical Flow", "PyTorch"],
    repo: "https://github.com/RaydenDodd/distracted-driver-detection",
    live: "https://raydendodd.github.io/distracted-driver-detection/",
    noDetailPage: true
  },

  {
    id: "engine-detection",
    title: "Engine Detection",
    desc: "Virginia Tech Major Design Experience project sponsored by General Dynamics focused on engine audio classification.",
    tags: ["Python", "Audio ML", "MFCC", "Classification", "Major Design Experience", "General Dynamics"],
    repo: "https://github.com/RaydenDodd/engine-detection",
    sections: [
      {
        heading: "Overview",
        body: "Major Design Experience project to build and evaluate an engine audio classifier with full documentation and demo."
      },
      {
        heading: "Deliverables",
        body: "Paper, binder, presentation slides, poster, and demo video are included below."
      }
    ],
    pdfs: [
      {
        label: "IEEE Journal Article",
        url: "https://raw.githubusercontent.com/RaydenDodd/engine-detection/main/deliverables/IEEE%20Journal%20Article%20Engine%20Detection.pdf",
        open: "https://github.com/RaydenDodd/engine-detection/blob/main/deliverables/IEEE%20Journal%20Article%20Engine%20Detection.pdf"
      },
      {
        label: "Final Project Binder",
        url: "https://raw.githubusercontent.com/RaydenDodd/engine-detection/main/deliverables/Final%20Project%20Binder.pdf",
        open: "https://github.com/RaydenDodd/engine-detection/blob/main/deliverables/Final%20Project%20Binder.pdf"
      },
      {
        label: "Expo Presentation",
        url: "https://raw.githubusercontent.com/RaydenDodd/engine-detection/main/deliverables/Expo%20presentation.pdf",
        open: "https://github.com/RaydenDodd/engine-detection/blob/main/deliverables/Expo%20presentation.pdf"
      },
      {
        label: "Expo Poster",
        url: "https://raw.githubusercontent.com/RaydenDodd/engine-detection/main/deliverables/Expo%20Poster.pdf",
        open: "https://github.com/RaydenDodd/engine-detection/blob/main/deliverables/Expo%20Poster.pdf"
      }
    ],
    youtube: [
      { label: "Demo Video", id: "tGDF3pdVRiI" }
    ]
  }
];
