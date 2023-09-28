export interface genericTableProps {
  dataBody: object[];
  columnsTable: object[] | any;
  selectionModelChangeTable: (values: any) => void;
  selectionsModelIds: string[];
}
