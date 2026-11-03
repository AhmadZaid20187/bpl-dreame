"use client"
import { Aladin } from 'next/font/google';
import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaFlag } from 'react-icons/fa';

const Cards = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    console.log(player.price);
    const [isSelected, setSelected] = useState(false);

    const handlePlayer = () => {

        let newCoin = coin - player.price
        if (newCoin >= 0) {
            setCoin(coin - player.price)

        } else {
            alert("You do not have enough money");
            return;
        }

        alert(`${player.name} is selected`)

        setSelected(true);

        setSelectedPlayers([...selectedPlayers, player])


    }
    return (
        <div

            className="rounded-xl border border-gray-200 bg-white p-4"
        >
            {/* Image (gray placeholder if there is no image) */}
            {/* {player.image ? (
                            <img
                                src={player.image}
                                alt={player.name}
                                className="h-48 w-full rounded-xl object-cover"
                            />
                        ) : (
                            <div className="h-48 w-full rounded-xl bg-gray-300" />
                        )} */}

            {/* Name */}
            <h2 className="mt-4 flex items-center gap-2 text-base font-bold">
                <CgProfile className="text-2xl" />
                {player.name}
            </h2>

            {/* Country + type badge */}
            <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <p className="flex items-center gap-2">
                    <FaFlag />
                    {player.country}
                </p>
                <p className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-800">
                    {player.type}
                </p>
            </div>

            <hr className="my-3 border-gray-200" />

            {/* Stats */}
            <p className="text-sm font-semibold">
                Rating: {player.rating}/10
            </p>

            <div className="mt-2 flex items-center justify-between text-sm">
                <p className="font-semibold">{player.battingStyle}</p>
                <p className="text-gray-500">{player.bowlingStyle}</p>
            </div>

            {/* Price + button */}
            <div className="mt-3 flex items-center justify-between">
                <p className="text-sm font-semibold">
                    Price: ৳{player.price.toLocaleString("en-BD")}
                </p>
                <button
                    className="btn"
                    onClick={() => {
                        handlePlayer()

                    }}
                    disabled={isSelected}
                >
                    {
                        isSelected ? "Selected" : "Choose Player"
                    }
                </button>
            </div>
        </div >
    );
};

export default Cards;