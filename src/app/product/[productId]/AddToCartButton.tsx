"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { Product } from "@/types";
import toast from "react-hot-toast";
import { IoCart } from "react-icons/io5";

interface AddToCartButtonProps {
  product: Product;
  type?: string;
}

const AddToCartButton = ({ product, type }: AddToCartButtonProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className={`bg-dark-slate text-white font-semibold ${
          type === "Home" ? "py-2 px-3 rounded-lg" : "py-3 px-6 rounded-lg"
        }   hover:bg-charcoal-blue transition-colors duration-300 w-full flex justify-center items-center cursor-pointer`}
      >
        <IoCart className="text-2xl mr-2" />
        {type === "Home" ? <></> : "Add to Cart"}
      </button>
    </div>
  );
};

export default AddToCartButton;
