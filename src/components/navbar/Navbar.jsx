import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import CoinImg from ''

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 p-3 rounded-2xl mt-5">
                <div className="flex-1">
                    <Link href="/" className=" text-xl">
                        <Image
                            src="/assets/logo.png"
                            width={50}
                            height={50}
                            alt='BPL logo'
                        />
                    </Link >
                </div>
                <div className="flex-none border p-3 rounded-2xl border-[#1313135b]">
                    <p className='flex flex-row-reverse justify-between items-center gap-2 font-bold'>
                        <Image
                            src="/assets/dollar-1.png"
                            alt='Coin'
                            width={20}
                            height={20}
                        />
                        0 Coins
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;