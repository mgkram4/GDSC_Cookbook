import Image from "next/image";
import { Button } from "@/components/ui/button";
import Carosuel from "./components/Carosuel";
import Header from "./components/Header";
import MidSection from "./components/MidSection";
import SesonalSection from "./components/SesonalSection";
import MissionStatement from "./components/MissionStatement";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  rounded-xl ">
      <Header />
      <MidSection />
      <SesonalSection />
      <MissionStatement />
    </div>
  );
}
