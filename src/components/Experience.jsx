import React, {useEffect} from 'react';
import {Avatar, AvatarImage} from "@/components/ui/avatar.jsx";
import { faJsSquare, faCss, faHtml5, faPhp, faPython, faJava, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faArrowUp, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Experience = ({sectionHeader}) => {

    // useEffect(() => {
    //     console.log(window.scrollY)
    // })

    const companies = [
        {name: 'Rentvine', title: 'FRONT-END DEVELOPER (I)', companyImg: 'images/rv-icon.png', description: 'blablablablablabla', date: 'Nov 2024 - Present', stacks: [{icon: faJsSquare, color: 'yellow'}, {icon: faHtml5, color: '#e34c26'}, {icon: faCss, color: '#264de4'}, {icon: faPhp, color: '#8892be' }]},
        {name: 'Ottimizza Ltda.', title: 'SFTW ENGINEERING INTERN ', companyImg: 'images/ottimizza-icon.png', description: 'blablablablablabla', date: 'June 2023 - Aug 2023', stacks: [{icon: faJava, color: '#f89820'}, {icon: faDatabase, color: '#3776ab'}, {icon: faAws, color: '#ff9900'}]},
        {name: 'Dendritic Hub', title: 'RESEARCH ASSISTANT', companyImg: 'images/fgcu-icon.png', description: 'blablablablablabla', date: 'Nov 2023 - Nov 2024', stacks: [{icon: faPython, color: '#3776ab'}]},
        {name: 'U.A. Whitaker College of Engineering', title: 'SFTW ENGINEERING TUTOR', companyImg: 'images/fgcu-icon.png', description: 'blablablablablabla', date: 'Aug 2023 - Nov 2024', stacks: [{icon: faPython, color: '#3776ab'}, {icon: faJava, color: '#f89820'}, {svg: 'images/cpp-icon.svg' , color: '#3776ab'}, {svg: 'images/c-icon.svg' , color: '#3776ab'}]},
        {name: 'U.A. Whitaker College of Engineering', title: 'TEACHING ASSISTANT ', companyImg: 'images/fgcu-icon.png', description: 'blablablablablabla', date: 'Aug 2023 - Nov 2024', stacks: [{icon: faPython, color: '#3776ab'}, {icon: faJava, color: '#f89820'}, {svg: 'images/cpp-icon.svg' , color: '#3776ab'}, {svg: 'images/c-icon.svg' , color: '#3776ab'}]},

    ];

    return (
        <section id="experience" className="container_sec">
            <h2 className='sectionHeader'>{sectionHeader}</h2>
            <div className="flex flex-col gap-10 lg:flex-row">
                {companies.map(({name, title, companyImg, description, date, stacks}, index) => (
                    <div key={index} className="w-full pt-6 pb-3 px-6 min-h-60 relative border border-[var(--clr-teal)] rounded-lg max-w-[500px] flex flex-col justify-between cursor-pointer items-center bg-[var(--clr-darker)]">
                        {/*Arrow up for link*/}
                        <div className="absolute top-2 right-3 opacity-30">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm'/>
                        </div>

                        {/*Box content*/}
                        <Avatar className="w-25 h-25 overflow-hidden border border-gray-700"
                                style={{padding: name === 'Ottimizza Ltda.' ? '10px' : '4px'}}>
                            <AvatarImage src={companyImg} className='rounded-full object-cover object-top scale-125 '/>
                        </Avatar>


                        <div className="flex gap-2">
                            {stacks.map(({icon, color, svg}, index) => (
                                svg ? (
                                    <img key={index} src={svg} alt="stack"
                                         className="w-6 h-6 hover:scale-125 "/>
                                ) : (
                                    <FontAwesomeIcon key={index} icon={icon} size="xl" color={color}
                                                     className="hover:scale-125"/>
                                )
                            ))}
                        </div>
                        <div className="">
                            <p className="text-[var(--clr-teal)] text-sm tracking-[0.4rem] text-center font-bold ">{title}</p>
                            <p className="text-xs text-center text-gray-400">{date}</p>
                        </div>

                        {/*On Hover*/}
                        <button
                            popoverTarget="modal"
                            className="group absolute top-0 rounded-lg h-full w-full grid pt-6 justify-center hover:backdrop-blur-2xl">
                            <div className=" relative h-24 w-24 rounded-full bg-gray-600 opacity-0 group-hover:opacity-100
                                scale-90 group-hover:scale-100 translate-y-2 pointer-events-none place-items-center
                                transition-all duration-300 ease-in-out grid group-hover:translate-y-12 group-hover:pointer-events-auto hover:place-items-center ">

                                <FontAwesomeIcon icon={faArrowUp} size="3x" className="text-white"/>
                            </div>
                        </button>
                        {/*<div popover id="my-popover" class="opacity-0 starting:open:opacity-0 absolute ">*/}
                        {/*    hello world*/}
                        {/*</div>*/}

                    </div>
                ))}
            </div>
        </section>
    )
};

export default Experience;