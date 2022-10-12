import React from 'react';
import './Globals.scss';
import HomeMain from './Views/Home/Main';

export default function App() {

  const NavBar = () => {
    return (
      <div id="NavBar">
        {/* Hamburger goes here */}
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
