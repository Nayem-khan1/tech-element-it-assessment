"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

const CheckoutPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-charcoal-blue mb-10 text-center">
        Checkout
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center h-48 flex flex-col items-center justify-center">
          <p className="text-dark-slate mb-4">Your cart is empty.</p>
          <Link
            href="/"
            className="bg-dark-slate text-white px-6 py-3 rounded-lg hover:bg-charcoal-blue transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <CheckoutForm />
          </div>
          <div className="md:col-span-2 md:mt-8">
            <OrderSummary />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
