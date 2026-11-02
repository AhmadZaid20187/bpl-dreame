"use client"

import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import Player from "@/components/player/Player";
import { Suspense, useState } from "react";


const fetchPlayers = async () => {
  const res = await fetch("https://raw.githubusercontent.com/AhmadZaid20187/bpl-dreame/main/public/data.json")
  return res.json()
}

export default function Home() {

  const playerPromise = fetchPlayers();

  // Coin
  const [coin, setCoin] = useState(5000000)

  return (
    <div className="container mx-auto">
      <Navbar coin={coin} />
      <Banner />

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Player playerPromise={playerPromise} setCoin={setCoin} coin={coin} />
      </Suspense>

    </div>
  );
}
