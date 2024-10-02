import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Reservation from "../components/reservation/Reservation";
import Order from "../components/Order/Order";
import Home from "../components/Home";
import Cart from "../components/Cart/Cart";
import Login from "../components/login/Login";
import Logout from "../components/login/Logout";
import Booking from "../components/bookings/Booking";
import BookingDetails from "../components/bookings/BookingDetails";
import Favorites from "../components/favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "reserve",
        element: <Reservation />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "bookings",
        element: <BookingDetails />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);
export default router;
