export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  customer: {
    fullName: string;
    shippingAddress: string;
    phone: string;
  };
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
  orderDate: string;
}
