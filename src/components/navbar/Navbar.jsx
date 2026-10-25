import Image from 'next/image';
import React from 'react';
// import CoinImg from ''

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm p-5">
                <div className="flex-1">
                    <a className=" text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <p className='flex flex-row-reverse justify-between items-center gap-2'>
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