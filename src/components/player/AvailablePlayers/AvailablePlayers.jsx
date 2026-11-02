import Cards from '@/components/card/Cards';
import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaFlag } from "react-icons/fa";

const AvailablePlayers = ({ players, setCoin, coin }) => {
    // console.log(players)

    return (
        <div>

            {/* Third */}
            <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {players.map((player) => (
                    <Cards key={player.id} player={player} setCoin={setCoin} coin={coin} />
                ))}
            </div>
        </div>
    );
};

export default AvailablePlayers;