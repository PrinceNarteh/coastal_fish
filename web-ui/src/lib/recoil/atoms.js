import { atom } from "recoil";

export const cartState = atom({
  key: "cart",
  default: [],
});

export const addToBasket = (cart, setCart, product) => {
  const newCart = [...cart];
  // Checking if product is already in cart
  const foundIndex = newCart.findIndex((item) => item.id === product.id);

  // if found, increase quantity
  if (foundIndex >= 0) {
    console.log(cart[foundIndex]);
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + 1,
    };
    setCart(newCart);
    return;
  }
  // Else add to cart
  newCart.push({
    ...product,
    quantity: 1,
  });

  setCart(newCart);
};

export const removeFromCart = (cart, setCart, id) => {
  let newCart = [...cart];
  // Checking if product is already in cart
  const foundIndex = newCart.findIndex((item) => item.id === id);

  // if found, increase quantity
  if (foundIndex >= 0) {
    newCart = newCart.filter((item) => item.id !== id);
    setCart(newCart);
  }
};
export const increaseQty = (cart, setCart, id) => {
  const newCart = [...cart];
  // Checking if product is already in cart
  const foundIndex = newCart.findIndex((item) => item.id === id);

  // if found, increase quantity
  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + 1,
    };
    setCart(newCart);
  }
};

export const descreaseQty = (cart, setCart, id) => {
  const newCart = [...cart];
  // Checking if product is already in cart
  const foundIndex = newCart.findIndex((item) => item.id === id);

  // if found, increase quantity
  if (foundIndex >= 0) {
    if (cart[foundIndex].quantity <= 1) return;

    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity - 1,
    };
    setCart(newCart);
  }
};
