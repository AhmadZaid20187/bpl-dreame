"use client";

import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";

const quickLinks = ["Home", "Services", "About", "Contact"];

const Footer = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        toast.success(`${email} subscribed successfully!`);
        e.target.reset();
    };

    return (
        <footer className="bg-[#050818] text-white">
            <div className="mx-auto max-w-6xl px-6 pt-40">
                {/* Logo */}
                <div className="flex justify-center">
                    <Image
                        src="/assets/logo-footer.png"
                        alt="Cricket logo"
                        width={110}
                        height={110}
                    />
                </div>

                {/* Columns */}
                <div className="mt-8 grid grid-cols-1 gap-10 pb-12 md:grid-cols-3">
                    {/* About Us */}
                    <div>
                        <h6 className="text-sm font-semibold">About Us</h6>
                        <p className="mt-4 max-w-50 text-xs leading-5 text-gray-400">
                            We are a passionate team dedicated to providing the best
                            services to our customers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="text-sm font-semibold">Quick Links</h6>
                        <ul className="mt-4 space-y-2 text-xs text-gray-400">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 transition-colors hover:text-white"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-gray-500" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h6 className="text-sm font-semibold">Subscribe</h6>
                        <p className="mt-4 max-w-47.5 text-xs leading-5 text-gray-400">
                            Subscribe to our newsletter for the latest updates.
                        </p>

                        <form onSubmit={handleSubscribe} className="mt-4 flex max-w-sm">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="w-full rounded-l-lg bg-white px-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 outline-none"
                            />
                            <button
                                type="submit"
                                className="rounded-r-lg bg-linear-to-r from-[#F9E27D] to-[#F58AA8] px-5 py-2.5 text-xs font-bold text-black transition-opacity hover:opacity-90"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400">
                @2024 Your Company All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;