"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="mx-auto">
        {/* Image container */}
        <div className="relative w-[100%] h-[80vw] pt-20 sm:h-[50vw] lg:h-[40vw]">
          <Image
            src={"/images/hero.png"}
            layout="fill"
            className="object-cover"
            alt=""
          />
          
          {/* Overlay with transition effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-zinc-800 opacity-90 transition-opacity duration-700 hover:opacity-60"></div>
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 flex-col sm:flex-row lg:ml-12 ml-3 sm:items-start space-y-4 sm:space-y-0 text-white lg:mt-10 mt-7">
          <h2 className=" lg:ml-8 ml-0 text-3xl lg:text-6xl font-regular font-bold mb-16 sm:text-left">
            Discover Your Next <br className="lg:hidden block" /> Favorite <br className="hidden lg:block" /> Product!
          </h2>

          <div className="space-x-4 lg:ml-7 ml-0">
            <Link href="#">

              <button className="border border-white shadow-lg bg-yellow-700 text-black hover:text-white font-bold py-2 px-4 rounded-md">
                Sign up for free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
