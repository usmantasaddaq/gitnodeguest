import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { columns, rows } from "./Data";

function ListLayout(props) {
  const filteredData = rows.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.id.toLowerCase().includes(props.input);
    }
  });
  console.log(" filteredData", filteredData);
  return (
    <div
      style={{ height: 600, width: "94%", marginLeft: "3%", marginRight: "3%" }}
    >
      <DataGrid
        style={{ justifyContent: "center" }}
        rows={filteredData}
        columns={columns}
        StarOutlineIcon={StarOutlineIcon}
        ShareOutlinedIcon={ShareOutlinedIcon}
        pageSize={9}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

export default ListLayout;
