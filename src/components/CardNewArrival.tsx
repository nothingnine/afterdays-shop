import { ArrowRight, ShoppingBag } from "lucide-react";
import React from "react";

const CardNewArrival = ({
  ImageProduct,
  Name,
  Price,
}: {
  ImageProduct: string;
  Name: string;
  Price: number;
}) => {
  return (
    <div className="bg-white w-[250px] h-[350px] rounded-t-[20px] overflow-hidden shadow-md">
      <img
        src={ImageProduct}
        alt="new arrival"
        className="h-[60%] w-full object-cover"
      />
      <div className="flex flex-col ml-3">
        <div className="bg-gray-10 w-fit my-3 px-2 rounded-sm text-[12px] text-gray-500">
          Sensitive skin
        </div>
        <h1 className="font-bold pb-1 text-md">{Name}</h1>
        <span className="flex flex-row items-center">
          <div className="rounded-full bg-red-10 w-fit p-2 mr-2">
            <ShoppingBag className="text-white h-5 w-5" />
          </div>
          <h2 className="text-red-10 font-semibold">฿{Price}</h2>
        </span>
      </div>
    </div>
  );
};

export default CardNewArrival;
