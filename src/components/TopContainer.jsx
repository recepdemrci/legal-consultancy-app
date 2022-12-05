import React from 'react';
import '../assets/styles/TopContainer.css';
import TextBackground from './TextBackgroud';
import Pen from './Pen';
import Card from './Card';

function TopContainer() {
  return (
    <div class="top-container" id="top-container">
      <div class="row">
        <TextBackground col='col' text='TİCARET HUKUKU' />
      </div>
      <Pen />
      <div class="row row-top">
        <div class="col-xl-6 col-lg-8 col-10">
          <img src="images/dialog-box/mail.png" alt="btn-mail" class="img-fluid mb-5 btn-mail" />   
          <img src="images/top-container.png" alt="top-container-img" class="img-fluid mb-lg-0 mb-5" />
        </div>
        <div class="col-xl-6 col-lg-8 col-10 mb-lg-0 mb-5 offset-xl-0 offset-lg-4">
          <Card 
            name='service-card'
            title='HİZMETLERİMİZ' 
            line={true}
            body={
              <p>Together we represent more than 60 years of experience in claims-expertise: to prevent, to investigate and to defend.<br />
                We can help you with the whole package or just with the elements you need:<br />
                – coverage<br />
                – prevention<br />
                – forensic investigation<br />
                – technical investigation<br />
                – material and economic damage<br />
                – practical solutions<br />
                – legal assistance
              </p>
            } 
          />
        </div>
      </div>
      <div class="row row-middle">
        <div class="col-lg-5 col-10 text-center offset-lg-3">
          <Card 
            name='slogan-card'
            title='"SAVUNULMANIN SAVUNULMASI" GEREKTİĞİNE İNANMAKTAYIZ.'
            body={
              <p>NET VE ANLAŞILIR OLMAYA ÇALIŞIYORUZ.</p>
            }
          />
        </div>
        <div class="col d-none d-lg-block text-center">
          <img src="images/top-container-clip.png" alt="clip-image" class="img-fluid clip" />
          <h4 class="display-4 text-end">İCRA ve İFLAS HUKUKU</h4>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;