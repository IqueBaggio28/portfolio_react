import React from 'react'

const About = ({sectionHeader}) => {
    const aboutMsg = [{title: 'Introduction', goals: 'Hi, I\'m Henrique Baggio! I\'m a Brazilian-born' +
            ' Software Engineering student with Italian citizenship, currently studying at Florida Gulf Coast University.' +
            ' Even though I started coding a little later than others, I quickly caught up by diving into internships, ' +
            'research projects, and lots of self-learning. I work across the full stack — using React, Python, PHP, and' +
            ' C++ — and have experience building both academic and real-world applications. Whether it\'s front-end ' +
            'development, working with AWS, or managing SQL databases, I\'m passionate about creating real solutions through code.' },
        {
            title: 'Goals and Approach (FE / Full-Stack)', goals: 'I\'m passionate about front-end and full-stack development, and I\'m always working to sharpen my ' +
                'skills. I love building smooth, responsive web apps using React, JavaScript, and backend tools ' +
                'like PHP and SQL. My goal is to keep learning, work on real projects, contribute to open-source, ' +
                'and grow my network in the tech community. I’m excited to create user-friendly, high-impact ' +
                'applications while constantly improving and staying adaptable in this fast-moving industry.'
        }]


    return(
        <section id="about" className="container_sec">
            <h2 className='sectionHeader'>{sectionHeader}</h2>
            <div className="flex flex-col gap-12">
                {aboutMsg.map(({title, goals}) => (
                    <div>
                        <h3 className="font-bold text-2xl text-[var(--clr-slate600)] block border-b border-[var(--clr-orange)] mb-3">{title}</h3>
                        <p className="text-[var(--clr-light)]"><span className="mx-5"></span>{goals}</p>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default About;