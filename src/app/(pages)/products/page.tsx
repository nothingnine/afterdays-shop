import ProductReel from "@/components/ProductReel";
import { PRODUCT_CATEGORIES } from "@/config";

type Param = string | string[] | undefined;

interface ProductsPageProps {
  searchParams: { [key: string]: Param };
}

const parse = (param: Param) => {
  return typeof param === "string" ? param : undefined;
};

const ProductsPage = ({ searchParams }: ProductsPageProps) => {
  const sort = parse(searchParams.sort);
  const category = parse(searchParams.category);

  return (
    <section className="flex h-full flex-col">
      <div className="h-[300px] lg:h-[350px] bg-gray-20 relative top-0">
        <div className="w-[50%] md:w-[60%] xl:w-fit md:text-center left-[12%] xl:left-[20%] absolute bottom-[20%]">
          <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold">
            Our Skincare Products
          </h1>
          <p className="hidden sm:block mt-5 text-md">
            Experience the Power of Organic and Vegan Skincare for Healthy and
            Radiant Skin
          </p>
        </div>
        <img
          src="/model-product.png"
          className="absolute w-[200px] lg:w-[250px] right-10 xl:right-[15%] bottom-0"
        />
      </div>

      <div className="mx-auto flex gap-10">
        <ProductReel
          query={{
            category,
            limit: 40,
            sort: sort === "desc" || sort === "asc" ? sort : undefined,
          }}
        />
      </div>
    </section>
  );
};

export default ProductsPage;
