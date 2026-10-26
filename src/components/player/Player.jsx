"use client";

import React, { use } from 'react';

const Player = ({ playerPromise }) => {
    const player = use(playerPromise)
    console.log(player)

    return (
        <div>
            Player
        </div>
    );
};

export default Player;