import { configureStore, Tuple } from "@reduxjs/toolkit";
import reservation from "./features/reservationSlice";
const store = configureStore({
  reducer: {
    reservation: reservation,
  },
});
export default store;
