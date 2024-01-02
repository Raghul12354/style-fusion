import Image from "next/image";
import CustomBtn from "../btn/CustomBtn";

const Accessories = () => {
  return (
    <div className="grid grid-cols-3 gap-10 m-32">
      {/* first box */}
      <div className="bg-[#FF9494] text-white p-5">
        <div className="m-3">
          <h4 className="text-5xl font-medium">Travel</h4>
          <h3 className="text-5xl font-bold">ACCESSORIES</h3>
        </div>
        <div className="flex justify-around">
          <div className="relative h-[400px] w-full">
            <Image
              src="/Accessories/ddd.png"
              alt="Travel Accessories"
              fill={true}
              sizes=""
              className="object-cover"
            />
          </div>
          <div className="flex items-end justify-end h-80 w-72">
            <CustomBtn linkProp="/" />
          </div>
        </div>
      </div>
      {/* second box */}
      <div>
        <div className="bg-[#59B89A] mb-10">
          <p className="text-lg font-medium">Men&apos;s summer arrival</p>
          <div className="flex justify-around items-center mx-5">
            <div>
              <h3 className="text-white text-6xl font-semibold">Men&apos;s</h3>
              <h3 className="ml-10 text-4xl font-medium">Innerwear</h3>
            </div>
            {/* image */}
            <div className="relative h-[200px] w-full">
              <Image
                src="/Accessories/eer(1).png"
                alt=""
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#FFC547] text-white pb-3">
          <p className="text-right text-xl font-semibold">30% offer</p>
          <div className="relative z-0 h-[200px] w-auto">
            <Image
              src="/Accessories/sss.png"
              alt=""
              fill={true}
              className="-z-10 object-contain"
            />
          </div>
          <div className="text-center">
            <h3 className="text-red-500 text-5xl font-normal">Stylish</h3>
            <h4 className="text-4xl font-bold ml-40">FOOTWEAR</h4>
          </div>
        </div>
      </div>
      {/* third box */}
      <div className="bg-[#62ACC5] flex justify-center items-center pl-5">
        <div>
          <h3 className="tracking-[26.773px] leading-10 text-5xl font-semibold text-white">
            MENS
          </h3>
          <h3 className="tracking-[24.465px] leading-10 text-5xl font-semibold mb-80">WEAR</h3>
          <CustomBtn linkProp="" />
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/Accessories/fff(1).png"
            alt="Travel Accessories"
            fill={true}
            sizes=""
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Accessories;
