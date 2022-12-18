import React from "react";
import "assets/styles/ContactContainer.css";
import containerImg from "assets/images/contact-container.png";
import TextBackground from "components/TextBackgroud";
import Card from "components/Card";
import Phone from "components/Phone";

function ContactContainer() {
  return (
    <div class="contact-container" id="contact-container">
      <div class="row align-top justify-content-end">
        <div class="col-lg-8 col-6 d-none d-lg-block align-self-center">
          <hr class="hr line" />
        </div>
      </div>
      <div class="row mb-5">
        <TextBackground col="col" text="HOŞ GELDİNİZ" textAlign="text-end" />
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-4 col-10 align-self-center">
          <div class="row mx-0">
            <div class="col text-center mb-5">
              <Card
                name="contact-card"
                title="İLETİŞİM"
                line={true}
                body={
                  <p>
                    +90 532 660 02 85
                    <br />
                    nurettinselcukozturk@gmail.com
                  </p>
                }
              />
            </div>
          </div>
          <div class="row mx-0">
            <div class="col text-center mb-xl-0 mb-5">
              <Card
                name="address-card"
                title={
                  <>
                    ESENTEPE MAH.
                    <br />
                    MİLANGAZ CAD.
                    <br />
                    VİZYON KARTAL RESIDENCE
                    <br />A BLOK KAT:12 D:85
                    <br />
                    KARTAL/İSTANBUL
                  </>
                }
              />
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-10 mb-xl-0 mb-5 text-center align-self-center">
          <img
            src={containerImg}
            alt="contact-container-img"
            class="img-fluid"
          />
        </div>
        <div class="col-xl-4 col-10 mt-xl-0 mt-5 align-self-center">
          <Phone />
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
