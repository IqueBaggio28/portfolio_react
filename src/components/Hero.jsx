import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.jsx";
import heroImg from "./images/hero_img.jpg";
import AnimatedSection from "./AnimatedSection.jsx";

const Hero = () => {
  return (
    <AnimatedSection
      className={`container_sec lg:px-60 xl:px-80 2xl:px-96 xl:gap-7 xl:px-60`}
    >
      <Avatar className="w-30 h-30 overflow-hidden lg:w-40 lg:h-40">
        <AvatarImage
          src={heroImg}
          className="rounded-full object-cover object-top scale-125 lg:scale-100"
        />
      </Avatar>

      <h3 className="text-[var(--clr-slate600)] text-lg font-bold lg:text-xl 2xl:text-2xl  ">
        Hi, my name is Henrique
      </h3>
      <h1 className="text-4xl font-black text-center text-[var(--clr-slate400)] text-wrap px-20 lg:text-5xl xl:text-6xl 2xl:text-7xl ">
        SOFTWARE ENGINEER
      </h1>
      <p className="text-center text-[var(--clr-slate600)] font-medium lg:text-lg lg:pb-4 2xl:text-xl 2xl:px-15">
        A dedicated Software Engineering and passionate developer with hands-on
        experience in full-stack development.&nbsp;
        <span className="text-orange-500 font-semibold">
          • Proficient in JavaScript (React), Python, C++, and PHP •
        </span>
        &nbsp; , with a strong foundation in
        <span className="text-teal-400">
          {" "}
          object-oriented programming, data structures, algorithms, and SQL.
        </span>
        &nbsp;I've contributed to real-world applications through internships,
        research, and teaching, and I'm always looking to build solutions that
        make an impact.
      </p>

      <div className="flex flex-wrap gap-4 justify-center lg:gap-8 2xl:gap-12">
        <a
          href="#about"
          className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl text-[var(--clr-teal)] cursor-pointer hover:bg-[var(--clr-slate800)] hover:text-[var(--clr-light)] transition-all duration-300 ease-in-out lg:text-lg 2xl:text-2xl 2xl:px-6 2xl:py-4 2xl:rounded-3xl"
        >
          About
        </a>
        <a
          href="#experience"
          className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl text-[var(--clr-teal)] cursor-pointer hover:bg-[var(--clr-slate800)] hover:text-[var(--clr-light)] transition-all duration-300 ease-in-out lg:text-lg 2xl:text-2xl 2xl:px-6 2xl:py-4 2xl:rounded-3xl"
        >
          Experience
        </a>
        <a
          href="#skills"
          className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl text-[var(--clr-teal)] cursor-pointer hover:bg-[var(--clr-slate800)] hover:text-[var(--clr-light)] transition-all duration-300 ease-in-out lg:text-lg 2xl:text-2xl 2xl:px-6 2xl:py-4 2xl:rounded-3xl"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl text-[var(--clr-teal)] cursor-pointer hover:bg-[var(--clr-slate800)] hover:text-[var(--clr-light)] transition-all duration-300 ease-in-out lg:text-lg 2xl:text-2xl 2xl:px-6 2xl:py-4 2xl:rounded-3xl"
        >
          Projects
        </a>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
