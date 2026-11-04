"use client"

import Banner from "@/components/banner/Banner";
import Footer from "@/components/foooter/Footer";
import Navbar from "@/components/navbar/Navbar";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import Player from "@/components/player/Player";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";


const fetchPlayers = async () => {
  const res = await fetch("https://raw.githubusercontent.com/AhmadZaid20187/bpl-dreame/main/public/data.json")
  return res.json()
}

export default function Home() {

  const playerPromise = fetchPlayers();

  // Coin
  const [coin, setCoin] = useState(50000)

  return (
    <div className="container mx-auto">
      <Navbar coin={coin} />
      <Banner />

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Player playerPromise={playerPromise} setCoin={setCoin} coin={coin} />
      </Suspense>

      <NewsLetter />
      <Footer />

      <ToastContainer />
    </div>
  );
}
