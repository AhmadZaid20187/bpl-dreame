import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
    </div>
  );
}
