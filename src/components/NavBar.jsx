import React from 'react';
import {useEffect} from "react";
import {Button} from "@/components/ui/button.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import {faBars} from "@fortawesome/free-solid-svg-icons";


const NavBar = ({navBarOpen, setNavBarOpen}) => {

    useEffect(() => {
        if (navBarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [navBarOpen]);


    return (
        navBarOpen && (
            <div className="h-screen w-full z-50 absolute top-[1000px] left-0 bg-[var(--clr-dark)] overflow-x-hidden sm:hidden">
                <div className="h-20 w-full flex items-center pl-7 absolute" >
                    <Button onClick={()=> setNavBarOpen(prev => !prev)} className="bg-[var(--clr-dark)]" >
                        <FontAwesomeIcon icon={faBars} size="xl" />
                    </Button>
                </div>

                <div className="flex flex-col h-full items-center justify-center pb-3">
                    <ul className="flex flex-col gap-4 items-center">
                        <li><a href="#about">
                            <FontAwesomeIcon icon={faFile} size="3x" color={'var(--clr-light)'} />
                        </a></li>
                        <li><a href="#projects">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" color={'var(--clr-light)'} />
                        </a></li>
                        <li><a href="#contact">
                            <FontAwesomeIcon icon={faGithub} size="3x" color={'var(--clr-light)'} />
                        </a></li>
                        <li><button className="btn w-fit mt-4 border-t-white">Contact</button></li>
                    </ul>
                </div>
            </div>
        )
    );
}

export default NavBar;