import { MenuItemStyles } from "react-pro-sidebar";
import { CSSObject } from "@mui/material";
import { StylesObj } from "../../StyledMUI";

export const StylesSideBarMenu: MenuItemStyles = {
  root: {
    fontSize: "17px",
    fontWeight: "400",
    fontFamily: "sans-serif",
  },
  button: {
    "&:hover": {
      backgroundColor: "rgba(220, 20, 60, 0.5)",
    },
  },
};

export const StylesNormal: CSSObject | any = {
  rootStyles: {
    backgroundColor: "grey",
  },
};

export const StylesObjMui: StylesObj = {
  boxTitleStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "2rem",
  },
  boxAppBarSideBar: {
    display: "flex",
    flexDirection: "column",
  },
};
