import { Button, Paper } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addResId,
  editReservation,
  modifyRes,
  resDetailsSelector,
} from "../../redux/features/reservationSlice";

export default function ReservationDetailsCard({ resId, page }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resDetails = useSelector((state) => resDetailsSelector(state, resId));
  // console.log(resDetails, " resDe");
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid black",
        borderRadius: "25px",
        padding: "25px",
        width: "50%",
        // "@media (min-width: 2000px)": {
        //   width: "25%",
        // },
      }}
    >
      {/* <h2>Res details-</h2> */}
      <p>Name: {resDetails.userName}</p>
      <p> Date- {resDetails.date}</p>
      <p> Time- {resDetails.time}</p>
      <p> PartySize- {resDetails.partySize}</p>
      {page === "booking" && (
        <Button
          onClick={() => {
            dispatch(editReservation(resId));
            navigate("/reserve");
          }}
        >
          Edit Booking
        </Button>
      )}
    </Paper>
  );
}
