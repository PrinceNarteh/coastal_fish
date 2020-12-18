import { selector } from "recoil";
import { cartState } from "./atoms";

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  },
});

export const grandTotal = selector({
  key: "grandTotal",
  get: ({ get }) => {
    const cart = get(cartState);

    const cartTotal = cart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    const total = cartTotal + 20;

    return total;
  },
});

export const totalItemsInCart = selector({
  key: "totalItemsInCart",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.length;
  },
});
