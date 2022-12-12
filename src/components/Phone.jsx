import React from "react";
import phoneImg from "assets/images/phone.png";
import Button from "components/Button";


function Phone() {
  return (
    <div class="contact-phone-container">
      <img src={phoneImg} alt="phone" class="img-fluid phone" />
      <div class="row py-3">
        <Button type="call-large" />
      </div>
      <div class="row py-3">
        <Button type="mail-large" />
      </div>
      <div class="row py-3">
      <Button type="direction" />
      </div>  
    </div>
  );
}

export default Phone;
