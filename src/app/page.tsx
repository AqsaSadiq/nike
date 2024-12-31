import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import ShoePromo from "@/components/ShoePromo";
import ProductCarousel from "@/components/ProductCarousel";
import FeaturedSection from "@/components/FeaturedSection";
import GearUpSection from "@/components/GearUpSection";  
import DontMiss from "@/components/DontMiss";
import EssentialsSection from "@/components/EssentialsSection";
import CategoriesSection from "@/components/CategoriesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <ShoePromo />
      <div className="mt-16">
        <ProductCarousel />
      </div>
      <div className="mt-24">
        <FeaturedSection />
      </div>
      <div className="mt-24">
        <GearUpSection />  
      </div>
      <div className="mt-24">
        <DontMiss />  
      </div>
      <EssentialsSection />
      <CategoriesSection />
      <Footer />
    </>
  );
}
