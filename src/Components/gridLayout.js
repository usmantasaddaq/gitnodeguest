import React, { useState } from "react";
import "./style.css";
import Popup from "./Popup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";

function GridLayout() {
  return (
    <div className="griddisplay">
      <Card sx={{ maxWidth: 345, margin: "15px" }}>
        <CardActionArea>
          <CardContent>
            <p> //1 service@123 </p>
            <p> //2 #asdfservice(*123)</p>
            <p> //3 #dfservice.html231</p>
            <p> //4#45dfd%dd@as </p>
            <p> //5 ~2asdf@5%2dd</p>
            <p> //6 service@123 </p>
          </CardContent>
          <hr></hr>
          <CardActions>
            <Button size="small" color="primary">
            <img style={{width:"55px",height:"45px",borderRadius:"50%"}} src="./pic.jpg"/>
              <a href="#" style={{ textDecoration: "none",paddingLeft:"15px" }}>
                Name/package.js
              </a>
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, margin: "15px" }}>
        <CardActionArea>
          <CardContent>
            <p> //1 service@123 </p>
            <p> //2 #asdfservice(*123)</p>
            <p> //3 #dfservice.html231</p>
            <p> //4#45dfd%dd@as </p>
            <p> //5 ~2asdf@5%2dd</p>
            <p> //6 service@123 </p>
          </CardContent>
          <hr></hr>
          <CardActions>
            <Button size="small" color="primary">
            <img style={{width:"55px",height:"45px",borderRadius:"50%"}} src="./pic.jpg"/>
              <a href="#" style={{ textDecoration: "none",paddingLeft:"15px" }}>
                Name/package.js
              </a>
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "15px" }}>
        <CardActionArea>
          <CardContent>
            <p> //1 service@123 </p>
            <p> //2 #asdfservice(*123)</p>
            <p> //3 #dfservice.html231</p>
            <p> //4#45dfd%dd@as </p>
            <p> //5 ~2asdf@5%2dd</p>
            <p> //6 service@123 </p>
          </CardContent>
          <hr></hr>
          <CardActions>
            <Button size="small" color="primary">
            <img style={{width:"55px",height:"45px",borderRadius:"50%"}} src="./pic.jpg"/>
              <a href="#" style={{ textDecoration: "none",paddingLeft:"15px"  }}>
                Name/package.js
              </a>
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default GridLayout;
