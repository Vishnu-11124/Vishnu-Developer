
import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="w-full px-[5%] py-10 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Side: Info */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <h4 className="text-lg font-medium text-violet-600 dark:text-violet-400 mb-2">
                            Let's Connect
                        </h4>
                        <h2 className="text-5xl font-Ovo dark:text-white mb-6">
                            Get in touch
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                            I'd love to hear from you! Whether you have a question, a project proposal, or just want to say hi, feel free to drop me a message.
                        </p>

                        <div className="flex flex-col gap-6">
                            {/* Email Card */}
                            <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Mail me at</p>
                                    <p className="font-semibold text-gray-800 dark:text-white">vishnusanthosh11124@gmail.com</p>
                                </div>
                            </div>

                            {/* Socials can go here */}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:w-1/2 bg-white dark:bg-gray-900 p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                        {/* Decorative blob */}
                        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl"></div>

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
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="p-4 outline-none border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:border-violet-500 dark:focus:border-violet-500 focus:bg-white dark:focus:bg-gray-900 transition-all"
                                        required
                                        name="name"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="p-4 outline-none border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:border-violet-500 dark:focus:border-violet-500 focus:bg-white dark:focus:bg-gray-900 transition-all"
                                        required
                                        name="email"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Hi, I'd like to discuss a project..."
                                    className="p-4 outline-none border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:border-violet-500 dark:focus:border-violet-500 focus:bg-white dark:focus:bg-gray-900 transition-all resize-none"
                                    required
                                    name="message"
                                ></textarea>
                            </div>

                            <button className="py-4 px-8 w-full flex items-center justify-center gap-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 duration-500 font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/40 transform hover:-translate-y-1 transition-all">
                                Send Message
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
