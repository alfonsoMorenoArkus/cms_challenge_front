import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  IconButton,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { generalManageFields } from "./GeneralContentCU/generalManage.types";
import { StylesCU } from "./manageNewEdit.styled";
import { GeneralManageCU } from "./GeneralContentCU";
import { DisplayOptionsCU } from "./DisplayOptionsCU";
import {
  radiosButtonsDOProps,
  categoriesInformationProps,
  checkBoxesDisplayOptionsProps,
  templatesDisplayOptionsCUProps,
} from "./DisplayOptionsCU/displayOptions.types";
import * as ROUTES from "../../routes";

export const ManageCreateUpdateContent = () => {
  const [checkBoxesDisplayOptionsCU, setCheckBoxesDisplayOptionsCU] =
    useState<checkBoxesDisplayOptionsProps>({
      noNewComments: false,
      showComment: false,
      enableMLSSearch: false,
      packageTemplate: false,
      unlockedPost: false,
    });
  const [radiosButtonDoObjects, setRadiosButtonDoObjects] =
    useState<radiosButtonsDOProps>({
      radioButtonDisplayItem: "",
      radioButtonFeatureHomePage: "",
      radioButtonFeatureLandingPage: "",
      radioButtonPostType: "",
    });
  const [generalManageComponent, setGeneralManageComponent] =
    useState<generalManageFields>({
      titleGeneral: "",
      author: "",
      documentDate: "",
      headLine: "",
      prettyUrl: "",
      subTitleGeneral: "",
      teaser: "",
    });

  const [selectCategoriesArray, setSelectCategoriesArray] = useState<
    categoriesInformationProps[]
  >([
    {
      categoriesDisplay: { value: "0", name: "displayCategorie" },
      subCategoriesDisplay: { value: "0", name: "displaySubCategorie" },
      interiorSubCategorie: { value: "0", name: "displayInteriorSubCategorie" },
    },
  ]);

  const [packagesTemplatesDo, setPackagesTemplatesDo] = useState<
    templatesDisplayOptionsCUProps[]
  >([]);

  const hanndleChangeGeneralManage = (event: ChangeEvent<HTMLInputElement>) => {
    setGeneralManageComponent({
      ...generalManageComponent,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeCategoriesSelect = (
    event: SelectChangeEvent,
    index: number
  ) => {
    let stateCategoriesArray = [...selectCategoriesArray];
    const nameEvent = event.target.name;
    const valueEvent = event.target.value;
    const nameCategorie = stateCategoriesArray[index].categoriesDisplay.name;
    const nameSubCategorie =
      stateCategoriesArray[index].subCategoriesDisplay.name;

    if (nameEvent === nameCategorie) {
      stateCategoriesArray[index].categoriesDisplay.value = valueEvent;
    } else if (nameEvent === nameSubCategorie) {
      stateCategoriesArray[index].subCategoriesDisplay.value = valueEvent;
    } else {
      stateCategoriesArray[index].interiorSubCategorie.value = valueEvent;
    }
    setSelectCategoriesArray(stateCategoriesArray);
  };

  const onChangePackageTemplate = (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent,
    index: number
  ) => {
    let stateArrayTemplates = [...packagesTemplatesDo];
    const templateName = event.target.name;
    const templateValue = event.target.value;
    const nameSelectTemplate = stateArrayTemplates[index].selectTemplateDo.name;
    if (templateName === nameSelectTemplate) {
      stateArrayTemplates[index].selectTemplateDo.value = templateValue;
    } else {
      stateArrayTemplates[index].dateTemplateDo.value = templateValue;
    }
    setPackagesTemplatesDo(stateArrayTemplates);
  };

  const onChangeChekedComments = (value: ChangeEvent<HTMLInputElement>) => {
    const nameChekBox = value.target.name;
    const valueCheckBox = value.target.checked;
    setCheckBoxesDisplayOptionsCU({
      ...checkBoxesDisplayOptionsCU,
      [nameChekBox]: valueCheckBox,
    });
  };

  const newCategorieToDisplayOptions = () => {
    let categoriesArray = [...selectCategoriesArray];
    const categorie: categoriesInformationProps = {
      categoriesDisplay: { value: "0", name: "displayCategorie" },
      subCategoriesDisplay: { value: "0", name: "displaySubCategorie" },
      interiorSubCategorie: { value: "0", name: "displayInteriorSubCategorie" },
    };
    categoriesArray.push(categorie);
    setSelectCategoriesArray(categoriesArray);
  };

  const newPackageTemplate = () => {
    let arrayTemplate = [...packagesTemplatesDo];
    const newTemplate: templatesDisplayOptionsCUProps = {
      dateTemplateDo: { name: "datePackageTemplate", value: "" },
      selectTemplateDo: { name: "selectPackageTemplate", value: "0" },
    };
    arrayTemplate.push(newTemplate);
    setPackagesTemplatesDo(arrayTemplate);
  };

  const deleteItemFromCategories = (index: number) => {
    let arrayCategories = [...selectCategoriesArray];
    arrayCategories.splice(index, 1);
    setSelectCategoriesArray(arrayCategories);
  };

  const onChangeRadioBtnDisplayItems = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setRadiosButtonDoObjects({
      ...radiosButtonDoObjects,
      [event.target.name]: event.target.value,
    });
  };

  const deleteItemPackageTemplate = (index: number) => {
    let arrayTemplates = [...packagesTemplatesDo];
    arrayTemplates.splice(index, 1);
    setPackagesTemplatesDo(arrayTemplates);
  };

  return (
    <Container
      disableGutters={true}
      maxWidth="xl"
      sx={StylesCU.fatherContainerCrud}
    >
      <Box sx={StylesCU.boxChildCrudContent}>
        <Box sx={StylesCU.boxCUdTitle}>
          <Typography sx={StylesCU.styledTitleViewCU}>CP EDIT POST</Typography>
          <Link to={ROUTES.CMS_CONTENT}>
            <IconButton>
              <CloseOutlinedIcon sx={{ color: "white", fontSize: 28 }} />
            </IconButton>
          </Link>
        </Box>
        <Box sx={{ width: "100%" }}>
          <GeneralManageCU
            generalManageInformation={generalManageComponent}
            handleChangeFieldManage={hanndleChangeGeneralManage}
          />
          <DisplayOptionsCU
            arrayCategoriesInformation={selectCategoriesArray}
            onChangeCategories={onChangeCategoriesSelect}
            onChangeCheckedComments={onChangeChekedComments}
            addNewCategorieDisplay={newCategorieToDisplayOptions}
            deleteItemFromCategoriesArray={deleteItemFromCategories}
            radiosButtonDisplayOptions={radiosButtonDoObjects}
            checkBoxsDisplayOptions={checkBoxesDisplayOptionsCU}
            onChangeRadioButtonItemsDisplay={onChangeRadioBtnDisplayItems}
            arrayPackageTemplates={packagesTemplatesDo}
            addNewPackageTemplate={newPackageTemplate}
            deleteItemFromPackagesTemplate={deleteItemPackageTemplate}
            onChangeTemplates={onChangePackageTemplate}
            key={'crudManageContent'}
          />
          <Box sx={StylesCU.boxBtnSubmitManage}>
            <Button sx={StylesCU.btnButtonsSubmit} variant="contained">
              Submit
            </Button>
            <Button
              sx={{ ...StylesCU.btnButtonsSubmit, marginLeft: "1rem" }}
              variant="contained"
            >
              Save & view
            </Button>
            <Box sx={{ marginTop: "1rem" }}>
              <Link
                to={ROUTES.CMS_CONTENT}
                style={{
                  color: "crimson",
                  marginLeft: "1rem",
                  textAlign: "center",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                Cancel
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
