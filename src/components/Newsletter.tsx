"use client";

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <section className="bg-light-blue-grey/20 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-charcoal-blue">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-dark-slate">
          Get the latest updates on new products and upcoming sales.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-3 w-full max-w-sm border border-light-blue-grey rounded-l-lg focus:outline-none focus:ring-2 focus:ring-dark-slate"
            required
          />
          <button
            type="submit"
            className="bg-dark-slate text-white font-semibold px-6 py-3 rounded-r-lg hover:bg-charcoal-blue transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
