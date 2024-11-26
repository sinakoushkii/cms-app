import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout/Layout";
import NotFound from "./components/NotFound";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/post", element: <Post /> },
    ],
  },
  {
    path: "*",
    element: <Layout />,
    children: [
      { index: true, element: <NotFound /> },
    ],
  },
]);

export default router;
