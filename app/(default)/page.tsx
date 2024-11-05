export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Footer from "@/components/Footer";
import Future from "@/components/Futures";
import Hero from "@/components/hero-home";
import Offers from "@/components/Offers";
import Princesing from "@/components/Princesing";
import ProductCategories from "@/components/ProductCategories";



export default function Home() {
  return (
    <>
      <Hero />
      <Princesing />
      <Offers />
      <Future />
      <ProductCategories />
      <Footer />
    
      
    </>
  );
}
