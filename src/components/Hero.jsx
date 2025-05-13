import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.jsx"

const Hero = () => {
    return (

        <section className="container_sec">
            <Avatar className="w-30 h-30 overflow-hidden">
                <AvatarImage src="images/hero_img.jpg" className='rounded-full object-cover object-top scale-125 ' />
            </Avatar>

            <h3 className="text-[var(--clr-slate600)] text-lg font-bold " >Hi, my name is Henrique</h3>
            <h1 className="text-4xl font-black text-center text-[var(--clr-slate400)] text-wrap px-20">SOFTWARE ENGINEER</h1>
            <p className="text-center text-[var(--clr-slate600)] font-medium">A dedicated Software Engineering and passionate developer with hands-on experience in full-stack development.
                <span className="text-orange-500 font-semibold">Proficient in JavaScript (React), Python, C++, and PHP</span>, with a strong foundation in
                <span className="text-teal-400">object-oriented programming, data structures, algorithms, and SQL</span>.
                I’ve contributed to real-world applications through internships, research, and teaching, and I’m always looking to build solutions that make an impact.</p>


            <div className="flex flex-wrap gap-4 justify-center">
                <a href="#about" className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl text-[var(--clr-teal)] cursor-pointer">
                    About
                </a>
                <a href="#experience" className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl text-[var(--clr-teal)] cursor-pointer">
                    Experience
                </a>
                <a className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl text-[var(--clr-teal)] cursor-pointer">
                    Skills
                </a>
                <a className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl text-[var(--clr-teal)] cursor-pointer">
                    Projects
                </a>
            </div>


        </section>

    )
}

export default Hero;