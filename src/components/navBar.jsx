import * as React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Tooltip,
  Avatar,
  Menu,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useIsAdminLoggedContext } from "../context/isAdminLoggedContext";
const drawerWidth = 240;
export const Navbar = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const { signOutFromWebSite } = useIsAdminLoggedContext();
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };



  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
const drawerWidth = 240;

  
 
  
  const styles = {
    menuButton: (theme) => ({
      color: "black",
      mr: 2,
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    }),
    NavbarContainer: (theme) => ({
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      [theme.breakpoints.down("sm")]: {
        width: `100%`,
      },
    }),
  };
  return (
    <AppBar position="fixed" sx={styles.NavbarContainer}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => {
            console.log('clicked')
            props.handleDrawerOpen();
          }}
          sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Хоолондоо
        </Typography>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            <MenuItem key="Гарах" onClick={handleCloseUserMenu}>
              <Button
                onClick={async () => {
                  await signOutFromWebSite();
                  navigate('/')
                }}
                textAlign="center">
                Гарах
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
