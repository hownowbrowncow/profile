import 'reflect-metadata';
import '../styles/globals.css';

import type {AppProps} from 'next/app';
import Link from 'next/link';
import Container from '@mui/material/Container';
import {SessionProvider} from 'next-auth/react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Link href="/">
            <a>Home</a>
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <Link href="/user">
            <a>User</a>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <SessionProvider session={session}>
        <CssBaseline />
        <Container>


          <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml: {sm: `${drawerWidth}px`},
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{mr: 2, display: {sm: 'none'}}}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Responsive drawer
                </Typography>
              </Toolbar>
            </AppBar>
            <Box
              component="nav"
              sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
              aria-label="mailbox folders"
            >
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer
                variant="temporary"
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
                {drawer}
              </Drawer>
              <Drawer
                variant="permanent"
                sx={{
                  display: {xs: 'none', sm: 'block'},
                  '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
                open
              >
                {drawer}
              </Drawer>
            </Box>
            <Box
              component="main"
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
