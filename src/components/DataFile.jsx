import {
  faJsSquare,
  faCss,
  faHtml5,
  faPhp,
  faAws,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// ExperienceData images
import rvIcon from "./images/rv-icon.png";
import ottimizzaIcon from "./images/ottimizza-icon.png";
import fgcuIcon from "./images/fgcu-icon.png";
import cppIcon from "./images/cpp-icon.svg"; // Assuming it's for experienceData based on usage
import cIcon from "./images/c-icon.svg"; // Assuming it's for experienceData based on usage

// SkillsData images
// cppIcon is already imported above
// csharpIcon will be imported if present in SkillsData, let's assume src/components/images/csharp-icon.svg
import csharpIcon from "./images/csharp-icon.svg";
import tailwindIcon from "./images/tailwind-icon.png";
import pythonIcon from "./images/python-icon.png";
import javaIcon from "./images/java-icon.png";
import leafmapIcon from "./images/leafmap-icon.png";
import pandasIcon from "./images/pandas-icon.png";
import numpyIcon from "./images/numpy-icon.png";

// ProjectsData images
import pokemonVideo from "./images/projects/pokemon-video.mp4";
import pokeMenuWIP from "./images/projects/Poke_Menu_WIP.png";
import pokeSelect1 from "./images/projects/Poke_Select_1.png";
import charBattle1frame from "./images/projects/char_battle_1frame.png";
import squirBattle1frame from "./images/projects/squir_battle_1frame.png";
import bulbaBattle1frame from "./images/projects/bulba_battle_1frame.png";

// Pomodoro Timer images
import pomodoroImg from "./images/projects/pomodoro-img.png";
import pomodoroVideo from "./images/projects/pomodoro-video.mp4";

// Portfolio Website images
import portfolioVideo from "./images/projects/portfolio-video.mp4";
import portfolioHero from "./images/projects/portfolio-hero.png";
import portfolioAbout from "./images/projects/portfolio-about.png";
import portfolioSkills from "./images/projects/portfolio-skills.png";
import portfolioProjects from "./images/projects/portfolio-projects.png";
import portfolioContact from "./images/projects/portfolio-contact.png";

//Senior Project images
import SPpdf from "./images/projects/SP-poster.png";
import SPpresentation from "./images/projects/SP-presentation.png";
import SPpypi from "./images/projects/SP-pypi.png";
import SPshipHeatmap from "./images/projects/SP-ship-heatmap.png";
import SPshipLocation from "./images/projects/SP-ship-location.png";

export const AboutData = [
  {
    title: "Introduction",
    goals:
      "Hi, I'm Henrique Baggio! I'm a Brazilian-born Software Engineer with Italian citizenship and a proud " +
      "graduate of Florida Gulf Coast University. Since entering the field, I've been applying and expanding on " +
      "the skills I developed through internships, research, and self-learning. I work across the full stack—using " +
      "React, Python, PHP, and C++—and have experience building both academic and real-world applications. " +
      "Whether it's front-end development, working with AWS, or managing SQL databases, I'm passionate about " +
      "creating real solutions through code.",
  },
  {
    title: "Goals and Approach (FE / Full-Stack)",
    goals:
      "I'm passionate about front-end and full-stack development, with a love for building smooth, " +
      "responsive web apps using React, JavaScript, and backend tools like PHP and SQL. My primary goal " +
      "for the future is to deepen my professional experience and continuously expand my knowledge in this " +
      "fast-moving industry. I'm eager to tackle new challenges, contribute to impactful projects, and stay " +
      "adaptable to grow as a software engineer and deliver high-quality, user-friendly applications.",
  },
];

export const experienceData = [
  {
    name: "Rentvine",
    title: "FRONT-END DEVELOPER (I)",
    companyImg: rvIcon,
    description: [
      "At Rentvine, I work with a full-stack team to build and maintain dynamic web applications. My primary role focuses on implementing front-end features using React.",
      "I enhance user interfaces for performance and accessibility, ensuring a smooth experience across devices. I also work with PHP and SQL to manage backend logic and maintain database reliability.",
      "I contribute to debugging tasks, write scalable code, and optimize workflows. This improves development efficiency and minimizes user friction.",
      "Regular code reviews help me maintain high-quality standards and stay current with modern web development practices.",
    ],
    date: "Nov 2024 - Present",
    stacks: [
      { icon: faJsSquare, color: "yellow" },
      { icon: faHtml5, color: "#e34c26" },
      { icon: faCss, color: "#264de4" },
      { icon: faPhp, color: "#8892be" },
    ],
  },
  {
    name: "Ottimizza Ltda.",
    title: "SFTW ENGINEERING INTERN ",
    companyImg: ottimizzaIcon,
    description: [
      "At Ottimizza Automação Contábil in Brazil, I focused on automation projects using AWS Lambda and Python.",
      "One project involved transforming bank statements into a compatible format for internal use across the company. Another extracted text from images in S3 buckets for integration into existing systems.",
      "These tools improved efficiency and were deployed company-wide. I independently researched solutions and implemented cloud-based workflows.",
      "This internship sharpened my skills in cloud computing, serverless architecture, and real-world problem solving.",
    ],
    date: "June 2023 - Aug 2023",
    stacks: [
      { svg: javaIcon, color: "#f89820" },
      { icon: faDatabase, color: "#3776ab" },
      { icon: faAws, color: "#ff9900" },
    ],
  },
  {
    name: "Dendritic Hub",
    title: "RESEARCH ASSISTANT",
    companyImg: fgcuIcon,
    description: [
      "As a Research Assistant under Dr. De Castro at FGCU, I contribute to projects involving Evolutionary Computing.",
      "I use Python, data structures, and algorithms to optimize everyday processes and improve system efficiency.",
      "I also facilitate weekly research meetings to support collaboration and clarify research goals.",
      "This role has strengthened my technical foundation and collaborative skills in an academic setting.",
    ],
    date: "Nov 2023 - Nov 2024",
    stacks: [{ svg: pythonIcon, color: "#3776ab" }],
  },
  {
    name: "U.A. Whitaker College of Eng.",
    title: "SFTW ENGINEERING TUTOR",
    companyImg: fgcuIcon,
    description: [
      "As a Software Engineering Tutor at FGCU, I provide academic support to students learning C, C++, and Python.",
      "I simplify topics like pointers, loops, and object-oriented programming through one-on-one and group sessions.",
      "Working with fellow tutors, I help develop effective teaching strategies that match different learning styles.",
      "This experience has improved my communication, leadership, and technical mentoring skills.",
    ],
    date: "Aug 2023 - Nov 2024",
    stacks: [
      { svg: pythonIcon, color: "#3776ab" },
      { svg: javaIcon, color: "#f89820" },
      { svg: cppIcon, color: "#3776ab" },
      { svg: cIcon, color: "#3776ab" },
    ],
  },
  {
    name: "U.A. Whitaker College of Eng.",
    title: "TEACHING ASSISTANT ",
    companyImg: fgcuIcon,
    description: [
      "As a Teaching Assistant for Intro to Computer Science and Programming I & II, I support over 140 students at FGCU.",
      "I assist with grading, provide detailed feedback on assignments, and help students grasp core programming concepts.",
      "I also participate in course planning and assist in the classroom to reinforce instruction.",
      "This role has enhanced my understanding of foundational programming and strengthened my ability to explain complex topics clearly.",
    ],
    date: "Aug 2023 - Nov 2024",
    stacks: [
      { svg: pythonIcon, color: "#3776ab" },
      { svg: javaIcon, color: "#f89820" },
      { svg: cppIcon, color: "#3776ab" },
      { svg: cIcon, color: "#3776ab" },
    ],
  },
];

export const SkillsData = [
  {
    name: "JavaScript",
    icon: faJsSquare,
    color: "yellow",
    level: 7,
    description:
      "JavaScript is a versatile programming language used to create dynamic and interactive web applications, powering both frontend and backend development through frameworks like React and Node.js.",
  },
  {
    name: "React",
    icon: faReact,
    color: "#61DBFB",
    level: 9,
    description:
      "React is a popular JavaScript library for building fast, interactive user interfaces. It uses a component-based architecture and virtual DOM to efficiently manage updates and build scalable frontend applications.",
  },
  {
    name: "HTML",
    icon: faHtml5,
    color: "#e34c26",
    level: 8,
    description:
      "HTML is the standard markup language for structuring content on the web. It forms the backbone of all websites, defining the layout and semantic structure of web pages.",
  },
  {
    name: "empty",
  },
  {
    name: "empty",
  },
  {
    name: "CSS",
    icon: faCss,
    color: "#264de4",
    level: 9,
    description:
      "CSS is a styling language used to control the presentation and layout of web pages. It allows developers to design visually engaging websites with responsiveness and animations.",
  },
  {
    name: "Tailwind CSS",
    svg: tailwindIcon,
    color: "#38bdf8",
    level: 6,
    description:
      "Tailwind CSS is a utility-first CSS framework that enables developers to style applications directly within HTML by applying pre-defined classes, leading to fast and responsive UI development.",
  },
  {
    name: "Python",
    svg: pythonIcon,
    color: "#306998",
    level: 7,
    description:
      "Python is a powerful, high-level programming language known for its readability and broad applicability in fields like web development, automation, data analysis, and AI.",
  },
  {
    name: "Java",
    svg: javaIcon,
    color: "#f89820",
    level: 4,
    description:
      "Java is a robust, object-oriented programming language used in enterprise applications, Android development, and large-scale systems due to its platform independence and stability.",
  },
  {
    name: "C++",
    svg: cppIcon,
    color: "#306998",
    level: 5,
    description:
      "C++ is a high-performance programming language commonly used for system/software development and game programming, known for its object-oriented features and close-to-hardware efficiency.",
  },
  {
    name: "C#",
    svg: csharpIcon,
    color: "#9B4F96",
    level: 5,
    description:
      "C# is a modern, object-oriented language developed by Microsoft. It is primarily used for building Windows applications, games with Unity, and enterprise software on the .NET framework.",
  },

  {
    name: "empty",
  },
  {
    name: "empty",
  },
  {
    name: "Git",
    icon: faGithub,
    color: "#fff",
    level: 8,
    description:
      "Git is a version control system that enables developers to track changes in their codebase, collaborate with others, and manage project history efficiently across distributed teams.",
  },

  {
    name: "AWS",
    icon: faAws,
    color: "#FF9900",
    level: 4,
    description:
      "AWS (Amazon Web Services) is a leading cloud platform that offers scalable computing, storage, and deployment tools. It is widely used for hosting, databases, serverless apps, and machine learning.",
  },
  {
    name: "PHP",
    icon: faPhp,
    color: "#8892be",
    level: 5,
    description:
      "PHP is a widely-used server-side scripting language suited for web development. It powers many dynamic websites and is especially known for its role in content management systems like WordPress.",
  },
];

export const ProjectsData = [
  {
    name: "Senior Project",
    description: [
      "For our Senior Project, my team and I developed **Maritimeviz**, a Python package published on PyPI.",
      "Maritimeviz is designed to ingest, analyze, and visualize Automatic Identification System (AIS) data for maritime vessels. It offers global map views, rich export options, interactive visualizations using Leafmap, and seamless integration with the Global Fishing Watch API.",
    ],
    images: [
      { img: SPpdf },
      { img: SPshipHeatmap },
      { img: SPshipLocation },
      { img: SPpresentation },
    ],
    stack: [
      { svg: pythonIcon, color: "#3776ab" },
      { svg: leafmapIcon, color: "#3776ab" },
      { svg: pandasIcon, color: "#3776ab" },
      { svg: numpyIcon, color: "#3776ab" },
    ],
    link: "https://pypi.org/project/maritimeviz/",
  },

  {
    name: "Pokemon Cerulean++",
    description: [
      "As part of our group project for Programming I, we were tasked with creating a GUI project using the C++ library SFML.",
      "Our aim was to closely replicate the Pokemon battling system using a point-and-click SFML GUI system, effectively reverse-engineering its mechanics.",
      'The game offered players the choice of selecting between Charmander, Bulbasaur, and Squirtle. During battles, we incorporated two main moves: "Tackle," dealing base damage, and an "Elementary" attack, which varied in effectiveness based on the opponent, adhering closely to the original game\'s logic.',
    ],
    images: [
      { video: pokemonVideo },
      { img: pokeMenuWIP },
      { img: pokeSelect1 },
      { img: charBattle1frame },
      { img: squirBattle1frame },
      { img: bulbaBattle1frame },
    ],
    stack: [
      { svg: cppIcon, color: "#3776ab" },
      { svg: cIcon, color: "#3776ab" },
    ],
    link: "https://github.com/IqueBaggio28/Pokemon",
  },
  {
    name: "Portfolio Website",
    description: [
      "I built this portfolio website using React, Tailwind CSS, and Vite. It's a simple and effective tool that I use to showcase my skills and projects.",
      "I used the React framework to create a dynamic and responsive website that is easy to update and maintain.",
      "I also used the Tailwind CSS framework to create a modern and stylish design that is easy to use and navigate.",
      "I also used the React framework to create a dynamic and responsive website that is easy to update and maintain.",
    ],
    images: [
      { video: portfolioVideo },
      { img: portfolioHero },
      { img: portfolioAbout },
      { img: portfolioSkills },
      { img: portfolioProjects },
      { img: portfolioContact },
    ],
    stack: [
      { icon: faJsSquare, color: "yellow" },
      { icon: faHtml5, color: "#e34c26" },
      { icon: faCss, color: "#264de4" },
      { icon: faReact, color: "#61DBFB" },
      { svg: tailwindIcon, color: "#38bdf8" },
    ],
    link: "https://github.com/IqueBaggio28/Portfolio",
  },
  {
    name: "Pomodoro Timer",
    description: [
      "A Pomodoro Timer is a time management tool that helps you stay focused and productive by breaking your work into 25-minute intervals, known as pomodoros, with 5-minute breaks in between.",
      "The timer is designed to enhance productivity and prevent burnout by providing a structured approach to work and rest.",
      "I built this timer using HTML, CSS, and JavaScript. It's a simple and effective tool that I use to stay focused and productive.",
      "I also added a sound effect to notify me when the timer is up, and a progress bar to track my progress.",
    ],
    images: [{ video: pomodoroVideo }, { img: pomodoroImg }],
    stack: [
      { icon: faJsSquare, color: "yellow" },
      { icon: faHtml5, color: "#e34c26" },
      { icon: faCss, color: "#264de4" },
      { icon: faReact, color: "#61DBFB" },
    ],
    link: "https://github.com/IqueBaggio28/pomodoro_timer",
  },
];
