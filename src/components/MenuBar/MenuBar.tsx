import {
    Box,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Grid,
    Drawer,
  } from "@mui/material";
  import { useState } from "react";
  import { useTheme } from "@mui/material/styles";
  import { useMediaQuery } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import AccountCircleIcon from "@mui/icons-material/AccountCircle";
  import SchoolIcon from "@mui/icons-material/School";
  import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
  import ListIcon from "@mui/icons-material/List";
  import InfoIcon from "@mui/icons-material/Info";
  import { useNavigate } from "react-router-dom";
  import { Link, NavLink } from "react-router-dom";
  import { useLocation } from "react-router-dom";
  
  const drawerWidth = 240;
  // const navItems = ["Profil", "Compétence", "Expérience", "Contact"];
  const navItems = [
    {
      path: "Profil",
      link: "/",
    },
    {
      path: "Compétences",
      link: "/competence",
    },
    {
      path: "Expériences",
      link: "/experience",
    },
    {
      path: "Contact",
      link: "/contact",
    },
  ];
  const mobileItems = [
    {
      path: "Profil",
      icon: <InfoIcon />,
      link: "/",
    },
    {
      path: "Compétence",
      icon: <ListIcon />,
      link: "/competence",
    },
    {
      path: "Expérience",
      icon: <SchoolIcon />,
      link: "/experience",
    },
    {
      path: "Contact",
      icon: <LocalPhoneIcon />,
      link: "/contact",
    },
  ];
  
  interface Props {
    window?: () => Window;
  }
  
  const MenuBar = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const history = useNavigate();
    const takePath = useLocation();
  
    const redirect = (path: string) => (e: any) => {
      e.preventDefault();
      history(path);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2, fontWeight: "bolder" }}>
          MENU
        </Typography>
        <Divider />
        <List>
          {mobileItems.map((item) => (
            <>
              <ListItem
                key={item.path}
                disablePadding
                onClick={redirect(item.link)}
              >
                <ListItemButton>
                  &nbsp; &nbsp; {item.icon} &nbsp; &nbsp; &nbsp;{" "}
                  <ListItemText primary={item.path} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Box>
    );
  
    const container =
      window !== undefined ? () => window().document.body : undefined;
  
    const theme = useTheme();
    const downMD = useMediaQuery(theme.breakpoints.down("sm"));
  
    const url = takePath.pathname.toString();
  
    return (
      <div>
        <Box className="flex-align-between">
          <Typography variant="h5">PORTFOLIO</Typography>
          <List sx={{ display: "flex" }}>
            {!downMD &&
              navItems.map((item) => (
                <NavLink
                  to={item.link}
                  preventScrollReset={true}
                  className={url === item.link ? "link-active" : "cool-link"}
                >
                  <ListItem key={item.path} disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText primary={item.path} />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              ))}
            {downMD && (
              <>
                <MenuIcon onClick={handleDrawerToggle} className="menu-icon" />
              </>
            )}
          </List>
        </Box>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
    );
  };
  
  export default MenuBar;