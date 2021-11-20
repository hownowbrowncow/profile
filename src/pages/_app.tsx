import 'reflect-metadata';
import '../styles/globals.css';

import {useState, useEffect} from 'react';
import type {AppProps} from 'next/app';
import {SessionProvider} from 'next-auth/react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import DrawerNav from 'components/Drawer/DrawerNav';
import DrawerToolbar from 'components/Drawer/DrawerToolbar';
import {AppContext, AppContextState, defaultAppContext} from 'contexts/AppContext';

function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [appContext, setAppContext] = useState<AppContextState>(defaultAppContext);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setAppContext({
      isLoading,
      setIsLoading,
      theme: defaultAppContext.theme,
    });
  }, [isLoading]);

  return (
    <>
      <SessionProvider session={session}>
        <AppContext.Provider value={appContext}>
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
        </AppContext.Provider>
      </SessionProvider>
    </>
  );
}

export default App;
