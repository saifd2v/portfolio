'use client'
import React from 'react'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: .2 } }
}

const items = {
    hidden: { y: 10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: .3, ease: "easeInOut" }
    }
}

const About = () => {
    return (
        <section className="w-full min-h-screen py-20 flex items-center">
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} className="about-content w-full flex flex-col items-center mx-auto gap-6">
                <motion.div variants={items} className="small-title py-2 px-4 font-[600] text-white text-[.8rem] rounded-[30px] flex items-center">
                    About Me
                </motion.div>
                <motion.div variants={items} className="second-title text-white font-[600] text-[3rem] text-center">Get to Know Me</motion.div>
                <motion.div variants={items} className="main-content w-[70%] mx-auto">
                    <div className="intro-section text-center mb-6">
                        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} className="flex flex-col gap-5 text-gray-400 text-[1.05rem] leading-relaxed max-w-3xl mx-auto">
                            <motion.p variants={items}>
                                Hi, I'm <span className="text-white font-semibold">Saif</span>, a Full Stack Developer
                                passionate about building complete web applications that combine beautiful design with
                                powerful functionality.
                            </motion.p>

                            <motion.p variants={items}>
                                I specialize in creating <span className="text-white">responsive</span>,
                                <span className="text-white">performance-optimized</span> web solutions,
                                with expertise in both frontend and backend development.
                            </motion.p>

                            <motion.p variants={items}>
                                My approach focuses on writing <span className="text-white">clean code</span>,
                                implementing <span className="text-white">SEO best practices</span>, and
                                delivering <span className="text-white">exceptional user experiences </span>
                                that drive real business results.
                            </motion.p>
                        </motion.div>
                    </div>

                    <div className="stats-section mt-16 mb-8">
                        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} className="stats-grid grid grid-cols-2 gap-6 max-w-4xl mx-auto items-center">
                            <div variants={items} className="stat-item text-center">
                                <div className="stat-number text-white text-[3rem] font-bold leading-none">1+</div>
                                <p className="stat-label text-sm mt-2">Years Experience</p>
                            </div>
                            <div variants={items} className="stat-item text-center">
                                <div className="stat-number text-white text-[3rem] font-bold leading-none">1+</div>
                                <p className="stat-label text-sm mt-2">Completed Projects</p>
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </motion.div>
        </section>
    )
}

export default About
