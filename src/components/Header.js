import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{ marginBottom: "50px" }}>
      Header
      <Link to={"reserve"}>Reservation</Link>
    </div>
  );
}
