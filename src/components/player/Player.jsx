"use client";

import { CgProfile } from "react-icons/cg";

import React, { use } from 'react';
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Player = ({ playerPromise }) => {
    const players = use(playerPromise)
    console.log(players)

    return (
        <>

            <p>Players: {players.length}</p>

            <AvailablePlayers players={players} />
        </>

    );
};

export default Player;