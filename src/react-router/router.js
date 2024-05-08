import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Reservation from "../components/reservation/Reservation";
import Order from "../components/Order/Order";
import Home from "../components/Home";
import Cart from "../components/Cart/Cart";

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
        path: "home",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
export default router;
