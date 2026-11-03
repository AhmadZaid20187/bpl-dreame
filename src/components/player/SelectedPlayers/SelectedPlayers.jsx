import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers }) => {
    console.log(selectedPlayers);
    return (
        <div className='space-y-3 my-10'>
            {/* <h2>Selected Players</h2> */}
            {
                selectedPlayers.map((player, ind) => {
                    return <div key={ind} className='flex justify-between items-center shadow-sm p-5 rounded-xl'>
                        <div>
                            <h2 className=' text-xl'>{player.name}</h2>
                            <p className='text-gray-500'>{player.type}</p>
                        </div>
                        <button className='btn btn-outline btn-error rounded-full'><MdDelete size={25} /></button>
                    </div>
                })
            }
        </div>
    );
};

export default SelectedPlayers;