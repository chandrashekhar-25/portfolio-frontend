import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Contact = () => {
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await fetch("https://portfoback.vercel.app/api/content/contact");
                if (!response.ok) throw new Error("Failed to fetch contact information");
                
                const data = await response.json();
                console.log(data,'response');
                setContact(data[0]);
            } catch (error) {
                setError("Error fetching contact information");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchContact();
    }, []);

    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: .5 }}
                className='my-10 text-center text-4xl font-semibold text-neutral-200'>
                Get in Touch
            </motion.h2>
            {loading ? (
                <p className='text-center text-neutral-400'>Loading...</p>
            ) : error ? (
                <p className='text-center text-red-500'>{error}</p>
            ) : (
                <div className="text-center tracking-tighter">
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className='my-4 text-lg text-neutral-400'>
                        {contact?.address}
                    </motion.p>

                    <motion.a
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        href={`https://wa.me/${contact?.phoneNo}`}
                        target="_blank"
                        className="block my-4 text-lg text-green-500 hover:text-green-400 transition-colors duration-300 ease-in-out"
                    >
                        {contact?.phoneNo}
                    </motion.a>

                    <a
                        href={`mailto:${contact?.email}`}
                        target="_blank"
                        className='my-4 inline-block border-b border-neutral-400 text-neutral-400 hover:text-red-400 hover:border-red-400 transition-colors duration-300 ease-in-out'
                    >
                        {contact?.email}
                    </a>
                </div>
            )}
        </div>
    );
}

export default Contact;
