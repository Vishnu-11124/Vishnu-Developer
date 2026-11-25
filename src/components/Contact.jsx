
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="contact" className="w-full px-[5%] py-10 scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Side: Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 flex flex-col justify-center"
                    >
                        <h4 className="text-lg font-medium text-midnight-accent mb-2">
                            Let's Connect
                        </h4>
                        <h2 className="text-5xl font-Ovo text-midnight-text mb-6">
                            Get in touch
                        </h2>
                        <p className="text-midnight-muted leading-relaxed mb-8 text-lg">
                            I'd love to hear from you! Whether you have a question, a project proposal, or just want to say hi, feel free to drop me a message.
                        </p>

                        <div className="flex flex-col gap-6">
                            {/* Email Card */}
                            <div className="flex items-center gap-4 p-4 bg-midnight-card rounded-xl border border-midnight-border hover:border-midnight-accent/60 transition-colors">
                                <div className="w-12 h-12 bg-midnight-surface border border-midnight-border text-midnight-accent rounded-full flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-midnight-muted">Mail me at</p>
                                    <p className="font-semibold text-midnight-text">vishnusanthosh11124@gmail.com</p>
                                </div>
                            </div>

                            {/* Socials can go here */}
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 bg-midnight-card p-8 sm:p-12 rounded-3xl border border-midnight-border relative overflow-hidden"
                    >
                        <form
                            method="POST"
                            action="https://api.web3forms.com/submit"
                            className="relative z-10 flex flex-col gap-6"
                        >
                            <input
                                type="hidden"
                                name="access_key"
                                value="eba5ae30-80ef-4645-9c4e-0d7b01cf2f7c"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-midnight-text">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="p-4 outline-none border border-midnight-border rounded-xl bg-midnight-surface text-midnight-text placeholder:text-midnight-muted/60 focus:border-midnight-accent focus:bg-midnight-bg transition-all"
                                        required
                                        name="name"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-midnight-text">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="p-4 outline-none border border-midnight-border rounded-xl bg-midnight-surface text-midnight-text placeholder:text-midnight-muted/60 focus:border-midnight-accent focus:bg-midnight-bg transition-all"
                                        required
                                        name="email"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-midnight-text">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Hi, I'd like to discuss a project..."
                                    className="p-4 outline-none border border-midnight-border rounded-xl bg-midnight-surface text-midnight-text placeholder:text-midnight-muted/60 focus:border-midnight-accent focus:bg-midnight-bg transition-all resize-none"
                                    required
                                    name="message"
                                ></textarea>
                            </div>

                            <button className="py-4 px-8 w-full flex items-center justify-center gap-2 bg-midnight-accent text-midnight-bg rounded-xl hover:bg-midnight-accent-hover duration-300 font-semibold transform hover:-translate-y-0.5 transition-all">
                                Send Message
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
