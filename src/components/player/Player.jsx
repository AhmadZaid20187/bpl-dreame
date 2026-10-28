"use client";

import { CgProfile } from "react-icons/cg";

import React, { use } from 'react';
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Player = ({ playerPromise }) => {
    const players = use(playerPromise)
    console.log(players)

    return (
        <>
            {/* <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {players.map((player) => (
                    <div key={player.id} className="rounded-xl shadow-sm p-4">


                        <h2 className="mt-3 text-2xl font-bold flex items-center gap-1"><CgProfile />{player.name}</h2>
                        <p>{player.type}</p>
                        <p>Rating: {player.rating}/10</p>
                        <p>Price: ৳{player.price.toLocaleString("en-BD")}</p>
                    </div>
                ))}
            </div> */}

            <AvailablePlayers players={players} />
        </>

    );
};

export default Player;