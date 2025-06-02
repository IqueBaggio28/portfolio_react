import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ProjectsData } from "./DataFile.jsx";

const Projects = ({ sectionHeader }) => {
  const projects = ProjectsData;

  return (
    <section id="projects" className="container_sec gap-24 lg:gap-50">
      <h2 className="sectionHeader mb-10">{sectionHeader}</h2>
      {projects.map(({ name, description, images, stack, link }, index) => (
        <div
          className={`flex flex-col w-full items-center justify-between gap-16 lg:flex-row lg:justify-evenly lg:items-start ${
            index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
          key={index}
        >
          {/* Project image */}
          <div className="hidden gap-4 flex-col h-fit w-[400px] lg:flex 2xl:w-[450px] 2xl:gap-10">
            {images.map((image, index) =>
              image.img ? (
                <img
                  src={image.img}
                  alt={name}
                  className="w-full h-full object-contain cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
                  key={index}
                />
              ) : (
                <video
                  src={image.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
                  key={index}
                />
              )
            )}
          </div>

          {/* Project details */}
          <div className="sticky top-1/4">
            {/* Project name and link */}
            <div className="flex justify-center relative items-center text-[cyan_] mb-4 2xl:mb-8">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--clr-orange)] transition-all duration-300 ease-in-out relative group"
              >
                <h3 className="text-3xl text-center md:text-4xl 2xl:text-5xl">
                  {name}
                </h3>
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[var(--clr-orange)] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                <FontAwesomeIcon
                  className="absolute right-0 -top-3"
                  icon={faArrowUpRightFromSquare}
                  size="lg"
                />
              </a>
            </div>
            {/* Project description */}
            <div className="flex flex-col gap-4 mb-4 lg:w-[355px] 2xl:w-[470px] 2xl:gap-6 2xl:mb-8">
              {description.map((desc, index) => (
                <p
                  className="text-center text-[var(--clr-slate400)] md:text-lg 2xl:text-xl"
                  key={index}
                >
                  {desc}
                </p>
              ))}
            </div>
            {/* Project stack */}
            <div className="flex items-center justify-center gap-4 2xl:gap-6">
              {stack.map(({ svg, color, icon }, index) =>
                svg ? (
                  <img
                    src={svg}
                    alt={name}
                    className={`w-10 h-10 hover:scale-120 transition-all duration-300 ease-in-out ${color}`}
                    key={index}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="hover:scale-120 transtion-all duration-300 ease-in-out 2xl:scale-150 2xl:hover:scale-170"
                    icon={icon}
                    color={color}
                    size="2x"
                    key={index}
                  />
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
