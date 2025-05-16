import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';



const Projects = ({sectionHeader}) => {

    return (
        <section id="#projects" className="container_sec ">
            <h2 className='sectionHeader'>{sectionHeader}</h2>
            <div className='w-3/4 flex justify-center relative items-center text-[cyan_]'>
                <a href='#'>
                    <h3 className="text-3xl text-center">Pokemon Cerulean++</h3>
                    <FontAwesomeIcon className="absolute right-0 -top-3" icon={faArrowUpRightFromSquare} size='lg' />
                </a>
            </div>

        </section>

    )

};

export default Projects;