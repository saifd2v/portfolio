'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Dot, X } from 'lucide-react'
import '../../globals.css'

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

const Projects = () => {
    const [projectView, setProjectView] = useState({})
    const [isProjectView, setIsProjectView] = useState(false);
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        if (isProjectView) {
            document.body.classList.add("noscroll");
        } else {
            document.body.classList.remove("noscroll");
        }
    }, [isProjectView]);

    const projects = [
        {
            name: "Advanced Login System",
            description: "A secure login system with OTP verification and password reset, featuring a smooth and responsive interface.",
            img: "/projects/auth/login.png",
            githubLink: "https://github.com/saifd2v/mern-login-register",
            isGithub: true,
            demoLink: "https://username.github.io/advanced-login",
            usedSkills: ["Nextjs", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
            moreImages: ["/projects/auth/login.png", "/projects/auth/register.png", "/projects/auth/otp.png", "/projects/auth/verified.png"]
        }
    ]

    return (
        <section className="w-full min-h-screen py-20">
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} className="about-content w-full flex flex-col items-center mx-auto gap-6">

                <div variants={items} className='flex flex-col gap-2 items-center'>
                    <motion.div variants={items} className="small-title py-2 px-4 font-[600] text-white text-[.8rem] rounded-[30px] flex items-center">
                        Projects
                    </motion.div>
                    <motion.div variants={items} className="second-title text-white font-[600] text-[3rem] text-center">What I’ve Built</motion.div>
                    <motion.p
                        variants={items}
                        className="text-white/50 text-center max-w-lg leading-7"
                    >
                        Real-world projects crafted with modern technologies, clean architecture and attention to detail.
                    </motion.p>
                </div>
                <motion.div variants={items} className={`main-content mt-2 w-[90%] md:w-[80%] lg:w-[70%] mx-auto ${projects.length < 3 ? "flex items-center gap-6 justify-center flex-wrap" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}`}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { delay: i * .1 } }}
                            onClick={() => { setProjectView(project); setIsProjectView(true); }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            transition={{ duration: .2, ease: "easeInOut", type: "spring", stiffness: 250 }}
                            className={`${projects.length < 3 ? "w-full md:w-[calc(100%/3)]" : "w-full"} group h-auto project-card text-white overflow-hidden pb-3 flex flex-col gap-5 md:gap-4`}
                        >
                            <div className="flex flex-col flex-1">
                                <div className='max-h-1/2 overflow-hidden cursor-pointer'>
                                    <motion.img
                                        src={project.img}
                                        alt={project.name}
                                        className='w-full h-full object-cover transform scale-[1.1] group-hover:scale-[1.2] transition-transform duration-300'
                                    />
                                </div>
                                <div className='py-3 px-4 flex flex-col gap-2'>
                                    <h1>{project.name}</h1>
                                    <p>{project.description}</p>
                                    <div className='flex gap-2 flex-wrap'>
                                        {project.usedSkills.map((skill, i) => (
                                            <div key={i} className="bg-gray-400/20 text-white py-1 px-3 rounded-lg text-[12px]">
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 flex-col lg:flex-row w-full px-4 mt-auto flex-wrap md:flex-nowrap">
                                {project.isGithub && (
                                    <Link href={project.githubLink} className="get-in justify-center w-full bg-white text-black py-2 px-4 rounded-[30px] text-[.9rem] font-[500] flex items-center gap-1">
                                        Github <i className="fa-brands fa-github text-[1.2rem]"></i>
                                    </Link>
                                )}
                                <Link href={project.demoLink} className="live-demo justify-center w-full text-white py-2 px-4 rounded-[30px] text-[.9rem] font-[500] flex gap-1 items-center">
                                    Live Demo<ArrowUpRight strokeWidth={1.5} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <div className={`overlay ${isProjectView ? "block" : "hidden"}`} onClick={() => { setProjectView({}); setIsProjectView(false); }}></div>
            <AnimatePresence>
                {isProjectView && (
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: .3, ease: "easeInOut" }} className={`${isProjectView ? "block" : "hidden"} project-view fixed bg-black w-[370px] md:w-[500px] lg:w-[900px] h-auto top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-[999999999] flex flex-col p-4`}>
                        <div className='absolute top-5 right-6 lg:-top-8 lg:-right-8 z-[99999999999999] text-black lg:text-gray-400 cursor-pointer' onClick={() => setIsProjectView(false)}><X size={30} strokeWidth={1.2} /></div>
                        <div className='w-full h-1/2 grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-4'>

                            <div className='w-full h-full overflow-hidden rounded-2xl'>
                                <img src={imagePreview || projectView.img} alt={projectView.name} className='w-full h-full object-cover transform scale-[1.3] hover:scale-[1.6] transition-transform duration-300' />
                            </div>

                            {projectView.moreImages.length < 1 ? (
                                <div className='w-full h-full flex items-center justify-center text-sm border border-dashed border-gray-600 rounded-2xl'>
                                    <p>No more images.</p>
                                </div>
                            ) : (
                                <>
                                    <div className='grid grid-cols-2 gap-3 h-full'>
                                        {projectView.moreImages.map((moreImage, i) => (
                                            <div key={i} className='rounded-2xl overflow-hidden cursor-pointer h-full' onClick={() => setImagePreview(moreImage)}>
                                                <img src={moreImage} className='max-w-full h-full object-cover' />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                        </div>

                        <div className='w-full h-1/2 pt-4 flex flex-col gap-4'>
                            <div>
                                <h1 className='text-white text-[1.2rem]'>{projectView.name}</h1>
                                <p className='text-[1.05rem]'>{projectView.description}</p>
                            </div>
                            <div className='flex gap-2 flex-wrap'>
                                {projectView.usedSkills.map((skill, i) => (
                                    <div key={i} className="bg-gray-400/20 text-white py-1 px-3 rounded-lg text-[12px]">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-3 flex-col lg:flex-row w-full flex-wrap md:flex-nowrap">
                                {projectView.isGithub && (
                                    <Link href={projectView.githubLink} className="get-in justify-center w-full bg-white text-black py-2 px-4 rounded-[30px] text-[.9rem] font-[500] flex items-center gap-1">
                                        Github <i className="fa-brands fa-github text-[1.2rem]"></i>
                                    </Link>
                                )}
                                <Link href={projectView.demoLink} className="live-demo justify-center w-full text-white py-2 px-4 rounded-[30px] text-[.9rem] font-[500] flex gap-1 items-center">
                                    Live Demo<ArrowUpRight strokeWidth={1.5} />
                                </Link>
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Projects