import Drawer from '@mui/material/Drawer';

import DrawerList from 'components/Drawer/DrawerList';

export interface DrawerNavProps {
  mobileOpen: boolean
  drawerWidth: number
  handleDrawerToggle: () => void
}

const DrawerNav = (props: DrawerNavProps) => {
  const {mobileOpen, handleDrawerToggle, drawerWidth} = props;

  return (
    <>
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        onClick={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {xs: 'block', sm: 'none'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
        }}
      >
        <DrawerList />
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: {xs: 'none', sm: 'block'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
        }}
        open
      >
        <DrawerList />
      </Drawer>
    </>
  );
};

export default DrawerNav;
