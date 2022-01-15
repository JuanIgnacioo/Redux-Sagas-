import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ViewCars from "./Pages/ViewCars/ViewCars";
import ModalHistory from "./Components/ModalHistory/ModalHistory";
import AddUser from "./Pages/AddUser/AddUser";
import AddNewCar from "./Pages/AddNewCar/AddNewCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewCars" element={<ViewCars />} />
        <Route path="/viewHistory" element={<ModalHistory />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addnewcar" element={<AddNewCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
