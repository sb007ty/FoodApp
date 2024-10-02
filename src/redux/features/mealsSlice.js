import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
  cart: [],
  fav: [],
};
const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    addMealToCart(state, action) {
      let fl = 0;
      const { idMeal } = action.payload;
      // console.log(current(state));
      state.cart.forEach((item, index) => {
        if (item.idMeal == idMeal) {
          fl = 1;
          item.count++;
        }
      });
      if (!fl) state.cart.push(action.payload);
    },
    removeMealFromCart(state, action) {
      let fl = 0;
      const { idMeal } = action.payload;
      state.cart.forEach((item, index) => {
        if (item.idMeal == idMeal && item.count > 1) {
          console.log("helo");
          fl = 1;
          item.count--;
        }
      });
      console.log(current(state.cart));
      if (!fl) state.cart = state.cart.filter((item) => item.idMeal !== idMeal);
    },
    addMeals(state, action) {
      state.cart.push(action.paylaod);
    },
    addFavMeals(state, action) {
      state.fav.push(action.payload);
    },
  },
});
export const { addMealToCart, removeMealFromCart, addFavMeals } =
  mealsSlice.actions;
export default mealsSlice.reducer;
