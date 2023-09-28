import { ChangeEvent } from "react";

export interface generalManageFields {
  titleGeneral: string;
  prettyUrl?: string;
  subTitleGeneral?: string;
  headLine?: string;
  author?: string;
  documentDate?: string;
  teaser?: string;
}

export interface generalManageCUProps {
  generalManageInformation: generalManageFields;
  handleChangeFieldManage: (event: ChangeEvent<HTMLInputElement>) => void;
}
