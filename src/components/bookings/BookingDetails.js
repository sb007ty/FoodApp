import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Booking from "./Booking";
import { useSelector } from "react-redux";
import ReservationDetailsCard from "../reservation/ReservationDetailsCard";
import { Link } from "react-router-dom";

export default function BookingDetails() {
  const reservations = useSelector((state) => state.reservation.resDetails);
  console.log(reservations);
  return (
    <div>
      <Container>
        <Typography variant="h2">
          {!reservations.length ? "No Bookings" : "Bookings"}
        </Typography>
        <Grid container flexDirection={"column"}>
          {reservations.map((item) => {
            return (
              <Grid item>
                <ReservationDetailsCard
                  resId={item.id}
                  key={item.id}
                  page={"booking"}
                />
              </Grid>
            );
          })}
          {!reservations.length && (
            <Link to={"/reserve"}>Reserve a table now</Link>
          )}
        </Grid>
      </Container>
    </div>
  );
}
