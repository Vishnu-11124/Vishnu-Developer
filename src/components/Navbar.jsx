
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../data/constants";
import { Link } from "react-router-dom";
import { DropletIcon, XIcon } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDark]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            {/* 
              Outer Container: 
              - Fixed at top
              - Centers the inner "Pill"
              - Adds padding to create the "float" effect
            */}
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 transition-all duration-300"
            >

                {/* 
                  The Floating Pill (Island):
                  - Rounded full
                  - Glassmorphism background
                  - Constrained max-width
                */}
                <div className={`
                    w-full md:max-w-5xl relative flex items-center justify-between 
                    px-6 py-3 rounded-full 
                    bg-white/70 dark:bg-slate-950/70 backdrop-blur-md 
                    shadow-sm border border-slate-200 dark:border-slate-800
                    transition-all duration-300
                    ${isScrolled ? "bg-opacity-90 shadow-md" : ""}
                `}>

                    {/* Left: Logo */}
                    <Link to="/" className="flex items-center gap-1 group z-20">
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
                            Vishnu<span className="text-slate-500 dark:text-slate-500">.</span>
                        </span>
                    </Link>

                    {/* Center: Navigation Links (Absolute Centered) */}
                    <ul className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors relative group py-2"
                                >
                                    {link.label}
                                    {/* Dot Indicator on Hover */}
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-900 dark:bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3 z-20">

                        {/* Theme Toggle (Mini) */}
                        {/* <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <img
                                src={isDark ? "/images/sun_icon.png" : "/images/moon_icon.png"}
                                className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                                alt="theme"
                            />
                        </button> */}

                        {/* Contact Button (Pill) */}
                        <a
                            href="#contact"
                            className="hidden lg:flex items-center gap-2 px-5 py-2 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-950 text-sm font-medium rounded-lg shadow-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300"
                        >
                            Contact
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-1.5 ml-1 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                            onClick={toggleMenu}
                        >
                            <DropletIcon />
                        </button>
                    </div>

                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={closeMenu}
            />

            {/* Mobile Menu Sidebar */}
            <div className={`fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-end mb-8">
                        <button onClick={closeMenu} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                            <XIcon />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-6">
                        {NAV_LINKS.map(link => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
