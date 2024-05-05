import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Reservation from "../components/reservation/Reservation";
import Order from "../components/Order/Order";

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
    ],
  },
]);
export default router;
