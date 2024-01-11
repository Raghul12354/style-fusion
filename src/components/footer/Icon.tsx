import Image from "next/image";

export default function IconProp({ srcProp, altProp }: any) {
  return (
    <Image
      src={srcProp}
      alt={altProp}
      width={50}
      height={50}
      className="object-cover"
    />
  );
}