import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar.jsx";
import {
  faJsSquare,
  faCss,
  faHtml5,
  faPhp,
  faPython,
  faJava,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faArrowUp,
  faArrowUpRightFromSquare,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = ({ sectionHeader }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const companies = [
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

  return (
    <section id="experience" className="container_sec mt-10">
      <h2 className="sectionHeader">{sectionHeader}</h2>
      <div className="flex flex-col gap-10 lg:flex-row transform-3d">
        {companies.map(
          ({ name, title, companyImg, description, date, stacks }, index) => (
            <div
              onClick={() => setExpandedIndex(index)}
              key={index}
              className={`w-full pt-6 pb-3 px-6  relative border border-[var(--clr-teal)] rounded-lg  flex flex-col justify-between items-center bg-[var(--clr-darker)] transition-all duration-400 ease-in-out md:min-w-[550px]  ${
                expandedIndex === index
                  ? "min-h-[700px]"
                  : "min-h-60 cursor-pointer hover:scale-[1.1] hover:md:scale-[1.2] "
              } `}
            >
              {expandedIndex === index ? (
                <>
                  <button
                    className="absolute top-2 right-3 opacity-30 p-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(null);
                    }}
                  >
                    <FontAwesomeIcon icon={faClose} size="lg" />
                  </button>

                  <div className="flex items-center justify-between w-full">
                    <Avatar
                      className="w-25 h-25 overflow-hidden border border-gray-700"
                      style={{
                        padding: name === "Ottimizza Ltda." ? "10px" : "4px",
                      }}
                    >
                      <AvatarImage
                        src={companyImg}
                        className="rounded-full object-cover object-top scale-125 "
                      />
                    </Avatar>
                    <div className="flex flex-col items-center justify-between w-full ml-5 pt-4">
                      <p className="text-[var(--clr-orange)] text-3xl tracking-[0.4rem] text-center font-bold ">
                        {name}
                      </p>
                      <p className="text-[var(--clr-teal)] text-md tracking-[0.4rem] text-center font-medium ">
                        {title}
                      </p>
                    </div>
                  </div>
                  <div>
                    <ul className="mx-3 flex flex-col gap-3">
                      {description.map((paragraph) => (
                        <li key={paragraph} className="text-lg md:text-xl">
                          {paragraph}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <div className="flex gap-2">
                      {stacks.map(({ icon, color, svg }, index) =>
                        svg ? (
                          <img
                            key={index}
                            src={svg}
                            alt="stack"
                            className="w-6 h-6 hover:scale-125 "
                          />
                        ) : (
                          <FontAwesomeIcon
                            key={index}
                            icon={icon}
                            size="xl"
                            color={color}
                            className="hover:scale-125"
                          />
                        )
                      )}
                    </div>
                    <p className="text-xs text-center text-gray-400">{date}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute top-2 right-3 opacity-30">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size="sm"
                    />
                  </div>

                  {/*Box content*/}
                  <Avatar
                    className="w-25 h-25 overflow-hidden border border-gray-700"
                    style={{
                      padding: name === "Ottimizza Ltda." ? "10px" : "4px",
                    }}
                  >
                    <AvatarImage
                      src={companyImg}
                      className="rounded-full object-cover object-top scale-125 "
                    />
                  </Avatar>

                  <div className="flex gap-2">
                    {stacks.map(({ icon, color, svg }, index) =>
                      svg ? (
                        <img
                          key={index}
                          src={svg}
                          alt="stack"
                          className="w-6 h-6 hover:scale-125 "
                        />
                      ) : (
                        <FontAwesomeIcon
                          key={index}
                          icon={icon}
                          size="xl"
                          color={color}
                          className="hover:scale-125"
                        />
                      )
                    )}
                  </div>
                  <div className="">
                    <p className="text-[var(--clr-teal)] text-sm tracking-[0.4rem] text-center font-bold md:text-lg ">
                      {title}
                    </p>
                    <p className="text-xs text-center text-gray-400">{date}</p>
                  </div>

                  {/*On Hover*/}
                  <button
                    popoverTarget="modal"
                    className="group absolute top-0 rounded-lg h-full w-full grid pt-6 justify-center hover:backdrop-blur-2xl"
                  >
                    <div
                      className=" relative h-24 w-24 rounded-full bg-gray-600 opacity-0 group-hover:opacity-100
                                        scale-90 group-hover:scale-100 translate-y-2 pointer-events-none place-items-center
                                        transition-all duration-300 ease-in-out grid group-hover:translate-y-12 group-hover:pointer-events-auto hover:place-items-center "
                    >
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        size="3x"
                        className="text-white"
                      />
                    </div>
                  </button>
                </>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
