"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const OrderSummary = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 border border-light-blue-grey rounded-lg bg-gray-50">
      <h2 className="text-xl font-semibold text-charcoal-blue mb-4">
        Order Summary
      </h2>
      <div className="flex justify-between text-dark-slate mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-dark-slate mb-2">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="border-t border-light-blue-grey my-4"></div>
      <div className="flex justify-between font-bold text-lg text-charcoal-blue">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
