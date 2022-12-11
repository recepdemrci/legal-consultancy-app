import React from "react";
import "../assets/styles/TopContainer.css";
import TextBackground from "./TextBackgroud";
import Pen from "./Pen";
import Card from "./Card";
import Button from "./Button";
import containerImg from "../assets/images/top-container.png";
import clipImg from "../assets/images/top-container-clip.png";

function TopContainer() {
  return (
    <div class="top-container" id="top-container">
      <div class="row">
        <TextBackground col="col" text="TİCARET HUKUKU" />
      </div>
      <Pen />
      <div class="row row-top">
        <div class="col-xl-6 col-lg-8 col-12">
          <Button type="mail" />
          <img
            src={containerImg}
            alt="top-container-img"
            class="img-fluid mb-lg-0 mb-5"
          />
        </div>
        <div class="col-xl-6 col-lg-8 col-12 mb-lg-0 mb-5 offset-xl-0 offset-lg-4">
          <Card
            name="service-card"
            title="HİZMETLERİMİZ"
            line={true}
            body={
              <p>
                Together we represent more than 60 years of experience in
                claims-expertise: to prevent, to investigate and to defend.
                <br />
                We can help you with the whole package or just with the elements
                you need:
                <br />
                – coverage
                <br />
                – prevention
                <br />
                – forensic investigation
                <br />
                – technical investigation
                <br />
                – material and economic damage
                <br />
                – practical solutions
                <br />– legal assistance
              </p>
            }
          />
        </div>
      </div>
      <div class="row row-middle">
        <div class="col-lg-5 col-12 text-center offset-lg-3">
          <Card
            name="slogan-card"
            title='"SAVUNULMANIN SAVUNULMASI" GEREKTİĞİNE İNANMAKTAYIZ.'
            body={<p>NET VE ANLAŞILIR OLMAYA ÇALIŞIYORUZ.</p>}
          />
        </div>
        <TextBackground
          img={{ class: "img-fluid clip", src: clipImg, alt: "clip-image" }}
          col="col"
          text="İCRA ve İFLAS HUKUKU"
        />
      </div>
    </div>
  );
}

export default TopContainer;
