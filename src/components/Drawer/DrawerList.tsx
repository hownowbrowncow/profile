import Link from 'next/link';
import Toolbar from '@mui/material/Toolbar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';


const DrawerList = () => {
  return (
    <div>
      <Toolbar />
      <Divider />
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
        <Link href='/user'>
          <a>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              User
            </ListItem>
          </a>
        </Link>
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
      </List>
    </div>
  );
};

export default DrawerList;
