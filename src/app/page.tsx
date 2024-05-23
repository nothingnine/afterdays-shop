import Footer from "@/components/Footer";
import ProductReel from "@/components/ProductReel";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <section className="relative h-screen">
        <div className="absolute bottom-[20%] sm:bottom-[10%] left-10 lg:left-40 w-full sm:w-[40%] md:w-1/3 selection:text-balance">
          <h1 className="font-bold text-6xl text-black leading-tight">
            Be good to your skins.
          </h1>
          <h2 className="text-xl mb-5">
            You will were it <span className="font-semibold">every</span> day
            for you
          </h2>
          <div className="flex mb-5">
            {[...Array(5)].map((index) => (
              <Star
                key={`black-${index}`}
                className="h-5 w-5 text-green-50 fill-green-50"
              />
            ))}
          </div>
          <div className="flex items-center mb-3">
            <img className="w-10 mr-2" src="/natural-ingredients.png" />
            <h3> Guarantee organic 100%</h3>
          </div>
          <Link href="/products">
            <button className="px-7 py-3 font-bold text-white mt-6 bg-green-30">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="absolute w-2/3 -right-2 -top-[20%] lg:-top-[50%]">
          <img
            className="absolute w-[80%] rounded-b-full right-0"
            src="/product-home.png"
          />
        </div>
      </section>

      <section className="flex h-screen relative">
        <div className="flex w-fit items-center justify-center">
          <img
            src="/model.png"
            className="absolute hidden xl:block -left-[220px] w-[1000px]"
          />
        </div>
        <div className="w-screen xl:w-[60%] right-0 absolute h-full flex flex-col justify-start">
          <div className="relative top-0 xl:top-[20%] xl:ml-[200px] w-fit left-10 lg:left-40">
            <h1 className="text-5xl font-bold mb-2">New Arrival</h1>
            <p className="w-[90%] md:w-[50%]">
              Choosing suitable skincare products for your skin is a game
              changer to achieve healthy, nourished, and glowing skin.
            </p>
          </div>

          <div className="left-10 absolute top-[10%] xl:top-[35%] h-fit w-full flex lg:left-40 xl:left-0">
            <ProductReel query={{ sort: "desc", limit: 4 }} href="/products" />
          </div>
        </div>
      </section>

      <div className="h-screen sm:hidden"></div>

      <section className="flex h-screen flex-col relative sm:mt-20">
        <div className="bg-green-10 h-2/3 w-full flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl w-2/3 text-center font-bold text-tight">
            Discover Our Amazing Skincare Products
          </h1>
          <p className="mt-5 text-md text-center px-5">
            Experience the Power of Organic and Vegan Skincare for Healthy and
            Radiant Skin
          </p>
          <Link href="products">
            <button className="bg-green-30 rounded-full py-3 px-5 text-black font-bold mt-8">
              Shop Now!
            </button>
          </Link>
        </div>
        <div className="relative mt-10 gap-4 sm:gap-10 flex left-[5%]">
          <img src="/afterdays-logo.png" className="w-20 h-fit mt-1" />
          <div>
            <h1 className="text-[12px] sm:text-md">Reference Design</h1>
            <ul className="mt-1 text-[10px] sm:text-xs">
              <li className="pt-1">Perfect UX</li>
              <li className="pt-1">Caler Edwards</li>
              <li className="pt-1">Waap Design</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[12px] sm:text-md">Reference Design</h1>
            <ul className="mt-1 text-[10px] sm:text-xs">
              <li className="pt-1">Perfect UX</li>
              <li className="pt-1">Caler Edwards</li>
              <li className="pt-1">Waap Design</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[12px] sm:text-md">Reference Design</h1>
            <ul className="mt-1 text-[10px] sm:text-xs">
              <li className="pt-1">Perfect UX</li>
              <li className="pt-1">Caler Edwards</li>
              <li className="pt-1">Waap Design</li>
            </ul>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
