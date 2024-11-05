import React from 'react';
import Image, { StaticImageData } from 'next/image';
import image01 from '@/public/images/image01.png';
import image02 from '@/public/images/image02.png';
import image03 from '@/public/images/image03.png';
import image04 from '@/public/images/image04.png';
import image05 from '@/public/images/image05.png';
import image06 from '@/public/images/image06.png';
import image7 from '@/public/images/image7.png';
import image08 from '@/public/images/image08.png';
import image09 from '@/public/images/image09.png';
import image010 from '@/public/images/image010.png';

// Define the type for the props of the ProductCard component
interface ProductCardProps {
  imageSrc: StaticImageData | string; // Updated type to handle both StaticImageData and string
  title: string;
  description: string;
  width?: number;
  height?: number;
}

// Reusable component for the image section with type annotations
const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, description, width = 341, height = 326 }) => (
  <div className="h-96 flex flex-col justify-between">
    {/* If imageSrc is a StaticImageData (imported image), use it directly with <Image /> */}
    <Image src={imageSrc} alt={title} width={width} height={height} className="mb-4" />
    <span>
      <h1 className="font-semibold">{title}</h1>
      <p>{description}</p>
    </span>
  </div>
);

const ProductCategories: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* First Section */}
      <section className="w-full h-full">
        <div className="text-center my-14">
          <p>Discover a World of Shopping at Your Fingertips!</p>
          <h1 className="font-bold font-inter text-3xl">Explore Our Diverse Product Categories</h1>
        </div>
        <div className="grid grid-cols-3 gap-10 justify-center px-20">
          <ProductCard imageSrc={image01} title="Latest in Electronics" description="Trendy Fashion Finds" />
          <ProductCard imageSrc={image02} title="Stylish Home Goods" description="Smartphones, Laptops, Gadgets" />
          <ProductCard imageSrc={image03} title="Clothing, Accessories, Footwear" description="Furniture, Decor, Appliances" />
          <ProductCard imageSrc={image04} title="Fitness & Health" description="Kids & Babies" />
          <ProductCard imageSrc={image05} title="Gifts & Gadgets" description="Gear, Supplements, Apparel" />
          <ProductCard imageSrc={image06} title="Toys, Clothing, Essentials" description="Unique Finds, Fun Items" />
        </div>
      </section>

      {/* Second Section */}
      <section>
        <div className="text-center my-14">
          <p>Discover a World of Shopping at Your Fingertips!</p>
          <h1 className="font-bold font-inter text-3xl">Explore Our Diverse Product Categories</h1>
        </div>
        <div className="flex flex-col justify-center items-center container px-20 mx-auto">
          <div className="w-full flex flex-row gap-4">
            <div className="w-2/3 flex flex-col justify-between">
              <Image
                src={image7}
                alt="Latest in Electronics"
                className="mb-4 w-full min-h-[322px] object-cover rounded-2xl overflow-hidden"
              />
              <span>
                <h1 className="font-semibold">Latest in Electronics</h1>
                <p>Trendy Fashion Finds</p>
              </span>
            </div>
            <div className="w-1/3">
              <Image
                src={image08}
                alt="Clothing, Accessories, Footwear"
                className="mb-4 w-full max-h-[322px] overflow-hidden"
              />
              <span>
                <h1 className="font-semibold">Clothing, Accessories, Footwear</h1>
                <p>Furniture, Decor, Appliances</p>
              </span>
            </div>
          </div>

          <div className="w-full flex flex-row gap-4">
            <div className="w-1/2">
              <ProductCard
                imageSrc={image09}
                title="Stylish Home Goods"
                description="Smartphones, Laptops, Gadgets"
                width={580}
                height={286}
              />
            </div>
            <div className="w-1/2">
              <ProductCard
                imageSrc={image010}
                title="Fitness & Health"
                description="Kids & Babies"
                width={580}
                height={280}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategories;
