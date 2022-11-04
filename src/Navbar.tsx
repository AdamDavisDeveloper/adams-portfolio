import React, {useState} from 'react';

//MUI Components
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

// MUI Icons
//import MenuIcon from '@mui/icons-material/Menu';
import CottageIcon from '@mui/icons-material/Cottage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import { Link } from "react-router-dom";

/**
 * @description this is needed in case a visitor hits this site from a direct URL like '/about', the nav state needs to be set to reflect the URI on load
 * @returns A string which will be the name of the first uri param, which in theory should always be one of the Navbar states (also a string)
 */
function navState() {
  const currentUriPath = window.location.pathname.split('/')[1];
  if(currentUriPath === "") return "home"; // home path is just "/" so we need to return str "home" for navigationValue
  return currentUriPath;
}

export default function() {
  const [ navigationValue, setNavigationValue ] = useState(navState());

  const navActionStyles = {
    color: "white",
    '& .MuiSvgIcon-root': {
      marginBottom: '.35rem',
    }
  }

    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 3000 }} elevation={3}>
        <BottomNavigation
          sx={{
            background: "#1a1a23",
            '& .MuiBottomNavigationAction-root.Mui-selected': {
              color: '#C28854',
            }
          }}
          showLabels
          value={navigationValue}
          onChange={(event, newValue) => { setNavigationValue(newValue) }}
        >
          <BottomNavigationAction 
            sx={navActionStyles}
            key={0} 
            label="Home"      
            component={Link}
            to='/'
            value="home"
            icon={<CottageIcon />} 
          />

          <BottomNavigationAction 
            sx={navActionStyles}
            key={1} 
            label="Projects"  
            component={Link}
            to='/projects'
            value="projects"
            icon={<DeveloperModeIcon />}
          />
          <BottomNavigationAction 
            sx={navActionStyles}
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