window.PROJECTS = [

{
  id: "wmata-forecasting",
  title: "WMATA Ridership Forecasting",
  desc: "Forecasting station ridership using classical and machine learning time-series models.",
  tags: ["Python", "Time Series", "Prophet", "LightGBM", "TFT"],
  repo: "https://github.com/RaydenDodd/WMATA-Forecasting",
  sections: [
    {
      heading: "Overview",
      body: "Compared multiple forecasting approaches for WMATA Metrorail ridership using historical data with calendar and weather features."
    },
    {
      heading: "Deliverables",
      body: "Proposal and final paper embedded below."
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
  desc: "Interactive Dash and Plotly dashboard deployed as a containerized cloud application.",
  tags: ["Python", "Dash", "Plotly", "Data Visualization", "Docker", "Cloud"],
  repo: "https://github.com/RaydenDodd/WMATA-Visualization",
  live: "https://dashapp-278644791327.us-east1.run.app",
  sections: [
    {
      heading: "Overview",
      body: "Interactive exploration of WMATA ridership data from 2012–2025 including cleaning, transformation, PCA, and statistical analysis."
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
  desc: "Computer vision system for classifying driver distraction states.",
  tags: ["Computer Vision", "CNN", "ResNet-50", "Transfer Learning", "Optical Flow", "PyTorch"],
  repo: "https://github.com/RaydenDodd/distracted-driver-detection",
  live: "https://raydendodd.github.io/distracted-driver-detection/",
  noDetailPage: true
},

{
  id: "engine-detection",
  title: "Engine Detection",
  desc: "Virginia Tech Major Design Experience project sponsored by General Dynamics.",
  tags: ["Audio ML", "Classification", "MFCC", "Python", "Major Design Experience"],
  repo: "https://github.com/RaydenDodd/engine-detection",
  sections: [
    {
      heading: "Overview",
      body: "End-to-end engine audio classification project with full technical documentation."
    }
  ],
  pdfs: [
    {
      label: "IEEE Journal Article",
      url: "https://raw.githubusercontent.com/RaydenDodd/engine-detection/main/deliverables/IEEE%20Journal%20Article%20Engine%20Detection.pdf"
    },
    {
      label: "Expo Poster",
      url: "https://raw.githubusercontent.com/RaydenDodd/engine-detection/main/deliverables/Expo%20Poster.pdf"
    }
  ]
}

]
