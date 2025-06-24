import * as React from "react";
import {
  Container,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/images/logo.png";
import styles from "./navbar.module.css";

const navItems = [
  "Home",
  "About Us",
  "E-Shop",
  "Alliance",
  "Menu",
  "Careeres",
  "Invest",
  "Contact",
];

export default function CustomAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 2,
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <img src={logo} alt="logo" height={35} />
        </Box>

        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: "white", fontSize: "30px" }} />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        sx={{ background: "transparent", paddingY: 4 }}
      >
        <Toolbar
          sx={{
            borderBottom: "1px solid white",
            margin: {
              xs: "0px 12px", // for small screens
              sm: "0px 12px", // optional: small tablets
              md: "0px 80px", // for tablets and up
              lg: "0px 80px", // for desktops
            },
            paddingBottom: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Logo */}
            <img src={logo} alt="logo" height={35} />

            {/* Desktop Menu Buttons */}
            <Box
              sx={{ display: { xs: "none", sm: "none", md: "flex" }, gap: 2 }}
            >
              {navItems.map((item) => (
                <Box component="btn" key={item} className={styles.navItem}>
                  {item}
                </Box>
              ))}
            </Box>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon sx={{ fontSize: 35 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
  anchor="right"
  open={mobileOpen}
  SlideProps={{ timeout: 800 }}
  onClose={handleDrawerToggle}
  sx={{
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: "100%",
      bgcolor: "black", // set background color to black
      color: "white",   // optional: make text white for contrast
    },
  }}
>
  {drawer}
</Drawer>

    </>
  );
}
