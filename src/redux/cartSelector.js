import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, curr) => curr.quantity * curr.price + acc, 0)
);
