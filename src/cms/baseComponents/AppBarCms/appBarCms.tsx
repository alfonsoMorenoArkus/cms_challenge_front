import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { appBarPropsChallenge } from "./appBar.types";

export const AppBarCms = ({
  flagSideBar,
  onClickMenuAppBar,
}: appBarPropsChallenge) => {
  const [collapseSideBarApp, setCollapseSideBarApp] = useState<boolean>(false);

  const onClickMenu = () => {
    onClickMenuAppBar(!collapseSideBarApp);
    setCollapseSideBarApp(!collapseSideBarApp);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "grey" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onClickMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CMS Challenge
          </Typography>
          <Button color="inherit">Team DEV 02</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
