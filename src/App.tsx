import React from 'react';
import './Globals.scss';

// Components
import Navbar from './Navbar';
import ScrollToTop from './utils/ScrollToTop';

//@ts-ignore
import TopLogoImg from '/src/img/logo.svg';

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
      <img src={TopLogoImg} alt="logo" />
    </div>
  )
}

export default function App() {
  return (
   <>
    <BrowserRouter>
      <ScrollToTop>
        <TopLogo />
        <Navbar/>
        <Routes>
            <Route path='/'                       element={<HomeMain />} />

            <Route path="projects"                element={<Projects />} />
            <Route path="projects/:project_name"  element={<ProjectPage />} />

            <Route path="about"                   element={<AboutMe />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
   </>
  );
}
