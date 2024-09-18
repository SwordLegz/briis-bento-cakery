import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
 
   return (
     <div className="container">
      
       <h2 className="greeting">Hello there, sweet friend!</h2>
       {/* <p>We also offer allergy friendly cake bites!!</p> */}
       <img 
         className="img-home"
         src="./images/choco-mint.jpg"
       />
     </div>
   );
 }

export default LandingPage;
