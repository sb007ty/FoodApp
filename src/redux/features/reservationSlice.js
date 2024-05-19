import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  editReservation: false,
  resDetails: [],
  updateResId: {
    id: "",
    update: false,
  },
  // {
  //   id: "",
  //   date: "",
  //   time: "",
  //   partySize: "",
  //   userName: "",
  // },
};
const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    addOrUpdateReservation(state, action) {
      const { id } = action.payload;
      let fl = 0;
      state.resDetails.forEach((item, index) => {
        if (item.id == id) {
          state.resDetails[index] = action.payload;
          fl = 1;
        }
      });
      if (!fl) state.resDetails.push(action.payload);
    },
    updateReservationDetails(state, action) {
      const { id, userName } = action.payload;
      state.resDetails.forEach((item, index) => {
        if (id == item.id) {
          state[index].userName = userName;
        }
      });
    },
    deleteReservation(state, action) {
      const { id } = action.payload;
      // console.log(current(state.resDetails));
      const newResDetails = state.resDetails.filter((item) => item["id"] != id);
      // console.log(newResDetails, id, " new");
      return { resDetails: newResDetails, updateResId: state.updateResId };
    },
    modifyRes(state) {
      state.updateResId.update = true;
    },
    addResId(state, action) {
      state.updateResId.id = action.payload;
    },
    finishUpdateRes(state) {
      // console.log(current(state));
      state.updateResId.id = "";
      state.updateResId.update = false;
      state.editReservation = false;
    },
    editReservation(state, action) {
      state.updateResId.update = true;
      state.updateResId.id = action.payload;
      state.editReservation = true;
    },
  },
});
export const resDetailsSelector = (state, resId) => {
  for (let obj of state.reservation.resDetails) {
    if (obj["id"] == resId) {
      // console.log("bro", obj);
      return obj;
    }
  }
};
export const {
  addOrUpdateReservation,
  updateReservationDetails,
  deleteReservation,
  modifyRes,
  addResId,
  finishUpdateRes,
  editReservation,
} = reservationSlice.actions;

export default reservationSlice.reducer;
