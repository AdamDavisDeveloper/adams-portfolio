import React, {useState, useEffect} from 'react';
import './Globals.scss';

// Views
import HomeMain from './Views/Home/Main';
import AboutMe from './Views/AboutMe/AboutMe';

// Libraries
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

//MUI Components
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

// MUI Icons
//import MenuIcon from '@mui/icons-material/Menu';
import CottageIcon from '@mui/icons-material/Cottage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const NavBar = () => {

  const [ navigationValue, setNavigationValue ] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    switch(navigationValue) {
      case 0: navigate('/')
      case 1: navigate('projects');
      case 2: navigate('about');
      default: navigate('/');
    }
  }, [navigationValue]);

    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
              showLabels
              value={navigationValue}
              onChange={(event, newValue) => {
                setNavigationValue(newValue);
              }}
            >
              <BottomNavigationAction key={0} label="Home"      icon={<CottageIcon />} />
              <BottomNavigationAction key={2} label="Projects"  icon={<DeveloperModeIcon />} />
              <BottomNavigationAction key={1} label="About Me"  icon={<SentimentSatisfiedAltIcon />} />
            </BottomNavigation>
      </Paper>
    )
}

export default function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>} >
          <Route index element={<HomeMain />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}
