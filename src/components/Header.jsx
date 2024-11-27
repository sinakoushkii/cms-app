import { AppBar, Divider, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    {label:"Home",path:"/"},
    {label:"Post",path:"/post"},
    {label:"About",path:"/about"},
    {label:"Fake",path:"/fake"},
  ];

  return (
    <div>
      <AppBar sx={{backgroundColor:"rgb(8 51 68)"}} className="bg-sky-950">
        <Toolbar className="bg-sky-950 container mx-auto px-4">
          <Typography variant="h6" component="div">
            <Divider />
            <List className="container mx-auto px-4">
             <div className="flex">
             {navItems.map((item,index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <Link to={item.path}><ListItemText primary={item.label} /></Link>
                  </ListItemButton>
                </ListItem>
              ))}
             </div>
            </List>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
