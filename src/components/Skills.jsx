import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fontsource/press-start-2p"; // Import the pixel font
import { SkillsData } from "./DataFile.jsx";
import AnimationOnX from "./AnimationOnX.jsx";
import AnimatedSection from "./AnimatedSection.jsx";

const Skills = ({ sectionHeader }) => {
  const technologies = SkillsData;

  const [techIndex, setTechIndex] = useState(null);
  const [pDescription, setPDescription] = useState("Click for more!");

  useEffect(() => {
    if (techIndex == null) return setPDescription("Click for More!");
    // Find the original index in the flat 'technologies' array
    const originalTechData = technologies.find(
      (tech) =>
        tech.name === pDescription.split(" ")[0] &&
        tech.description === pDescription.split(" ").slice(1).join(" ")
    );
    // This part might need adjustment if description isn't unique enough or if pDescription is just the description.
    // For simplicity, assuming pDescription is set to the full description string from technologies.
    // Let's refine how techIndex maps back to the original flat array if issues arise.
    // For now, we'll assume pDescription is set to the full description of the clicked item.
    const clickedTech = technologies.find(
      (t) => t.description === pDescription
    );
    if (clickedTech) {
      setPDescription(clickedTech.description); // Already set, effectively
    } else if (techIndex !== null) {
      // If techIndex was set directly
      const item = technologies[techIndex]; // This line becomes problematic due to chunking
      // techIndex will be the original flat index if passed from item
      if (item) setPDescription(item.description);
    }
  }, [techIndex, technologies, pDescription]); // Added pDescription to dependencies

  useEffect(() => {
    const timeout = setTimeout(() => setTechIndex(null), 15000);
    return () => clearTimeout(timeout);
  }, [techIndex]);

  // Chunking technologies into rows of 4
  const itemsPerRow = 4; // For md:grid-cols-4
  const skillRows = [];
  for (let i = 0; i < technologies.length; i += itemsPerRow) {
    // Filter out "empty" items before pushing to the row, or handle them inside the row map
    const rowItems = technologies.slice(i, i + itemsPerRow);
    skillRows.push(rowItems);
  }

  // Helper to get original index from row and item index
  const getOriginalIndex = (rowIndex, itemIndexInRow) => {
    return rowIndex * itemsPerRow + itemIndexInRow;
  };

  return (
    <section id="skills" className="container_sec">
      <AnimatedSection>
        <h2 className="sectionHeader">{sectionHeader}</h2>
      </AnimatedSection>

      <div className="grid grid-rows-2 place-items-center gap-10 lg:grid-cols-2 lg:grid-rows-0 lg:justify-between 2xl:gap-16">
        {/* Container for all skill rows */}
        <div className="flex flex-col gap-6 2xl:gap-8">
          {skillRows.map((row, rowIndex) => (
            <AnimationOnX
              key={rowIndex}
              direction={rowIndex % 2 === 0 ? "right" : "left"} // Row 1 (idx 0) & 3 (idx 2) from right, Row 2 (idx 1) & 4 (idx 3) from left
            >
              {/* This div represents a single row of icons */}
              <div className="grid grid-cols-3 gap-6 md:grid-cols-4 2xl:gap-8">
                {row.map((tech, itemIndexInRow) => {
                  const originalIndex = getOriginalIndex(
                    rowIndex,
                    itemIndexInRow
                  ); // Calculate original index for click handler
                  return tech.name !== "empty" ? (
                    <div // Changed from AnimationOnX to a simple div for the item
                      onClick={() => setTechIndex(originalIndex)} // Use originalIndex
                      key={originalIndex} // Use originalIndex for key
                      className="group grid place-items-center rounded-full h-20 w-20 cursor-pointer"
                    >
                      {!tech.svg ? (
                        <FontAwesomeIcon
                          icon={tech.icon}
                          color={tech.color ? tech.color : ""}
                          size="3x"
                          className="group-hover:scale-120 group-active:scale-90 group-hover:shadow- transition-all duration-300 ease-in-out 2xl:scale-110 group-hover:2xl:scale-130"
                        />
                      ) : (
                        <img
                          src={tech.svg}
                          className="h-14 group-hover:scale-120 group-active:scale-90 transition-all duration-300 ease-in-out 2xl:h-16"
                        />
                      )}
                    </div>
                  ) : (
                    <span key={originalIndex} className="hidden md:grid"></span> // Use originalIndex, ensure it's still valid for empty items
                  );
                })}
              </div>
            </AnimationOnX>
          ))}
        </div>
        <div
          className={`relative h-full text-[var(--clr-slate400)] flex flex-col justify-center lg:pl-30 ${
            // techIndex will be the original flat index
            technologies[techIndex]?.name ? "items-end" : "items-center"
          } md:w-[520px]`}
        >
          <div>
            <AnimationOnX>
              <p className="text-lg text-center lg:text-end 2xl:text-3xl">
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
            </AnimationOnX>
          </div>

          <div
            className={`transition-opacity duration-300 mt-4 2xl:mt-6 ${
              // techIndex will be the original flat index
              technologies[techIndex]?.name
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex items-center justify-between text-[var(--clr-slate400)] font-['Press_Start_2P'] text-[10px] 2xl:text-sm">
              <p>Experience: </p>
              <p>{technologies[techIndex]?.level}/10</p>{" "}
              {/* Use original techIndex */}
            </div>
            <div className="w-42 h-7 border-2 flex gap-1 justify-start items-center px-1 relative 2xl:h-8 2xl:w-52">
              <div className="absolute -left-1 -bottom-1 bg-[var(--clr-dark)] w-1 h-1"></div>
              <div className="absolute -right-1 -top-1 bg-[var(--clr-dark)] w-1 h-1"></div>
              <div className="absolute -left-1 -top-1 bg-[var(--clr-dark)] w-1 h-1"></div>
              <div className="absolute -right-1 -bottom-1 bg-[var(--clr-dark)] w-1 h-1"></div>

              {Array.from({ length: technologies[techIndex]?.level ?? 0 }).map(
                /* Use original techIndex */
                (
                  _,
                  barIndex // Changed from index to barIndex to avoid conflict
                ) => (
                  <div
                    key={barIndex} // Use barIndex
                    className={`w-3 h-4.5 bg-[var(--clr-orange)] 2xl:w-4 `}
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
