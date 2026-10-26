import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <section
            className="flex min-h-90 flex-col items-center justify-center gap-4 rounded-2xl bg-cover bg-center px-6 py-10 text-center mt-7 shadow-sm"
            style={{ backgroundImage: "url('/assets/bg-shadow.png')" }}
        >
            <Image
                src="/assets/banner-main.png"
                alt="Cricket equipment and ball"
                width={250}
                height={200}
                priority
            />
            <h1 className="text-3xl font-bold">Assemble Your Ultimate Cricket Team</h1>
            <p className="max-w-xl">
                Build your dream team with your favorite players. You can find what you want.
            </p>
        </section>
    );
};

export default Banner;