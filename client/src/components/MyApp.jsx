import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./paymentIntegration/Home";
import PaymentSuccess from "./paymentIntegration/PaymentSuccess";

const MyApp = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/paymentsuccess",
      element: <PaymentSuccess />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default MyApp;
