import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import WhatWeProvide from "./pages/WhatWeProvide.jsx";
import OurParks from "./pages/OurParks.jsx";
import Esg from "./pages/Esg.jsx";
import NavOurParks from "./components/NavOurParks.jsx";
import InnerNav from "./pages/InnerNav.jsx";
import ScrollAnimate from "./pages/ScrollAnimate.jsx";
import Test from "./pages/Test.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/Home" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/what-we-provide" element={<WhatWeProvide />} />
      <Route path="/our-parks" element={<OurParks />} />
      <Route path="/esg" element={<Esg />} />
      <Route path="/inner-nav" element={<InnerNav />} />
      <Route path="/inner-nav/our-parks" element={<NavOurParks />} />
      <Route path="/scrollAnimate" element={<ScrollAnimate />} />
      <Route path="/test" element={<Test />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
