export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

function reducer(state, action) {
  //console.log("reducer()", action);
  switch (action.type) {
    case "set_user":
      return {
        ...state,
        user: action.user,
      };
    case "add_to_basket":
      return {
        ...state, // return current state
        basket: [...state.basket, action.item], // return basket with prev items plus new item
      };
    case "remove_from_basket":
      // copy basket
      let newBasket = [...state.basket];

      // find the index of item to be removed
      const index = newBasket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // if index exists, remove item from copy basket
      if (index >= 0) {
        // remove
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id : ${action.id}) as it is not in basket`
        );
      }
      return { ...state, basket: newBasket }; // return state and set basket to the copy basket
    default:
      return state;
  }
}

export default reducer;
