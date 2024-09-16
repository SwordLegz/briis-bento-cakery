import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
// import { useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
   // this component doesn't do much to start, just renders some user reducer info to the DOM
  //  const user = useSelector((store) => store.user);
   // const [openModal, setOpenModal] = useState(false);
 
   return (
     <div className="container">
      
       <h2>Hello there, sweet friend!</h2>
       {/* <p>We also offer allergy friendly cake bites!!</p> */}
       <img 
         className="img-home"
         src="./images/choco-mint.jpg"
       />
        
     </div>
   );
 }

export default LandingPage;
