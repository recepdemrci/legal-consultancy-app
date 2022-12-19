import React from "react";
import Typography from "@mui/material/Typography";

function Card(props) {
  return (
    <div class={"card-fluid " + props.name}>
      <div class="card-body">
        {props.title ? <Typography className="title" variant="h2">{props.title}</Typography> : null}
        {/* {props.title ? <h4 class="card-title">{props.title}</h4> : null} */}
        {props.line ? <hr class="hr line" /> : null}
        <Typography className="body" variant="inherit">{props.body}</Typography>
      </div>
    </div>
  );
}

export default Card;
