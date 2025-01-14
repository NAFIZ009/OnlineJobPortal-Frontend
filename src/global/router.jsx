// src/routes/router.jsx
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

// Auth Pages
import Login from "@/pages/Login/Login";
import Register from "@/pages/Registration/Register";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;