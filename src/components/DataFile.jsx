import {
  faJsSquare,
  faCss,
  faHtml5,
  faPhp,
  faPython,
  faJava,
  faAws,
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
