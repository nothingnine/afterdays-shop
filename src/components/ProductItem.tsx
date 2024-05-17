import { ArrowRight, Star } from "lucide-react";
import React from "react";

type Props = {
  ImageProduct: string;
  Name: string;
  Price: number;
  StarReview: number;
  PositionX: string;
  PositionY: string;
};

const ProductItem = ({
  ImageProduct,
  Name,
  Price,
  StarReview,
  PositionX,
  PositionY,
}: Props) => {
  const grayStars = 5 - StarReview;
  const grayStarsArray = Array.from(
    { length: grayStars },
    (_, index) => index + 1
  );
  const blackStarsArray = Array.from(
    { length: StarReview },
    (_, index) => index + 1
  );

  return (
    <div
      className={`absolute ${PositionY} ${PositionX} flex flex-row px-5 py-3 bg-gradient-to-r bg-gray-200/75 backdrop-blur-lg`}
    >
      <div className="bg-white">
        <img src={ImageProduct} alt="product" className="w-[60px] h-fit p-1" />
      </div>
      <div className="flex flex-col pr-20 pl-3">
        <h1 className="font-bold">{Name}</h1>
        <h2>{Price}฿</h2>
        <div className="flex flex-row">
          {blackStarsArray.map((_, index) => (
            <Star
              key={`black-${index}`}
              className="h-4 w-4 text-black fill-black"
            />
          ))}
          {grayStarsArray.map((_, index) => (
            <Star
              key={`gray-${index}`}
              className="h-4 w-4 text-gray-400 fill-gray-400"
            />
          ))}
          <ArrowRight className="bg-gray-900 rounded-full stroke-[3px] w-[30px] h-[30px] text-white p-2 absolute right-2 bottom-2" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
