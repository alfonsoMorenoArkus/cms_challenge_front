import { useNavigate } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { sideBarPropsChallenge } from "./sideBar.types";
import {
  StylesSideBarMenu,
  StylesNormal,
} from "./sideBarMenu.styled";
import { menuOptionsCms } from "./sideBarCms.const";

export const SideBarCms = ({ flagCollapsedSideBar }: sideBarPropsChallenge) => {
  const navigateTo = useNavigate();

  const goToLocationComponent = (route: string) => {
    navigateTo(route);
  };

  const showoptionsMenu = () => {
    return (
      <Menu key={"MenusidebarItemsOptions1"} menuItemStyles={StylesSideBarMenu}>
        {menuOptionsCms.map((val: any, key) => {
          return val.type === "menuItem" ? (
            <MenuItem key={val.name + key}>{val.options.name}</MenuItem>
          ) : (
            <SubMenu
              icon={<ManageAccountsIcon />}
              key={val.label + key}
              label={val.label}
            >
              {val.options.map((reg: any) => {
                return (
                  <MenuItem
                    disabled={reg.disabledOption}
                    style={{ fontSize: "14px" }}
                    onClick={() => goToLocationComponent(reg.routeElement)}
                    key={reg.name + key}
                  >
                    {reg.name}
                  </MenuItem>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    );
  };

  return (
    <Sidebar
      key={"sideBarCmsApp"}
      rootStyles={StylesNormal.rootStyles}
      collapsed={flagCollapsedSideBar}
    >
      {showoptionsMenu()}
    </Sidebar>
  );
};
