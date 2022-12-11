import React from "react";
import penImg from "assets/images/top-container-pen.png";

function Pen() {
  return (
    <div class="row align-top row-pen">
      <div class="col-xl-4 col-8">
        <img src={penImg} alt="pen-image" class="img-fluid" />
      </div>
      <div class="col-xl-6 col-4 align-self-center">
        <hr class="hr line" />
      </div>
    </div>
  );
}

export default Pen;
