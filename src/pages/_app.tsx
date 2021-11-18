import 'reflect-metadata';
import '../styles/globals.css';

import type {AppProps} from 'next/app';
import Container from '@mui/material/Container';
import {SessionProvider} from 'next-auth/react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import DrawerNav from 'components/Drawer/DrawerNav';
import DrawerToolbar from 'components/Drawer/DrawerToolbar';

function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <SessionProvider session={session}>
        <CssBaseline />
        <DrawerToolbar
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Container>
          <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <Box
              component='nav'
              sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
              aria-label='mailbox folders'
            >
              <DrawerNav
                drawerWidth={drawerWidth}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
              />
            </Box>
            <Box
              component='main'
              sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
              <Toolbar />
              <Component{...pageProps} />
            </Box>
          </Box>
        </Container>
      </SessionProvider>
    </>
  );
}

export default App;
