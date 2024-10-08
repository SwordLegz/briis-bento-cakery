import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="container">

      <figure>
        <div>
          <h2 className="greeting">
            <u>Who is Brii's Bento Cakery:</u>
            
          </h2>
          <br />
          <br />
          <img className="brii-kid" src="./images/brii-kid.jpg" />
          <img className="brii-adult" src="./images/brii-adult.jpeg" />
        </div>
      </figure>

      <figure>
      <div className="about">
        <p>What started as a simple experiment in 2011 has blossomed into a passion for creating 
          delightful cake bites. Growing up, I was inspired by my grandma and mom, who filled our 
          home with the comforting aroma of fresh-baked treats. Their love for baking ignited my 
          own culinary journey. Over the years, I've expanded my collection, experimenting with a 
          variety of flavors and perfecting options for gluten-free, dairy-free, and vegan diets. 
          Each bite is crafted with love and creativity, reflecting both my family's love of sweet 
          treats and my ongoing exploration of new and exciting tastes.

          At Brii's Bento Cakery, we pride ourselves on offering customized, beautifully decorated 
          cake bites tailored to your special occasions. Whether it's a birthday party or baby shower, 
          wedding or graduation, or even a holiday celebration, we're here to add a sweet touch to your 
          event with our unique and delicious treats.</p>
          <p>Thank you for letting us be a part of your sweet moments!</p>
      </div>
      </figure>
    </div>
  );
}

export default AboutPage;
