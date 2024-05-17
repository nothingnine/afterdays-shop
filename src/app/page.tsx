import Footer from "@/components/Footer";
import NewArrival from "@/components/NewArrival";
import ProductItem from "@/components/ProductItem";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden w-screeh-screen">
      <section className="relative">
        <ProductItem
          ImageProduct="/serum.png"
          Name="Cica Serum"
          Price={449}
          StarReview={4}
          PositionX="left-[22%]"
          PositionY="top-[18%]"
        />
        <div className="text-tight absolute top-[20%] right-[5%] w-[500px] text-balance">
          <h1 className="font-bold text-7xl text-black">
            Be good to your <span className="text-white">skins.</span>
          </h1>
          <h2 className="mt-10 text-xl pl-10">
            You will were it <span className="font-semibold">every</span> day
            for you
          </h2>
        </div>

        <ProductItem
          ImageProduct="/toner-pad.png"
          Name="Cica Serum"
          Price={590}
          StarReview={5}
          PositionX="right-[22%]"
          PositionY="bottom-[30%]"
        />

        <div className="flex justify-center">
          <img
            className="absolute w-[650px] bottom-[8%]"
            src="/hero-products.png"
            alt="products"
          />
        </div>
        <div className="text-tight absolute bottom-[40%] left-40 w-80 selection:text-balance">
          <p>
            Choosing suitable skincare products for your skin is a game changer
            to achieve healthy, nourished, and glowing skin.
          </p>
          <div className="mt-6 w-fit bg-green-30">
            <button className="px-7 py-2 font-bold text-white">Shop Now</button>
          </div>
        </div>

        <div className="flex h-screen w-screen">
          <div className="w-1/2 bg-white"></div>
          <div className="w-1/2 bg-green-30"></div>
        </div>
      </section>
      <NewArrival />

      <section className="flex h-screen flex-col relative">
        <div className="bg-green-30 h-2/3 w-full flex flex-col items-center justify-center">
          <h1 className="text-7xl w-2/3 text-center font-bold text-tight">
            Discover Our Amazing Skincare Products
          </h1>
          <p className="mt-5 text-md">
            Experience the Power of Organic and Vegan Skincare for Healthy and
            Radiant Skin
          </p>
          <button className="bg-gray-10 rounded-full py-3 px-5 text-black font-bold mt-8">
            Shop Now!
          </button>
        </div>
        <div className="relative mt-10">
          <img src="/afterdays-logo.png" className="w-20 absolute left-[10%]" />
          <div className="absolute left-[20%]">
            <h1 className="">Reference Design</h1>
            <ul className="mt-1 text-xs">
              <li className="pt-1">Perfect UX</li>
              <li className="pt-1">Caler Edwards</li>
              <li className="pt-1">Waap Design</li>
            </ul>
          </div>
          <div className="absolute left-[35%]">
            <h1 className="">Reference Design</h1>
            <ul className="mt-1 text-xs">
              <li className="pt-1">Perfect UX</li>
              <li className="pt-1">Caler Edwards</li>
              <li className="pt-1">Waap Design</li>
            </ul>
          </div>
          <div className="absolute left-[50%]">
            <h1 className="">Reference Design</h1>
            <ul className="mt-1 text-xs">
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
