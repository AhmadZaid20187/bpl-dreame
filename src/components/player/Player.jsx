"use client";

import React, { use, useState } from 'react';
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Player = ({ playerPromise, setCoin, coin }) => {
    const players = use(playerPromise)
    // console.log(players)

    const [selectedBtn, setSelectedBtn] = useState("available")
    const [selectedPlayers, setSelectedPlayers] = useState([])
    // console.log(selectedBtn, "setlected type");

    return (
        <div className="mt-15">

            {/* <p>Players: {players.length}</p> */}

            <div className="flex justify-between">
                {
                    selectedBtn === "available" ?
                        <h2 className="text-xl font-bold">Available Players</h2>
                        :
                        <h2 className="text-xl font-bold">Selected Players({selectedPlayers.length}/{players.length})</h2>

                }
                <div>
                    <button
                        onClick={() => setSelectedBtn("available")}
                        className={`btn
                             ${selectedBtn === "available" ? "bg-[#E7FE29]" : "btn-soft"} text-black rounded-r-none rounded-l-xl`}
                    >Available</button>

                    <button
                        onClick={() => setSelectedBtn("selected")}
                        className={`btn
                             ${selectedBtn === "selected" ? "bg-[#E7FE29]" : "btn-soft"} text-black rounded-l-none rounded-r-xl`}
                    >Selected({selectedPlayers.length})</button>
                </div>
            </div>

            {selectedBtn === "available" ?
                <AvailablePlayers
                    players={players}
                    setCoin={setCoin}
                    coin={coin}

                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                />
                :
                <SelectedPlayers selectedPlayers={selectedPlayers} />
            }
        </div>

    );
};

export default Player;