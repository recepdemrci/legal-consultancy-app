import React from "react";

function MiddleContainer() {
  return (
    <div class="middle-container" id="middle-container">
      <div class="row justify-content-between row-top">
        <div class="col-xl-5 col-lg-6 col-9">
          <div class="card-fluid mb-lg-0 mb-5 info-card">
            <div class="card-body">
              <h1 class="card-title">HAKKIMIZDA</h1>
              <hr class="hr line"/>
              <p>Av. Nureddin Selçuk Öztürk tarafından kurulan, yerli ve yabancı müvekkillerine özellikle şu alanlarda danışmanlık vermekteyiz;<br/>
                <br/>
                -  Fikri/Sanai mülkiyet hukuk<br/>
                -  İş ve sosyal güvenlik hukuk<br/>
                -  İcra ve iflas hukuku<br/>
                <br/>
                Ayrıca müvekkillerinin karşılaştığı uyuşmazlıkların, hukuk zemininde çözüm ve yöntemlerinin belirlenmesi,
                önleyici avukatlık ve yargı süreçlerinin tümünün yürütülmesi hizmetlerinin özveri ile sağlanması gayreti içerisindeyiz.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="col-xl-8 col-lg-10 col-8 offset-4">
            <div class="card-fluid text-center slogan-card">
              <div class="card-body">
                <h4 class="card-title">HAK, HUKUKEN KORUNAN MENFAAT VE HELAL KAVRAMLARINI ÖZEL İLGİ ODAĞIMIZDIR.</h4>
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-lg-10 col-8 align-self-start">
            <img src="images/middle-container.png" alt="middle-container-img" class="img-fluid mb-lg-0 mb-5 direction-img" />
          </div>
        </div>
      </div>
      <div class="row row-bottom">
        <div class="col-xl-5 col-lg-6 d-none d-lg-block align-self-center">
          <h1 class="display-3">ÖNLEYİCİ AVUKATLIK</h1>
        </div>
        <div class="col-xl-4 col-lg-6 col-7 offset-lg-0 offset-5">
          <div class="card-fluid mb-lg-0 mb-5 text-center word-card">
            <div class="card-body">
              <h4 class="card-title">HESAP VEREBİLİRLİK<br/>ŞEFFAFLIK</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-5">
          <img src="images/dialog-box/call.png" alt="btn-call" class="img-fluid btn-call"/>
        </div>
      </div>
    </div>
  );
}

export default MiddleContainer;