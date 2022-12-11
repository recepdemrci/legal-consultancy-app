import React from "react";
import "assets/styles/HomeContainer.css";
import FirmLogo from "components/Firm/FirmLogo";
import FirmName from "components/Firm/FirmName";

function HomeContainer() {
  return (
    <div class="home-container" id="home-container">
      <a class="home-side-top" href="">
        İŞ HUKUKU
      </a>
      <a class="home-side-middle" href="">
        TİCARET HUKUKU
      </a>
      <a class="home-side-bottom" href="">
        CEZA HUKUKU
      </a>

      <div class="home-title">
        <div class="container text-center">
          <FirmLogo />
          <FirmName name="HANEDAN" />
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
