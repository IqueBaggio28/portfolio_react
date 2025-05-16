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
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
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
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
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
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      stack: [
        { svg: "images/cpp-icon.svg", color: "#f34b7d" },
        { svg: "images/sfml-icon.png", color: "#8CC84B" },
      ],
      link: "https://github.com/IqueBaggio28/Pokemon",
    },
  ];

  return (
    <section id="projects" className="container_sec gap-24 ">
      <h2 className="sectionHeader">{sectionHeader}</h2>
      {projects.map(({ name, description, images, stack, link }, index) => (
        <div
          className="flex flex-col items-center justify-between gap-4"
          key={index}
        >
          <div className="w-3/4 flex justify-center relative items-center text-[cyan_] mb-4">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-3xl text-center">{name}</h3>
              <FontAwesomeIcon
                className="absolute right-0 -top-3"
                icon={faArrowUpRightFromSquare}
                size="lg"
              />
            </a>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            {description.map((desc, index) => (
              <p className="text-lg text-[var(--clr-slate400)]" key={index}>
                {desc}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-4">
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
      ))}
    </section>
  );
};

export default Projects;
