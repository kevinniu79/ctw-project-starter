import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet,
  BrowserRouter as Router,
  Switch,
  Route,
  Ridrect, } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppNavigation from './app-navigation/app-navigation';
import AppCopyright from './app-copyright/app-copyright';
import AppBar from './app-bar/app-bar';

export default function App() {
  const [navigationActive, setNavigationActive] = useState(false);

  const closeNavigation = () => setNavigationActive(false);
  const openNavigation = () => setNavigationActive(true);

  const siteName = 'Code The Way';

  return (
    <>
      <CssBaseline />
      <AppBar title={siteName} onMenuClick={openNavigation} />
      <AppNavigation active={navigationActive} onCloseClick={closeNavigation} />
      <Box
        sx={{
          mt: {
            xs: 7,
            sm: 10,
          },
        }}
      >
        <Outlet />
      </Box>
      <AppCopyright
        siteName={siteName}
        siteLink="https://www.codetheway.org/"
      />
    </>
  );
}
