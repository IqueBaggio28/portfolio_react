import React, {useEffect, useState} from 'react';
import {
    faJsSquare,
    faReact,
    faCss,
    faHtml5,
    faPhp,
    faPython,
    faJava,
    faAws,
    faCss3Alt, faGithub
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";





const Skills = ({sectionHeader}) =>{

    const technologies = [
        {
            name: 'JavaScript',
            icon: faJsSquare,
            color: 'yellow',
            level: 10,
            description: 'JavaScript is a versatile, high-level programming language widely used to create dynamic and interactive web applications. It powers everything from form validation and real-time updates to full-scale frontend frameworks like React and backend development with Node.js, making it an essential tool for modern full-stack developers.'
        },
        {
            name: 'React',
            icon: faReact,
            color: '#61DBFB',
            level: 7,
            description: 'React is a popular JavaScript library for building fast, interactive user interfaces. It uses a component-based architecture and virtual DOM to efficiently manage updates and build scalable frontend applications.'
        },
        {
            name: 'HTML',
            icon: faHtml5,
            color: '#e34c26',
            level: 8,
            description: 'HTML is the standard markup language for structuring content on the web. It forms the backbone of all websites, defining the layout and semantic structure of web pages.'
        },
        {
            name: 'empty'
        },
        {
            name: 'empty'
        },
        {
            name: 'CSS',
            icon: faCss,
            color: '#264de4',
            level: 8,
            description: 'CSS is a styling language used to control the presentation and layout of web pages. It allows developers to design visually engaging websites with responsiveness and animations.'
        },
        {
            name: 'Tailwind CSS',
            icon: faCss3Alt,
            color: '#38bdf8',
            level: 7,
            description: 'Tailwind CSS is a utility-first CSS framework that enables developers to style applications directly within HTML by applying pre-defined classes, leading to fast and responsive UI development.'
        },
        {
            name: 'Python',
            icon: faPython,
            color: '#306998',
            level: 7,
            description: 'Python is a powerful, high-level programming language known for its readability and broad applicability in fields like web development, automation, data analysis, and AI.'
        },
        {
            name: 'C++',
            icon: faPhp,
            color: '#f34b7d',
            level: 6,
            description: 'C++ is a high-performance programming language commonly used for system/software development and game programming, known for its object-oriented features and close-to-hardware efficiency.'
        },
        {
            name: 'C#',
            icon: faPhp,
            color: '#9B4F96',
            level: 5,
            description: 'C# is a modern, object-oriented language developed by Microsoft. It is primarily used for building Windows applications, games with Unity, and enterprise software on the .NET framework.'
        },
        {
            name: 'Git',
            icon: faGithub,
            color: '#f1502f',
            level: 7,
            description: 'Git is a version control system that enables developers to track changes in their codebase, collaborate with others, and manage project history efficiently across distributed teams.'
        },
        {
            name: 'empty'
        },
        {
            name: 'empty'
        },
        {
            name: 'Java',
            icon: faJava,
            color: '#007396',
            level: 5,
            description: 'Java is a robust, object-oriented programming language used in enterprise applications, Android development, and large-scale systems due to its platform independence and stability.'
        },
        {
            name: 'AWS',
            icon: faAws,
            color: '#FF9900',
            level: 6,
            description: 'Amazon Web Services (AWS) is a leading cloud platform that offers scalable computing, storage, and deployment tools. It is widely used for hosting, databases, serverless apps, and machine learning.'
        },
        {
            name: 'PHP',
            icon: faPhp,
            color: '#8892be',
            level: 6,
            description: 'PHP is a widely-used server-side scripting language suited for web development. It powers many dynamic websites and is especially known for its role in content management systems like WordPress.'
        }
    ];
    const [techIndex, setTechIndex] = useState(null);
    const [pDescription, setPDescription] = useState("Click for more!");

    useEffect(() => {
        if (techIndex == null) return setPDescription('Click for More!');

        setPDescription(technologies[techIndex]?.description);

    },[techIndex])

    useEffect(() => {
        const timeout = setTimeout(() => setTechIndex(null), 15000);
        return () => clearTimeout(timeout);
    }, [techIndex]);




    return (
        <section id="skills" className="container_sec">
            <h2 className='sectionHeader'>{sectionHeader}</h2>

            <div className="grid grid-rows-2 place-items-center gap-20  lg:grid-cols-2 lg:grid-rows-0 lg:justify-between flex-grow-0 ">
                <div className="grid grid-cols-3 grid-rows-4 gap-4  md:grid-cols-4">
                    {technologies.map(({name, icon, color, level}, index) => (
                        name !== 'empty'
                        ?
                        (
                            <div onClick={() => setTechIndex(index)} key={index} className=" group grid place-items-center  rounded-full h-20 w-20 cursor-pointer ">
                                <FontAwesomeIcon icon={icon}  color={color} size="3x" key={index} className="group-hover:scale-120 group-active:scale-90 transition-all duration-300 ease-in-out   " />
                            </div>
                        )
                        :
                        (
                            <span key={index} className="hidden md:grid" ></span>
                        )

                    ))}
                </div>
                <div className="relative h-full  mx-10 grid place-items-center md:w-[520px]">
                    <div>
                        <p className="text-2xl text-center">{pDescription}</p>
                    </div>

                    <div className={`absolute right-0 bottom-0 transition-opacity duration-300 ${techIndex === null ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <div className="flex items-center justify-between">
                            <p>Experience: </p>
                            <p>{technologies[techIndex]?.level} / 10</p>
                        </div>
                        <div className="w-42 h-7 border-2 flex gap-1 justify-start items-center px-1 relative">
                            <div className="absolute -left-1 -bottom-1 bg-[var(--clr-dark)] w-1 h-1"></div>
                            <div className="absolute -right-1 -top-1 bg-[var(--clr-dark)] w-1 h-1"></div>
                            <div className="absolute -left-1 -top-1 bg-[var(--clr-dark)] w-1 h-1"></div>
                            <div className="absolute -right-1 -bottom-1 bg-[var(--clr-dark)] w-1 h-1"></div>

                            {Array.from({ length: technologies[techIndex]?.level ?? 0 }).map((_, index) => (
                                <div key={index} className="w-3 h-4.5 bg-[orange_]"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default Skills;

// react, js, html, css, tailwind, python, c++, c#, git, java, aws, php

//  *  *  *
//     *  *  *
//  *  *  *
//     *  *  *