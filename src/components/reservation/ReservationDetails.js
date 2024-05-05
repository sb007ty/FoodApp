import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateReservationDetails,
  addOrUpdateReservationDetails,
  addResId,
} from "../../redux/features/reservationSlice";
import ReservationDetailsCard from "./ReservationDetailsCard";
import { nanoid } from "nanoid";

export default function ReservationDetails({
  setResDetails,
  setResModify,
  dateVal,
  timeVal,
  partySize,
}) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const resId = useSelector((state) => {
    console.log(state);
    return state.reservation.updateResId.id;
  });
  return (
    <Modal
      id="modal"
      open={true}
      onClose={() => {
        setResDetails(false);
      }}
    >
      <div className="res-details-modal">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => {
            console.log(e.target.value);
            setUserName(e.target.value);
          }}
        />
        <Button
          sx={{ backgroundColor: "orange" }}
          variant="contained"
          onClick={(e) => {
            let newId;
            if (resId) {
              newId = resId;
            } else {
              newId = nanoid(2);
              dispatch(addResId(newId));
            }
            dispatch(
              addOrUpdateReservationDetails({
                id: newId,
                date: dateVal.$d.toDateString(),
                time: timeVal.$d.toTimeString(),
                partySize: partySize,
                userName,
              })
            );
            setResDetails(false);
            setResModify(true);
          }}
        >
          Confirm Reservation
        </Button>
      </div>
    </Modal>
  );
}
