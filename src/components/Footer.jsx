
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

            <div className="text-center sm:flex items-center justify-between border-t border-midnight-border mx-[8%] mt-12 py-6">
                <p className="text-midnight-muted">© 2025 Vishnu T S | All Rights Reserved.</p>
                <ul className="flex items-center text-midnight-muted gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a href="" className="hover:text-midnight-accent transition-colors">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vishnu-t-s-/" className="hover:text-midnight-accent transition-colors">Linkedin</a>
                    </li>
                    <li>
                        <a href="https://github.com/Vishnu-11124" className="hover:text-midnight-accent transition-colors">GitHub</a>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Footer;
