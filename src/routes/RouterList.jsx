import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsMovie } from "../pages/DetailsMovie";
import { HomePage } from "../pages/HomePage";
import { AllMovie } from "../pages/AllMovie";
import { SearchMovie } from "../pages/SearchMovie";
import { Register } from "../pages/auth/Register";
import { LoginPage } from "../pages/auth/LoginPage";
import Responsive from "../pages/Responsive";

export const RouterList = () => {
  return (
    <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Responsive />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        
        <Route path="/detail/:id" element={<DetailsMovie />}></Route>
        <Route path="/allmovie/:page" element={<AllMovie />}></Route>
        <Route path="/search/:query" element={<SearchMovie />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
