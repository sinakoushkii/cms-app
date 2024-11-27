import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout/Layout";
import NotFound from "./components/NotFound";
import Post from "./pages/Post";
import IdentityLayout from "./Layout/IdentityLayout";
import Register from "./components/Register";
import Login from "./components/Login";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element:<About />,
      },
      { path: "/post", element: <Post /> },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Layout />,
    children: [{ index: true, element: <NotFound /> }],
  },
]);

export default router;
