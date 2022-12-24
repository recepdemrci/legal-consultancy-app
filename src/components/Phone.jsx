import React from "react";
import phoneImg from "assets/images/phone.png";
import mailLarge from "assets/images/dialog-box/mail-large.png";
import mailActiveLarge from "assets/images/dialog-box/mail-active-large.png";
import callLarge from "assets/images/dialog-box/call-large.png";
import callActiveLarge from "assets/images/dialog-box/call-active-large.png";
import directionLarge from "assets/images/dialog-box/direction-large.png";
import directionActiveLarge from "assets/images/dialog-box/direction-active-large.png";

import Button from "components/Button";

function Phone() {
  return (
    <div class="contact-phone-container">
      <img src={phoneImg} alt="phone" class="img-fluid phone" />
      <div class="row py-3">
        <Button
          img={callLarge}
          imgActive={callActiveLarge}
          url={"tel: +90 532 660 02 85"}
        />
      </div>
      <div class="row py-3">
        <Button
          img={mailLarge}
          imgActive={mailActiveLarge}
          url={"mailto: nureddinselcukozturk@gmail.com"}
        />
      </div>
      <div class="row py-3">
        <Button
          img={directionLarge}
          imgActive={directionActiveLarge}
          url={"https://goo.gl/maps/LfojNvvKAxfUV3Vu7"}
          newTab={true}
        />
      </div>
    </div>
  );
}

export default Phone;
