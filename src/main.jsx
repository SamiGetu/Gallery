import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useLocation,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Mgallery from "./components/Gallery/Mgallery.jsx";
import Shop from "./components/Shop/Shop.jsx";
import NotFound from "./components/NotFound.jsx";
import ProductView from "./components/ProductView/ProductView.jsx";

const ScrollToTop = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Return null so this component doesn't render anything
  return null;
};

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <React.Fragment>
        <ScrollToTop />
        <NotFound />
      </React.Fragment>
    ),
  },
  {
    path: "/",
    element: (
      <React.Fragment>
        <ScrollToTop />
        <App />
      </React.Fragment>
    ),
  },
  {
    path: "/gallery",
    element: (
      <React.Fragment>
        <ScrollToTop />
        <Mgallery />
      </React.Fragment>
    ),
  },
  {
    path: "/shop",
    element: (
      <React.Fragment>
        <ScrollToTop />
        <Shop />
      </React.Fragment>
    ),
  },
  {
    path: "/Cart",
    element: (
      <React.Fragment>
        <ScrollToTop />
        <ProductView />
      </React.Fragment>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
