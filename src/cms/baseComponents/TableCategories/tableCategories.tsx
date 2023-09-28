import React from "react";

import "./tableCategories.css";

export const TableCategories = () => {
  return (
    <table className="tableStyle">
      <thead className="tableHead">
        <tr className="tableHeadTr">
          <th style={{ textAlign: "left", width: "60%" }}>NAME</th>
          <th style={{width: '10%'}}>DISPLAY</th>
          <th style={{width: '10%'}}>SORT</th>
          <th style={{width: '10%'}}>EDIT</th>
          <th style={{width: '5%'}}></th>
        </tr>
      </thead>
    </table>
  );
};
