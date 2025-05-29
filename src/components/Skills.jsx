import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fontsource/press-start-2p"; // Import the pixel font
import { SkillsData } from "./DataFile.jsx";

const Skills = ({ sectionHeader }) => {
  const technologies = SkillsData;

  const [techIndex, setTechIndex] = useState(null);
  const [pDescription, setPDescription] = useState("Click for more!");

  useEffect(() => {
    if (techIndex == null) return setPDescription("Click for More!");

    setPDescription(technologies[techIndex]?.description);
  }, [techIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => setTechIndex(null), 15000);
    return () => clearTimeout(timeout);
  }, [techIndex]);

  return (
    <section id="skills" className="container_sec">
      <h2 className="sectionHeader">{sectionHeader}</h2>

      <div className="grid grid-rows-2 place-items-center gap-10  lg:grid-cols-2 lg:grid-rows-0 lg:justify-between 2xl:gap-16">
        <div className="grid grid-cols-3 grid-rows-4 gap-6  md:grid-cols-4 2xl:gap-8">
          {technologies.map(({ name, icon, color, level, svg }, index) =>
            name !== "empty" ? (
              <div
                onClick={() => setTechIndex(index)}
                key={index}
                className=" group grid place-items-center rounded-full h-20 w-20 cursor-pointer"
              >
                {!svg ? (
                  <FontAwesomeIcon
                    icon={icon}
                    color={color}
                    size="4x"
                    key={index}
                    className="group-hover:scale-120 group-active:scale-90 group-hover:shadow- transition-all duration-300 ease-in-out 2xl:scale-110 group-hover:2xl:scale-130"
                  />
                ) : (
                  <img
                    key={index}
                    src={svg}
                    className="h-16 group-hover:scale-120 group-active:scale-90 transition-all duration-300 ease-in-out 2xl:h-20"
                  />
                )}
              </div>
            ) : (
              <span key={index} className="hidden md:grid"></span>
            )
          )}
        </div>
        <div
          className={`relative  h-full text-[var(--clr-slate400)] flex flex-col justify-center lg:pl-30 ${
            techIndex == null ? "items-center" : "items-end"
          } md:w-[520px]`}
        >
          <div>
            <p className="text-2xl text-center lg:text-end 2xl:text-3xl">
              {pDescription === "Click for More!" ? (
                pDescription
              ) : (
                <>
                  <span className="text-[var(--clr-orange)]">
                    {pDescription.split(" ")[0]}
                  </span>{" "}
                  {pDescription.split(" ").slice(1).join(" ")}
                </>
              )}
            </p>
          </div>

          <div
            className={`transition-opacity duration-300 mt-4 2xl:mt-6 ${
              techIndex === null
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          >
            <div className="flex items-center justify-between text-[var(--clr-slate400)] font-['Press_Start_2P'] text-[10px] 2xl:text-sm">
              <p>Experience: </p>
              <p>{technologies[techIndex]?.level}/10</p>
            </div>
            <div className="w-42 h-7 border-2 flex gap-1 justify-start items-center px-1 relative 2xl:h-8 2xl:w-52">
              <div className="absolute -left-1 -bottom-1 bg-[var(--clr-dark)] w-1 h-1"></div>
              <div className="absolute -right-1 -top-1 bg-[var(--clr-dark)] w-1 h-1"></div>
              <div className="absolute -left-1 -top-1 bg-[var(--clr-dark)] w-1 h-1"></div>
              <div className="absolute -right-1 -bottom-1 bg-[var(--clr-dark)] w-1 h-1"></div>

              {Array.from({ length: technologies[techIndex]?.level ?? 0 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-4.5 bg-[var(--clr-orange)] `}
                    // ${
                    //   index < 2
                    //     ? "bg-blue-400"
                    //     : index < 4
                    //     ? "bg-green-400"
                    //     : index < 6
                    //     ? "bg-yellow-400"
                    //     : index < 8
                    //     ? "bg-orange-400"
                    //     : "bg-red-400"
                    // }
                  ></div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

// react, js, html, css, tailwind, python, c++, c#, git, java, aws, php

//  *  *  *
//     *  *  *
//  *  *  *
//     *  *  *
