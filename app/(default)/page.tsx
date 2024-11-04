export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Footer from "@/components/Footer";
import Hero from "@/components/hero-home";
import Offers from "@/components/Offers";
import Princesing from "@/components/Princesing";



export default function Home() {
  return (
    <>
      <Hero />
      <Princesing />
      <Offers />
      <Footer />
      
    </>
  );
}
