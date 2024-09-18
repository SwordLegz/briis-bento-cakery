import React from 'react';
import { useSelector} from 'react-redux';
import { useState } from 'react';
import './Home.css';

function Home() {
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <figure>
      <h2 className="greeting">Hello there, sweet {user.first_name}!</h2>
      {/* <p>We also offer allergy friendly cake bites!!</p> */}
      <br />
      <img 
        className="img-home"
        src="./images/choco-mint.jpg"
      />
       </figure>
    </div>
  );
}

export default Home;
