import type { PayloadAction } from "@reduxjs/toolkit";
import { cmsArrayContent } from "./manageContent.types";

export const setCmsContentConfiguration = (
  state: cmsArrayContent | any,
  actions: PayloadAction<cmsArrayContent>
) => {
    state.contentToShowCMS = actions.payload
};

export const cleanCmsContentConfiguration = (state: any) => {
    state.contentToShowCMS = [];
}


