import { Navigate, createBrowserRouter } from "react-router-dom";
import { Auth, Public } from "src/layout";
import React from "react";

//Auth
const AdminPage = React.lazy(() =>
  import("src/pages/private/roles/admin/dashboard")
);
const Home = React.lazy(() => import("src/pages/private/home"));
const Details = React.lazy(() => import("src/pages/private/details"));
const Content = React.lazy(() => import("src/pages/private/content"));
const Exercises = React.lazy(() =>
  import("src/pages/private/exercises/exercises")
);

//Public
const Forbidden = React.lazy(() => import("src/pages/public/forbidden"));
const NotFound = React.lazy(() => import("src/pages/public/notFound"));
const Login = React.lazy(() => import("src/pages/public/login"));

const routes = createBrowserRouter([
  {
    //Private routes
    path: "auth",
    element: <Auth />,
    children: [
      { path: "", element: <Navigate to="home" replace={true} /> },
      { path: "home", element: <Home /> },
      { path: "details", element: <Details /> },
      { path: "content", element: <Content /> },
      { path: "admin", element: <AdminPage /> },
      { path: "exercises", element: <Exercises /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    //Public routes
    path: "",
    element: <Public />,
    children: [
      { path: "", element: <Navigate to="login" /> },
      { path: "login", element: <Login /> },
      { path: "404", element: <NotFound /> },
      { path: "forbidden", element: <Forbidden /> },
      { path: "*", element: <Navigate to="404" /> },
    ],
  },
]);

export default routes;
