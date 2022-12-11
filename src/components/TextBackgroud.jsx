import React from "react";

function TextBackground(props) {
  return (
    <div class={props.col + " d-none d-lg-block text-center align-self-center"}>
      {props.img && (
        <img class={props.img.class} src={props.img.src} alt={props.img.alt} />
      )}
      <h1 class={"display-3 " + props.textAlign}>{props.text}</h1>
    </div>
  );
}

export default TextBackground;
