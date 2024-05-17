import React from "react";
import CardNewArrival from "./CardNewArrival";

const NewArrival = () => {
  return (
    <section className="flex h-screen overflow-hidden relative">
      <div className="flex w-fit items-center justify-center">
        <img src="/model.png" className="absolute -left-[220px] w-[1000px]" />
      </div>
      <div className="w-[60%] right-0 absolute h-full flex flex-col">
        <div className="relative top-[20%] ml-[200px] w-fit">
          <h1 className="text-5xl font-bold mb-2">New Arrival</h1>
          <p className="w-[50%]">
            Choosing suitable skincare products for your skin is a game changer
            to achieve healthy, nourished, and glowing skin.
          </p>
        </div>

        <div className="absolute top-[40%] h-fit w-[95%] flex justify-between">
          <CardNewArrival
            ImageProduct="/cream1.png"
            Name="Afterdays Peel & Pamper Hand Cream"
            Price={950}
          />
          <CardNewArrival
            ImageProduct="/cream3.png"
            Name="Afterdays 4 Seasons Glow Serum"
            Price={950}
          />
          <CardNewArrival
            ImageProduct="/new-product3.png"
            Name="Afterdays Sugar Palm Leaf Cleansing Foam"
            Price={950}
          />
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
