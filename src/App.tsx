import React from 'react';
import './Globals.scss';

// NavBar
import Navbar from './Navbar';

// Views
import HomeMain from './Views/Home/Main';
import AboutMe from './Views/AboutMe/AboutMe';
import Projects from './Views/Projects/Projects';
import ProjectPage from './Views/Projects/ViewProject';

// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TopLogo = () => {
  return (
    <div id="TopLogo">
      <img src="/src/img/logo.svg" alt="logo" />
    </div>
  )
}

export default function App() {
  //TODO: a scroll-to-top function passed to all views

  return (
   <>
    <BrowserRouter>
      <TopLogo />
      <Navbar/>
      <Routes>
          <Route path='/'                       element={<HomeMain />} />

          <Route path="projects"                element={<Projects />} />
          <Route path="projects/:project_name"  element={<ProjectPage />} />

          <Route path="about"                   element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}
