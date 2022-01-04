import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import EntryProvider from "../context/EntryProvider";
import Disco from "../views/Disco";
import DiscoDoor from "../views/DiscoDoor";
import Layout from "./Layout";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <EntryProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DiscoDoor />} />
            <Route path="disco" element={ <PrivateRoute redirect="/" component={ <Disco /> } /> } />
          </Route>
        </Routes>
      </EntryProvider>
    </BrowserRouter>
  );
};

export default RoutesApp;
