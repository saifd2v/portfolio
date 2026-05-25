'use client'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, TextAlignJustify } from 'lucide-react'

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
}

const Header = ({ heroRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
    const [isActiveLink, setIsActiveLink] = useState("home")
    const headerRef = useRef(null)
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    const links = [
        { name: "Home", section: "home", ref: heroRef },
        { name: "About", section: "about", ref: aboutRef },
        { name: "Skills", section: "skills", ref: skillsRef },
        { name: "Projects", section: "projects", ref: projectsRef },
        { name: "Contact", section: "contact", ref: contactRef },
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 50) {
                    headerRef.current.classList.add("scroll");
                } else {
                    headerRef.current.classList.remove("scroll");
                }
            }

            links.forEach((link) => {
                if (link.ref?.current) {
                    const top = link.ref.current.offsetTop;
                    const height = link.ref.current.clientHeight;
                    const scroll = window.scrollY + window.innerHeight / 2;

                    if (scroll >= top && scroll < top + height) {
                        setIsActiveLink(link.section);
                    }
                }
            });
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScrollInto = (ref) => {
        ref?.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <header ref={headerRef}>
                <nav className="w-[90%] lg:w-[80%] flex justify-between items-center mx-auto h-full">
                    <button onClick={() => handleScrollInto(heroRef)} className="cursor-pointer logo text-[1.4rem] text-white font-[600]"><i className="fa-solid fa-terminal"></i> Saif</button>
                    <ul className="items-center gap-4 text-[15px] text-white hidden lg:flex">
                        {links.map((link, i) => (
                            <motion.li
                                key={i}
                                onClick={() => handleScrollInto(link.ref)}
                                initial={{ y: -10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: "easeInOut", delay: i * 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <button className={`cursor-pointer nav-link py-2 px-4 rounded-[30px] ${isActiveLink === link.section ? "active" : ""}`}>
                                    {link.name}
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                    <div onClick={() => setIsMenuOpened(true)} className="mobile lg:hidden text-white cursor-pointer"><TextAlignJustify size={30} strokeWidth={2} /></div>
                </nav>
            </header>
            <div className={`overlay ${isMenuOpened ? "block" : "hidden"}`} onClick={() => setIsMenuOpened(false)}></div>
            <AnimatePresence>
                <motion.div initial={{ x: "-100%", opacity: 0 }} animate={{ x: isMenuOpened ? 0 : "-100%", opacity: isMenuOpened ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="text-white mobile-menu fixed z-[99999999] w-[65%] h-full">
                    <div className="menu-content w-[80%] mx-auto pt-[30px] flex flex-col gap-2">
                        <div className="menu flex justify-between items-center">
                            <h1 className="uppercase tracking-[1px]">Menu</h1>
                            <X strokeWidth={1.5} onClick={() => setIsMenuOpened(false)} className='cursor-pointer' />
                        </div>
                        <span className="line"></span>
                        <motion.ul variants={container} initial="hidden" whileInView="visible" className="flex flex-col items-center gap-4 mt-[15px] w-full">
                            {links.map((link, i) => (
                                <motion.li
                                    key={i}
                                    onClick={() => { handleScrollInto(link.ref); setIsMenuOpened(false) }}
                                    initial={{ y: -10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, ease: "easeInOut", delay: i * 0.1 }}
                                >
                                    <button className={`cursor-pointer nav-link py-2 px-4 rounded-[30px] ${isActiveLink === link.section ? "active" : ""}`}>
                                        {link.name}
                                    </button>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Header