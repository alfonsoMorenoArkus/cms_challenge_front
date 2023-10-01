import React, { useState } from "react";
import { categoriesArrayList } from "./tableCategories.types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./tableCategories.css";
import { IconButton } from "@mui/material";

export const TableCategories = ({
  categoriesInformation,
}: categoriesArrayList) => {
  const [expandRowsSubCategories, setExpandRowsSubCategories] = useState<
    number[]
  >([]);
  const [expandRowsInteriorSubCategories, setexpandRowsInteriorSubCategories] =
    useState<number[]>([]);

  const onClickExpandDivSubCategories = (index: number) => {
    let rowsIndexSubcategories = [...expandRowsSubCategories];
    const currentInfexSubCategories = rowsIndexSubcategories.indexOf(index);
    if (currentInfexSubCategories === -1) {
      rowsIndexSubcategories.push(index);
    } else {
      rowsIndexSubcategories.splice(currentInfexSubCategories, 1);
    }
    setExpandRowsSubCategories(rowsIndexSubcategories);
  };

  const onClickExpandTrInteriorSubCategories = (index: number) => {
    let rowsIndexInteriorSubcategories = [...expandRowsInteriorSubCategories];
    const currentInfexSubCategories =
      rowsIndexInteriorSubcategories.indexOf(index);
    if (currentInfexSubCategories === -1) {
      rowsIndexInteriorSubcategories.push(index);
    } else {
      rowsIndexInteriorSubcategories.splice(currentInfexSubCategories, 1);
    }
    setexpandRowsInteriorSubCategories(rowsIndexInteriorSubcategories);
  };

  return (
    <table className="tableStyle">
      <thead className="tableHead">
        <tr className="tableHeadTr">
          <th style={{ textAlign: "left", width: "60%" }}>NAME</th>
          <th align="left" style={{ width: "10%" }}>
            DISPLAY
          </th>
          <th align="left" style={{ width: "10%" }}>
            SORT
          </th>
          <th align="left" style={{ width: "10%" }}>
            EDIT
          </th>
          <th align="left" style={{ width: "5%" }}></th>
        </tr>
      </thead>
      <tbody>
        {categoriesInformation.map((val, index) => (
          <>
            <tr
              key={val.categorieName + index}
              className="trBackGround"
              style={{ width: "100%", height: "40px" }}
            >
              <td
                onClick={() => onClickExpandDivSubCategories(val.id)}
                className="tdCategorieNameStyle"
              >
                <IconButton
                  onClick={() => onClickExpandDivSubCategories(val.id)}
                  sx={{
                    transform: expandRowsSubCategories.includes(val.id)
                      ? "rotate(180deg)"
                      : null,
                  }}
                >
                  <ArrowDropDownIcon />
                </IconButton>{" "}
                <span style={{ fontWeight: 700 }}>{val.categorieName}</span>
              </td>
              <td align="left" style={{ width: "10%" }}>
                On display
              </td>
              <td align="left" style={{ width: "10%" }}>
                YES
              </td>
              <td align="left" style={{ width: "10%" }}>
                <EditIcon />
              </td>
              <td align="left" style={{ width: "5%" }}>
                <DeleteIcon />
              </td>
            </tr>
            {expandRowsSubCategories.includes(val.id) &&
              val.subCategoriesArray?.map((subCat, indexSub) => (
                <>
                  <tr
                    key={subCat.subCategorieName + indexSub}
                    className={`trBackgroundSubCategorie ${
                      expandRowsSubCategories.includes(val.id)
                        ? "boxSubCategoriesOpen"
                        : "boxSubCategoriesClose"
                    }
                    `}
                  >
                    <td
                      onClick={() =>
                        onClickExpandTrInteriorSubCategories(subCat.id)
                      }
                      className="tdSubCategorieNameStyle"
                    >
                      <IconButton
                        onClick={() =>
                          onClickExpandTrInteriorSubCategories(subCat.id)
                        }
                        sx={{
                          transform: expandRowsInteriorSubCategories.includes(
                            subCat.id
                          )
                            ? "rotate(180deg)"
                            : null,
                        }}
                      >
                        <ArrowDropDownIcon />
                      </IconButton>{" "}
                      <span>{subCat.subCategorieName}</span>
                    </td>
                    <td align="left" style={{ width: "10%" }}>
                      On display
                    </td>
                    <td align="left" style={{ width: "10%" }}>
                      YES
                    </td>
                    <td align="left" style={{ width: "10%" }}>
                      <EditIcon />
                    </td>
                    <td align="left" style={{ width: "5%" }}>
                      <DeleteIcon />
                    </td>
                  </tr>
                  {expandRowsInteriorSubCategories.includes(subCat.id) &&
                    subCat.interiorSubCategorieArray?.map(
                      (interiorCat, indexCat) => (
                        <tr
                          key={interiorCat.interiorSubCategorieName + indexSub}
                          className={`trBackgroundSubCategorie ${
                            expandRowsInteriorSubCategories.includes(subCat.id)
                              ? "boxSubCategoriesOpen"
                              : "boxSubCategoriesClose"
                          }
                    `}
                        >
                          <td className="tdInteriorSubCategorieNameStyle">
                            <span>{interiorCat.interiorSubCategorieName}</span>
                          </td>
                          <td align="left" style={{ width: "10%" }}>
                            On display
                          </td>
                          <td align="left" style={{ width: "10%" }}>
                            YES
                          </td>
                          <td align="left" style={{ width: "10%" }}>
                            <EditIcon />
                          </td>
                          <td align="left" style={{ width: "5%" }}>
                            <DeleteIcon />
                          </td>
                        </tr>
                      )
                    )}
                </>
              ))}
          </>
        ))}
      </tbody>
    </table>
  );
};
