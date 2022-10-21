import React, {useState, useEffect} from 'react';
import './Globals.scss';

// Views
import HomeMain from './Views/Home/Main';
import AboutMe from './Views/AboutMe/AboutMe';

// Libraries
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { gsap } from "gsap";

//MUI Components
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

// MUI Icons
//import MenuIcon from '@mui/icons-material/Menu';
import CottageIcon from '@mui/icons-material/Cottage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const NavBar = () => {
  const [ navigationValue, setNavigationValue ] = useState(0);

    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={navigationValue}
          onChange={(event, newValue) => { setNavigationValue(newValue) }}
        >
          <BottomNavigationAction 
            key={0} 
            label="Home"      
            component={Link}
            to='/'
            value="home"
            icon={<CottageIcon />} 
          />

          <BottomNavigationAction 
            key={1} 
            label="Projects"  
            component={Link}
            to='/projects'
            value="projects"
            icon={<DeveloperModeIcon />}
          />
          <BottomNavigationAction 
            key={2} 
            label="About Me"  
            component={Link}
            to='/about'
            value="about"
            icon={<SentimentSatisfiedAltIcon />} 
          />
        </BottomNavigation>
      </Paper>
    )
}

export default function App() {
  return (
   <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<HomeMain />} />
          <Route path="about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}
