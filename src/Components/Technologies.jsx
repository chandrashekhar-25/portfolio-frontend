import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { motion } from "framer-motion"

const Technologies = () => {
    const IconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    })
    const icons = [
        { Component: RiReactjsLine, color: 'text-cyan-400', iconVariants: 2.5 },
        { Component: TbBrandNextjs, color: '', iconVariants: 3 },
        { Component: SiMongodb, color: 'text-green-500', iconVariants: 5 },
        { Component: DiRedis, color: 'text-red-700', iconVariants: 2 },
        { Component: FaNodeJs, color: 'text-green-500', iconVariants: 6 },
        { Component: BiLogoPostgresql, color: 'text-sky-700', iconVariants: 4 }
    ];
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                {icons.map(({ Component, color, iconVariants }, index) => (
                    <motion.div
                        variants={IconVariants(iconVariants)}
                        initial='initial'
                        animate='animate'
                        key={index}
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <Component className={`text-7xl ${color}`} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Technologies
