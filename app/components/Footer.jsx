import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Dot } from 'lucide-react'
import Link from 'next/link'

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: .3 } }
}

const items = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: .3, ease: "easeInOut" }}
}

const Footer = ({ heroRef, aboutRef, skillsRef, projectsRef, contactRef }) => {

    const links = [
        { link: "Home", section: "home", ref: heroRef },
        { link: "About", section: "about", ref: aboutRef },
        { link: "Skills", section: "skills", ref: skillsRef },
        { link: "Projects", section: "projects", ref: projectsRef },
        { link: "Contact", section: "contact", ref: contactRef }
    ]

    const handleScrollInto = (ref) => {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
    }

    const footerIcons = [
        { icon: "fa-github", link: "https://github.com/saifd2v" },
        { icon: "fa-facebook", link: "https://www.facebook.com/profile.php?id=61585777601934" },
        { icon: "fa-whatsapp", link: "https://wa.me/201022051590" },
    ]

    return (
        <footer className='w-full min-h-[260px] py-8 bg-black'>
            <div className='w-[80%] mx-auto flex flex-col items-center gap-6 lg:items-start lg:grid lg:grid-cols-3'>
                <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex flex-col gap-4 items-center lg:items-start'>
                    <motion.button onClick={() => handleScrollInto(heroRef)} className="cursor-pointer logo text-[1.4rem] text-white font-[600]"><i className="fa-solid fa-terminal"></i> Saif</motion.button>
                    <motion.p variants={items} className='w-full text-center lg:text-start lg:w-[65%]'>Creating modern, user-friendly web experiences.</motion.p>
                </motion.div>
                <div className='flex flex-col gap-4 items-center lg:items-start'>
                    <h1 className='text-white font-[500] text-xl'>Quick Links</h1>
                    <ul className='flex flex-col items-start gap-1'>
                        {links.map((link, i) => (
                            <motion.li
                                key={i}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: .3, ease: "easeInOut", delay: i * .1 }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    whileHover={{ x: 3, color: "#fff" }}
                                    transition={{ duration: .3, type: "spring", stiffness: 300 }}
                                    onClick={() => handleScrollInto(link.ref)}
                                    className='cursor-pointer f-l font-[300] flex items-center'
                                >
                                    <Dot strokeWidth={2} />
                                    {link.link}
                                </motion.button>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col gap-4 items-center lg:items-start'>
                    <h1 className='text-white font-[500] text-xl'>Get in touch</h1>
                    <p className='w-[70%] text-center lg:text-start'>Want to collaborate? I’d love to hear about your project.</p>
                    <div className='social flex items-center gap-6 justify-center lg:justify-start'>
                        {footerIcons.map((link, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: .3 }}
                                transition={{ duration: .3, ease: "easeInOut", delay: i * .2 }}
                                className='cursor-pointer text-white'
                            >
                                <Link href={link.link} target='_blank'><i className={`fa-brands ${link.icon} text-[1.4rem]`}></i></Link>
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
