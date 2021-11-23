import {useEffect, useContext} from 'react';
import Link from 'next/link';
import {useSession} from 'next-auth/react';
import Toolbar from '@mui/material/Toolbar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Skeleton from '@mui/material/Skeleton';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import {AppContext} from 'contexts/AppContext';

const DrawerList = () => {
  const {data, status} = useSession();
  const {
    isLoading,
    isAuthed,
    setIsLoading,
    setIsAuthed,
  } = useContext(AppContext);

  useEffect(() => {
    setIsLoading(status === 'loading');

    if (status === 'authenticated' && data) {
      setIsAuthed(true);
    } else if (status === 'unauthenticated') {
      setIsAuthed(false);
    }
  }, [status, setIsLoading, setIsAuthed, data]);

  const renderSkeleton = () => {
    const amount = new Array(3).fill(null);

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

  const renderAuthedList = () => {
    return (
      <>
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
      </>
    );
  };

  const renderList = () => {
    return (
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
    );
  };

  return (
    <>
      <Toolbar />
      <Divider />
      {isLoading && renderSkeleton()}
      {!isLoading && (
        <List>
          {isAuthed && renderAuthedList()}
          {!isAuthed && renderList()}
        </List>
      )}
    </>
  );
};

export default DrawerList;
