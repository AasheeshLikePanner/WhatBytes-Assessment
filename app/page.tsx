import Header from "@/components/Header/Header";
import LeftPannel from "@/components/LeftPannel/LeftPannel";
import RightPannel from "@/components/RightPannel/RightPannel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white w-screen h-screen flex flex-col">
      <div className="w-screen bg-red-300">
        <Header/>
      </div>
      <div className="w-screen flex h-full">
        <LeftPannel/>
        <RightPannel/>
      </div>
    </div>
  );
}
