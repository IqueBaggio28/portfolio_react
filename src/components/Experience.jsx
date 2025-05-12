import React from 'react';
import {Avatar, AvatarImage} from "@/components/ui/avatar.jsx";
import { faJsSquare, faCss, faHtml5, faPhp, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Experience = ({sectionHeader}) => {

    const companies = [
        {title: 'FRONT-END DEVELOPER (I)', companyImg: 'images/rv-icon.png', description: 'blablablablablabla', stacks: [{icon: faJsSquare, color: 'yellow'}, {icon: faHtml5, color: '#e34c26'}, {icon: faCss, color: '#264de4'}, {icon: faPhp, color: '#8892be' }]},
        {title: 'RESEARCH ASSISTANT', companyImg: 'images/fgcu-icon.png', description: 'blablablablablabla', stacks: [{icon: faPython, color: '#3776ab'}]},
    ];

    return (
        <section id="experience" className="container_sec">
            <h2 className='sectionHeader'>{sectionHeader}</h2>
            {companies.map(({title, companyImg, description, stacks}) => (
                <div className="w-full pt-6 pb-3 px-6 min-h-60 border border-[var(--clr-teal)] rounded-lg max-w-[400px] flex flex-col justify-between items-center bg-[var(--clr-darker)]" >
                    <Avatar className="w-25 h-25 overflow-hidden border border-gray-700 p-1">
                        <AvatarImage src={companyImg} className='rounded-full object-cover object-top scale-125 ' />
                    </Avatar>

                        <div className="flex gap-2">
                            {stacks.map(({ icon, color }, index) => (
                                <FontAwesomeIcon className='hover:scale-125' key={index} icon={icon} size="xl" color={color} />
                            ))}
                        </div>
                        <p className="text-[var(--clr-teal)] text-sm tracking-[0.4rem] text-center ">{title}</p>
                </div>
            ))}
        </section>
    )
};

export default Experience;