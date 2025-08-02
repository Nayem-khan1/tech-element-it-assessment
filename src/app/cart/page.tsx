"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/store/cartSlice";
import Image from "next/image";
import CheckoutForm from "@/components/CheckoutForm";
import Link from "next/link";

const CartPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-charcoal-blue">
        Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center h-36">
          <p className="text-dark-slate mb-6">Your cart is empty.</p>
          <Link
            href="/"
            className="bg-dark-slate text-white text-sm font-semibold mt-4 px-6 py-3 rounded-lg hover:bg-charcoal-blue transition-colors duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border border-light-blue-grey rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    <div>
                      <h2 className="font-semibold text-dark-slate">
                        {item.title}
                      </h2>
                      <p className="text-charcoal-blue">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-light-blue-grey rounded">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="px-3 py-1 text-dark-slate hover:bg-light-blue-grey"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-dark-slate">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="px-3 py-1 text-dark-slate hover:bg-light-blue-grey"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="p-6 border border-light-blue-grey rounded-lg bg-gray-50">
              <h2 className="text-xl font-semibold mb-4 text-charcoal-blue">
                Summary
              </h2>
              <div className="flex justify-between mb-2 text-dark-slate">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-light-blue-grey text-charcoal-blue">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/checkout"
                  className="text-center w-full bg-dark-slate text-white font-semibold px-6 py-3 rounded-lg hover:bg-charcoal-blue transition-colors"
                >
                  proceed To Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
