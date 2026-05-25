'use client'
import React, { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const [isShow, setIsShow] = useState();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <AnimatePresence>
                {isShow && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: .96, opacity: 1 }}
                        className='fixed bottom-6 right-6 z-[9999999999999999999]'
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        whileTap={{ y: 0, scale: .96 }}
                        transition={{ duration: .3, ease: "easeInOut", type: "spring", stiffness: 300, damping: 17 }}
                        onClick={() => handleScrollToTop()}
                    >
                        <div className='bg-white p-3 rounded-full cursor-pointer'>
                            <ChevronUp />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ScrollToTop