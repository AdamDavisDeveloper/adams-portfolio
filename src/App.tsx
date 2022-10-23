import React, {useState, useEffect} from 'react';
import './Globals.scss';

// NavBar
import Navbar from './Navbar';

// Views
import HomeMain from './Views/Home/Main';
import AboutMe from './Views/AboutMe/AboutMe';

// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { gsap } from "gsap";

export default function App() {
  return (
   <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<HomeMain />} />
          <Route path="about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}
