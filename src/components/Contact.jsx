import React from "react";

const Contact = ({ sectionHeader }) => {
  const contact = {
    name: "HENRIQUE BAGGIO",
    position: "SFTW ENG.",
    location: "FORT-MYERS - USA",
    number: "+1 ( 239 ) 391 - 9693",
    mail: { label: "->EMAIL", link: "mailto:iquebaggio@gmail.com" },
    linkedin: {
      label: "->LINKEDIN",
      link: "https://www.linkedin.com/in/henrique-baggio/",
    },
  };

  return (
    <section id="contact" className="container_sec">
      <h2 className="sectionHeader">{sectionHeader}</h2>
      <div className="flex flex-col gap-4">
        <p>{contact.name}</p>
        <p>{contact.position}</p>
        <p>{contact.location}</p>
      </div>
    </section>
  );
};

export default Contact;
