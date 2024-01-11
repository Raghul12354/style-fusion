import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import TrendyProducts from "@/components/trendyProducts/TrendyProducts";
import Accessories from "@/components/accessories/Accessories";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <TrendyProducts />
      <Accessories />
      <Footer />
    </main>
  );
}
