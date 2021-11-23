import {useEffect, useContext} from 'react';
import Link from 'next/link';
import {useSession, signOut} from 'next-auth/react';
import {useRouter} from 'next/router';
import {useSnackbar} from 'notistack';
import Toolbar from '@mui/material/Toolbar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Skeleton from '@mui/material/Skeleton';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonOffIcon from '@mui/icons-material/PersonOff';

import {AppContext} from 'contexts/AppContext';

const DrawerList = () => {
  const router = useRouter();
  const {enqueueSnackbar} = useSnackbar();
  const {data, status} = useSession();
  const {isLoading, setIsLoading} = useContext(AppContext);

  useEffect(() => {
    setIsLoading(status === 'loading');
  }, [status, setIsLoading]);

  const handleSignOut = async () => {
    const response = await signOut({
      redirect: false,
      callbackUrl: '/',
    });
    enqueueSnackbar('Log out successful', {variant: 'success'});
    router.push(response.url);
  };

  const renderSkeleton = () => {
    const amount = new Array(4).fill(null);

    return (
      <>
        {amount.map((_, index) => (
          <Skeleton
            key={index}
            sx={{
              margin: '15px 10px',
            }}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <Toolbar />
      <Divider />
      {isLoading ? renderSkeleton() : (
        <List>
          <Link href='/'>
            <a>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                Home
              </ListItem>
            </a>
          </Link>
          {data ? (
            <>
              <Link href='/bio'>
                <a>
                  <ListItem button>
                    <ListItemIcon>
                      <LibraryBooksIcon />
                    </ListItemIcon>
                    Bio
                  </ListItem>
                </a>
              </Link>
              <Link href='/user'>
                <a>
                  <ListItem button>
                    <ListItemIcon>
                      <ManageAccountsIcon />
                    </ListItemIcon>
                    User
                  </ListItem>
                </a>
              </Link>
              <ListItem button onClick={handleSignOut}>
                <ListItemIcon>
                  <PersonOffIcon />
                </ListItemIcon>
                Sign Out
              </ListItem>
            </>
          ) : (
            <Link href='/sign-in'>
              <a>
                <ListItem button>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  Sign In
                </ListItem>
              </a>
            </Link>
          )}
        </List>
      )}
    </>
  );
};

export default DrawerList;
