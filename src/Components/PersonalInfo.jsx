import React, { useEffect, useState } from 'react'
import profilePic from '../assets/kevinRushProfile.jpg'
import { motion } from "framer-motion";

function PersonalInfo() {
    const [basicContent, setBasicContent] = useState({
        name: '',
        profession: '',
        professionInfo: '',
        image: ''
    });

    useEffect(() => {
        const fetchBasicContent = async () => {
            try {
                const response = await fetch("https://portfoback.vercel.app/api/content/profession-info");
                const data = await response.json();
                setBasicContent(data[0]); // Assuming there's only one document in the response array
            } catch (error) {
                console.error("Error fetching profession info:", error);
            }
        };

        fetchBasicContent();
    }, []);

    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay }
        }
    });

    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate="visible"
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            {basicContent.name}
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial='hidden'
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            {basicContent.profession}
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial='hidden'
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tight'>
                            {basicContent.professionInfo}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="Profile Pic"
                            className="rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;