export type actionForm = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;
export type CartItem = {
  productId: string;
  title: string;
  quantity: number;
  price: number;
  amount: number;
  company: string;
  image: string;
};
export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shippingFee: number;
  tax: number;
  orderTotal: number;
};
