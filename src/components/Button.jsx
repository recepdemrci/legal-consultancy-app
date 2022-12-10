import React, { useState } from "react";
import mail from '../assets/images/dialog-box/mail.png';
import mailLarge from '../assets/images/dialog-box/mail-large.png';
import mailActive from '../assets/images/dialog-box/mail-active.png';
import mailActiveLarge from '../assets/images/dialog-box/mail-active-large.png';
import call from '../assets/images/dialog-box/call.png';
import callLarge from '../assets/images/dialog-box/call-large.png';
import callActive from '../assets/images/dialog-box/call-active.png';
import callActiveLarge from '../assets/images/dialog-box/call-active-large.png';
import directionLarge from '../assets/images/dialog-box/direction-large.png';
import directionActiveLarge from '../assets/images/dialog-box/direction-active-large.png';

function Button(props) {
  const [isActive, setIsActive] = useState(false);

  function handleMouseOver() {
    setIsActive(true);
  }

  function handleMouseOut() {
    setIsActive(false);
  }

  function getButtonImg() {
    switch(props.type) {
      case 'mail':
        return (isActive ? mailActive : mail);
      case 'mail-large':
        return (isActive ? mailActiveLarge : mailLarge);
      case 'call':
        return (isActive ? callActive : callActiveLarge);
      case 'call-large':
        return (isActive ? callActiveLarge : callLarge);
      case 'direction':
        return (isActive ? directionActiveLarge : directionLarge);
      default:
        return call;
    };
  }

  return (
    <img 
      style={{ cursor: isActive ? 'pointer' : 'default' }}
      src={getButtonImg()} 
      alt={props.type} 
      class={"img-fluid " + props.type} 
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
}

export default Button;