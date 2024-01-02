import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import TrendyProducts from "@/components/trendyProducts/TrendyProducts";
import Accessories from "@/components/accessories/Accessories";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <TrendyProducts />
      <Accessories />
    </div>
  );
}
