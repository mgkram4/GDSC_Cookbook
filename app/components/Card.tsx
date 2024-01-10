import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Card() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl">
      <img className="rounded-t-lg" src="/food.jpg" alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          The meal title
        </h5>

        <p className="mb-3 font-normal text-gray-700">
          Here is a short decription of the meal
        </p>
        <Button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-100">
          Learn More
        </Button>
      </div>
    </div>
  );
}
