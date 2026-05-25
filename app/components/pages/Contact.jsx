'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import '../../globals.css'
import Link from 'next/link'

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: .3 } }
}

const items = {
    hidden: { y: 10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: .3, ease: "easeInOut" }
    }
}

const Contact = () => {
    const contacts = [
        { name: "Email", href: "mailto:miraculouc.ladyblog@gmail.com", item: "miraculouc.ladyblog@gmail.com" },
        { name: "Whatsapp", href: "https://wa.me/201022051590", item: "+201022051590" },
        { name: "Github", href: "https://github.com/saifd2v", item: "saifd2v" },
    ]

    return (
        <section className="w-full min-h-screen py-20 flex items-center">
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} className="about-content w-full flex flex-col items-center mx-auto gap-6">
                <motion.div variants={items} className="small-title py-2 px-4 font-[600] text-white text-[.8rem] rounded-[30px] flex items-center">
                    Contact me
                </motion.div>
                <motion.div variants={items} className="second-title text-white font-[600] text-[2.7rem] md:text-[3rem] text-center">Get in Touch</motion.div>
                <motion.div variants={items} className="main-content w-[70%] mx-auto">
                    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex flex-col items-center gap-4'>
                        {contacts.map((contact, i) => (
                            <motion.div key={i} variants={items} whileHover={{ y: -4 }} transition={{ duration: .2 }}>
                                <Link href={contact.href} target='_blank' className="flex justify-between gap-3 contact-item border-[oklch(0.269_0_0)] rounded-xl w-[300px] md:w-[500px] lg:w-[700px] p-6 md:p-4 min-h-[120px]">
                                    <div className='flex-col md:flex-row flex items-center gap-3 w-full'>
                                        <div className={`${contact.name.toLowerCase() === "github" ? "bg-white text-black" : contact.name.toLowerCase() === "whatsapp" ? "bg-green-400 text-white" : "bg-white/70 text-white"} rounded-xl w-12 h-12 flex items-center justify-center text-2xl`}>
                                            <i className={`${contact.name.toLowerCase() === "github" ? "fa-brands fa-github" : contact.name.toLowerCase() === "whatsapp" ? "fa-brands fa-whatsapp" : "fa-regular fa-envelope"}`}></i>
                                        </div>
                                        <div className='flex flex-col text-center md:text-start'>
                                            <h1 className='text-white font-[500]'>{contact.name}</h1>
                                            <p>{contact.item}</p>
                                        </div>
                                    </div>
                                    <motion.div whileHover={{ rotateY: 45 }} className='hidden md:flex'>
                                        <ArrowUpRight className='icon text-gray-300' size={20} />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact
