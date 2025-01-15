// src/routes/router.jsx
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

// Auth Pages
import Login from "@/pages/Login/Login";
import Register from "@/pages/Registration/Register";
import JobSeekerDashboard from "@/pages/JobSeeker/JobSeekerDashboard";
import MainLayouts from "./MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <JobSeekerDashboard />,
      },
      {
        path: "/dashboard",
        element: <JobSeekerDashboard />,
      },
      // Add more routes as needed
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);

export default router;