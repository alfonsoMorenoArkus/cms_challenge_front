import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  Container,
  Box,
  Typography,
  IconButton,
  SelectChangeEvent,
} from "@mui/material";

import { ManageCategoriesCU } from "./ManageSubCategoriesCrud";
import { Styles } from "./manageCategories.styled";
import {
  textFieldCrudSubInterirCategory,
  checkBoxesCrudSubInteriorCategory,
} from "./ManageSubCategoriesCrud";
import * as ROUTES from "../../routes";

export const ManageCreateUpdateCategories = () => {
  const [flagTypeViewEditInterior, setFlagTypeViewEditInterior] =
    useState<boolean>(false);
  const [textFieldsSubInteriorCategory, setTextFieldsSubInteriorCategory] =
    useState<textFieldCrudSubInterirCategory>({
      categoryId: "0",
      landingDescriptionMetaData: "",
      nameCategory: "",
      pretyUrlLandingSeo: "",
      titleLandingPageSeo: "",
      SubCategory: "0",
      mainsubCategoryLandingDescription: "",
      subCategoryLandingDescription: "",
      subCategoryLandingHeadline: "",
    });
  const [checkBoxesSubInteriorCategory, setCheckBoxesSubInteriorCategory] =
    useState<checkBoxesCrudSubInteriorCategory>({
      activeCategory: false,
      externarUrl: false,
      featuredBanner: false,
      featuredHeader: false,
      featuredTiles: false,
    });

  const [imgFileThumbnail, setImgFileThumbnail] = useState<Blob | any>();

  useEffect(() => {
    if (window.location.pathname === ROUTES.CMS_NEW_SUB_CATEGORY) {
      setFlagTypeViewEditInterior(true);
    }
  }, []);

  const onChangeTextFieldSubInteriorCategories = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    setTextFieldsSubInteriorCategory({
      ...textFieldsSubInteriorCategory,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeCheckBoxesSubInteriorCategory = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setCheckBoxesSubInteriorCategory({
      ...checkBoxesSubInteriorCategory,
      [event.target.name]: event.target.checked,
    });
  };

  const onChangeInputFileThumbnail = (file: Blob) => {
    setImgFileThumbnail(file);
  };

  const saveSubInteriorCategory = () => {};

  return (
    <Container
      disableGutters={true}
      maxWidth="xl"
      sx={Styles.boxFatherNewEditCategorie}
    >
      <Box sx={Styles.boxChildCrudCategories}>
        <Box sx={Styles.boxCategorieCUdTitle}>
          <Typography sx={Styles.styledTitleViewCategorieCU}>
            {flagTypeViewEditInterior
              ? "CREATE/EDIT SUB-CATEGORY"
              : "CREATE/EDIT INTERIOR SUB-CATEGORY"}
          </Typography>
          <Link to={ROUTES.CMS_CATEGORIES}>
            <IconButton>
              <CloseOutlinedIcon sx={{ color: "white", fontSize: 28 }} />
            </IconButton>
          </Link>
        </Box>
        <Box sx={{ width: "100%" }}>
          <ManageCategoriesCU
            flagSubInteriorCategory={flagTypeViewEditInterior}
            onChangeCheckBoxSubInterorCategory={
              onChangeCheckBoxesSubInteriorCategory
            }
            onChangeTextFieldSubInteriorCategoy={
              onChangeTextFieldSubInteriorCategories
            }
            textFieldsCrudCategories={textFieldsSubInteriorCategory}
            checkBoxesViewCategory={checkBoxesSubInteriorCategory}
            key={"crudSubInteriorCategory"}
            onChangeInputFileCategory={onChangeInputFileThumbnail}
            imageFileThumbnail={imgFileThumbnail}
            submitBtnCrudCategorie={saveSubInteriorCategory}
          />
        </Box>
      </Box>
    </Container>
  );
};
