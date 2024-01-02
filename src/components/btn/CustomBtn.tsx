import Link from "next/link";

export default function CustomBtn({ linkProp }: { linkProp: string }) {
  return (
    <Link href={linkProp}>
      <button className="bg-black text-white text-xl px-8 py-4 rounded-md font-medium">
        Shop Now
      </button>
    </Link>
  );
}
