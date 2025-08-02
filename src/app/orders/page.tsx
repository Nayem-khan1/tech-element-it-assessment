"use client";

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import OrderTable from '@/components/OrderTable';
import Link from 'next/link';

const OrdersPage = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-charcoal-blue">Your Orders</h1>
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
