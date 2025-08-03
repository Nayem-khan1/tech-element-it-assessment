import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center min-h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-charcoal-blue mb-4">Thank You!</h1>
      <p className="text-dark-slate mb-6">
        Your order has been placed successfully.
      </p>
      <div className="space-x-4">
        <Link
          href="/"
          className="block sm:inline bg-dark-slate text-white font-semibold px-6 py-3 rounded-lg hover:bg-charcoal-blue transition-colors"
        >
          Continue Shopping
        </Link>
        <Link
          href="/orders"
          className="block sm:inline mt-4 sm:mt-0 bg-light-blue-grey text-dark-slate font-semibold px-4 py-3 rounded-lg hover:bg-gray-300 transition-colors"
        >
          View Orders
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
