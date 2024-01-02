import Image from "next/image";

import HorizontalDots from "./HorizontalDots";
import VerticalDots from "./VerticalDots";

import RoundBg from "./RoundBg";
import PillionBg from "./PillionBg";
import Navbar from "../navbar/Nabar";
import CustomBtn from "../btn/CustomBtn";

const Hero = () => {
  return (
    <div className="bg-bg_hero relative h-screen w-full overflow-hidden z-0">
      <Image src="/hero/Group.png" alt="" fill={true} className="-z-10" />
      <Navbar />
      {/* side dots */}
      <HorizontalDots className="absolute left-6 pt-6" />
      <HorizontalDots className="absolute right-6 pt-6" />
      <VerticalDots className="absolute top-1/2 transform -translate-y-1/2 pl-6 pt-60" />
      <VerticalDots className="absolute right-6 bottom-0" />
      <div className="grid grid-cols-2 place-items-center px-32">
        {/* text */}
        <div>
          <button className="bg-black text-white text-sm px-8 py-2 rounded-md font-medium mb-7">
            Summer &apos;23
          </button>
          <h1 className="text-7xl font-bold mb-4">Summer Collection</h1>
          <h4 className="text-4xl font-semibold mb-7">Upto 15% OFF</h4>
          <CustomBtn linkProp="/products" />
        </div>
        {/* model's Image */}
        <div className="relative w-full h-[93vh]">
          <RoundBg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-32" />
          <PillionBg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-32" />
          <Image
            src="/hero/Untitled-1 1.png"
            alt="Model's Image"
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
