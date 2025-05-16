import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ sectionHeader }) => {
  const contact = {
    name: ["HENRIQUE", "BAGGIO"],
    position: ["SOFTWARE", "-", "ENGR."],
    location: ["FORT-MYERS", "-", "USA"],
    phoneNumber: ["+1", "(", "239", ")", "391", "-", "9693"],
    mail: { label: "->EMAIL", link: "mailto:iquebaggio@gmail.com" },
    linkedin: {
      label: "->LINKEDIN",
      link: "https://www.linkedin.com/in/henrique-baggio/",
    },
  };

  const getRandomTransform = () => {
    const translateX = Math.floor(Math.random() * 40 - 20); // -65 to +45
    const translateY = Math.floor(Math.random() * 70 - 45); // -45 to +25
    const rotate = Math.floor(Math.random() * 42 - 22); // -22 to +20
    return `translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
  };

  const enhance = (element) => {
    if (!element) return;
    const text = element.innerText.split("");
    element.innerText = "";

    text.forEach((value, index) => {
      const outer = document.createElement("span");
      outer.className = "fancy-outer";

      // Set random transform as a data attribute
      outer.dataset.hoverTransform = getRandomTransform();

      const inner = document.createElement("span");
      inner.className = "fancy-inner";
      inner.style.animationDelay = `${Math.floor(Math.random() * -5000)}ms`;

      const letter = document.createElement("span");
      letter.className = "fancy-letter";
      letter.innerText = value;
      letter.style.animationDelay = `${index * 1000}ms`;

      inner.appendChild(letter);
      outer.appendChild(inner);
      element.appendChild(outer);
    });

    // Add hover event listeners
    const isLastLine = element.closest(".fancy-line:last-child") !== null;
    const line = element.closest(".fancy-line");

    if (isLastLine) {
      // For the last line, apply transforms on word hover
      element.addEventListener("mouseenter", () => {
        element.querySelectorAll(".fancy-outer").forEach((outer) => {
          outer.style.transform = outer.dataset.hoverTransform;
        });
      });

      element.addEventListener("mouseleave", () => {
        element.querySelectorAll(".fancy-outer").forEach((outer) => {
          outer.style.transform = "none";
        });
      });
    } else {
      // For other lines, apply transforms on line hover
      if (line && !line.dataset.hasListener) {
        line.dataset.hasListener = "true";
        line.addEventListener("mouseenter", () => {
          line.querySelectorAll(".fancy-outer").forEach((outer) => {
            outer.style.transform = outer.dataset.hoverTransform;
          });
        });

        line.addEventListener("mouseleave", () => {
          line.querySelectorAll(".fancy-outer").forEach((outer) => {
            outer.style.transform = "none";
          });
        });
      }
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".fancy");
    elements.forEach(enhance);
  }, []);

  return (
    <section id="contact" className="container_sec relative">
      <div className="w-full flex flex-col items-center gap-20">
        <h2 className="sectionHeader">{sectionHeader}</h2>

        <div className="fancy-text-container cursor-pointer">
          <div className="fancy-line">
            {contact.name.map((name, index) => (
              <p className="fancy" key={index}>
                {name}
                &nbsp;
              </p>
            ))}
          </div>
          <div className="fancy-line">
            {contact.position.map((position, index) => (
              <p className="fancy" key={index}>
                {position}
                &nbsp;
              </p>
            ))}
          </div>
          <div className="fancy-line">
            {contact.location.map((location, index) => (
              <p className="fancy" key={index}>
                {location}
                &nbsp;
              </p>
            ))}
          </div>
          <div className="fancy-line">
            {contact.phoneNumber.map((phoneNumber, index) => (
              <p className="fancy" key={index}>
                {phoneNumber}
                &nbsp;
              </p>
            ))}
          </div>
          <div className="fancy-line">
            <a
              className="fancy"
              href={contact.mail.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.mail.label}
            </a>
            <a
              className="fancy"
              href={contact.linkedin.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedin.label}
            </a>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="absolute bottom-10 right-10 w-20 h-20 grid place-items-center rounded-full border-2 border-[var(--clr-slate400)]"
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          size="2xl"
          color="var(--clr-orange)"
        />
      </a>
    </section>
  );
};

export default Contact;
