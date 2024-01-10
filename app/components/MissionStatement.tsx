import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MissionStatement() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center container mx-auto py-10">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nam
            nihil magnam quod ipsum autem voluptatibus, voluptates id non ab.
          </p>
          <Button className="inline-flex items-center mt-2 px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-100">
            Learn More
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
