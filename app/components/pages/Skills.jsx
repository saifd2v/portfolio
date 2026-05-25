import React, { useState } from 'react'
import { Coffee, PanelRightOpen, Database, CodeXml } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import '../../globals.css'
import Marquee from "react-fast-marquee";

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
}

const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, ease: "easeInOut" }
    }
}

const libs = [
    { name: "Github", img: "/skills/github.png" },
    { name: "Framer Motion", img: "/skills/framer.png" },
    { name: "Swiper", img: "/skills/swiper.png" },
];

const Skills = () => {
    const langs = [
        { name: "HTML", image: "/lang/html.png" },
        { name: "CSS", image: "/lang/css.png" },
        { name: "TailwindCSS", image: "/lang/tailwind.png" },
        { name: "JavaScript", image: "/lang/js.png" },
        { name: "React.js", image: "/lang/reactjs.png" },
        { name: "Next.js", image: "/lang/nextjs.png" },
        { name: "Node.js", image: "/lang/node.png" },
        { name: "Express.js", image: "/lang/express.png" },
        { name: "MongoDB", image: "/lang/mongodb.png" },
    ];

    const tools = [
        { name: "Github", image: "/tools/github.png" },
        { name: "Git", image: "/tools/git.png" },
        { name: "Framer Motion", image: "/tools/framer.png" },
        { name: "Swiper", image: "/tools/swiper.png" },
    ];
    return (
        <section className="w-full min-h-screen py-20 flex items-center">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="about-content w-full flex flex-col items-center mx-auto gap-6"
            >

                <div variants={items} className='flex flex-col gap-2 items-center'>
                    <motion.div variants={items} className="relative small-title py-2 px-4 font-[600] text-white text-[.8rem] rounded-[30px] flex items-center">
                        <span>Skills</span>
                    </motion.div>

                    <motion.div variants={items} className="second-title relative text-white font-[600] text-[3rem] text-center">
                        <span>My Skills</span>
                    </motion.div>
                    <motion.p
                        variants={items}
                        className="text-white/50 text-center max-w-lg leading-7"
                    >
                        Technologies and tools I use to build modern, scalable and high-performance applications.
                    </motion.p>
                </div>

                <motion.div className='w-full md:w-1/2 mt-8 relative' variants={items}>
                    <div className='absolute z-10 from-[oklch(.145_0_0)] to-transparent w-40 h-full left-0 bg-gradient-to-r pointer-events-none'></div>
                    <div className='absolute z-10 from-[oklch(.145_0_0)] to-transparent w-40 h-full right-0 bg-gradient-to-l pointer-events-none'></div>

                    <Marquee speed={60} pauseOnHover autoFill>
                        <div className='flex gap-4 items-center'>
                            {langs.map((lang, i) => (
                                <>
                                    {lang.name === "Next.js" || lang.name.toLowerCase() === "javascript" || lang.name.toLowerCase() === "express.js" ? (
                                        <div key={i} className='w-16 rounded-2xl overflow-hidden'>
                                            <img src={lang.image} alt={lang.name} />
                                        </div>
                                    ) : lang.name.toLowerCase() === "mongodb" ? (
                                        <div key={i} className='w-8 ml-4 mr-4'>
                                            <img src={lang.image} alt={lang.name} />
                                        </div>
                                    ) : (
                                        <div key={i} className='w-16 ml-4 mr-4'>
                                            <img src={lang.image} alt={lang.name} />
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                    </Marquee>
                </motion.div>
                <motion.div className='w-[90%] md:w-1/4 mt-10 relative' variants={items}>
                    <div className='absolute z-10 from-[oklch(.145_0_0)] to-transparent w-40 h-full left-0 bg-gradient-to-r pointer-events-none'></div>
                    <div className='absolute z-10 from-[oklch(.145_0_0)] to-transparent w-40 h-full right-0 bg-gradient-to-l pointer-events-none'></div>

                    <Marquee speed={30} pauseOnHover autoFill direction="right">
                        <div className='flex gap-2 items-center'>
                            {tools.map((tool, i) => (
                                <>
                                    <div key={i} className='w-16 rounded-2xl overflow-hidden ml-4 mr-4'>
                                        <img src={tool.image} alt={tool.name} />
                                    </div>
                                </>
                            ))}
                        </div>
                    </Marquee>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Skills