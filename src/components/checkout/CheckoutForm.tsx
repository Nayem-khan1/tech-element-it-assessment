"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { addOrder } from "@/store/orderSlice";
import { clearCart } from "@/store/cartSlice";
import { useRouter } from "next/navigation";

const CheckoutForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [formData, setFormData] = useState({
    fullName: "",
    shippingAddress: "", // ✅ renamed
    phone: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    shippingAddress: "", // ✅ renamed
    phone: "",
  });

  const validate = () => {
    const newErrors = { fullName: "", shippingAddress: "", phone: "" };
    let valid = true;

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
      valid = false;
    }
    if (!formData.shippingAddress) {
      newErrors.shippingAddress = "Shipping address is required.";
      valid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const totalAmount = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const order = {
      id: new Date().toISOString(),
      customer: {
        fullName: formData.fullName,
        shippingAddress: formData.shippingAddress,
        phone: formData.phone,
      },
      items: cartItems,
      totalAmount,
      totalItems,
      orderDate: new Date().toLocaleDateString(),
    };

    dispatch(addOrder(order));
    dispatch(clearCart());
    router.push("/checkout/thank-you");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName}</p>
        )}
      </div>
      <div>
        <label className="block font-medium mb-1">Shipping Address</label>
        <input
          type="text"
          name="shippingAddress"
          value={formData.shippingAddress}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
        {errors.shippingAddress && (
          <p className="text-red-500 text-sm">{errors.shippingAddress}</p>
        )}
      </div>
      <div>
        <label className="block font-medium mb-1">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-dark-slate text-white py-3 rounded-lg hover:bg-charcoal-blue transition-all"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
