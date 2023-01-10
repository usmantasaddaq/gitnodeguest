import React, { useState } from "react";
import "./style.css";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import ListLayout from "./listLayout";
import GridLayout from "./gridLayout";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"; 
import Popup from "./Popup";
const LandingPage = () => {
  const [list, setList] = useState(false);
  const [grid, setGrid] = useState(false);
  const [view, setView] = React.useState("");
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const togglePopup = () => {
    setActive(!active);
    setIsOpen(!isOpen);
    setGrid(false);
    setList(false);
  };
  const handleChange = (event, nextView) => {
    setView(nextView);
    setIsOpen(false);
  };
  const listHandler = () => {
    setList(true);
    setGrid(false);
    setIsOpen(false);
  };
  const gridHandler = () => {
    setGrid(true);
    setList(false);
    setIsOpen(false);
  };

  return (
    <>
      <div className="landingPage_style">
        <div className="EmumbaStyle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="161"
            height="24"
            viewBox="0 0 161 24"
            fill="none"
          >
            <path
              d="M3.72706 19.3431V3.63712H19.0421V13.0601H9.85206V9.9191H15.9781V6.77811H6.79006V16.2011H22.1051V0.496094H0.664062V22.9381H22.1061V19.3381L3.72706 19.3431Z"
              fill="white"
            ></path>
            <path
              d="M58.447 18.4501L52.507 0.537109H47.918V22.9371H51.202V9.76611C51.202 9.24945 51.187 8.44113 51.157 7.34113C51.145 6.78213 51.132 6.2971 51.124 5.8851L56.808 22.9391H60.047L65.674 5.8891C65.6686 6.4611 65.6616 7.01245 65.653 7.54312C65.633 8.57912 65.625 9.31912 65.625 9.76712V22.9401H68.906V0.5401H64.347L58.447 18.4501Z"
              fill="white"
            ></path>
            <path
              d="M87.4695 14.3101C87.5253 15.5591 87.2909 16.804 86.7845 17.9471C85.9365 19.5841 84.3665 20.3781 81.9845 20.3781C81.1481 20.4487 80.3092 20.274 79.5704 19.8755C78.8316 19.477 78.2249 18.8719 77.8245 18.1341C77.2241 16.9515 76.9343 15.6356 76.9825 14.3101V0.537109H73.5405V13.0771C73.4365 15.2393 73.8089 17.3979 74.6315 19.4001C75.9655 22.1241 78.5165 23.5001 82.2185 23.5001C85.9205 23.5001 88.4775 22.1191 89.8185 19.4001C90.64 17.3975 91.0124 15.2392 90.9095 13.0771V0.537109H87.4665L87.4695 14.3101Z"
              fill="white"
            ></path>
            <path
              d="M106.079 18.4501L100.138 0.537109H95.5508V22.9371H98.8338V9.76611C98.8338 9.24945 98.8195 8.44113 98.7908 7.34113C98.7741 6.78179 98.7631 6.29643 98.7578 5.8851L104.438 22.9391H107.678L113.306 5.8891C113.3 6.4611 113.293 7.01245 113.284 7.54312C113.266 8.57912 113.255 9.31912 113.255 9.76712V22.9401H116.538V0.5401H111.979L106.079 18.4501Z"
              fill="white"
            ></path>
            <path
              d="M135.26 10.861C136.07 10.3996 136.734 9.72083 137.178 8.90149C137.621 8.08215 137.827 7.155 137.77 6.22498C137.788 5.05575 137.445 3.90954 136.786 2.94296C135.677 1.34796 133.801 0.542969 131.21 0.542969H121.73V22.943H131.061C133.961 22.943 136.104 22.043 137.445 20.28C138.33 19.1377 138.807 17.7325 138.8 16.288C138.841 15.5314 138.727 14.7746 138.466 14.0633C138.205 13.3521 137.802 12.7011 137.282 12.15C136.69 11.6047 136.005 11.1692 135.26 10.864V10.861ZM134.72 18.405C134.283 18.9245 133.725 19.3296 133.096 19.5852C132.467 19.8408 131.784 19.9393 131.108 19.872H125.086V12.718H130.607C131.576 12.6828 132.542 12.8328 133.453 13.16C134.059 13.3786 134.575 13.79 134.924 14.331C135.273 14.8719 135.434 15.5124 135.383 16.154C135.407 16.9561 135.174 17.7447 134.717 18.405H134.72ZM132.885 9.28897C132.016 9.66045 131.074 9.82936 130.129 9.78296H125.083V3.54898H130.025C130.966 3.50438 131.907 3.64015 132.796 3.94897C133.304 4.16449 133.729 4.53713 134.009 5.01215C134.289 5.48716 134.41 6.03948 134.352 6.58795C134.406 7.13323 134.295 7.68208 134.033 8.16345C133.771 8.64482 133.371 9.03656 132.884 9.28796"
              fill="white"
            ></path>
            <path
              d="M152.407 0.537109H148.78L140.555 22.9371H144.078L146.391 16.3901H154.382L156.608 22.9371H160.335L152.407 0.537109ZM153.38 13.4371H147.433L150.465 4.85211L153.38 13.4371Z"
              fill="white"
            ></path>
            <path
              d="M43.4078 22.8328H30.2578V0.59375H43.4078V3.66678H33.8078V9.72076H42.8638V12.7638H33.8078V19.7448H43.4078V22.8328Z"
              fill="white"
            ></path>
          </svg>
        </div>

        <div className="SearchBoxStyle">
          <TextField
            style={{ backgroundColor: "white", borderRadius: "5px" }}
            label="Search Notes.."
            InputProps={{
              endAdornment: (
                <InputAdornment style={{ height: "1.5rem" }}>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={inputHandler}
          />
        </div>
        <div className="BtnStyle">
          {active ? (
            <img
              onClick={togglePopup}
              style={{
                width: "45px",
                height: "35px",
                borderRadius: "50%",
                background: "none",
                cursor:"pointer"
              }}
              src="./pic.jpg"
            />
          ) : (
            <Button
              style={{
                borderCOlor: "white",
                backgroundColor: "white",
                color: "rgb(0, 165, 153)",
              }}
              variant="outlined"
              onClick={togglePopup}
            >
              Login
            </Button>
          )}
        </div>
      </div>

      {isOpen === true ? (
        ""
      ) : (
        <div className="Btn_Style">
          <ToggleButtonGroup
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="list">
              <ListIcon
                style={{ color: "rgb(0, 165, 153)", fontSize: "30px" }}
                onClick={listHandler}
              />
            </ToggleButton>
            |
            <ToggleButton value="module">
              <GridViewIcon
                style={{ color: "rgb(0, 165, 153)", fontSize: "30px" }}
                onClick={gridHandler}
              />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      )}
      {list && <ListLayout input={inputText} />}
      {grid && <GridLayout />}
      {<div>{isOpen && <Popup />}</div>}
    </>
  );
};

export default LandingPage;
