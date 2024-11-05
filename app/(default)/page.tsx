export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Footer from "@/components/Footer";
import Future from "@/components/Futures";
import Hero from "@/components/hero-home";
import Login from "@/components/Login";
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
      <Login />
      <Footer />
    
      
    </>
  );
}
