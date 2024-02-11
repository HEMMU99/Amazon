export const initialState = {
  cart: [],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "Add-to-cart":
      //logic to add item to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "remove-from-cart":
      //logic for removing item from cart
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        newCart.splice(index, 1);
      }
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};
