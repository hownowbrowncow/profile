import {useState, useContext, MouseEvent} from 'react';
import {useRouter} from 'next/router';
import {useSnackbar} from 'notistack';
import Link from 'next/link';
import {signOut} from 'next-auth/react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import {AppContext} from 'contexts/AppContext';

export interface DrawerToolbarProps {
  drawerWidth: number
  handleDrawerToggle: () => void
}

function DrawerToolbar(props: DrawerToolbarProps) {
  const {drawerWidth, handleDrawerToggle} = props;
  const [menuEl, setMenuEl] = useState(null);
  const {enqueueSnackbar} = useSnackbar();
  const {isAuthed} = useContext(AppContext);
  const router = useRouter();

  const handleSignOut = async () => {
    const response = await signOut({
      redirect: false,
      callbackUrl: '/',
    });
    enqueueSnackbar('Log out successful', {variant: 'success'});
    router.push(response.url);
  };

  const handleMenuOpoen = (event: MouseEvent<HTMLElement>) => {
    setMenuEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuEl(null);
  };

  return (
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
        <Typography variant='h6' noWrap component='div' sx={{flexGrow: 1}}>
          Profile
        </Typography>
        <div>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='profile-menu'
            aria-haspopup='true'
            onClick={handleMenuOpoen}
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id='profile-menu'
            anchorEl={menuEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(menuEl)}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
          >
            {!isAuthed && (
              <Link href='/sign-in'>
                <a>
                  <ListItem button>Sign-In</ListItem>
                </a>
              </Link>
            )}
            {isAuthed && (
              <ListItem button onClick={handleSignOut}>Sign-Out</ListItem>
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default DrawerToolbar;
