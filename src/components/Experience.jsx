import React, { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar.jsx";
import { experienceData } from "./DataFile.jsx";
import AnimatedSection from "./AnimatedSection.jsx";

import {
  faArrowUp,
  faArrowUpRightFromSquare,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = ({ sectionHeader }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const companies = experienceData;

  return (
    <section id="experience" className="container_sec">
      <AnimatedSection>
        <h2 className="sectionHeader">{sectionHeader}</h2>
      </AnimatedSection>
      <AnimatedSection className="flex flex-col gap-10 xl:flex-row xl:gap-2">
        {companies.map(
          ({ name, title, companyImg, description, date, stacks }, index) => (
            <div
              onClick={() => setExpandedIndex(index)}
              key={index}
              className={`pt-6 pb-3 px-6 relative border-2 border-[var(--clr-teal)]
                 rounded-xl flex flex-col justify-between items-center bg-[var(--clr-darker)]
                  transition-all duration-900 ease-in-out  md:min-w-[550px] flex-1  
                  ${
                    expandedIndex === index
                      ? //style for expanded card
                        "min-h-fit max-h-fit transition-[height] duration-900 ease-in-out md:max-w-[400px] lg:max-w-[400px] xl:pt-6 xl:pb-3 xl:min-h-fit xl:max-h-[700px] xl:border-2 xl:md:max-w-[400px] xl:lg:max-w-[600px] xl:w-full xl:h-full xl:px-10"
                      : // Hide the card when it's not expanded on xl screens
                      expandedIndex !== null &&
                        expandedIndex !== index &&
                        window.innerWidth >= 1280
                      ? "xl:max-w-[100px] xl:min-w-[100px] xl:opacity-50 xl:hover:opacity-100 xl:overflow-hidden xl:p-2 xl:cursor-pointer xl:transition-opacity xl:duration-900 xl:ease-in-out"
                      : "min-h-60 cursor-pointer hover:md:scale-[1.2] hover:xl:scale-[1.05] hover:xl:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all duration-900 ease-in-out xl:min-w-[230px] xl:min-h-120 "
                  } `}
            >
              {expandedIndex === index && (
                <button
                  className="absolute top-1 right-1 opacity-30 z-10 rounded-full px-3 py-2 hover:bg-gray-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedIndex(null);
                  }}
                >
                  <FontAwesomeIcon icon={faClose} size="lg" />
                </button>
              )}
              {/* Backdrop */}
              <div
                className={`absolute top-0 right-0 w-full h-full rounded-xl transition-all duration-900 ease-in-out ${
                  expandedIndex !== null && expandedIndex !== index
                    ? "xl:backdrop-blur-sm xl:z-10"
                    : ""
                }`}
              />
              {/* Expanded */}
              {expandedIndex === index ? (
                <div className="relative">
                  <div className="flex items-center justify-between w-full mb-8">
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

                  {/*Description expanded*/}
                  <div>
                    <ul className="mx-3 flex flex-col gap-3 mb-8 ">
                      {description.map((paragraph) => (
                        <li key={paragraph} className="text-lg md:text-xl">
                          {paragraph}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/*Stacks and date expanded*/}
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
                </div>
              ) : (
                <div className="flex flex-col gap-4 h-full justify-between items-center xl:justify-evenly">
                  {/*Arrow up right normal*/}
                  <div className="absolute top-2 right-3 opacity-30">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size="sm"
                    />
                  </div>

                  {/*Box content normal*/}
                  <Avatar
                    className="w-25 h-25 overflow-hidden border border-gray-700 xl:w-28 xl:h-28"
                    style={{
                      padding: name === "Ottimizza Ltda." ? "10px" : "4px",
                    }}
                  >
                    <AvatarImage
                      src={companyImg}
                      className="rounded-full object-cover object-top scale-125 "
                    />
                  </Avatar>

                  {/* Stacks icons normal*/}
                  <div className="flex gap-2 xl:gap-4">
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

                  {/* Company name and date normal */}
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
                                        transition-all duration-300 ease-in-out grid group-hover:translate-y-12 group-hover:pointer-events-auto hover:place-items-center
                                        "
                    >
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        size="3x"
                        className="text-white"
                      />
                    </div>
                  </button>
                </div>
              )}
            </div>
          )
        )}
      </AnimatedSection>
    </section>
  );
};

export default Experience;
