import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Select,
  Typography,
  Box,
  TextField,
  FormControl,
  MenuItem,
  Link as LinkMui,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { GenericTable } from "../../baseComponents/genericTable";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { categoriesTypes, filterContainFields } from "./manageContent.types";
import { RootState } from "../../store";
import { Styles } from "./manageContent.styled";
import {
  HEADER_TABLE,
  OPTIONS_FILTER_CONTENT,
  OPTIONS_FILTER_CONTENT_BY,
  BODY_TABLE,
} from "./manageContent.const";

export const ManageContent = () => {
  const [contentManageIdsRows, setContentManageIdsRows] = useState<string[]>(
    []
  );
  const [selectFilterContentBy, setSelectFilterContentBy] =
    useState<string>("0");
  const [selectFilterContent, setSelectFilterContent] = useState<string>("0");
  const [selectsCategoriesFilter, setSelectsCategoriesFilter] =
    useState<categoriesTypes>({
      categorie: "0",
      subCategorie: "0",
      interiorSubCategorie: "0",
    });
  const [filterContainContent, setFilterContainContent] =
    useState<filterContainFields>({
      filterContainBy: "",
      searchByTitleFilter: "",
    });

  const cmsManage = useSelector(
    (state: RootState) => state.cmsContentManage.contentToShowCMS
  );

  const checkBoxFromTable = (values: any) => {
    setContentManageIdsRows(values);
  };

  const handleChangeSelectFilterBy = (event: SelectChangeEvent) => {
    setSelectFilterContentBy(event.target.value);
  };

  const handleChangeSelectFilterContent = (event: SelectChangeEvent) => {
    setSelectFilterContent(event.target.value);
  };

  const handleChangeSelectCategoriesFilter = (event: SelectChangeEvent) => {
    setSelectsCategoriesFilter({
      ...selectsCategoriesFilter,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeFilterContain = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterContainContent({
      ...filterContainContent,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container
      disableGutters={true}
      maxWidth="xl"
      sx={Styles.fatherContainerManage}
    >
      <Box sx={Styles.childContainerManContent}>
        <Box sx={Styles.boxTitleView}>
          <Typography sx={Styles.styledTitleView}>MANAGE CONTENT</Typography>
        </Box>
        <Box sx={Styles.boxFiltersFields}>
          <Box sx={Styles.boxFiltersFieldSectionOne}>
            <Box sx={Styles.boxChildFilterFieldsOne}>
              <Box sx={Styles.boxFilterContainsSectionOne}>
                <Typography>Filter by: </Typography>
                <FormControl sx={Styles.selectFilterContains}>
                  <Select
                    sx={{ height: "40px", width: "100%" }}
                    value={selectFilterContentBy}
                    onChange={handleChangeSelectFilterBy}
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
                  sx={Styles.textFieldFilterContain}
                  name="filterContainBy"
                  type="text"
                  variant="outlined"
                  inputProps={{
                    style: {
                      height: "7px",
                    },
                  }}
                  value={filterContainContent.filterContainBy}
                  onChange={handleChangeFilterContain}
                />

                <FormControl sx={Styles.selectFilterContains}>
                  <Select
                    sx={{ height: "40px", width: "100%" }}
                    value={selectFilterContent}
                    onChange={handleChangeSelectFilterContent}
                    name="selectFilterContent"
                  >
                    {OPTIONS_FILTER_CONTENT.map((val: any) => (
                      <MenuItem key={val.id} value={val.value}>
                        {val.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={Styles.boxFilterContainsSectionTwo}>
                <FormControl sx={Styles.selectFilterCategory}>
                  <Select
                    sx={{ height: "40px", width: "100%" }}
                    value={selectsCategoriesFilter.categorie}
                    onChange={handleChangeSelectCategoriesFilter}
                    name="categorie"
                  >
                    <MenuItem value={"0"}>Category...</MenuItem>
                    <MenuItem value={"1"}>one</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={Styles.selectFilterCategoryShort}>
                  <Select
                    onChange={handleChangeSelectCategoriesFilter}
                    sx={{ height: "40px", width: "100%" }}
                    value={selectsCategoriesFilter.subCategorie}
                    name="subCategorie"
                    disabled={
                      selectsCategoriesFilter.categorie !== "0" ? false : true
                    }
                  >
                    <MenuItem value={"0"}>Sub category...</MenuItem>
                    <MenuItem value={"3"}>Two</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={Styles.selectFilterCategory}>
                  <Select
                    onChange={handleChangeSelectCategoriesFilter}
                    sx={{ height: "40px", width: "100%" }}
                    value={selectsCategoriesFilter.interiorSubCategorie}
                    name="interiorSubCategorie"
                    disabled={
                      selectsCategoriesFilter.subCategorie !== "0" &&
                      selectsCategoriesFilter.categorie !== "0"
                        ? false
                        : true
                    }
                  >
                    <MenuItem value={"0"}>Interior sub-category...</MenuItem>
                    <MenuItem value={"4"}>three</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={Styles.boxNewContent}>
              <AddCircleOutlineIcon
                sx={{ fontSize: "30px", color: "green", marginRight: "10px" }}
              />
              <Link
                to={"/cms-content/add-update"}
                style={{ textDecoration: "none", color: "black" }}
              >
                New Content
              </Link>
            </Box>
          </Box>
          <Box sx={Styles.boxFiltersFieldSectionTwo}>
            <Box sx={Styles.boxSeargByTitle}>
              <TextField
                sx={Styles.textFieldFilterTitle}
                type="text"
                name="searchByTitleFilter"
                placeholder="Search by Title..."
                variant="outlined"
                inputProps={{
                  style: {
                    height: "7px",
                  },
                }}
                value={filterContainContent.searchByTitleFilter}
                onChange={handleChangeFilterContain}
              />
              <Button sx={Styles.btnGoTitle} variant="contained">
                Go
              </Button>
              <Button sx={Styles.btnResetFilters} variant="contained">
                Reset
              </Button>
            </Box>
            <Box sx={Styles.boxDownloadActions}>
              <Button sx={Styles.btnDownloadReport} variant="contained">
                Download content report
              </Button>
              <LinkMui
                underline="hover"
                sx={{ cursor: "pointer", color: "black", marginLeft: "1.5rem" }}
              >
                Re-order Mobile Trending
              </LinkMui>
              <LinkMui
                underline="hover"
                sx={{
                  cursor: "pointer",
                  color: "black",
                  marginLeft: "1.5rem",
                  marginRight: "1.5rem",
                }}
              >
                Re-order Trending
              </LinkMui>
            </Box>
          </Box>
        </Box>
        <Box sx={Styles.boxBtnActionsTable}>
          <Button
            disabled={contentManageIdsRows.length === 1 ? false : true}
            variant="outlined"
            sx={Styles.btnActionsButtonsTable}
          >
            edit
          </Button>
          <Button
            variant="outlined"
            disabled={contentManageIdsRows.length === 1 ? false : true}
            sx={{ ...Styles.btnActionsButtonsTable, marginLeft: "15px" }}
          >
            update
          </Button>
          <Button
            variant="outlined"
            sx={{
              ...Styles.btnActionsButtonsTable,
              marginLeft: "15px",
              marginRight: "10px",
            }}
            disabled={contentManageIdsRows.length > 0 ? false : true}
          >
            unlocked
          </Button>
          <Button
            variant="outlined"
            sx={{
              ...Styles.btnActionsButtonsTable,
              marginLeft: "10px",
              marginRight: "10px",
            }}
            disabled={contentManageIdsRows.length > 0 ? false : true}
          >
            Delete
          </Button>
        </Box>
        <Box sx={Styles.boxGenericTable}>
          <GenericTable
            columnsTable={HEADER_TABLE}
            dataBody={BODY_TABLE}
            selectionModelChangeTable={checkBoxFromTable}
            selectionsModelIds={contentManageIdsRows}
          />
        </Box>
      </Box>
    </Container>
  );
};
