import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";

export interface checkBoxesCrudSubInteriorCategory {
  featuredHeader?: boolean;
  featuredBanner?: boolean;
  featuredTiles?: boolean;
  activeCategory?: boolean;
  externarUrl?: boolean;
}

export interface textFieldCrudSubInterirCategory {
  nameCategory: string;
  categoryId: string;
  SubCategory: string;
  subCategoryLandingHeadline?: string;
  mainsubCategoryLandingDescription?: string;
  subCategoryLandingDescription?: string;
  titleLandingPageSeo?: string;
  pretyUrlLandingSeo?: string;
  landingDescriptionMetaData?: string;
}

export interface manageCategoriesCUProps {
  flagSubInteriorCategory: boolean;
  onChangeTextFieldSubInteriorCategoy: (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => void;
  onChangeCheckBoxSubInterorCategory: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  onChangeInputFileCategory: (file: Blob) => void;
  checkBoxesViewCategory?: checkBoxesCrudSubInteriorCategory;
  textFieldsCrudCategories: textFieldCrudSubInterirCategory;
  imageFileThumbnail?: Blob | any;
  submitBtnCrudCategorie: () => void;
}
