import React from "react";
import "assets/styles/TopContainer.css";
import "assets/styles/Card.css";
import containerImg from "assets/images/top-container.png";
import call from "assets/images/dialog-box/call-large.png";
import callActive from "assets/images/dialog-box/call-active-large.png";
import TextBackground from "components/TextBackgroud";
import Pen from "components/Pen";
import Card from "components/Card";
import Button from "components/Button";

function TopContainer() {
  return (
    <div class="top-container" id="top-container">
      <div class="row">
        <TextBackground col="col" text="TİCARET HUKUKU" textAlign="text-end" />
      </div>
      <Pen />
      
      <div class="row row-top">
        <div class="col-xl-6 col-lg-8 col-12 text-center">
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
                Av. Nureddin Selçuk Öztürk tarafından kurulan, yerli ve yabancı
                müvekkillerine özellikle şu alanlarda danışmanlık vermekteyiz;
                <br />
                <br />
                - Fikri/Sanai mülkiyet hukuk
                <br />
                - İş ve sosyal güvenlik hukuk
                <br />
                - İcra ve iflas hukuku
                <br />
                <br />
                Ayrıca müvekkillerinin karşılaştığı uyuşmazlıkların, hukuk
                zemininde çözüm ve yöntemlerinin belirlenmesi, önleyici
                avukatlık ve yargı süreçlerinin tümünün yürütülmesi
                hizmetlerinin özveri ile sağlanması gayreti içerisindeyiz.
              </p>
            }
          />
        </div>
      </div>
      <div class="row row-middle">
        <div class="col-lg-5 col-12 text-center offset-lg-3">
          <Card
            name="slogan-card"
            title='“SAVUNULMANIN SAVUNULMASI” GEREKTİĞİNE İNANMAKTAYIZ.'
            body={<p>NET VE ANLAŞILIR OLMAYA ÇALIŞIYORUZ.</p>}
          />
        </div>
        <TextBackground
          // img={{ class: "img-fluid clip", src: clipImg, alt: "clip-image" }}
          col="col"
          text="İCRA ve İFLAS HUKUKU"
          textAlign="text-end"
        />
      </div>
      <div class="row mt-5 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-10 text-center">
          <Button
            img={call}
            imgActive={callActive}
            url={"tel: +90 532 660 02 85"}
            name="call"
          />
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
