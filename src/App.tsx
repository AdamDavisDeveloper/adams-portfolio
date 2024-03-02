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
import NotFound from './Views/NotFound/NotFound';
import BlogList from './Views/Blog/BlogList';
import Article from './Views/Blog/Article';

// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TopLogo = () => {
  return (
    <div id="TopLogo">
      <img src={TopLogoImg} width="48" height="22" alt="logo" />
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
            <Route path='*'                       element={<NotFound />} />
            <Route path='/'                       element={<HomeMain />} />

            <Route path="projects"                element={<Projects />} />
            <Route path="projects/:project_name"  element={<ProjectPage />} />

            <Route path="about"                   element={<AboutMe />} />

            <Route path="blog"                    element={<BlogList />} />
            <Route path="blog/:article_name"      element={<Article />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
   </>
  );
}