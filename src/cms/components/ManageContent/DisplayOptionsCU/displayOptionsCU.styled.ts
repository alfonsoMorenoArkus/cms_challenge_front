import { StylesObj } from "../../../StyledMUI";

export const Styles: StylesObj = {
  boxDisplayOptions: {
    width: "95%",
    height: "100%",
    margin: 3,
  },
  rotateDown: {
    transform: "rotate(180deg)",
  },
  rotateUp: {
    transform: null,
  },
  boxTitleDisplayMenuCollapsed: {
    width: "100%",
    height: "30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "gray",
  },
  boxDisplayOptionsOpen: {
    width: "100%",
    height: "500px",
    transition: "all 0.5s",
    overflow: "auto",
    marginTop: "10px",
  },
  boxDisplayOptionsClose: {
    width: "100%",
    height: 0,
    transition: "all 0.5s",
    overflow: "hidden",
  },
  textCommentsShow: {
    fontSize: 15,
    color: "gray",
  },
  boxCheckBoxComments: {
    width: "100%",
    borderBottom: "2px solid #c2c0c4",
    borderBottomStyle: "dotted",
  },
  showComments: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  boxDisplayCategories: {
    width: "100%",
    marginTop: "1rem",
  },
  selectFilterContains: {
    width: "20%",
  },
  btnAddCategory: {
    backgroundColor: "white",
    color: "black",
    marginTop: "1rem",
    marginBottom: "15px",
  },
  boxLabelsCategories: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  boxRadioButtonsDisplayOptions: {
    widht: "100%",
    marginTop: "1rem",
  },
  boxRadioButtonsFeaturedItem: {
    width: "100%",
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  boxCheckBoxMlsTemplate: {
    width: "35%",
    display: "flex",
    flexDirection: "column",
  },
  boxAddNewTemplate: {
    width: "100%",
    marginTop: "10px",
  },
  btnAddTemplate: {
    backgroundColor: "white",
    color: "black",
  },
  boxNewFieldsTemplate: {
    width: "100%",
    marginTop: '10px'
  },
  selectNewTemplate: {
    width: "40%",
  },
  boxRadioBtnPostType:{
    width: '100%',
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
};
