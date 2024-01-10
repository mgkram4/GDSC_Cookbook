import Carosuel from "./Carosuel";
import Testimonal from "./Testimonal";

export default function MidSection() {
  return (
    <div className="m-8 flex flex-col items-center justify-center">
      <div className=" flex text-4xl p-4 font-bold items-center justify-center text-center">
        Newest In!
      </div>
      <Carosuel />
      <Testimonal />
    </div>
  );
}
