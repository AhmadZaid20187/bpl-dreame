import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaFlag } from "react-icons/fa";

const AvailablePlayers = ({ players }) => {
    console.log(players)
    return (
        <div>
            Available Players

            {/* Third */}
            <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {players.map((player) => (
                    <div
                        key={player.id}
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
                                type="button"
                                className="rounded-md border border-gray-300 px-3 py-1 text-xs hover:bg-gray-100"
                            >
                                Choose Player
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailablePlayers;