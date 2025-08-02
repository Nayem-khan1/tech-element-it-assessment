import AddToCartButton from "@/app/product/[productId]/AddToCartButton";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border border-light-blue-grey rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-[1.02] animate-fadeIn">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="contain"
            className="p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4 border-t border-light-blue-grey">
        <h2
          className="text-lg font-semibold truncate text-dark-slate"
          title={product.title}
        >
          {product.title}
        </h2>
        <p className="text-charcoal-blue mt-2">${product.price.toFixed(2)}</p>
        <div className="mt-4 flex justify-between items-center gap-2">
          <Link href={`/product/${product.id}`}>
            <span className="bg-dark-slate text-white text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-charcoal-blue transition-colors duration-300 w-full">
              Details
            </span>
          </Link>
          <AddToCartButton product={product} type="Home" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
