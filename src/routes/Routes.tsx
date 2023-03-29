import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Checkout, Home } from "@pages/index";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
