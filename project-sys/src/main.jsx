import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import PrivateRoute from "./utilities/privateRoute.jsx";
import { store } from "./store/store.js";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard.jsx";
import Projects from "./Page/Dashboard/Components/Projects.jsx";
import Login from "./Page/Authentication/Login/login.jsx";
import Register from "./Page/Authentication/Register/Register.jsx";
// import PrivateRoute from "./PrivateRoute"; // Import the PrivateRoute component

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PrivateRoute element={<Projects />} />,
      },
      {
        path: "/profile",
        element: <PrivateRoute element={<Dashboard />} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <Navigate to="/" />, // Redirect to home for any unknown routes
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
