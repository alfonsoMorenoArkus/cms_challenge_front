import { ChangeEvent, useState } from "react";
import {
  Box,
  Checkbox,
  IconButton,
  Typography,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
  RadioGroup,
  Radio,
  TextField,
} from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Styles } from "./displayOptionsCU.styled";

import { OPTIONS_FILTER_CONTENT_BY } from "../manageContent.const";
import { displayOptionsProps } from "./displayOptions.types";

export const DisplayOptionsCU = ({
  arrayCategoriesInformation,
  checkBoxsDisplayOptions,
  onChangeCategories,
  onChangeCheckedComments,
  onChangeTemplates,
  addNewCategorieDisplay,
  deleteItemFromCategoriesArray,
  radiosButtonDisplayOptions,
  onChangeRadioButtonItemsDisplay,
  arrayPackageTemplates,
  addNewPackageTemplate,
  deleteItemFromPackagesTemplate,
}: displayOptionsProps) => {
  const [openOptionsDisplay, setOpenOptionsDisplay] = useState<boolean>(true);

  const closeOpenBoxDisplayOptions = () => {
    setOpenOptionsDisplay(!openOptionsDisplay);
  };

  const showSelectsCategories = () => {
    return arrayCategoriesInformation.map((val: any, index: number) => (
      <Box
        key={"selectCategoriesNum" + index}
        sx={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        <FormControl
          sx={{
            ...Styles.selectFilterContains,
            marginTop: index !== 0 ? "15px" : "",
          }}
        >
          <Select
            key={val.categoriesDisplay.name + index}
            sx={{ height: "40px", width: "100%" }}
            value={val.categoriesDisplay.value}
            onChange={(event) => onChangeCategories(event, index)}
            name={val.categoriesDisplay.name}
          >
            {OPTIONS_FILTER_CONTENT_BY.map((val: any) => (
              <MenuItem key={val.id} value={val.value}>
                {val.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{
            ...Styles.selectFilterContains,
            marginLeft: "1.5rem",
            marginTop: index !== 0 ? "15px" : "",
          }}
        >
          <Select
            key={val.subCategoriesDisplay.name + index}
            sx={{ height: "40px", width: "100%" }}
            value={val.subCategoriesDisplay.value}
            onChange={(event) => onChangeCategories(event, index)}
            name={val.subCategoriesDisplay.name}
            disabled={val.categoriesDisplay.value !== "0" ? false : true}
          >
            {OPTIONS_FILTER_CONTENT_BY.map((val: any) => (
              <MenuItem key={val.id} value={val.value}>
                {val.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{
            ...Styles.selectFilterContains,
            marginLeft: "1.5rem",
            marginTop: index !== 0 ? "15px" : "",
          }}
        >
          <Select
            key={val.interiorSubCategorie.name + index}
            sx={{ height: "40px", width: "100%" }}
            value={val.interiorSubCategorie.value}
            onChange={(event) => onChangeCategories(event, index)}
            name={val.interiorSubCategorie.name}
            disabled={
              val.subCategoriesDisplay.value !== "0" &&
              val.categoriesDisplay.value !== "0"
                ? false
                : true
            }
          >
            {OPTIONS_FILTER_CONTENT_BY.map((val: any) => (
              <MenuItem key={val.id} value={val.value}>
                {val.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {index !== 0 ? (
          <HighlightOffOutlinedIcon
            onClick={() => deleteItemFromCategoriesArray(index)}
            sx={{
              marginLeft: "1rem",
              fontSize: 30,
              paddingTop: "15px",
              cursor: "pointer",
            }}
          />
        ) : (
          <></>
        )}
      </Box>
    ));
  };

  const showFieldsNewPackageTemplate = () => {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        key="boxAddNewTemplatePackageDO"
      >
        {arrayPackageTemplates?.map((val, index) => (
          <Box
            key={"boxTemplatePackage" + index}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: index !== 0 ? "10px" : "",
            }}
          >
            <FormControl
              sx={{
                ...Styles.selectNewTemplate,
              }}
            >
              <Select
                sx={{ height: "40px", width: "100%" }}
                value={val.selectTemplateDo.value}
                onChange={(event) => onChangeTemplates(event, index)}
                name={val.selectTemplateDo.name}
              >
                {OPTIONS_FILTER_CONTENT_BY.map((val: any) => (
                  <MenuItem key={val.id} value={val.value}>
                    {val.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              sx={{ marginLeft: "1rem", width: "15%" }}
              type="date"
              variant="outlined"
              value={val.dateTemplateDo.value}
              name={val.dateTemplateDo.name}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                onChangeTemplates(event, index)
              }
              inputProps={{
                style: {
                  height: "7px",
                },
              }}
            />
            <HighlightOffOutlinedIcon
              onClick={() => deleteItemFromPackagesTemplate(index)}
              sx={{
                marginLeft: "1rem",
                fontSize: 30,
                cursor: "pointer",
              }}
            />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box sx={Styles.boxDisplayOptions}>
      <Box sx={Styles.boxTitleDisplayMenuCollapsed}>
        <IconButton
          sx={openOptionsDisplay ? Styles.rotateDown : Styles.rotateUp}
          onClick={closeOpenBoxDisplayOptions}
        >
          <ArrowDropDownOutlinedIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <Typography sx={{ color: "white", fontWeight: 600 }}>
          DISPLAY OPTIONS
        </Typography>
      </Box>
      <Box
        sx={
          openOptionsDisplay
            ? Styles.boxDisplayOptionsOpen
            : Styles.boxDisplayOptionsClose
        }
      >
        <Box sx={Styles.boxCheckBoxComments}>
          <Box sx={Styles.showComments}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkBoxsDisplayOptions.showComment}
                  name="showComment"
                  onChange={(checked) => onChangeCheckedComments(checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Show comment"
            />
            <Typography sx={Styles.textCommentsShow}>
              When checked associated comments will be shown. When not checked,
              comments will not be shown and new comments cannot be created
            </Typography>
          </Box>
          <Box sx={Styles.showComments}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkBoxsDisplayOptions.noNewComments}
                  name="noNewComments"
                  onChange={(checked) => onChangeCheckedComments(checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="No New Comments"
            />
            <Typography sx={Styles.textCommentsShow}>
              When checked, new comments cannot be created
            </Typography>
          </Box>
        </Box>
        <Box sx={Styles.boxDisplayCategories}>
          <Typography>
            Select category{" "}
            <span style={{ color: "red", fontSize: 19 }}>*</span>
          </Typography>
          <Box
            sx={{
              width: "100%",
              marginTop: "15px",
              borderBottom: "2px solid #c2c0c4",
              borderBottomStyle: "dotted",
            }}
          >
            <Box sx={Styles.boxLabelsCategories}>
              <Typography sx={{ width: "22%", fontSize: 14, color: "grey" }}>
                Category
              </Typography>
              <Typography sx={{ width: "22%", fontSize: 14, color: "grey" }}>
                Sub-Category
              </Typography>
              <Typography sx={{ width: "22%", fontSize: 14, color: "grey" }}>
                Interir Sub-Category
              </Typography>
            </Box>
            {showSelectsCategories()}
            <Button
              onClick={addNewCategorieDisplay}
              sx={Styles.btnAddCategory}
              variant="outlined"
            >
              Add category
            </Button>
          </Box>
        </Box>
        <Box sx={Styles.boxRadioButtonsDisplayOptions}>
          <Box sx={{ width: "100%" }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="radioButtonDisplayItem"
                value={radiosButtonDisplayOptions.radioButtonDisplayItem}
                onChange={onChangeRadioButtonItemsDisplay}
              >
                <FormControlLabel
                  value="hideItem"
                  control={<Radio />}
                  label="Hide Item"
                />
                <FormControlLabel
                  value="displayItem"
                  control={<Radio />}
                  label="Display Item"
                />
                <FormControlLabel
                  value="displayItemWithinDate"
                  control={<Radio />}
                  label="Display Item Within Date Range"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box sx={Styles.boxRadioButtonsFeaturedItem}>
          <Typography sx={{ fontSize: 15, color: "grey" }}>
            Home Page:
          </Typography>
          <Box sx={{ width: "80%", marginLeft: "10px" }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="radioButtonFeatureHomePage"
                value={radiosButtonDisplayOptions.radioButtonFeatureHomePage}
                onChange={onChangeRadioButtonItemsDisplay}
              >
                <FormControlLabel
                  value="notFeatured"
                  control={<Radio />}
                  label="Not Featured"
                />
                <FormControlLabel
                  value="featureItem"
                  control={<Radio />}
                  label="Feature Item"
                />
                <FormControlLabel
                  value="featureItemWithinDate"
                  control={<Radio />}
                  label="Feature Item Within Date Range"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box sx={Styles.boxRadioButtonsFeaturedItem}>
          <Typography sx={{ fontSize: 15, color: "grey" }}>
            Category Landing Page:
          </Typography>
          <Box sx={{ width: "80%", marginLeft: "10px" }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="radioButtonFeatureLandingPage"
                value={radiosButtonDisplayOptions.radioButtonFeatureLandingPage}
                onChange={onChangeRadioButtonItemsDisplay}
              >
                <FormControlLabel
                  value="notFeaturedLandingPage"
                  control={<Radio />}
                  label="Not Featured"
                />
                <FormControlLabel
                  value="featureItemLandingPage"
                  control={<Radio />}
                  label="Feature Item"
                />
                <FormControlLabel
                  value="featureItemLandingPageWithinDate"
                  control={<Radio />}
                  label="Feature Item Within Date Range"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box sx={Styles.boxCheckBoxMlsTemplate}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkBoxsDisplayOptions.unlockedPost}
                name="unlockedPost"
                onChange={(checked) => onChangeCheckedComments(checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Unlocked Post"
          />
          <Typography sx={{ fontSize: 15, color: "grey", marginLeft: "2rem" }}>
            Post Will be visible to users who are not logged in
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkBoxsDisplayOptions.enableMLSSearch}
                name="enableMLSSearch"
                onChange={(checked) => onChangeCheckedComments(checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Enable MLS Search"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkBoxsDisplayOptions.packageTemplate}
                name="packageTemplate"
                onChange={(checked) => onChangeCheckedComments(checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Package Template"
          />
        </Box>
        {checkBoxsDisplayOptions.packageTemplate ? (
          <Box sx={Styles.boxAddNewTemplate}>
            <Button onClick={addNewPackageTemplate} sx={Styles.btnAddTemplate}>
              <AddCircleOutlineIcon sx={{ fontSize: 25 }} />
              Add template
            </Button>

            {arrayPackageTemplates && arrayPackageTemplates.length > 0 ? (
              <Box sx={Styles.boxNewFieldsTemplate}>
                <Box
                  sx={{ width: "100%", display: "flex", flexDirection: "row" }}
                >
                  <Typography sx={{ fontWeight: 600, width: "41.5%" }}>
                    Select template
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    Schedule Date
                  </Typography>
                </Box>
                {showFieldsNewPackageTemplate()}
              </Box>
            ) : (
              <></>
            )}
          </Box>
        ) : (
          <></>
        )}
        <Box sx={Styles.boxRadioBtnPostType}>
        <Typography sx={{ fontSize: 15, color: "grey" }}>
            Post Type:
          </Typography>
          <FormControl sx={{marginLeft: '10px'}}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="radioButtonFeatureLandingPage"
              value={radiosButtonDisplayOptions.radioButtonFeatureLandingPage}
              onChange={onChangeRadioButtonItemsDisplay}
            >
              <FormControlLabel
                value="templatePostType"
                control={<Radio />}
                label="Template"
              />
              <FormControlLabel
                value="pagePostType"
                control={<Radio />}
                label="Page"
              />
              <FormControlLabel
                value="staticDocumentPostType"
                control={<Radio />}
                label="Static Document"
              />
              <FormControlLabel
                value="externalUrlPostType"
                control={<Radio />}
                label="External Url"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};
