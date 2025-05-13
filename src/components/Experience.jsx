import React, {useEffect, useState} from 'react';
import {Avatar, AvatarImage} from "@/components/ui/avatar.jsx";
import { faJsSquare, faCss, faHtml5, faPhp, faPython, faJava, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faArrowUp, faArrowUpRightFromSquare, faClose } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faClose} from "@fortawesome/free-solid-svg-icons/faClose";




const Experience = ({sectionHeader}) => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const companies = [
        {name: 'Rentvine', title: 'FRONT-END DEVELOPER (I)', companyImg: 'images/rv-icon.png', description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies tincidunt venenatis. Suspendisse potenti. In justo dolor, ultrices ut vulputate id, dapibus eget nunc. Donec tempus est ante', 'Phasellus sit amet neque non ligula finibus ullamcorper. Proin facilisis fermentum dui, a efficitur erat. Sed accumsan rhoncus erat, dapibus malesuada mauris vulputate in.' , 'Aenean consequat condimentum nisi, eget iaculis libero sodales lacinia. Donec nec orci vitae mauris iaculis condimentum. Ut eu erat nisi. Cras ipsum velit, accumsan a scelerisque vitae, vehicula in nulla. Etiam vel dictum dolor'], date: 'Nov 2024 - Present', stacks: [{icon: faJsSquare, color: 'yellow'}, {icon: faHtml5, color: '#e34c26'}, {icon: faCss, color: '#264de4'}, {icon: faPhp, color: '#8892be' }]},
        {name: 'Ottimizza Ltda.', title: 'SFTW ENGINEERING INTERN ', companyImg: 'images/ottimizza-icon.png', description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies tincidunt venenatis. Suspendisse potenti. In justo dolor, ultrices ut vulputate id, dapibus eget nunc. Donec tempus est ante', 'Phasellus sit amet neque non ligula finibus ullamcorper. Proin facilisis fermentum dui, a efficitur erat. Sed accumsan rhoncus erat, dapibus malesuada mauris vulputate in.' , 'Aenean consequat condimentum nisi, eget iaculis libero sodales lacinia. Donec nec orci vitae mauris iaculis condimentum. Ut eu erat nisi. Cras ipsum velit, accumsan a scelerisque vitae, vehicula in nulla. Etiam vel dictum dolor'], date: 'June 2023 - Aug 2023', stacks: [{icon: faJava, color: '#f89820'}, {icon: faDatabase, color: '#3776ab'}, {icon: faAws, color: '#ff9900'}]},
        {name: 'Dendritic Hub', title: 'RESEARCH ASSISTANT', companyImg: 'images/fgcu-icon.png', description: 'blablablablablabla', date: 'Nov 2023 - Nov 2024', stacks: [{icon: faPython, color: '#3776ab'}]},
        {name: 'U.A. Whitaker College of Engineering', title: 'SFTW ENGINEERING TUTOR', companyImg: 'images/fgcu-icon.png', description: 'blablablablablabla', date: 'Aug 2023 - Nov 2024', stacks: [{icon: faPython, color: '#3776ab'}, {icon: faJava, color: '#f89820'}, {svg: 'images/cpp-icon.svg' , color: '#3776ab'}, {svg: 'images/c-icon.svg' , color: '#3776ab'}]},
        {name: 'U.A. Whitaker College of Engineering', title: 'TEACHING ASSISTANT ', companyImg: 'images/fgcu-icon.png', description: 'blablablablablabla', date: 'Aug 2023 - Nov 2024', stacks: [{icon: faPython, color: '#3776ab'}, {icon: faJava, color: '#f89820'}, {svg: 'images/cpp-icon.svg' , color: '#3776ab'}, {svg: 'images/c-icon.svg' , color: '#3776ab'}]},

    ];

    return (
        <section id="experience" className="container_sec">
            <h2 className='sectionHeader'>{sectionHeader}</h2>
            <div className="flex flex-col gap-10 lg:flex-row transform-3d">
                {companies.map(({name, title, companyImg, description, date, stacks}, index) => (
                    <div
                    onClick={() => setExpandedIndex(index)}
                    key={index}
                    className={`w-full pt-6 pb-3 px-6  relative border border-[var(--clr-teal)] rounded-lg max-w-[500px] flex flex-col justify-between items-center bg-[var(--clr-darker)] transition-all duration-400 ease-in-out  ${expandedIndex === index ? 'min-h-[700px]' : 'min-h-60 cursor-pointer hover:translate-z-[200px] hover:brightness-100 hover:scale-[1.2] '} `}>
                        {/*Arrow up for link*/}
                                                                                                                                                                                                                                            {/*:hover{
                                                                                                                                                                                                                        transform: translateZ(200px);
                                                                                                                                                                                                                        filter: brightness(1);
                                                                                                                                                                                                                        scale: 1.2;*/}
                        {expandedIndex === index  ? (
                                <>
                                    <button className="absolute top-2 right-3 opacity-30 p-4" onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedIndex(null)
                                    }}>
                                        <FontAwesomeIcon icon={faClose} size='lg'/>
                                    </button>

                                    <div className="flex items-center justify-between w-full">
                                        <Avatar className="w-25 h-25 overflow-hidden border border-gray-700"
                                                style={{padding: name === 'Ottimizza Ltda.' ? '10px' : '4px'}}>
                                            <AvatarImage src={companyImg} className='rounded-full object-cover object-top scale-125 '/>
                                        </Avatar>
                                        <div className="flex flex-col items-center justify-between w-full ml-5 pt-4">
                                            <p className="text-[var(--clr-orange)] text-3xl tracking-[0.4rem] text-center font-bold ">{name}</p>
                                            <p className="text-[var(--clr-teal)] text-md tracking-[0.4rem] text-center font-medium ">{title}</p>
                                        </div>

                                    </div>
                                    <div>
                                        <ul className="mx-3 flex flex-col gap-3">
                                            {description.map(paragraph => (<li key={paragraph} className="text-lg">{paragraph}</li>))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center justify-between w-full">
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
                                        <p className="text-xs text-center text-gray-400">{date}</p>


                                    </div>
                                </>
                            ) :
                            (
                                <>
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

                                </>)
                        }


                    </div>
                ))}
            </div>
        </section>
    )
};

export default Experience;