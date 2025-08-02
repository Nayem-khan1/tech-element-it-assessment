import { Product } from "@/types";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import HeroCarousel from "@/components/carusel/HeroCarousel";
import OffersSlider from "@/components/OffersSlider";
import StickyCart from "@/components/StickyCart";
import Newsletter from "@/components/Newsletter";
import OfferCard from "@/components/OfferCard";

async function getProducts(): Promise<Product[]> {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <StickyCart />
      <div className="mx-auto py-4 sm:py-8 max-w-screen-2xl px-3 sm:px-10">
        <div className="flex w-full">
          <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-[70%]">
            <HeroCarousel />
          </div>
          <div className="w-full hidden lg:flex">
            <OfferCard />
          </div>
        </div>
        <div className="py-8">
          <h1 className="text-3xl text-center font-bold mb-8 text-charcoal-blue">
            Popular Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
    </main>
  );
}
