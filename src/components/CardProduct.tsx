import { ShoppingBag } from "lucide-react";
import React from "react";

const CardProduct = ({
  ImageProduct,
  Name,
  Description,
  Price,
}: {
  ImageProduct: string;
  Description: string;
  Name: string;
  Price: number;
}) => {
  return (
    <div className="bg-white p-2 w-[250px] h-fit rounded-[20px] overflow-hidden hover:border-2 hover:border-gray-200">
      <img
        src={ImageProduct}
        alt="new arrival"
        className="h-[250px] w-full object-cover rounded-[20px]"
      />
      <div className="bg-gray-20 w-fit my-3 px-2 rounded-sm text-[12px] text-gray-500">
        Sensitive skin
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold pb-1 text-md">{Name}</h1>
        <p className="pb-1">{Description}</p>
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

export default CardProduct;
