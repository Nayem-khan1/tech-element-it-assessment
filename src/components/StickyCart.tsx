"use client";
import { IoBagHandleOutline } from "react-icons/io5";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";
const StickyCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link href="/cart">
      <button aria-label="Cart" className="absolute">
        <div className="right-0 w-35 float-right fixed top-2/4 bottom-2/4 align-middle shadow-lg cursor-pointer z-30 hidden lg:block xl:block">
          <div className="flex flex-col items-center justify-center bg-white rounded-tl-lg p-2 text-gray-700">
            <span className="text-2xl mb-1 text-dark-slate">
              <IoBagHandleOutline />
            </span>
            <span className="px-2 text-sm font-serif font-medium">
              {cartItemCount} Items
            </span>
          </div>
          <div className="flex flex-col items-center justify-center bg-dark-slate p-2 text-white text-base font-serif font-medium rounded-bl-lg mx-auto">
            $
          </div>
        </div>
      </button>
    </Link>
  );
};

export default StickyCart;
