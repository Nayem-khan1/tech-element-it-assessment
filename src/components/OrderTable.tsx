import { Order } from '@/types';

interface OrderTableProps {
  orders: Order[];
}

const OrderTable = ({ orders }: OrderTableProps) => {
  return (
    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-lg">
      <table className="min-w-full bg-white border border-light-blue-grey">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left text-dark-slate font-semibold">Order ID</th>
            <th className="py-3 px-4 text-left text-dark-slate font-semibold">Customer</th>
            <th className="py-3 px-4 text-left text-dark-slate font-semibold">Date</th>
            <th className="py-3 px-4 text-left text-dark-slate font-semibold">Total Items</th>
            <th className="py-3 px-4 text-left text-dark-slate font-semibold">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t border-light-blue-grey hover:bg-gray-50">
              <td className="py-3 px-4 font-mono text-sm text-charcoal-blue truncate" title={order.id}>{order.id.substring(0, 10)}...</td>
              <td className="py-3 px-4 text-charcoal-blue">{order.customer.fullName}</td>
              <td className="py-3 px-4 text-charcoal-blue">{order.orderDate}</td>
              <td className="py-3 px-4 text-charcoal-blue">{order.totalItems}</td>
              <td className="py-3 px-4 text-charcoal-blue">${order.totalAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
