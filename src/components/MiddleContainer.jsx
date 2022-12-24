import React from "react";
import "assets/styles/MiddleContainer.css";
import "assets/styles/Card.css";
import containerImg from "assets/images/middle-container.png";
import mail from "assets/images/dialog-box/mail-large.png";
import mailActive from "assets/images/dialog-box/mail-active-large.png";
import Card from "components/Card";
import TextBackground from "components/TextBackgroud";
import Button from "components/Button";

function MiddleContainer() {
  return (
    <div class="middle-container" id="middle-container">
      <div class="row justify-content-between row-top">
        <div class="col-xl-6 col-lg-8 col-12 mb-lg-0 mb-5">
          <Card
            name="info-card"
            title="HAKKIMIZDA"
            line={true}
            body={
              <p>
                <br/>
                <b>HANEDAN HUKUK & DANIŞMANLIK</b> olarak;
                <br/>
                <br/>
                Şirket ve gerçek kişi müvekkillerinin adli ve idari yargı mercii 
                önünde temsil edilmesi ile bu süreçlerin hiç oluşmaması adına 
                önleyici avukatlık modelini benimsemekte,
                <br/>
                <br/>
                "Hak", "Hukuken Korunan Menfaat" ve "Helal" kavravramlarını 
                özel ilgi odağımızda bulundurmakta,
                <br/>
                <br/>
                Müvekkillerine karşı şeffaflık ve hesap verebilirlik ilkelerini şiar edinmekte ve
                <br/>
                <br/>
                Savunulmanın savunulması gerektiğine inanmaktayız.
              </p>
            }
          />
        </div>
        <div class="col-lg-6 col-12">
          <div class="col-xl-8 col-lg-10 col-8 text-center offset-4">
            <Card
              name="slogan-card"
              title="HAK, HUKUKEN KORUNAN MENFAAT VE HELAL KAVRAMLARI ÖZEL İLGİ ODAĞIMIZDIR."
            />
          </div>
          <div class="col-xl-8 col-lg-10 col-8 align-self-start">
            <img
              src={containerImg}
              alt="middle-container-img"
              class="img-fluid mb-lg-0 mb-5 direction-img"
            />
          </div>
        </div>
      </div>
      <div class="row mb-5 row-bottom">
        <TextBackground
          col="col-xl-4 col-lg-4"
          text={<p>FİKRİ/SANAİ<p/>MÜLKİYET<p/>HUKUKU</p>}
          textAlign="text-start"
        />
        <div class="col-xl-4 col-lg-6 col-7 text-center offset-lg-0 mb-lg-0 mb-5 offset-5">
          <Card
            name="word-card"
            title={
              <p>
                HESAP VEREBİLİRLİK
                <br />
                ŞEFFAFLIK
              </p>
            }
          />
        </div>
      </div>
      <div class="row mt-5 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-10 text-center">
          <Button
            img={mail}
            imgActive={mailActive}
            url={"mailto: nureddinselcukozturk@gmail.com"}
            name="mail"
          />
        </div>
      </div>
    </div>
  );
}

export default MiddleContainer;
