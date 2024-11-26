import { createBrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router