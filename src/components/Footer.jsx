
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
        >

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[8%] mt-12 py-6 dark:border-gray-700">
                <p className="dark:text-gray-400">© 2025 Vishnu T S | All Rights Reserved.</p>
                <ul className="flex items-center text-blue-400 gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a href="">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vishnu-t-s-/">Linkedin</a>
                    </li>
                    <li>
                        <a href="https://github.com/Vishnu-11124">GitHub</a>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Footer;
