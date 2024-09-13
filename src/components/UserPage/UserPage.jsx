import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

// function Home() {
//   // this component doesn't do much to start, just renders some user reducer info to the DOM
//   const user = useSelector((store) => store.user);
//   return (
//     <div className="container">
//       <h2>Hello there, sweet {user.first_name}!</h2>
//       <p>The six cake flavor cards shall go here! First, I shall nap.</p>
//       {/* <LogOutButton className="btn" /> */}
//     </div>
//   );
// }

// this allows us to use <App /> in index.js
export default Home;


// REPURPOSE AS PROFILE PAGE FOR EDITING AND DELETING ORDERS //