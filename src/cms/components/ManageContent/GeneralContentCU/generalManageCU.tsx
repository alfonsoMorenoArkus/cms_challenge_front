import React, { ChangeEvent, useState } from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { generalManageCUProps } from "./generalManage.types";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

import { StylesGM } from "./generalManageCU.styled";

export const GeneralManageCU = ({
  generalManageInformation,
  handleChangeFieldManage,
}: generalManageCUProps) => {
  const [openGeneralFields, setGeneralField] = useState<boolean>(true);

  const onChangeFieldsGengeralManage = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    handleChangeFieldManage(event);
  };

  const closeOpenBoxOptionsGeneral = () => {
    setGeneralField(!openGeneralFields);
  };

  return (
    <Box sx={StylesGM.boxGeneralManage}>
      <Box sx={StylesGM.boxTitleMenuCollapsed}>
        <IconButton
          sx={openGeneralFields ? StylesGM.rotateDown : StylesGM.rotateUp}
          onClick={closeOpenBoxOptionsGeneral}
        >
          <ArrowDropDownOutlinedIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <Typography sx={{color: 'white', fontWeight: 600}}>GENERAL</Typography>
      </Box>
      <Box
        sx={
          openGeneralFields
            ? StylesGM.boxOptionsGeneralOpen
            : StylesGM.boxOptionsGeneralClose
        }
      >
        <Typography sx={{marginLeft: 0, fontWeight: 600}}>
          Title <span style={{ color: "red", fontSize: 19 }}>*</span>
        </Typography>
        <Box>
          <TextField
            sx={StylesGM.textFieldFilterContain}
            type="text"
            variant="outlined"
            name="titleGeneral"
            inputProps={{
              style: {
                height: "2px",
              },
            }}
            value={generalManageInformation.titleGeneral}
            onChange={onChangeFieldsGengeralManage}
          />
        </Box>
        <Typography sx={{marginLeft: 0, fontWeight: 600, marginTop: '1rem'}}>
          Pretty Url
        </Typography>
        <Box>
          <TextField
            sx={StylesGM.textFieldFilterContain}
            type="text"
            variant="outlined"
            name="prettyUrl"
            inputProps={{
              style: {
                height: "2px",
              },
            }}
            value={generalManageInformation.prettyUrl}
            onChange={onChangeFieldsGengeralManage}
          />
        </Box>
        <Typography sx={{marginLeft: 0, fontWeight: 600, marginTop: '1rem'}}>
          Subtitle
        </Typography>
        <Box>
          <TextField
            sx={StylesGM.textFieldFilterContain}
            type="text"
            variant="outlined"
            name="subTitleGeneral"
            inputProps={{
              style: {
                height: "2px",
              },
            }}
            value={generalManageInformation.subTitleGeneral}
            onChange={onChangeFieldsGengeralManage}
          />
        </Box>
        <Typography sx={{marginLeft: 0, fontWeight: 600, marginTop: '1rem'}}>
          Headline
        </Typography>
        <Box>
          <TextField
            sx={StylesGM.textFieldFilterContain}
            type="text"
            variant="outlined"
            name="headLine"
            inputProps={{
              style: {
                height: "2px",
              },
            }}
            value={generalManageInformation.headLine}
            onChange={onChangeFieldsGengeralManage}
          />
        </Box>
        <Typography sx={{marginLeft: 0, fontWeight: 600, marginTop: '1rem'}}>
          Author
        </Typography>
        <Box>
          <TextField
            sx={StylesGM.textFieldFilterContain}
            type="text"
            variant="outlined"
            name="author"
            inputProps={{
              style: {
                height: "2px",
              },
            }}
            value={generalManageInformation.author}
            onChange={onChangeFieldsGengeralManage}
          />
        </Box>
        <Typography sx={{marginLeft: 0, fontWeight: 600, marginTop: '1rem'}}>
          Document date
        </Typography>
        <Box>
          <TextField
            sx={StylesGM.dateFieldFilterContain}
            type="date"
            variant="outlined"
            name="documentDate"
            inputProps={{
              style: {
                height: "2px",
              },
            }}
            value={generalManageInformation.documentDate}
            onChange={onChangeFieldsGengeralManage}
          />
        </Box>
      </Box>
    </Box>
  );
};
