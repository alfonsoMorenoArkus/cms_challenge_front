import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  OutlinedInput,
  IconButton,
} from "@mui/material";

import { ChangeEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { OPTIONS_FILTER_CONTENT_BY } from "../../ManageContent";
import { Styles } from "../manageCategories.styled";
import { manageCategoriesCUProps } from "./manageCategoriesCU.types";
import * as ROUTES from "../../../routes";

export const ManageCategoriesCU = ({
  flagSubInteriorCategory,
  checkBoxesViewCategory,
  onChangeCheckBoxSubInterorCategory,
  onChangeTextFieldSubInteriorCategoy,
  textFieldsCrudCategories,
  onChangeInputFileCategory,
  submitBtnCrudCategorie,
}: manageCategoriesCUProps) => {
  const [openLandingPageCeo, setOpenLandingPageCeo] = useState<boolean>(true);
  const refInputThumbnail = useRef<HTMLInputElement>(null);

  const onInputThumnailClick = (event: any) => {
    event.target.value = "";
  };

  const clickUploadThumbnail = () => {
    refInputThumbnail.current?.click();
  };

  const closeOpenBoxLandingPageCeo = () => {
    setOpenLandingPageCeo(!openLandingPageCeo);
  };

  const onChangeFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files){
      const fileInput = event.target.files[0];
      onChangeInputFileCategory(fileInput)
    }
  }

  return (
    <Box sx={Styles.boxSubCategorieCu}>
      <Box sx={Styles.boxSelectSubCategorieCu}>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <Box sx={{ width: "20%" }}>
            <Typography sx={{ fontWeight: 600 }}>
              Select category{" "}
              <span style={{ color: "red", fontSize: 19 }}>*</span>
            </Typography>
            <FormControl
              sx={{
                width: "100%",
              }}
            >
              <Select
                sx={{ height: "40px", width: "100%" }}
                value={textFieldsCrudCategories.categoryId}
                onChange={onChangeTextFieldSubInteriorCategoy}
                name={"categoryId"}
              >
                {OPTIONS_FILTER_CONTENT_BY.map((val: any) => (
                  <MenuItem key={val.id} value={val.value}>
                    {val.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {!flagSubInteriorCategory ? (
            <Box sx={{ width: "50%" }}>
              <Typography sx={{ fontWeight: 600, marginLeft: "1rem" }}>
                Select Sub-Category{" "}
                <span style={{ color: "red", fontSize: 19 }}>*</span>
              </Typography>
              <FormControl
                sx={{
                  width: "50%",
                  marginLeft: "1rem",
                }}
              >
                <Select
                  sx={{ height: "40px", width: "100%" }}
                  value={textFieldsCrudCategories.SubCategory}
                  onChange={onChangeTextFieldSubInteriorCategoy}
                  name={"SubCategory"}
                >
                  {OPTIONS_FILTER_CONTENT_BY.map((val: any) => (
                    <MenuItem key={val.id} value={val.value}>
                      {val.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          ) : (
            <></>
          )}
        </Box>
        {!flagSubInteriorCategory ? (
          <></>
        ) : (
          <Box
            sx={{
              width: "100%",
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkBoxesViewCategory?.featuredHeader}
                  name="featuredHeader"
                  onChange={onChangeCheckBoxSubInterorCategory}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Featured in header and footer"
            />
            <FormControlLabel
              sx={{ marginLeft: "2rem" }}
              control={
                <Checkbox
                  checked={false}
                  name="featuredBannerIcons"
                  onChange={() => {}}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Featured in the banner icons section"
            />
            <FormControlLabel
              sx={{ marginLeft: "2rem" }}
              control={
                <Checkbox
                  checked={false}
                  name="featuredTilesSection"
                  onChange={() => {}}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Featured in the tiles section"
            />
          </Box>
        )}
        {flagSubInteriorCategory ? (
          <Box sx={{ width: "100%", marginTop: "10px" }}>
            <Button
              sx={{ backgroundColor: "white", color: "black" }}
              variant="contained"
            >
              Choose category icon
            </Button>
          </Box>
        ) : (
          <></>
        )}
        <Box sx={{ width: "100%", marginTop: "1rem" }}>
          <Typography sx={{ fontWeight: 600 }}>
            Name <span style={{ color: "red", fontSize: 19 }}>*</span>
          </Typography>
          <TextField
            sx={{ width: "40%" }}
            type="text"
            variant="outlined"
            value={textFieldsCrudCategories.nameCategory}
            name={"nameCategory"}
            onChange={(event) => onChangeTextFieldSubInteriorCategoy(event)}
            inputProps={{
              style: {
                height: "7px",
              },
            }}
          />
        </Box>
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkBoxesViewCategory?.externarUrl}
                name="externarUrl"
                onChange={onChangeCheckBoxSubInterorCategory}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Use External URL"
          />
        </Box>
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <Typography sx={{ fontWeight: 600 }}>
            Select Thumbnail{" "}
            <span
              style={{
                fontWeight: "normal",
                fontSize: 15,
                color: "gray",
                marginLeft: "10px",
              }}
            >
              {" "}
              Thumbnail is only used on category landing pages
            </span>
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "280px" }}>
          <Box sx={Styles.boxSelectThumbnailCategorieIcon}>
            <AddCircleOutlineIcon
              sx={{
                fontSize: 30,
                color: "green",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={clickUploadThumbnail}
            />
            <OutlinedInput
              type="file"
              inputProps={{
                hidden: true,
              }}
              inputRef={refInputThumbnail}
              sx={{ display: "none" }}
              onChange={onChangeFileInput}
              onClick={onInputThumnailClick}
            />
          </Box>
          <Box sx={Styles.boxSelectThumbnailCategorieImage}>
            <Typography
              sx={{
                fontSize: 32,
                color: "#999892",
                fontWeight: 600,
                width: "100%",
                textAlign: "center",
              }}
            >
              NO IMAGE SELECTED
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            marginTop: "1rem",
            height: "220px",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            Main Category Landing Page Description
          </Typography>
          <Box sx={Styles.boxLandingPageLine}>
            <Box sx={Styles.boxCodeCatLandingPage}>
              <Box sx={Styles.boxIconsLandingPage}></Box>
              <Box sx={Styles.boxTextCodeLandingPage}>
                <TextField
                  sx={{ width: "100%" }}
                  value={
                    textFieldsCrudCategories.mainsubCategoryLandingDescription
                  }
                  name="mainsubCategoryLandingDescription"
                  onChange={onChangeTextFieldSubInteriorCategoy}
                  multiline
                  rows={6}
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box sx={Styles.boxIconUpDown}>
              <Box sx={Styles.iconsUpDownPageDescription}>
                <IconButton>
                  <ArrowDropUpIcon sx={{ fontSize: 35 }} />
                </IconButton>
                <IconButton>
                  <ArrowDropDownIcon sx={{ fontSize: 35 }} />
                </IconButton>
              </Box>
            </Box>
            <Box sx={Styles.boxPreviewCatLandingPage}>
              <Box
                sx={{
                  width: "100%",
                  height: "22%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Preview</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "78%",
                  backgroundColor: "white",
                  border: "1px solid #c2c0c4",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "70px",
            marginTop: "3rem",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            Sub-Category Landing Page Headline
          </Typography>
          <TextField
            sx={{ width: "100%", backgroundColor: "white" }}
            type="text"
            variant="outlined"
            value={textFieldsCrudCategories.subCategoryLandingHeadline}
            name={"subCategoryLandingHeadline"}
            onChange={onChangeTextFieldSubInteriorCategoy}
            inputProps={{
              style: {
                height: "7px",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            marginTop: "1rem",
            height: "220px",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            Sub Category Landing Page Headline
          </Typography>
          <Box sx={Styles.boxLandingPageLine}>
            <Box sx={Styles.boxCodeCatLandingPage}>
              <Box sx={Styles.boxIconsLandingPage}></Box>
              <Box sx={Styles.boxTextCodeLandingPage}>
                <TextField
                  sx={{ width: "100%" }}
                  value={textFieldsCrudCategories.subCategoryLandingDescription}
                  name="subCategoryLandingDescription"
                  onChange={onChangeTextFieldSubInteriorCategoy}
                  multiline
                  rows={6}
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box sx={Styles.boxIconUpDown}>
              <Box sx={Styles.iconsUpDownPageDescription}>
                <IconButton>
                  <ArrowDropUpIcon sx={{ fontSize: 35 }} />
                </IconButton>
                <IconButton>
                  <ArrowDropDownIcon sx={{ fontSize: 35 }} />
                </IconButton>
              </Box>
            </Box>
            <Box sx={Styles.boxPreviewCatLandingPage}>
              <Box
                sx={{
                  width: "100%",
                  height: "22%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Preview</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "78%",
                  backgroundColor: "white",
                  border: "1px solid #c2c0c4",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
        <Box sx={Styles.boxTitleLandingPageMenuCollapsed}>
          <IconButton
            sx={openLandingPageCeo ? Styles.rotateDown : Styles.rotateUp}
            onClick={closeOpenBoxLandingPageCeo}
          >
            <ArrowDropDownIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Typography sx={{ color: "white", fontWeight: 600 }}>
            LANDING PAGE SEO (OPTIONAL)
          </Typography>
        </Box>
        <Box
          sx={
            openLandingPageCeo
              ? Styles.boxPageLadingSeoOpen
              : Styles.boxPageLadingSeoClose
          }
        >
          <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <Box sx={{ width: "50%" }}>
              <Typography sx={{ fontWeight: 600 }}>Title</Typography>
              <TextField
                sx={{ width: "93%", backgroundColor: "white" }}
                type="text"
                variant="outlined"
                value={textFieldsCrudCategories.titleLandingPageSeo}
                name={"titleLandingPageSeo"}
                onChange={onChangeTextFieldSubInteriorCategoy}
                inputProps={{
                  style: {
                    height: "7px",
                  },
                }}
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography sx={{ fontWeight: 600 }}>Pretty Url</Typography>
              <TextField
                sx={{ width: "100%", backgroundColor: "white" }}
                type="text"
                variant="outlined"
                value={textFieldsCrudCategories.pretyUrlLandingSeo}
                name={"pretyUrlLandingSeo"}
                onChange={onChangeTextFieldSubInteriorCategoy}
                inputProps={{
                  style: {
                    height: "7px",
                  },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              marginTop: "1rem",
              borderBottom: "2px solid #c2c0c4",
              borderBottomStyle: "dotted",
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>
              Description Metadata
            </Typography>
            <TextField
              sx={{
                width: "100%",
                backgroundColor: "white",
                marginBottom: "2rem",
              }}
              value={textFieldsCrudCategories.landingDescriptionMetaData}
              name="landingDescriptionMetaData"
              onChange={onChangeTextFieldSubInteriorCategoy}
              multiline
              rows={6}
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "60px",
              borderBottom: "5px solid gray",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkBoxesViewCategory?.activeCategory}
                  name="activeCategory"
                  onChange={onChangeCheckBoxSubInterorCategory}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Active"
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "70px",
          marginTop: "15px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
          onClick={submitBtnCrudCategorie}
          variant="contained"
        >
          Submit
        </Button>
        <Link
          to={ROUTES.CMS_CATEGORIES}
          style={{
            color: "crimson",
            marginLeft: "2rem",
            textAlign: "center",
            fontSize: 17,
            fontWeight: 600,
          }}
        >
          Cancel
        </Link>
      </Box>
    </Box>
  );
};
