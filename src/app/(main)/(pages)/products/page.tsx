import CardProduct from "@/components/CardProduct";
import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  return (
    <section className="flex h-screen flex-col">
      <div className="h-[30%] w-full bg-gray-20 relative overflow-hidden">
        <div className="w-fit text-center mt-20 left-[20%] absolute">
          <h1 className="text-6xl font-bold">Our Skincare Products</h1>
          <p className="mt-5 text-md">
            Experience the Power of Organic and Vegan Skincare for Healthy and
            Radiant Skin
          </p>
        </div>
        <img
          src="/model-product.png"
          className="absolute w-[250px] right-[15%] top-10"
        />
      </div>
      <div className="mx-auto mt-5 flex gap-10">
        <Link href="/item">
          <CardProduct
            ImageProduct="/cream1.png"
            Description="ogranic 100%"
            Name="Afterdays Peel & Pamper Hand Cream"
            Price={500}
          />
        </Link>
        <CardProduct
          ImageProduct="/new-product3.png"
          Description="ogranic 100%"
          Name="Afterdays Sugar Palm Leaf Cleansing Foam"
          Price={500}
        />
        <CardProduct
          ImageProduct="/cream3.png"
          Description="ogranic 100%"
          Name="Afterdays 4 Seasons Glow Serum"
          Price={500}
        />
        <CardProduct
          ImageProduct="/cream2.png"
          Description="ogranic 100%"
          Name="Afterdays 80% Peach Organic Serum"
          Price={500}
        />
      </div>
    </section>
  );
};

export default ProductsPage;
