import React from "react";
import {
  Box,
  Container,
  Typography,
  Select,
  TextField,
  Button,
  FormControl,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { TableCategories } from "../../baseComponents/TableCategories";
import { OPTIONS_FILTER_CONTENT_BY } from "../ManageContent";
import { categoriesBodyList } from "./manageCategories.const";
import * as ROUTES from "../../routes";

import { Styles } from "./manageCategories.styled";
export const ManageCategories = () => {
  return (
    <Container
      disableGutters={true}
      maxWidth="xl"
      sx={Styles.fatherContainerCategories}
    >
      <Box sx={Styles.childContainerCategories}>
        <Box sx={Styles.boxTitleViewCategories}>
          <Typography sx={Styles.styledTitleView}>
            MANAGE CONTENT CATEGORIES
          </Typography>
        </Box>
        <Box sx={Styles.boxChildFiltersCategories}>
          <Box sx={Styles.boxFilterCategorie}>
            <Typography>Filter by: </Typography>
            <FormControl sx={Styles.selectFilterContains}>
              <Select
                sx={{ height: "40px", width: "100%" }}
                value={"0"}
                onChange={() => {}}
                name="selectFilterContentBy"
              >
                {OPTIONS_FILTER_CONTENT_BY.map((val: any) => (
                  <MenuItem key={val.id} value={val.value}>
                    {val.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              sx={Styles.textFieldFilterCategorie}
              type="text"
              placeholder="Search by Name:"
              variant="outlined"
              inputProps={{
                style: {
                  height: "7px",
                },
              }}
              value={""}
              onChange={() => {}}
            />
            <Button sx={Styles.btnGoTitleCategorie} variant="contained">
              Go
            </Button>
            <Button sx={Styles.btnResetFilterCategorie} variant="contained">
              Reset
            </Button>
            <Button sx={Styles.btnClearCache} variant="contained">
              Clear Header Cache
            </Button>
          </Box>
          <Box sx={Styles.boxNewCategorie}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                marginLeft: "1rem",
              }}
            >
              <AddCircleOutlineIcon
                sx={{ fontSize: "30px", color: "green", marginRight: "10px" }}
              />
              <Link
                to={ROUTES.CMS_NEW_SUB_CATEGORY}
                style={{ textDecoration: "none", color: "black" }}
              >
                New Sub-Category
              </Link>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                marginLeft: "1rem",
                marginTop: "10px",
              }}
            >
              <AddCircleOutlineIcon
                sx={{ fontSize: "30px", color: "green", marginRight: "10px" }}
              />
              <Link
                to={ROUTES.CMS_NEW_INTERIOR_SUB_CATEGORY}
                style={{ textDecoration: "none", color: "black" }}
              >
                New Interior Sub-Category
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={Styles.boxTableCategories}>
          <TableCategories
            categoriesInformation={categoriesBodyList.categoriesInformation}
          />
        </Box>
      </Box>
    </Container>
  );
};
