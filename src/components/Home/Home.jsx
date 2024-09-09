import React from 'react';
import { useSelector} from 'react-redux';
import { useState } from 'react';
// import Modal from '../Modal/Modal';

function Home() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  // const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container">
      <h2>Hello there, sweet {user.first_name}!</h2>
      <p>We also offer allergy friendly cake bites!!</p>
      <img 
        className="img-home"
        src="./images/choco-mint.jpg"
      />
       {/* <div>
            <button className="modalBtn" onClick={() => setOpenModal(true)}>Modal</button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}/>
          </div> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Home;
