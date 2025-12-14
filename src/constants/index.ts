/**
 * Application constants and configuration
 * This file contains all static data and configuration values
 */

import { NavItem, Technology, Project } from '../types';

// Import technology icons
import htmlIcon from '../assets/images/html.png';
import cssIcon from '../assets/images/css.png';
import javascriptIcon from '../assets/images/javascript.png';
import typescriptIcon from '../assets/images/typescript.png';
import reactIcon from '../assets/images/react.png';
import aspnetIcon from '../assets/images/aspnet.png';
import mongodbIcon from '../assets/images/mongo.png';
import postgresqlIcon from '../assets/images/postgresql.png';
import gitIcon from '../assets/images/git.png';
import sqlServerIcon from '../assets/images/sql_server.png';
import juegocelula from '../assets/images/juegocelula.jpg';
import farmacia from '../assets/images/ProjectoFarmacia.jpg';
import frontend from '../assets/images/frontend.png';
import backend from '../assets/images/Backend.png';
import portafolio from '../assets/images/portafolio.png';


// Import project images
import facturacionImage from '../assets/images/Facturacion.png';
import monketypeImage from '../assets/images/monketype.png';

// WhatsApp configuration
export const WHATSAPP_CONFIG = {
  number: '593988162040',
  message: `Hola Daniel, he revisado tu portafolio y me ha impresionado tu trabajo como desarrollador de software. Estoy interesado/a en explorar una colaboración profesional.

Tipo de proyecto:
[ ] Desarrollo de aplicación/software
[ ] Consultoría técnica o arquitectura
[ ] Colaboración en equipo de desarrollo
[ ] Otro: ____________

Detalles técnicos:
• Stack tecnológico preferido: ____________
• Alcance estimado: ____________
• Timeline tentativo: ____________

¿Tendrías disponibilidad para una breve reunión la próxima semana para discutir los requerimientos técnicos?`,
  formatMessage: (customMessage?: string) => {
    const message = customMessage || WHATSAPP_CONFIG.message;
    return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
  }
} as const;

// Personal information
export const PERSONAL_INFO = {
  name: 'Daniel Moyolema',
  title: 'Full-Stack Developer',
  whatsapp: '+593988162040',
  phone: '+593988162040',
  location: 'Ecuador',
  bio: `Passionate full-stack developer with expertise in modern web technologies. 
        I create scalable, user-focused applications using React, .NET, and various databases. 
        Always eager to learn new technologies and solve complex problems.`,
  resume: '/assets/Daniel_Moyolema_Resume.pdf', // TODO: Add actual resume file to public/assets folder
  social: {
    linkedin: 'https://www.linkedin.com/in/dannydevlp/',
    github: 'https://github.com/daniel-devlp',
    twitter: '', // TODO: Add if available
    portfolio: 'https://your-portfolio.com' // TODO: Update with real URL
  }
} as const;

// Navigation configuration
export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/'
  },
  {
    id: 'about',
    label: 'About',
    path: '/about'
  },
  {
    id: 'projects',
    label: 'Projects',
    path: '/projects'
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact'
  }
];

// Technologies/Skills data
export const TECHNOLOGIES: Technology[] = [
  {
    id: 'html',
    name: 'HTML5',
    icon: htmlIcon,
    category: 'frontend',
    proficiency: 'advanced',
    color: '#E34F26'
  },
  {
    id: 'css',
    name: 'CSS3',
    icon: cssIcon,
    category: 'frontend',
    proficiency: 'advanced',
    color: '#1572B6'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: javascriptIcon,
    category: 'frontend',
    proficiency: 'advanced',
    color: '#F7DF1E'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: typescriptIcon,
    category: 'frontend',
    proficiency: 'intermediate',
    color: '#3178C6'
  },
  {
    id: 'react',
    name: 'React',
    icon: reactIcon,
    category: 'frontend',
    proficiency: 'advanced',
    color: '#61DAFB'
  },
  {
    id: 'aspnet',
    name: 'ASP.NET',
    icon: aspnetIcon,
    category: 'backend',
    proficiency: 'intermediate',
    color: '#512BD4'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: mongodbIcon,
    category: 'database',
    proficiency: 'intermediate',
    color: '#47A248'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: postgresqlIcon,
    category: 'database',
    proficiency: 'intermediate',
    color: '#336791'
  },
  {
    id: 'sqlserver',
    name: 'SQL Server',
    icon: sqlServerIcon,
    category: 'database',
    proficiency: 'intermediate',
    color: '#CC2927'
  },
 
  {
    id: 'git',
    name: 'Git',
    icon: gitIcon,
    category: 'devtools',
    proficiency: 'advanced',
    color: '#F05032'
  }
];

// Projects data
export const PROJECTS: Project[] = [
  
  {
    id: 'monkeytype-clone',
    title: 'MonkeyType Clone',
    description: `A faithful recreation of the popular MonkeyType typing test application. Built with vanilla 
                  JavaScript to demonstrate core web development skills without relying on frameworks. Features 
                  include multiple test modes, real-time WPM calculation, accuracy tracking, and a clean, 
                  distraction-free interface that helps users improve their typing speed and accuracy.`,
    shortDescription: 'Typing speed test application with real-time analytics.',
    image: monketypeImage,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Web App'],
    liveUrl: 'https://zippy-torrone-8b1b14.netlify.app/',
    demoLink: 'https://zippy-torrone-8b1b14.netlify.app/',
    githubUrl: 'https://github.com/daniel-devlp/monkeytype-clone',
    githubLink: 'https://github.com/daniel-devlp/monkeytype-clone',
    featured: true,
    completedDate: '2023-12',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Multiple typing test modes',
      'Real-time WPM calculation',
      'Accuracy tracking',
      'Customizable test length',
      'Clean, distraction-free UI',
      'Responsive design'
    ]
  },
  {
    id: 'project-final',
    title: 'Final Project (Backend)',
    description: `Backend for the final course project in Web Development, implemented with C# and ASP.NET Core. Includes modules for invoicing, payments, product and image management, as well as authentication and role management. Features migrations for key entities and services for validations, logging, and transactional handling.`,
    shortDescription: 'ASP.NET Core backend with invoicing, payments, and user management.',
    image: backend,
    tags: ['C#', 'ASP.NET Core', 'Payments', 'Cloudinary', 'API'],
    githubUrl: 'https://github.com/DannyDev18/ProjectFinal',
    githubLink: 'https://github.com/DannyDev18/ProjectFinal',
    featured: true,
    completedDate: '2025-12',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'Cloudinary', 'SQL Server'],
    features: [
      'Automated invoicing with endpoints and DTOs',
      'Payments system with Payment and PaymentMethod entities',
      'Image management via Cloudinary',
      'Validation, logging, and transactional handling',
      'Role management integrated with Identity'
    ]
  },
  {
    id: 'frontend-proyecto-final',
    title: 'Final Project Frontend',
    description: `Frontend for the final course project, focused on user experience and typed components. Developed primarily in TypeScript (≈59.5%) and CSS (≈40.3%), designed to consume backend APIs and ensure consistent UI/UX.`,
    shortDescription: 'TypeScript frontend with typed components and CSS styling.',
    image: frontend,
    tags: ['TypeScript', 'CSS', 'Frontend', 'UI'],
    githubUrl: 'https://github.com/DannyDev18/FrontEndProyectoFinal',
    githubLink: 'https://github.com/DannyDev18/FrontEndProyectoFinal',
    featured: false,
    completedDate: '2025-06',
    technologies: ['TypeScript', 'CSS', 'HTML', 'Framework (configurable)'],
    features: [
      'Typed TypeScript components for consistent UI',
      'Organized CSS styling with responsive design',
      'Ready to consume backend APIs',
      'Structure optimized for maintenance and scalability'
    ]
  },
  {
    id: 'juego-godot',
    title: 'Godot Game',
    description: `Collaborator in Game developed in Godot using GDScript, with organized scenes, scripts, and assets. Private repository, 100% GDScript.`,
    shortDescription: 'Godot game developed in GDScript.',
    image: juegocelula,
    tags: ['Godot', 'GDScript', 'Game'],
    githubUrl: 'https://github.com/Papuxking/JuegoGodot',
    githubLink: 'https://github.com/Papuxking/JuegoGodot',
    featured: true,
    completedDate: '2025-12',
    technologies: ['Godot', 'GDScript'],
    features: [
      'Game logic implemented in GDScript',
      'Scenes and assets organized for Godot',
      'Basic mechanics: player, enemies, and collisions'
    ]
  },
  {
    id: 'hospital-management-solution',
    title: 'Hospital Management Solution',
    description: `Distributed hospital management system built with ASP.NET Core MVC, designed to connect multiple medical centers through microservices. Private repository; includes controller documentation, DTO creation, and Swagger configuration.`,
    shortDescription: 'Distributed hospital management',
    image: farmacia,
    tags: ['C#', 'ASP.NET Core', 'Microservices', 'Docker', 'Swagger'],
    githubUrl: 'https://github.com/DannyDev18/Gestion-Farmacia',
    githubLink: 'https://github.com/DannyDev18/Gestion-Farmacia',
    featured: true,
    completedDate: '2025-04',
    technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'Docker', 'JavaScript'],
    features: [
      'Documented controllers and DTOs for CRUD operations',
      'Swagger/OpenAPI configuration',
    ]
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: `Personal portfolio website to showcase projects, skills, and contact information. Built primarily with TypeScript (≈93%) and optimized for presenting work and linking to repositories.`,
    shortDescription: 'Personal portfolio showcasing projects and contact info.',
    image: portafolio,
    tags: ['TypeScript', 'Web', 'Portfolio'],
    githubUrl: 'https://github.com/DannyDev18/Portfolio',
    githubLink: 'https://github.com/DannyDev18/Portfolio',
    featured: true,
    completedDate: '2025-11',
    technologies: ['TypeScript', 'JavaScript', 'CSS', 'HTML'],
    features: [
      'Project listings with descriptions and repository links',
      'Contact section and links to social profiles',
      'Responsive design with performance focus'
    ]
  }
  
  // TODO: Add more projects as they are completed
];

// Animation configuration
export const ANIMATION_CONFIG = {
  // Entrance animations
  fadeInUp: {
    duration: 0.6,
    delay: 0.1,
    easing: 'ease-out'
  },
  slideInLeft: {
    duration: 0.8,
    delay: 0.2,
    easing: 'ease-out'
  },
  slideInRight: {
    duration: 0.8,
    delay: 0.2,
    easing: 'ease-out'
  },
  // Hover animations
  scaleOnHover: {
    duration: 0.3,
    easing: 'ease-in-out'
  },
  // Stagger animations for lists
  staggerChildren: {
    duration: 0.1,
    easing: 'ease-out'
  }
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
  large: '1400px'
} as const;
