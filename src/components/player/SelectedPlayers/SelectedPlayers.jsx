import SelectedCard from '@/components/ui/SelectedCard';
import React from 'react';

import { toast, Bounce } from 'react-toastify';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin, coin }) => {
    // console.log(selectedPlayers);

    const handleDelate = (player) => {

        console.log(selectedPlayers, "Selected players");

        const filterPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.name != player.name)
        console.log(filterPlayer, "Filtered Players");
        setSelectedPlayers(filterPlayer)
        setCoin(coin + player.price)

        toast.error(`${player.name} has been removed`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <div className='space-y-3 my-10'>
            {/* <h2>Selected Players</h2> */}
            {
                selectedPlayers.length === 0 ?
                    <div className='h-90 flex items-center justify-center flex-col'>

                        <h2 className='text-3xl text-gray-800 font-semibold'>No Data have been found</h2>
                        <p className='text-gray-500 text-xl pt-3'>Back to Available Players</p>

                    </div>
                    :
                    selectedPlayers.map((player, ind) => {
                        return <SelectedCard
                            key={ind}
                            player={player}
                            handleDelate={handleDelate}
                        />
                    })
            }
        </div>
    );
};

export default SelectedPlayers;