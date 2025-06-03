import React from "react";
import { AboutData } from "./DataFile.jsx";
// import aboutImage from "./images/DSC01624.jpg";
import aboutImage2 from "./images/about-img.jpg";

const About = ({ sectionHeader }) => {
  const aboutMsg = AboutData;

  return (
    <section id="about" className="container_sec xl:px-20">
      <h2 className="sectionHeader">{sectionHeader}</h2>
      <div className="flex flex-col gap-12 xl:flex-row xl:justify-between">
        <div className="flex flex-col gap-12 xl:w-2/3 2xl:pr-60">
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
        <div className="w-full xl:w-1/3">
          <img
            src={aboutImage2}
            alt="about"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
