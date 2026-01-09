
import React from "react";

const Footer = () => {
    return (
        <div className="mt-20">

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
        </div>
    );
};

export default Footer;
