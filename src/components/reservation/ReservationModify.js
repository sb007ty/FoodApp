import { Button, Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReservation,
  finishUpdateRes,
  modifyRes,
} from "../../redux/features/reservationSlice";
import ReservationDetailsCard from "./ReservationDetailsCard";
import { useNavigate } from "react-router-dom";

export default function ReservationModify({ setResModify }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resId = useSelector((state) => {
    console.log(state);
    return state.reservation.updateResId.id;
  });
  return (
    <Modal
      open={true}
      onClose={() => {
        setResModify(false);
      }}
    >
      <div className="res-details-final-container">
        <ReservationDetailsCard resId={resId} />

        <div
          className="res-details-final"
          style={{ width: "25%", height: "25%" }}
        >
          <Button
            sx={{ backgroundColor: "orange", height: "50px" }}
            onClick={(e) => {
              navigate("/bookings");
            }}
          >
            Confirm Res
          </Button>
          <Button
            sx={{ backgroundColor: "orange", height: "50px" }}
            variant="contained"
            onClick={(e) => {
              setResModify(false);
              dispatch(modifyRes());
            }}
          >
            Modify Res
          </Button>

          <Button
            sx={{ backgroundColor: "orange", height: "50px" }}
            variant="contained"
            onClick={(e) => {
              setResModify(false);
              dispatch(deleteReservation({ id: resId }));
              dispatch(finishUpdateRes());
            }}
          >
            Cancel Res
          </Button>
        </div>
      </div>
    </Modal>
  );
}
