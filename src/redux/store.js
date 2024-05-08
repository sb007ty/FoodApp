import { configureStore, Tuple } from "@reduxjs/toolkit";
import reservation from "./features/reservationSlice";
import meals from "./features/mealsSlice";
const store = configureStore({
  reducer: {
    reservation: reservation,
    meals: meals,
  },
});
export default store;
