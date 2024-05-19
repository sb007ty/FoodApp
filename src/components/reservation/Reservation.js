import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import restaurant from "../../images/restaurant-reserve.jpg";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import ReservationModify from "./ReservationModify";
import ReservationDetails from "./ReservationDetails";
import "../../styles/reserve.css";
import {
  finishUpdateRes,
  resDetailsSelector,
} from "../../redux/features/reservationSlice";
export default function Reservation() {
  const editReservation = useSelector(
    (state) => state.reservation.editReservation
  );
  const editResId = useSelector((state) => state.reservation.updateResId.id);
  const editResDetails = useSelector((state) =>
    resDetailsSelector(state, editResId)
  );
  console.log(editResDetails, "broo");
  const [dateVal, setDateVal] = useState(
    editResDetails === true ? resDetails.date : null
  );
  const [timeVal, setTimeVal] = useState(
    editResDetails === true ? resDetails.time : null
  );
  const [partySize, setPartySize] = useState(
    editResDetails === true ? resDetails.partySize : ""
  );
  const [resDetails, setResDetails] = useState(false);
  const [resModify, setResModify] = useState(editResDetails);
  const dispatch = useDispatch();

  const modifyRes = useSelector(
    (state) => state.reservation.updateResId.update
  );
  useEffect(() => {
    return () => {
      dispatch(finishUpdateRes());
    };
  }, []);
  return (
    <div className="reserve-home">
      <div>
        <img
          className="reserve-img"
          src={restaurant}
          alt="restaurant-img"
          width={"300px"}
          height={"300px"}
        />{" "}
      </div>
      <div className="reserve-sel">
        <h2>Book a Table</h2>
        <DatePicker
          value={dateVal}
          onChange={(val) => {
            setDateVal(val);
          }}
        />
        <TimePicker
          value={timeVal}
          onChange={(val) => {
            setTimeVal(val);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Party Size"
          variant="outlined"
          onChange={(e) => {
            setPartySize(e.target.value);
          }}
          value={partySize}
        />
        <Button
          sx={{ backgroundColor: "orange" }}
          variant="contained"
          disabled={!timeVal || !dateVal || partySize.length === 0}
          onClick={(e) => {
            setResDetails(true);
          }}
        >
          {modifyRes === true ? "Update Reservation" : "Book Now"}
        </Button>
      </div>

      {resDetails && (
        <ReservationDetails
          setResDetails={setResDetails}
          setResModify={setResModify}
          dateVal={dateVal}
          timeVal={timeVal}
          partySize={partySize}
        />
      )}
      {resModify && <ReservationModify setResModify={setResModify} />}
    </div>
  );
}
