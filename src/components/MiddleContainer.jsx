import React from "react";
import "assets/styles/MiddleContainer.css";
import containerImg from "assets/images/middle-container.png";
import Card from "components/Card";
import TextBackground from "components/TextBackgroud";
import Button from "components/Button";

function MiddleContainer() {
  return (
    <div class="middle-container" id="middle-container">
      <div class="row justify-content-between row-top">
        <div class="col-xl-5 col-lg-6 col-9 mb-lg-0 mb-5">
          <Card
            name="info-card"
            title="HAKKIMIZDA"
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
        <div class="col-lg-6 col-12">
          <div class="col-xl-8 col-lg-10 col-8 text-center offset-4">
            <Card
              name="slogan-card"
              title="HAK, HUKUKEN KORUNAN MENFAAT VE HELAL KAVRAMLARINI ÖZEL İLGİ ODAĞIMIZDIR."
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
      <div class="row row-bottom">
        <TextBackground
          col="col-xl-5 col-lg-6"
          text="ÖNLEYİCİ AVUKATLIK"
          textAlign="text-start"
        />
        <div class="col-xl-4 col-lg-6 col-7 text-center offset-lg-0 mb-lg-0 mb-5 offset-5">
          <Card name="word-card" title={<p>HESAP VEREBİLİRLİK<br/>ŞEFFAFLIK</p>} />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-5">
          <Button type="call" />
        </div>
      </div>
    </div>
  );
}

export default MiddleContainer;
