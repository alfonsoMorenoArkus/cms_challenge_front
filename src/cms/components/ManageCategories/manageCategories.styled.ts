import { StylesObj } from "../../StyledMUI";

export const Styles: StylesObj = {
  fatherContainerCategories: {
    width: "100%",
    display: "flex",
  },
  childContainerCategories: {
    margin: 3,
    width: "95%",
  },
  boxTitleViewCategories: {
    width: "100%",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    border: "1px solid #c6c4c9",
    color: "white",
  },
  boxChildFiltersCategories: {
    width: "100%",
    height: "100px",
    backgroundColor: "#e9e7eb",
    border: "1px solid #c2c0c4",
    display: "flex",
    flexDirection: "row",
  },
  boxFilterCategorie: {
    width: "80%",
    height: "100%",
    borderRight: "5px solid gray",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  boxNewCategorie: {
    width: "20%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column'
  },
  textFieldFilterCategorie: {
    width: "20%",
    marginLeft: "1.5rem",
  },
  btnGoTitleCategorie: {
    marginTop: "2px",
    backgroundColor: "white",
    color: "black",
    marginLeft: "1.5rem",
    height: "2.3rem",
    "&:hover": {
      backgroundColor: "gray",
    },
  },
  btnResetFilterCategorie: {
    marginTop: "2px",
    backgroundColor: "white",
    color: "black",
    marginLeft: "1.5rem",
    height: "2.3rem",
    "&:hover": {
      backgroundColor: "gray",
    },
  },
  btnClearCache: {
    marginTop: "2px",
    backgroundColor: "white",
    color: "black",
    marginLeft: "1.5rem",
    height: "2.3rem",
    "&:hover": {
      backgroundColor: "gray",
    },
  },
  selectFilterContains: {
    width: "20%",
    marginLeft: "1.5rem",
  },
  // Styles to table categories
  boxTableCategories:{
    width: '100%',
    border: "1px solid #c2c0c4",

  }
};
