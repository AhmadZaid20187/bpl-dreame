import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedCard = ({ player, handleDelate }) => {
    return (
        <div className='flex justify-between items-center shadow-sm p-5 rounded-xl'>
            <div>
                <h2 className=' text-xl'>{player.name}</h2>
                <p className='text-gray-500'>{player.type}</p>
            </div>

            <button onClick={() => handleDelate(player)} className='btn btn-outline btn-error rounded-full'><MdDelete size={25} /></button>
        </div>
    );
};

export default SelectedCard;