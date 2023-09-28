import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Container } from "@mui/material";
import { ManageContent } from "./cms/components/ManageContent";
import { ManageCategories } from "./cms/components/ManageCategories";
import * as RoutesCMS from "./cms/routes";
import { Styles } from "./App.styled";
import { storeCmsChallenge } from "./cms/store";
import { SideBarCms } from "./cms/baseComponents/SideBarCms";
import "./App.css";
import { AppBarCms } from "./cms/baseComponents/AppBarCms";
import { ManageCreateUpdateContent } from "./cms/components/ManageContent";

const App = () => {
  const [collapsedSideBar, setCollapsedSideBar] = useState<boolean>(false);

  const sideBarCollapsed = (param: boolean) => {
    setCollapsedSideBar(param);
  };

  return (
    <BrowserRouter>
      <AppBarCms onClickMenuAppBar={sideBarCollapsed} />
      <Container disableGutters={true} maxWidth={false} sx={Styles.container}>
        <Provider store={storeCmsChallenge}>
          <SideBarCms flagCollapsedSideBar={collapsedSideBar} />
          <Routes>
            <Route path={RoutesCMS.CMS_CONTENT} element={<ManageContent />} />
            <Route
              path={RoutesCMS.CMS_CATEGORIES}
              element={<ManageCategories />}
            />
            <Route
              path={RoutesCMS.CMS_NEW_EDIT_CONTENT}
              element={<ManageCreateUpdateContent />}
            />
          </Routes>
        </Provider>
      </Container>
    </BrowserRouter>
  );
};

export default App;
