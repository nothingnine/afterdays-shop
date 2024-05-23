"use client";

import { Product } from "@/payload-types";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import { PRODUCT_CATEGORIES } from "@/config";
import ImageSlider from "./ImageSlider";

interface ProductListingProps {
  product: Product | null;
  index: number;
}

const ProductListing = ({ product, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (isVisible && product) {
    const label = PRODUCT_CATEGORIES.find(
      ({ value }) => value === product.category
    )?.label;

    const validUrls = product.images
      .map(({ image }) => (typeof image === "string" ? image : image.url))
      .filter(Boolean) as string[];

    return (
      <div className="bg-white rounded-xl shadow-md w-[13rem] mb-2 mx-2">
        <Link
          className={cn("invisible h-full w-full cursor-pointer group/main", {
            "visible animate-in fade-in-5": isVisible,
          })}
          href={`/product/${product.id}`}
        >
          <div className="flex flex-col w-full">
            <ImageSlider urls={validUrls} />
            <p className="bg-gray-20 mt-3 text-[12px] w-fit px-2 text-gray-500 rounded-sm ml-2">
              {label}
            </p>

            <h3 className="mt-4 mx-2 font-medium text-sm text-gray-700">
              {product.name}
            </h3>

            <p className="mt-1 mb-4 mx-2 font-medium text-sm text-gray-900">
              {formatPrice(product.price)}
            </p>
          </div>
        </Link>
      </div>
    );
  }
};

export default ProductListing;
