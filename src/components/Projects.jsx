import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ProjectsData } from "./DataFile.jsx";
import AnimatedSection from "./AnimatedSection.jsx";

const Video = ({ src }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play().catch((error) => {
            console.error("Error attempting to play video:", error);
          });
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
    />
  );
};

const Projects = ({ sectionHeader }) => {
  const projects = ProjectsData;

  return (
    <section id="projects" className="container_sec gap-24 lg:gap-50">
      <AnimatedSection>
        <h2 className="sectionHeader mb-10">{sectionHeader}</h2>
      </AnimatedSection>
      {projects.map(({ name, description, images, stack, link }, index) => (
        <div
          className={`flex flex-col w-full items-center justify-between gap-16 lg:flex-row lg:justify-evenly lg:items-start ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
          key={index}
        >
          {/* Project details */}
          <div className="lg:top-1/4 lg:sticky">
            {/* Project name and link */}
            <AnimatedSection className="flex justify-center relative items-center text-[cyan_] mb-4 2xl:mb-8">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--clr-orange)] transition-all duration-300 ease-in-out relative group"
              >
                <h3 className="text-3xl text-center md:text-4xl 2xl:text-5xl">
                  {name}
                </h3>
                <FontAwesomeIcon
                  className="absolute -right-8 top-1/2 -translate-y-1/2"
                  icon={faArrowUpRightFromSquare}
                  size="lg"
                  color="var(--clr-orange)"
                />
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[var(--clr-orange)] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </a>
            </AnimatedSection>
            {/* Project description */}
            <div className="flex flex-col gap-4 mb-4 lg:w-[355px] 2xl:w-[470px] 2xl:gap-6 2xl:mb-8">
              {description.map((desc, index) => (
                <AnimatedSection key={index}>
                  <p className="text-center text-[var(--clr-slate400)] md:text-lg 2xl:text-xl">
                    {desc}
                  </p>
                </AnimatedSection>
              ))}
            </div>
            {/* Project stack */}
            <AnimatedSection className="flex items-center justify-center gap-4 2xl:gap-6">
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
            </AnimatedSection>
          </div>

          {/* Project images */}
          <div className="flex gap-1 lg:gap-4 flex-col h-fit w-[400px] 2xl:w-[450px] 2xl:gap-10">
            {images.map((image, index) =>
              image.img ? (
                <AnimatedSection
                  key={index}
                  className={`${index !== 0 ? "hidden lg:block" : ""}`}
                >
                  <img
                    src={image.img}
                    alt={name}
                    className="w-full h-full object-contain cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                </AnimatedSection>
              ) : (
                <AnimatedSection key={index}>
                  <Video src={image.video} />
                </AnimatedSection>
              )
            )}
          </div>
          <div className="w-full h-[1px] bg-[var(--clr-slate400)] lg:hidden"></div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
