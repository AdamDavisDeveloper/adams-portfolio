import React from 'react';
import './Globals.scss';
import HomeMain from './Views/Home/Main';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';

export default function App() {

  const NavBar = () => {
    return (
      <div id="NavBar">
        {/* Hamburger goes here */}
          <div onClick={() => {
            //TODO: have this open the nav
          }}>
            <MenuIcon />
          </div>
      </div>
    )
  }

  return (
   <>
    <NavBar />
    <HomeMain />
   </>
  );
}
