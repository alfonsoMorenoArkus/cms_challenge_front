import { StylesObj } from "../../../StyledMUI";

export const StylesGM: StylesObj = {
  boxGeneralManage: {
    width: "95%",
    height: "100%",
    margin: 3,
  },
  textFieldFilterContain: {
    width: "100%",
  },
  dateFieldFilterContain: {
    width: "15%",
  },
  boxTitleMenuCollapsed: {
    width: "100%",
    height: "30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "gray",
  },
  rotateDown: {
    transform: "rotate(180deg)",
  },
  rotateUp: {
    transform: null,
  },
  boxOptionsGeneralOpen: {
    width: "100%",
    height: "460px",
    transition: "all 0.5s",
    overflow: "auto",
    marginTop: "10px",
  },
  boxOptionsGeneralClose: {
    width: "100%",
    height: 0,
    transition: "all 0.5s",
    overflow: "hidden",
  },
};
