import 'reflect-metadata';
import '../styles/globals.css';

import type {AppProps} from 'next/app';
import Container from '@mui/material/Container';
import {SessionProvider} from 'next-auth/react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import DrawerNav from 'components/DrawerNav';

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
        <Container>
          <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <AppBar
              position='fixed'
              sx={{
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml: {sm: `${drawerWidth}px`},
              }}
            >
              <Toolbar>
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                  sx={{mr: 2, display: {sm: 'none'}}}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6' noWrap component='div'>
                  Profile
                </Typography>
              </Toolbar>
            </AppBar>
            <Box
              component='nav'
              sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
              aria-label='mailbox folders'
            >
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: {xs: 'block', sm: 'none'},
                  '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
              >
                <DrawerNav />
              </Drawer>
              <Drawer
                variant='permanent'
                sx={{
                  display: {xs: 'none', sm: 'block'},
                  '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
                open
              >
                <DrawerNav />
              </Drawer>
            </Box>
            <Box
              component='main'
              sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
              <Toolbar />
              <Component {...pageProps} />
            </Box>
          </Box>
        </Container>
      </SessionProvider>
    </>
  );
}

export default App;
