import React from "react";
import { AboutData } from "./DataFile.jsx";

const About = ({ sectionHeader }) => {
  const aboutMsg = AboutData;

  return (
    <section id="about" className="container_sec">
      <h2 className="sectionHeader">{sectionHeader}</h2>
      <div className="flex flex-col gap-12 xl:flex-row xl:justify-between">
        <div className="flex flex-col gap-12">
          {aboutMsg.map(({ title, goals }, index) => (
            <div key={index} className="">
              <h3 className="font-bold text-2xl text-[var(--clr-slate600)] block border-b border-[var(--clr-orange)] pb-2 mb-3 md:text-3xl">
                {title}
              </h3>
              <p className="text-[var(--clr-light)] md:text-lg">
                <span className="mx-5"></span>
                {goals}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden xl:block ">
          <img
            src="images/DSC01624.jpg"
            alt="about"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
