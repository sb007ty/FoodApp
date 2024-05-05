import React from "react";
import { useSelector } from "react-redux";

export default function ReservationDetailsCard() {
  const resId = useSelector((state) => {
    console.log(state);
    return state.reservation.updateResId.id;
  });
  const resDetails = useSelector((state) => {
    for (let obj of state.reservation.resDetails) {
      if (obj["id"] == resId) {
        console.log("bro", obj);
        return obj;
        // const newObj = { ...obj };
        // let { time } = newObj;
        // if (time >= 0 && time <= 12) {
        //   time += "AM";
        // } else {
        //   time += "PM";
        // }
      }
    }
  });
  console.log(resDetails, " resDe");
  return (
    <div className="res-details-card">
      <h2>Res details-</h2>
      <p> Date- {resDetails.date}</p>
      <p> Time- {resDetails.time}</p>
      <p> PartySize- {resDetails.partySize}</p>
    </div>
  );
}
