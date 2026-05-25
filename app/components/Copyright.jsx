import React from 'react'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: .3 } }
}

const items = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: .3, ease: "easeInOut" }}
}

const Copyright = () => {
  return (
    <div className='copyright w-full h-[100px] bg-black'>
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className='w-[80%] cp mx-auto flex flex-col justify-center gap-2 lg:gap-0 items-center h-full lg:flex-row lg:justify-between text-[.9rem]'>
        <motion.p variants={items}>© 2026 Saif. All rights reserved.</motion.p>
        <motion.p variants={items}>Built with Nextjs & Tailwind {":)"}</motion.p>
      </motion.div>
    </div>
  )
}

export default Copyright
