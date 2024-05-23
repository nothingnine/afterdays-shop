"use client";

import { TQueryValidator } from "@/lib/validators/query-validator";
import { Product } from "@/payload-types";
import { trpc } from "@/trpc/client";
import Link from "next/link";
import ProductListing from "./ProductListing";

interface ProductReelProps {
  href?: string;
  query: TQueryValidator;
}

const FALLBACK_LIMIT = 4;

const ProductReel = (props: ProductReelProps) => {
  const { href, query } = props;
  const { data: queryResults, isLoading } =
    trpc.getInfiniteProducts.useInfiniteQuery(
      {
        limit: query.limit ?? FALLBACK_LIMIT,
        query,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    );

  const products = queryResults?.pages.flatMap((page) => page.items);

  let map: (Product | null)[] = [];
  if (products && products.length) {
    map = products;
  } else if (isLoading) {
    map = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null);
  }

  return (
    <section className="py-12">
      <div className="md:flex md:items-end md:justify-end mb-4 mr-[20%] md:mr-5">
        {href ? (
          <Link
            href={href}
            className="hidden text-sm font-medium text-green-400 hover:text-green-300 md:block"
          >
            Shop the collection <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>

      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 sm:gap-x-6 xl:grid-cols-4 md:gap-y-5 lg:gap-x-8">
            {map.map((product, i) => (
              <ProductListing
                key={`product-${i}`}
                product={product}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReel;
