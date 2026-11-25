
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../data/constants";
import { Link } from "react-router-dom";
import { DropletIcon, XIcon } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                    backdrop-blur-md 
                    border border-midnight-border
                    transition-all duration-300
                    ${isScrolled ? "bg-midnight-card/95" : "bg-midnight-card/80"}
                `}>

                    {/* Left: Logo */}
                    <Link to="/" className="flex items-center gap-1 group z-20">
                        <span className="text-xl font-bold tracking-tight text-midnight-text transition-colors">
                            Vishnu<span className="text-midnight-accent">.</span>
                        </span>
                    </Link>

                    {/* Center: Navigation Links (Absolute Centered) */}
                    <ul className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-midnight-muted hover:text-midnight-text transition-colors relative group py-2"
                                >
                                    {link.label}
                                    {/* Dot Indicator on Hover */}
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-midnight-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3 z-20">

                        {/* Contact Button (Pill) */}
                        <a
                            href="#contact"
                            className="hidden lg:flex items-center gap-2 px-5 py-2 bg-midnight-accent text-midnight-bg text-sm font-semibold rounded-lg hover:bg-midnight-accent-hover transition-all duration-300"
                        >
                            Contact
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-1.5 ml-1 rounded-md text-midnight-muted hover:text-midnight-text hover:bg-midnight-surface transition-colors"
                            onClick={toggleMenu}
                            aria-label="Open menu"
                        >
                            <DropletIcon />
                        </button>
                    </div>

                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-midnight-bg/75 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={closeMenu}
            />

            {/* Mobile Menu Sidebar */}
            <div className={`fixed top-0 right-0 bottom-0 w-64 bg-midnight-card border-l border-midnight-border z-50 transform transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-end mb-8">
                        <button onClick={closeMenu} className="p-2 rounded-full text-midnight-muted hover:text-midnight-text hover:bg-midnight-surface transition-colors" aria-label="Close menu">
                            <XIcon />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-6">
                        {NAV_LINKS.map(link => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="text-lg font-medium text-midnight-muted hover:text-midnight-accent transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-midnight-border">
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-midnight-accent text-midnight-bg text-sm font-semibold rounded-lg hover:bg-midnight-accent-hover transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
