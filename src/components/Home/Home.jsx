import React from 'react';
import { useSelector} from 'react-redux';
import { useState } from 'react';
// import Modal from '../Modal/Modal';
import './Home.css';

function Home() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  // const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container">
      <figure>
      <h2>Hello there, sweet {user.first_name}!</h2>
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

// this allows us to use <App /> in index.js
export default Home;
