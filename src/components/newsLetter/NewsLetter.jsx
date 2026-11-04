// import Image from 'next/image';
// import React from 'react';

// const NewsLetter = () => {
//     return (
//         <section
//             className="relative bottom-3 flex min-h-90 flex-col items-center justify-center gap-4 rounded-2xl bg-cover bg-center px-6 py-10 text-center mt-7 shadow-sm"
//             style={{ backgroundImage: "url('/assets/bg-shadow.png')" }}
//         >
//             <h1 className="text-3xl  font-bold">Assemble Your Ultimate Cricket Team</h1>
//             <p className="max-w-xl">
//                 Build your dream team with your favorite players. You can find what you want.
//             </p>
//         </section>
//     );
// };

// export default NewsLetter;


// "use client";

// import React from "react";
// import { toast } from "react-toastify";

// const NewsLetter = () => {
//     const handleSubscribe = (e) => {
//         e.preventDefault();
//         const email = e.target.email.value;

//         toast.success(`${email} subscribed successfully!`);
//         e.target.reset();
//     };

//     return (
//         <section className="relative z-10 -mb-28 px-4">
//             {/* Outer frame (translucent so it shows on both white and dark) */}
//             <div className="mx-auto max-w-5xl rounded-3xl border border-white bg-white/10 p-3 backdrop-blur-sm">
//                 {/* Card */}
//                 <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white px-6 py-14 text-center shadow-sm">
//                     {/* Blue glow (bottom-left) */}
//                     <div className="pointer-events-none absolute -bottom-12 -left-12 h-52 w-80 rounded-full bg-sky-300/60 blur-3xl" />

//                     {/* Yellow glow (top-right) */}
//                     <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-64 rounded-full bg-amber-300/70 blur-3xl" />

//                     {/* Content */}
//                     <div className="relative z-10">
//                         <h2 className="text-2xl font-bold text-black md:text-3xl">
//                             Subscribe to our Newsletter
//                         </h2>
//                         <p className="mt-3 text-sm text-gray-600">
//                             Get the latest updates and news right in your inbox!
//                         </p>

//                         <form
//                             onSubmit={handleSubscribe}
//                             className="mx-auto mt-6 flex max-w-md flex-col items-center gap-3 sm:flex-row"
//                         >
//                             <input
//                                 type="email"
//                                 name="email"
//                                 required
//                                 placeholder="Enter your email"
//                                 className="w-full flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-gray-400"
//                             />
//                             <button
//                                 type="submit"
//                                 className="w-full rounded-lg bg-linear-to-r from-pink-400 to-yellow-300 px-6 py-3 text-xs font-bold text-black transition-opacity hover:opacity-90 sm:w-auto"
//                             >
//                                 Subscribe
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default NewsLetter;


"use client";

import React from "react";
import { toast } from "react-toastify";

const NewsLetter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        toast.success(`${email} subscribed successfully!`);
        e.target.reset();
    };

    return (
        <section className="relative z-10 -mb-28 px-4">
            {/* Outer frame (translucent so it shows on both white and dark) */}
            <div className="mx-auto max-w-5xl rounded-3xl border border-white bg-white/10 p-3 backdrop-blur-sm">
                {/* Card with your background image */}
                <div
                    className="rounded-2xl border border-gray-100 bg-white bg-cover bg-center bg-no-repeat px-6 py-14 text-center shadow-sm"
                    style={{ backgroundImage: "url('/assets/bg-shadow.png')" }}
                >
                    <h2 className="text-2xl font-bold text-black md:text-3xl">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="mt-3 text-sm text-gray-600">
                        Get the latest updates and news right in your inbox!
                    </p>

                    <form
                        onSubmit={handleSubscribe}
                        className="mx-auto mt-6 flex max-w-md flex-col items-center gap-3 sm:flex-row"
                    >
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="w-full flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-gray-400"
                        />
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-linear-to-r from-pink-400 to-yellow-300 px-6 py-3 text-xs font-bold text-black transition-opacity hover:opacity-90 sm:w-auto"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;