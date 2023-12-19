type ColorType = {
  [key: string]: string;
};

const Item = ({ title, desc, icons, bgClass }: any) => {
  const colors: ColorType = {
    "bg_shipping": "bg-[#FEECE2]",
    "bg_recycle": "bg-[#C9E5E9]",
    "bg_payment": "bg-[#E1E5B2]",
    "bg_guarantee": "bg-[#D1E1FB]",
  };
  const bgColor = colors[bgClass];
  return (
    <div
      className={`${bgColor} flex items-center w-fit h-fit gap-5 py-4 px-8 rounded-sm`}
    >
      <div>{icons}</div>
      <div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="font-light text-base">{desc}</p>
      </div>
    </div>
  );
};

export default Item;
