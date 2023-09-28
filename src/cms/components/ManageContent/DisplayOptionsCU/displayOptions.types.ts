import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";

export interface valuesCategoriesTemplates {
  value: string;
  name: string;
}

export interface categoriesInformationProps {
  categoriesDisplay: valuesCategoriesTemplates;
  interiorSubCategorie: valuesCategoriesTemplates;
  subCategoriesDisplay: valuesCategoriesTemplates;
}

export interface templatesDisplayOptionsCUProps {
  selectTemplateDo: valuesCategoriesTemplates;
  dateTemplateDo: valuesCategoriesTemplates;
}

export interface allCategoriesInformationProps {
  arrayCategoriesInformation: categoriesInformationProps[];
}

export interface radiosButtonsDOProps {
  radioButtonDisplayItem?: string;
  radioButtonFeatureHomePage?: string;
  radioButtonFeatureLandingPage?: string;
  radioButtonPostType?: string;
}

export interface checkBoxesDisplayOptionsProps {
  showComment?: boolean;
  noNewComments?: boolean;
  unlockedPost?: boolean;
  enableMLSSearch?: boolean;
  packageTemplate?: boolean;
}

export interface displayOptionsProps {
  checkBoxsDisplayOptions: checkBoxesDisplayOptionsProps;
  arrayCategoriesInformation: categoriesInformationProps[];
  arrayPackageTemplates?: templatesDisplayOptionsCUProps[];
  radiosButtonDisplayOptions: radiosButtonsDOProps;
  onChangeCategories: (value: SelectChangeEvent, index: number) => void;
  onChangeTemplates: (value: SelectChangeEvent | ChangeEvent<HTMLInputElement>, index: number) => void;
  onChangeCheckedComments: (value: ChangeEvent<HTMLInputElement>) => void;
  onChangeRadioButtonItemsDisplay: (
    value: ChangeEvent<HTMLInputElement>
  ) => void;
  addNewCategorieDisplay: () => void;
  addNewPackageTemplate: () => void;
  deleteItemFromCategoriesArray: (index: number) => void;
  deleteItemFromPackagesTemplate: (index: number) => void;
}
