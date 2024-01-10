import MovingCard from "./MovingCard";
import SesonalCard from "./SesonalCard";

export default function SesonalSection() {
  return (
    <div className="flex flex-col ">
      <MovingCard />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="">
          <SesonalCard />
        </div>
        <div className="">
          <SesonalCard />
        </div>
        <div className="">
          <SesonalCard />
        </div>
        <div className="">
          <SesonalCard />
        </div>
      </div>
    </div>
  );
}
