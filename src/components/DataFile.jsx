import {
  faJsSquare,
  faCss,
  faHtml5,
  faPhp,
  faPython,
  faJava,
  faAws,
  faReact,
  faCss3Alt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export const AboutData = [
  {
    title: "Introduction",
    goals:
      "Hi, I'm Henrique Baggio! I'm a Brazilian-born" +
      " Software Engineering student with Italian citizenship, currently studying at Florida Gulf Coast University." +
      " Even though I started coding a little later than others, I quickly caught up by diving into internships, " +
      "research projects, and lots of self-learning. I work across the full stack — using React, Python, PHP, and" +
      " C++ — and have experience building both academic and real-world applications. Whether it's front-end " +
      "development, working with AWS, or managing SQL databases, I'm passionate about creating real solutions through code.",
  },
  {
    title: "Goals and Approach (FE / Full-Stack)",
    goals:
      "I'm passionate about front-end and full-stack development, and I'm always working to sharpen my " +
      "skills. I love building smooth, responsive web apps using React, JavaScript, and backend tools " +
      "like PHP and SQL. My goal is to keep learning, work on real projects, contribute to open-source, " +
      "and grow my network in the tech community. I’m excited to create user-friendly, high-impact " +
      "applications while constantly improving and staying adaptable in this fast-moving industry.",
  },
];

export const experienceData = [
  {
    name: "Rentvine",
    title: "FRONT-END DEVELOPER (I)",
    companyImg: "images/rv-icon.png",
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
    companyImg: "images/ottimizza-icon.png",
    description: [
      "At Ottimizza Automação Contábil in Brazil, I focused on automation projects using AWS Lambda and Python.",
      "One project involved transforming bank statements into a compatible format for internal use across the company. Another extracted text from images in S3 buckets for integration into existing systems.",
      "These tools improved efficiency and were deployed company-wide. I independently researched solutions and implemented cloud-based workflows.",
      "This internship sharpened my skills in cloud computing, serverless architecture, and real-world problem solving.",
    ],
    date: "June 2023 - Aug 2023",
    stacks: [
      { icon: faJava, color: "#f89820" },
      { icon: faDatabase, color: "#3776ab" },
      { icon: faAws, color: "#ff9900" },
    ],
  },
  {
    name: "Dendritic Hub",
    title: "RESEARCH ASSISTANT",
    companyImg: "images/fgcu-icon.png",
    description: [
      "As a Research Assistant under Dr. De Castro at FGCU, I contribute to projects involving Evolutionary Computing.",
      "I use Python, data structures, and algorithms to optimize everyday processes and improve system efficiency.",
      "I also facilitate weekly research meetings to support collaboration and clarify research goals.",
      "This role has strengthened my technical foundation and collaborative skills in an academic setting.",
    ],
    date: "Nov 2023 - Nov 2024",
    stacks: [{ icon: faPython, color: "#3776ab" }],
  },
  {
    name: "U.A. Whitaker College of Engineering",
    title: "SFTW ENGINEERING TUTOR",
    companyImg: "images/fgcu-icon.png",
    description: [
      "As a Software Engineering Tutor at FGCU, I provide academic support to students learning C, C++, and Python.",
      "I simplify topics like pointers, loops, and object-oriented programming through one-on-one and group sessions.",
      "Working with fellow tutors, I help develop effective teaching strategies that match different learning styles.",
      "This experience has improved my communication, leadership, and technical mentoring skills.",
    ],
    date: "Aug 2023 - Nov 2024",
    stacks: [
      { icon: faPython, color: "#3776ab" },
      { icon: faJava, color: "#f89820" },
      { svg: "images/cpp-icon.svg", color: "#3776ab" },
      { svg: "images/c-icon.svg", color: "#3776ab" },
    ],
  },
  {
    name: "U.A. Whitaker College of Engineering",
    title: "TEACHING ASSISTANT ",
    companyImg: "images/fgcu-icon.png",
    description: [
      "As a Teaching Assistant for Intro to Computer Science and Programming I & II, I support over 140 students at FGCU.",
      "I assist with grading, provide detailed feedback on assignments, and help students grasp core programming concepts.",
      "I also participate in course planning and assist in the classroom to reinforce instruction.",
      "This role has enhanced my understanding of foundational programming and strengthened my ability to explain complex topics clearly.",
    ],
    date: "Aug 2023 - Nov 2024",
    stacks: [
      { icon: faPython, color: "#3776ab" },
      { icon: faJava, color: "#f89820" },
      { svg: "images/cpp-icon.svg", color: "#3776ab" },
      { svg: "images/c-icon.svg", color: "#3776ab" },
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
    icon: faCss3Alt,
    color: "#38bdf8",
    level: 5,
    description:
      "Tailwind CSS is a utility-first CSS framework that enables developers to style applications directly within HTML by applying pre-defined classes, leading to fast and responsive UI development.",
  },
  {
    name: "Python",
    icon: faPython,
    color: "#306998",
    level: 7,
    description:
      "Python is a powerful, high-level programming language known for its readability and broad applicability in fields like web development, automation, data analysis, and AI.",
  },
  {
    name: "C++",
    svg: "images/cpp-icon.svg",
    color: "#f34b7d",
    level: 5,
    description:
      "C++ is a high-performance programming language commonly used for system/software development and game programming, known for its object-oriented features and close-to-hardware efficiency.",
  },
  {
    name: "C#",
    svg: "images/csharp-icon.svg",
    color: "#9B4F96",
    level: 5,
    description:
      "C# is a modern, object-oriented language developed by Microsoft. It is primarily used for building Windows applications, games with Unity, and enterprise software on the .NET framework.",
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
    name: "empty",
  },
  {
    name: "empty",
  },
  {
    name: "Java",
    icon: faJava,
    color: "#007396",
    level: 4,
    description:
      "Java is a robust, object-oriented programming language used in enterprise applications, Android development, and large-scale systems due to its platform independence and stability.",
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
    name: "Pokemon Cerulean++",
    description: [
      "As part of our group project for Programming I, we were tasked with creating a GUI project using the C++ library SFML.",
      "Our aim was to closely replicate the Pokemon battling system using a point-and-click SFML GUI system, effectively reverse-engineering its mechanics.",
      'The game offered players the choice of selecting between Charmander, Bulbasaur, and Squirtle. During battles, we incorporated two main moves: "Tackle," dealing base damage, and an "Elementary" attack, which varied in effectiveness based on the opponent, adhering closely to the original game\'s logic.',
    ],
    images: [
      "images/projects/Poke_Menu_WIP.png",
      "images/projects/Poke_Select_1.png",
      "images/projects/char_battle_1frame.png",
      "images/projects/squir_battle_1frame.png",
      "images/projects/bulba_battle_1frame.png",
    ],
    stack: [
      { svg: "images/cpp-icon.svg", color: "#f34b7d" },
      { svg: "images/sfml-icon.png", color: "#8CC84B" },
    ],
    link: "https://github.com/IqueBaggio28/Pokemon",
  },
  {
    name: "Pokemon Cerulean++",
    description: [
      "As part of our group project for Programming I, we were tasked with creating a GUI project using the C++ library SFML.",
      "Our aim was to closely replicate the Pokemon battling system using a point-and-click SFML GUI system, effectively reverse-engineering its mechanics.",
      'The game offered players the choice of selecting between Charmander, Bulbasaur, and Squirtle. During battles, we incorporated two main moves: "Tackle," dealing base damage, and an "Elementary" attack, which varied in effectiveness based on the opponent, adhering closely to the original game\'s logic.',
    ],
    images: [
      "images/projects/Poke_Menu_WIP.png",
      "images/projects/Poke_Select_1.png",
      "images/projects/char_battle_1frame.png",
      "images/projects/squir_battle_1frame.png",
      "images/projects/bulba_battle_1frame.png",
    ],
    stack: [
      { svg: "images/cpp-icon.svg", color: "#f34b7d" },
      { svg: "images/sfml-icon.png", color: "#8CC84B" },
    ],
    link: "https://github.com/IqueBaggio28/Pokemon",
  },
  {
    name: "Pokemon Cerulean++",
    description: [
      "As part of our group project for Programming I, we were tasked with creating a GUI project using the C++ library SFML.",
      "Our aim was to closely replicate the Pokemon battling system using a point-and-click SFML GUI system, effectively reverse-engineering its mechanics.",
      'The game offered players the choice of selecting between Charmander, Bulbasaur, and Squirtle. During battles, we incorporated two main moves: "Tackle," dealing base damage, and an "Elementary" attack, which varied in effectiveness based on the opponent, adhering closely to the original game\'s logic.',
    ],
    images: [
      "images/projects/Poke_Menu_WIP.png",
      "images/projects/Poke_Select_1.png",
      "images/projects/char_battle_1frame.png",
      "images/projects/squir_battle_1frame.png",
      "images/projects/bulba_battle_1frame.png",
    ],
    stack: [
      { svg: "images/cpp-icon.svg", color: "#f34b7d" },
      { svg: "images/sfml-icon.png", color: "#8CC84B" },
    ],
    link: "https://github.com/IqueBaggio28/Pokemon",
  },
];
