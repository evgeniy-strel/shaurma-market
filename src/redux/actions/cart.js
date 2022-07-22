export const addShavermaToCart = (shaverma) => ({
  type: "ADD_SHAVERMA_TO_CART",
  payload: shaverma,
});

export const clearAllCart = () => ({
  type: "CLEAR_ALL_CART",
});

export const deleteItemFromCart = (item) => ({
  type: "DELETE_ITEM_FROM_CART",
  payload: item,
});

export const minusItemToCart = (item) => ({
  type: "MINUS_ITEM_TO_CART",
  payload: item,
});

export const plusItemToCart = (item) => ({
  type: "PLUS_ITEM_TO_CART",
  payload: item,
});
