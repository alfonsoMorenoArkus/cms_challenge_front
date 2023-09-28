import { Slice, createSlice } from "@reduxjs/toolkit";
import {
  setCmsContentConfiguration,
  cleanCmsContentConfiguration,
} from "./manageContentActions";

export const initialStateCms = {
  contentToShowCMS: [],
};

export const cmsContentSlice: Slice = createSlice({
  name: "cmsContentManage",
  initialState: initialStateCms,
  reducers: {
    setCmsContentConfiguration,
    cleanCmsContentConfiguration,
  },
});

export const cmsContentMangeReducer = cmsContentSlice.reducer;
