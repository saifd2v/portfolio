'use client'
import React, { useEffect, useState } from 'react'
import '../../globals.css'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion';
import Link from 'next/link';

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: .3, ease: "easeInOut" }
    }
}

const page = ({ projectsRef, contactRef }) => {
    const heroLinks = [
        { icon: "fa-github", link: "https://github.com/saifd2v" },
        { icon: "fa-facebook", link: "https://www.facebook.com/profile.php?id=61585777601934" },
        { icon: "fa-whatsapp", link: "https://wa.me/201022051590" },
    ]

    const [devText, setDevText] = useState("");

    const text = "Full-Stack Developer.";
    useEffect(() => {
        let letter = 0;
        function typing() {
            setDevText(text.substring(0, letter + 1));
            letter++

            if (letter < text.length) {
                setTimeout(typing, 100);
            }
        }

        typing();
    }, []);

    const goto = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <section className="h-full w-full hero-section relative">
                <div className="main-content h-full w-[80%] flex items-center text-white justify-between mx-auto flex-col lg:flex-row pb-[100px] pt-[100px] gap-4 lg:gap-0">
                    <div className="text-side w-full lg:max-w-1/2">
                        <motion.div variants={container} initial="hidden" animate="visible">
                            <motion.h1 variants={items} className="logo text-[2rem] lg:text-[4rem] font-[700]">I’m Saif,</motion.h1>
                            <motion.h2 variants={items} className="text-[2rem] lg:text-[3.5rem] font-[700] mt-[-4px] lg:mt-[-20px] front">{devText}</motion.h2>
                            <motion.p variants={items}>
                                Full-Stack Developer with 1 year of experience, building responsive and intuitive web apps
                                using the MERN stack (MongoDB, Express.js, React.js, Node.js) and <span
                                    className="text-white font-[500]">Next.js</span>,
                                styled with <span className="text-white font-[500]">Tailwind CSS</span>.
                            </motion.p>

                            <div className="buttons mt-[30px] flex gap-6 flex-col w-full">
                                <motion.div variants={container} initial="hidden" animate="visible" className="links flex gap-3 flex-col lg:flex-row">
                                    <motion.button onClick={() => goto(contactRef)} variants={items} whileHover={{ y: -3, transition: { duration: .1, ease: "linear" } }}
                                        className="get-in w-full lg:w-[30%] bg-white text-black py-2 px-4 rounded-[30px] text-[.9rem] font-[500] flex items-center cursor-pointer justify-center gap-1">
                                        Get in Touch <ArrowUpRight size={22} strokeWidth={2} /></motion.button>
                                    <motion.button onClick={() => goto(projectsRef)} variants={items} whileHover={{ y: -3, transition: { duration: .1, ease: "linear" } }}
                                        className="live-demo w-full lg:w-[30%] text-white py-2 px-4 rounded-[30px] text-[.9rem] font-[500] flex gap-1 justify-center cursor-pointer items-center">View
                                        My Projects<i className="fa-solid fa-angle-left"></i><i
                                            className="fa-solid fa-angle-right ml-[-10px]"></i></motion.button>
                                </motion.div>
                                <div className="social flex items-center gap-6 justify-center lg:justify-start">
                                    {heroLinks.map((link, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ y: 10, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            viewport={{ once: true, amount: .3 }}
                                            transition={{ duration: .3, ease: "easeInOut", delay: i * .2 }}
                                        >
                                            <Link href={link.link} target='_blank'><i className={`fa-brands ${link.icon} text-[1.4rem]`}></i></Link>
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div className="image-side" initial={{ y: 20, opacity: 0, scale: 0.97 }} whileInView={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                        <div className="image-container w-75 mt-4 md:w-100 md:mt-0 rounded-2xl relative">
                            <span className="rainbow"></span>
                            <div className='w-full h-full overflow-hidden rounded-2xl'>
                                <img
                                    src="/images/saif.png"
                                    alt=""
                                    className="w-full h-full relative z-10"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="scrolling hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 items-center gap-1 text-[.8rem] opacity-50 flex-col">
                    Scroll Down
                    <ArrowDown size={18} strokeWidth={1.5} />
                </div>
            </section>
        </>
    )
}

export default page