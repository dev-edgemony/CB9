import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx";
import DetailPage from "./routes/DetailPage/DetailPage.jsx";
import Gallery from "./routes/Gallery/Gallery.jsx";
import UnderConstruction from "./routes/UnderConstruction/UnderConstruction.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Gallery /> },
      { path: `/detail/:id`, element: <DetailPage /> },
      { path: `/profile/:userid`, element: <App /> },
      { path: `/add/`, element: <UnderConstruction /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
