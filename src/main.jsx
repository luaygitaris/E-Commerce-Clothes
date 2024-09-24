// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import MainProduct from "./pages/mainproduct.jsx";
import Categorypage from "./pages/Category-Page/categorypage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <MainProduct />,
      },
      {
        path: "category",
        element: <Categorypage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
