import Image from "next/image";
import Link from "next/link";
import IconProp from "./Icon";

const Footer = () => {
  return (
    <footer className="h-[70vh] w-full bg-custom_white flex flex-col justify-center pt-28">
      <div className="grid grid-cols-2 mx-20 items-center">
        {/* first box */}
        <div className="w-fit">
          <div className="relative w-[300px] h-[60px]">
            <Link href="/">
              <Image
                src="/navbar/Frame 5.png"
                alt="Logo"
                fill={true}
                className="object-contain"
              />
            </Link>
          </div>
          {/* icons */}
          <div className="grid grid-cols-4 gap-5 my-7 ml-10">
            <IconProp srcProp="/footer/Facebook.png" altProp="Facebook" />
            <IconProp srcProp="/footer/Instagram.png" altProp="Instagram" />
            <IconProp srcProp="/footer/Pinterest.png" altProp="Pinterest" />
            <IconProp srcProp="/footer/TwitterX.png" altProp="TwitterX" />
          </div>
          {/* support */}
          <div className="text-xl font-semibold ml-10">
            <h4>SUPPORT:</h4>
            <div className="mt-5 flex flex-col w-fit gap-3">
              <Link href="">Contact Us</Link>
              <Link href="">Location</Link>
              <Link href="">FAQ</Link>
              <Link href="">Product Registration</Link>
            </div>
          </div>
        </div>
        {/* newsletter */}
        <div className="w-fit">
          <div className="flex items-center">
            <Image
              src="/footer/Envelope.png"
              alt="FaceBook"
              width={50}
              height={50}
              className="object-cover mr-3"
            />
            <p className="text-xl font-semibold">
              Stay up to date on the latest from STYLE FUSION
            </p>
          </div>
          <form className="flex flex-col w-full mt-7">
            <label className="flex flex-col text-xl font-semibold">
              Enter your email address:
              <input
                type="email"
                className="mt-3 rounded border border-solid border-white border-opacity-10 bg-gray-400 bg-opacity-25 text-base font-normal py-1"
              />
            </label>
            <button
              type="submit"
              className="bg-custom_red text-lg font-medium px-5 py-2 rounded-sm w-fit text-white mt-10"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      {/* copyrigths */}
      <p className="text-xl font-semibold m-7 h-screen flex items-end justify-end">
        copyright © 2023 All Rights Received
      </p>
    </footer>
  );
};

export default Footer;