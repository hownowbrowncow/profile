import 'reflect-metadata';
import '../styles/globals.css';

import {useState, useEffect} from 'react';
import type {AppProps} from 'next/app';
import {SessionProvider} from 'next-auth/react';
import {SnackbarProvider} from 'notistack';
import {
  QueryClientProvider,
  QueryClient,
} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import DrawerNav from 'components/Drawer/DrawerNav';
import DrawerToolbar from 'components/Drawer/DrawerToolbar';
import {AppContext, AppContextState, defaultAppContext} from 'contexts/AppContext';

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#f5f5f5',
      dark: '#c2c2c2',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ffffff',
      main: '#cfd8dc',
      dark: '#9ea7aa',
      contrastText: '#000',
    },
  },
});

function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [appContext, setAppContext] = useState<AppContextState>(defaultAppContext);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setAppContext({
      isAuthed,
      setIsAuthed,
      isLoading,
      setIsLoading,
      theme: defaultAppContext.theme,
    });
  }, [isLoading, isAuthed]);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <SessionProvider session={session}>
          <SnackbarProvider
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
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
          </SnackbarProvider>
        </SessionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
