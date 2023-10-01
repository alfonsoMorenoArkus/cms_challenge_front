import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { genericTableProps } from "./genericTable.types";

export const GenericTable = ({
  columnsTable,
  dataBody,
  selectionModelChangeTable,
  selectionsModelIds,
}: genericTableProps) => {

    const onChangeCheckBox = (values: any) => {
        selectionModelChangeTable(values);
    }
  return (
    <Box sx={{ height: '90%',width: "100%", flexGrow: 1 }}>
      <DataGrid
        rows={dataBody}
        columns={columnsTable}
        style={{ height: '100%' }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        onRowSelectionModelChange={onChangeCheckBox}
        rowSelectionModel={selectionsModelIds}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
