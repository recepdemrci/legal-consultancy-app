import React from "react";

function FirmName(props) {
  return (
    <div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-10">
          <h1 class="display-1">{props.name}</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-10">
          <h3>HUKUK</h3>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-1 col-2">
          <div class="border-top"></div>
        </div>
      </div>
    </div>
  );
}

export default FirmName;
