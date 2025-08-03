"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import OrderTable from "@/components/OrderTable";
import Link from "next/link";

const OrdersPage = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  return (
    <div className="mx-auto py-4 sm:py-8 max-w-screen-2xl px-3 sm:px-10">
      <h1 className="text-3xl font-bold mb-8 text-charcoal-blue">
        Your Orders
      </h1>
      {orders.length === 0 ? (
        <div className="text-center">
          <p className="text-dark-slate mb-4">You have no orders.</p>
          <Link
            href="/"
            className="bg-dark-slate text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-charcoal-blue transition-colors duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <OrderTable orders={orders} />
      )}
    </div>
  );
};

export default OrdersPage;
