import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
const Projects = ({ sectionHeader }) => {
  const projects = [
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

  return (
    <section id="projects" className="container_sec gap-24 lg:gap-50">
      <h2 className="sectionHeader">{sectionHeader}</h2>
      {/* projects */}
      {projects.map(({ name, description, images, stack, link }, index) => (
        <div
          className={`flex flex-col w-full items-center justify-between gap-16 lg:flex-row lg:justify-evenly lg:items-start ${
            index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
          key={index}
        >
          {/* Project image */}
          <div className="hidden gap-4 flex-col h-fit w-[400px] lg:flex">
            {images.map((image, index) => (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
                key={index}
              />
            ))}
          </div>

          {/* Project details */}
          <div className="sticky top-1/4">
            {/* Project name and link */}
            <div className="flex justify-center relative items-center text-[cyan_] mb-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--clr-orange)] transition-all duration-300 ease-in-out relative group"
              >
                <h3 className="text-3xl text-center md:text-4xl">{name}</h3>
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[var(--clr-orange)] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                <FontAwesomeIcon
                  className="absolute right-0 -top-3"
                  icon={faArrowUpRightFromSquare}
                  size="lg"
                />
              </a>
            </div>
            {/* Project description */}
            <div className="flex flex-col gap-4 mb-4 lg:w-[355px]">
              {description.map((desc, index) => (
                <p
                  className="text-center text-[var(--clr-slate400)] md:text-lg"
                  key={index}
                >
                  {desc}
                </p>
              ))}
            </div>
            {/* Project stack */}
            <div className="flex items-center justify-center gap-4">
              {stack.map(({ svg, color, icon }, index) =>
                svg ? (
                  <img
                    src={svg}
                    alt={name}
                    className={`w-12 h-12 hover:scale-120 transition-all duration-300 ease-in-out ${color}`}
                    key={index}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="hover:scale-120 transtion-all duration-300 ease-in-out"
                    icon={icon}
                    color={color}
                    size="xl"
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
