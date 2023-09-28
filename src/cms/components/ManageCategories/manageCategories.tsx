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
  Link,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { TableCategories } from "../../baseComponents/TableCategories";
import { OPTIONS_FILTER_CONTENT_BY } from "../ManageContent";

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
            <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start', marginLeft:'1rem'}}>
              <AddCircleOutlineIcon
                sx={{ fontSize: "30px", color: "green", marginRight: "10px" }}
              />
              <Link
                underline="hover"
                sx={{ cursor: "pointer", color: "black" }}
              >
                New Sub-Category
              </Link>
            </Box>
            <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start', marginLeft:'1rem', marginTop: '10px'}}>
              <AddCircleOutlineIcon
                sx={{ fontSize: "30px", color: "green", marginRight: "10px" }}
              />
              <Link
                underline="hover"
                sx={{ cursor: "pointer", color: "black" }}
              >
                New Interir Sub-Category
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={Styles.boxTableCategories}>
        <TableCategories />
      </Box>
      </Box>
      
    </Container>
  );
};
