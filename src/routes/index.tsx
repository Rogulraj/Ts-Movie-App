import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import movieRoutes from "@routes/movie.routes";

const AppRoutes = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to={"/movie/popular"} /> },
    {
      path: "/movie/*",
      children: [...movieRoutes],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
