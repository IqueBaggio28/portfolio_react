import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.jsx"

const Hero = () => {
    return (

        <section className="h-screen flex flex-col gap-4 items-center justify-center min-h-screen px-10">
            <Avatar className="w-30 h-30 overflow-hidden">
                <AvatarImage src="hero_img.jpg" className='rounded-full object-cover object-top scale-125 ' />
            </Avatar>

            <h3 className="text-[var(--clr-slate600)] text-lg font-bold " >Hi, my name is Henrique</h3>
            <h1 className="text-4xl font-black text-center text-[var(--clr-slate400)] text-wrap px-20">SOFTWARE ENGINEER</h1>
            <p className="text-center text-[var(--clr-slate600)] font-medium">A dedicated Software Engineering and passionate developer with hands-on experience in full-stack development.
                <span class="text-orange-500 font-semibold">Proficient in JavaScript (React), Python, C++, and PHP</span>, with a strong foundation in
                <span class="text-teal-400">object-oriented programming, data structures, algorithms, and SQL</span>.
                I’ve contributed to real-world applications through internships, research, and teaching, and I’m always looking to build solutions that make an impact.</p>


            <div className="flex flex-wrap gap-4 justify-center">
                <button className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl">
                    About
                </button>
                <button className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl">
                    Experience
                </button>
                <button className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl">
                    Skills
                </button>
                <button className="border border-[var(--clr-teal)] px-4 py-3 rounded-2xl">
                    Projects
                </button>
            </div>


        </section>

    )
}

export default Hero;