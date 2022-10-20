import React from 'react';
import './Globals.scss';

// Views
import HomeMain from './Views/Home/Main';
import AboutMe from './Views/AboutMe/AboutMe';


// Dependencies
import { gsap } from "gsap";

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';

export default function App() {

  const NavBar = () => {
    return (
      <div id="NavBar">
        {/* Hamburger goes here */}
          <div onClick={() => {
            //TODO: have this open the nav
            <MenuIcon />
          }}>
          </div>
      </div>
    )
  }

  return (
   <>
    <NavBar />
    {/* <HomeMain /> */}
    <AboutMe />
   </>
  );
}
