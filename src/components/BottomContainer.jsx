import React from "react";
import "assets/styles/BottomContainer.css";
import lawyerImg from "assets/images/lawyer.png";
import Card from "./Card";
import Avatar from "./Avatar";

function BottomContainer() {
  return (
    <div class="bottom-container" id="bottom-container">
      <div class="row justify-content-center">
        <div class="col-xl-4 d-none d-lg-block text-end align-self-center">
          <Card
            name="experience-card"
            title={
              <p>
                FİKRİ VE SANAT MÜLKİYET
                <br />
                İŞ VE SOSYAL GÜVENLİK
                <br />
                İCRA VE İFLAS
                <br />
                TİCARET HUKUKU
              </p>
            }
          />
        </div>
        <div class="col-xl-4 col-md-6 col-8 text-center">
          <Avatar image={lawyerImg} />
        </div>
        <div class="col-xl-4 col-md-6 col-8 text-center align-self-center">
          <Card
            name="cv-card"
            title="NURETTİN SELÇUK ÖZTÜRK"
            body={
              <p>
                <br />
                AVUKAT
                <br />
                İSTANBUL
                <br />
                <br />
                +90 532 660 02 85
                <br />
                nurettinselcukozturk@gmail.com
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default BottomContainer;
