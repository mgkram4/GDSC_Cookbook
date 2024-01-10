import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SesonalCard() {
  return (
    <div className="max-w-sm bg  border border-gray-200 rounded-lg shadow  ">
      <img
        className="hover:blur-sm transition-transform transform hover:blur-190 hover:shadow-xl"
        src="/food.jpg"
      />
      <div className="">Food Title here</div>
    </div>
  );
}
