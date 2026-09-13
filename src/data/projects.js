import { asset } from './site'

export const coreProjects = [
  {
    title: 'HPV Transmission Dynamics & Risk Prediction',
    description:
      'Final-year research project that models HPV transmission and cervical cancer risk. Combines mathematical simulation with a TensorFlow prediction workflow and a React/Django dashboard for researchers and stakeholders.',
    image: asset('HPV.png'),
    tech: ['Python', 'TensorFlow', 'React', 'Django', 'Mathematical Modeling'],
    points: [
      'Differential-equation based HPV transmission simulation',
      'TensorFlow model for cervical cancer risk prediction',
      'Full-stack dashboard for simulation results and reports',
      'JWT authentication with patient and lab-engineer roles',
    ],
    github: 'https://github.com/Sohaib432002/HPV_Dission_Suprt',
    demo: 'https://hpv-dission-suprt.vercel.app',
  },
  {
    title: 'VisuSign — Traffic Sign Recognition',
    description:
      'Full-stack machine learning web app that classifies traffic signs from uploaded images. A React interface sends images to a trained model and shows live prediction results in the browser.',
    image: asset('ML.png'),
    tech: ['Python', 'Django', 'React', 'CNN', 'Machine Learning'],
    points: [
      'CNN-based traffic sign classification',
      'REST APIs serving real-time model inference',
      'Interactive React UI for uploading images and viewing results',
      'End-to-end ML model integration in a web application',
    ],
    github: 'https://github.com/Sohaib432002/Machine-Learning-Two-Apps',
    demo: 'https://ml-web-fepy.vercel.app',
  },
  {
    title: 'Gallstone Clinical Dashboard',
    description:
      'Interactive React dashboard that turns clinical gallstone and metabolic data into visual insights, with filtering by age, gender, and gallstone status.',
    image: asset('Dashboard.png'),
    tech: ['React', 'Recharts', 'Context API', 'Data Visualization'],
    points: [
      'Age and gallstone-status filtering',
      'Charts for BMI, cholesterol, glucose, and symptom prevalence',
      'High-risk patient highlighting from clinical indicators',
      'Responsive dashboard layout',
    ],
    github: 'https://github.com/Sohaib432002/Dashboard',
    demo: 'https://Sohaib432002.github.io/Dashboard/',
  },
  {
    title: 'Smart Finance Dashboard',
    description:
      'Interactive dashboard for tracking income, expenses, and monthly financial trends, with balance summaries and comparison charts.',
    image: asset('FinanceDashboard.png'),
    tech: ['Next.js', 'React', 'Recharts'],
    points: [
      'Total balance, income, and expense summaries',
      'Income vs expense comparison charts',
      'Monthly analytics view',
      'Responsive dashboard layout',
    ],
    github: 'https://github.com/Sohaib432002/FinanceDashboard',
    demo: 'https://finance-dashboard-steel-three.vercel.app/',
  },
  {
    title: 'YouTube Clone',
    description:
      'YouTube-style React application with home feed, search, watch page, channel pages, subscriptions, and studio-style uploads.',
    image: asset('youtubeClone.png'),
    tech: ['React', 'Tailwind CSS', 'REST API'],
    points: [
      'Home feed, trending, search, and related videos',
      'Watch page with likes, comments, share, save, and subscribe',
      'Channel pages and studio upload flow',
      'Responsive UI with component-based architecture',
    ],
    github: 'https://github.com/Sohaib432002/youtubeClone',
    demo: 'https://youtube-clone-two-iota-44.vercel.app/',
  },
  {
    title: 'Client Portfolio — Ali Haider',
    description:
      'Personal portfolio website built for Ali Haider, a Computer Science graduate. The site presents role-based web and React Native work with a modern Next.js frontend.',
    image: asset('AliPortfolio.png'),
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    points: [
      'Client-facing portfolio with live deployment',
      'Next.js and TypeScript frontend',
      'Motion and React Three Fiber visuals',
      'Responsive layout for desktop and mobile',
    ],
    github: 'https://github.com/Sohaib432002/AliProtfolio',
    demo: 'https://ali-portfolio-mocha.vercel.app/',
  },
]
