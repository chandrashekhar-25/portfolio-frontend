import React, { useEffect, useState } from 'react';
import aboutImg from '../assets/about.jpg';
import { motion } from "framer-motion";

function About() {
    const [aboutText, setAboutText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await fetch("https://portfoback.vercel.app/api/content/about");
                if (!response.ok) throw new Error("Failed to fetch about information");
                const data = await response.json();
                setAboutText(data[0].aboutText);
            } catch (error) {
                setError("Error fetching about information");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAbout();
    }, []);

    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'> About <span className='text-neutral-500'>Me</span></h2>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: .5 }}
                className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img
                            src={aboutImg}
                            alt="About"
                            className="rounded-2xl" />
                    </div>
                </div>
                <motion.div
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: .5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        {loading ? (
                            <p className='my-2 max-w-xl py-6 text-center text-neutral-400'>Loading...</p>
                        ) : error ? (
                            <p className='my-2 max-w-xl py-6 text-center text-red-500'>{error}</p>
                        ) : (
                            <p className='my-2 max-w-xl py-6'>{aboutText}</p>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default About;
