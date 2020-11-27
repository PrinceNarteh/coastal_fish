export const resolver = {
  Mutation: {
    addToCart: (_, product, { cache }) => {
      const cart = cache.readData({});
      const foundIndex = cart.findIndex((item) => item.id === product.id);

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
    },
  },
};
