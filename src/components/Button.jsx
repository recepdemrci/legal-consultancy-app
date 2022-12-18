import React, { useState } from "react";
import "assets/styles/Button.css";

function Button(props) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    console.log("click");
    if (props.newTab) {
      window.open(props.url);
    } else {
      window.location = props.url;
    }
  }

  function handlePress() {
    console.log("pres");
    setIsActive(true);
  }

  function handleRelease() {
    console.log("release");
    setIsActive(false);
  }

  return (
    <img
      type="image"
      class={"img-fluid " + props.name}
      src={isActive ? props.imgActive : props.img}
      alt={props.type}
      onClick={handleClick}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onMouseMove={handleRelease}
    />
  );
}

export default Button;
