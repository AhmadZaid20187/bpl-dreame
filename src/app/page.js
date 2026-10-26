import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import Player from "@/components/player/Player";
import { Suspense } from "react";


const fetchPlayers = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

export default function Home() {

  const playerPromise = fetchPlayers()

  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Player playerPromise={playerPromise} />
      </Suspense>

    </div>
  );
}
