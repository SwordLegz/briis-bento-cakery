import React from 'react';
import {useSelector} from 'react-redux';
import chocoMint from './chocoMint.jpg';

function Home() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Hello there, sweet {user.first_name}!</h2>
      <p>
        The six cake flavor cards shall go here! First, I shall nap.</p>
      <img 
        className="img-home"
        src="./images/choco-mint.jpg"
      // alt="choco mint cakebite"
      />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Home;
