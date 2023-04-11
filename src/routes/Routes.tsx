import { Navigate, createBrowserRouter, useNavigate } from "react-router-dom";
import App from "../App";
import { Checkout, Home, Success } from "@pages/index";
import { ReactNode, useState } from "react";
import { useCart } from "@contexts/CartContext";

const ProtectedRoute = ({ element }: { element: ReactNode }) => {
  const { isOrderSubmitted } = useCart();
  return isOrderSubmitted ? (
    (element as JSX.Element)
  ) : (
    <Navigate to='/' replace={true} state={{ from: "/success" }} />
  );
};

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
      {
        path: "/success",
        element: <ProtectedRoute element={<Success />} />,
      },
    ],
  },
]);
