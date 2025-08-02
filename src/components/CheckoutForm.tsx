"use client";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { AppDispatch, RootState } from '@/store/store';
import { addOrder } from '@/store/orderSlice';
import { clearCart } from '@/store/cartSlice';

const CheckoutForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [formData, setFormData] = useState({
    fullName: '',
    shippingAddress: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    shippingAddress: '',
    phone: '',
  });

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { fullName: '', shippingAddress: '', phone: '' };

    if (!formData.fullName) {
      formIsValid = false;
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.shippingAddress) {
      formIsValid = false;
      newErrors.shippingAddress = 'Shipping Address is required.';
    }
    if (!formData.phone) {
      formIsValid = false;
      newErrors.phone = 'Phone Number is required.';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

      const newOrder = {
        id: new Date().toISOString(), // Simple unique ID
        customer: formData,
        items: cartItems,
        totalItems,
        totalAmount,
        orderDate: new Date().toLocaleDateString(),
      };

      dispatch(addOrder(newOrder));
      dispatch(clearCart());
      router.push('/checkout/thank-you');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-dark-slate">Full Name</label>
        <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 block w-full border-light-blue-grey rounded-md shadow-sm focus:ring-dark-slate focus:border-dark-slate" />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>
      <div>
        <label htmlFor="shippingAddress" className="block text-sm font-medium text-dark-slate">Shipping Address</label>
        <input type="text" name="shippingAddress" id="shippingAddress" value={formData.shippingAddress} onChange={handleChange} className="mt-1 block w-full border-light-blue-grey rounded-md shadow-sm focus:ring-dark-slate focus:border-dark-slate" />
        {errors.shippingAddress && <p className="text-red-500 text-xs mt-1">{errors.shippingAddress}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-dark-slate">Phone Number</label>
        <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border-light-blue-grey rounded-md shadow-sm focus:ring-dark-slate focus:border-dark-slate" />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>
      <button type="submit" className="w-full bg-dark-slate text-white font-semibold py-3 rounded-lg hover:bg-charcoal-blue transition-colors">
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
