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

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === category
  )?.label;

  return (
    <section className="flex h-screen flex-col">
      <div className="h-[50%] w-full bg-gray-20 relative overflow-hidden">
        <div className="w-fit text-center left-[20%] absolute bottom-[30%]">
          <h1 className="text-6xl font-bold">Our Skincare Products</h1>
          <p className="mt-5 text-md">
            Experience the Power of Organic and Vegan Skincare for Healthy and
            Radiant Skin
          </p>
        </div>
        <img
          src="/model-product.png"
          className="absolute w-[250px] right-[15%] bottom-0"
        />
      </div>
      <div className="mx-auto mt-5 flex gap-10">
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
