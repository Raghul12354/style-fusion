import Item from "./Item";

import Guarantee from "../icons/Guarantee";
import Payment from "../icons/PaymentIcon";
import Recycle from "../icons/RecycleIcon";
import ShippingIcon from "../icons/ShippingIcon";

const Services = () => {
  return (
    <div className="h-72 w-auto grid grid-cols-4 place-items-center mx-10">
      <Item
        title="Free Shipping"
        desc="Lorem ipsum dolor sit amet."
        bgClass="bg_shipping"
        icons={<ShippingIcon />}
      />
      <Item
        title="Easy Returns"
        desc="Lorem ipsum dolor sit amet."
        bgClass="bg_recycle"
        icons={<Recycle />}
      />
      <Item
        title="Secure Payment"
        desc="Lorem ipsum dolor sit amet."
        bgClass="bg_payment"
        icons={<Payment />}
      />
      <Item
        title="Back Guarantee"
        desc="Lorem ipsum dolor sit amet."
        bgClass="bg_guarantee"
        icons={<Guarantee />}
      />
    </div>
  );
};

export default Services;
