import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import restaurant from "../../images/restaurant-reserve.jpg";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useDispatch } from "react-redux";
import ReservationModify from "./ReservationModify";
import ReservationDetails from "./ReservationDetails";
import "../../styles/reserve.css";
export default function Reservation() {
  const [dateVal, setDateVal] = useState(null);
  const [timeVal, setTimeVal] = useState(null);
  const [partySize, setPartySize] = useState("");
  const [resDetails, setResDetails] = useState(false);
  const [resModify, setResModify] = useState(false);

  const [modifyingRes, setModifyingRes] = useState(false);
  return (
    <div className="reserve-home">
      <div className="reserve-img">
        <img
          src={restaurant}
          alt="restaurant-img"
          width={"500px"}
          height={"500px"}
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
          Book Now
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
      {resModify && (
        <ReservationModify
          setResModify={setResModify}
          setModifyingRes={setModifyingRes}
        />
      )}
    </div>
  );
}
