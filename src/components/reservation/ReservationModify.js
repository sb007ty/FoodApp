import { Button, Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReservation,
  finishUpdateRes,
  modifyRes,
} from "../../redux/features/reservationSlice";
import ReservationDetailsCard from "./ReservationDetailsCard";

export default function ReservationModify({ setResModify, setModifyingRes }) {
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
        <div
          className="res-details-final"
          style={{ width: "25%", height: "25%" }}
        >
          <Button
            sx={{ backgroundColor: "orange", height: "50px" }}
            variant="contained"
            onClick={(e) => {
              setResModify(false);
              dispatch(deleteReservation({ id: resId }));
              dispatch(finishUpdateRes());
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{ backgroundColor: "orange", height: "50px" }}
            variant="contained"
            onClick={(e) => {
              setResModify(false);
              dispatch(modifyRes());
            }}
          >
            Modify
          </Button>
          <Button
            onClick={(e) => {
              setResModify(false);
            }}
          >
            Confirm
          </Button>
        </div>
        <div>
          {" "}
          <ReservationDetailsCard />
        </div>
      </div>
    </Modal>
  );
}
