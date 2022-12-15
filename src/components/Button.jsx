import React, { useState } from "react";
import "assets/styles/Button.css"

function Button(props) {
  const [isActive, setIsActive] = useState(false);

  function handlePress(event) {
    setIsActive(true);
    event.handlePress();
  }

  function handleRelease(event) {
    setIsActive(false);
    event.preventDefault();
  }

  return (
    <img
      type="image"
      class={"img-fluid " + props.name}
      src={isActive ? props.imgActive : props.img}
      alt={props.type}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
      
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onMouseMove={handleRelease}
      //onClick={handleRelease}
    />
  );
}

export default Button;
