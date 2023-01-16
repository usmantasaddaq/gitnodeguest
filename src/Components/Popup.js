import React from "react";
import { useState } from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import "./style.css";
const Popup = () => {
  const [edit, setEdit] = useState(false);

  const editHandler = () => {
    setEdit(true);
  };
  return (
    <>
      {edit === true ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "300px",
            paddingTop: "80px",
            boxSizing: " borderBox",
          }}
        >
          <input
            className="inputField"
            type="text"
            placeholder="Enter gist description..."
          />
          <br />
          <input
            className="inputField"
            type="text"
            placeholder="Enter file name..."
          />
          <br />
          <textarea
            className="textField"
            type="text"
            placeholder="Enter file content..."
          />
          <br />
          <div className="BtnStyle1">
            <Button
              style={{
                borderCOlor: "wrgb(0, 165, 153)",
                backgroundColor: "rgb(0, 165, 153)",
                color: "white",
              }}
              variant="outlined"
            >
              Add File
            </Button>
            <br />
            <Button
              style={{
                borderCOlor: "wrgb(0, 165, 153)",
                backgroundColor: "rgb(0, 165, 153)",
                color: "white",
              }}
              variant="outlined"
            >
              Create File
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              paddingRight: "14%",
            }}
          >
            <div className="imageStyle">
             <img style={{width:"55px",height:"45px",borderRadius:"50%"}} src="./pic.jpg"/>
              <a href="#" style={{ textDecoration: "none", paddingLeft:"5px",paddingTop:"10px" }}>
                Name/package.js
              </a></div>
            <Button onClick={editHandler}>
              <EditIcon />
              <h6>Edit</h6>
            </Button>
            <Button>
              <DeleteIcon />
              <h6>Delete</h6>
            </Button>
            <Button>
              <StarOutlineIcon />
              <h6>Star</h6>
              <input
                style={{
                  borderRadius: "4px",
                  width: "15px",
                  height: "10px",
                  textAlign: "center",
                  borderColor: "lightgray",
                }}
                type="text"
                placeholder="0"
              />
            </Button>
            <Button>
              <ShareOutlinedIcon />
              <h6>Fork</h6>
              <input
                style={{
                  borderRadius: "4px",
                  width: "15px",
                  height: "10px",
                  textAlign: "center",
                  borderColor: "lightgray",
                }}
                type="text"
                placeholder="0"
              />
            </Button>
          </div>
          <div className="popup-box">
            <div className="box">
            
              <a href="#" style={{ textDecoration: "none" }}>
                Name/package.js
              </a>
              <hr className="lineStyle"></hr>
              <p> //1 service@123 </p>
              <p> //2 #asdfservice(*123)</p>
              <p> //3 #dfservice.html231</p>
              <p> //4#45dfd%dd@as </p>
              <p> //5 ~2asdf@5%2dd</p>
              <p> //6 service@123 </p>
              <p> //7 service@123 </p>
              <p> //8 #asdfservice(*123)</p>
              <p> //9 #dfservice.html231</p>
              <p> //10#45dfd%dd@as </p>
              <p> //11 ~2asdf@5%2dd</p>
              <p> //12 service@123 </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
