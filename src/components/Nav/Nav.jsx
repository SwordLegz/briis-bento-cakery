import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      {/* <Link to="/home">
        <h2 className="nav-title">Brii's Bento Cakery</h2>
      </Link> */}
  
      <Link className="navLink" to="/home">
        <button className="btn">
              Home
              </button>
            </Link>
      <Link className="navLink" to="/shop">
        <button className="btn">
          Shop Cake Bites
          </button>
            </Link>
      <Link className="navLink" to="/events">
        <button className="btn">
          Events
          </button>
            </Link>
      <Link className="navLink" to="/about">
        <button className="btn">
          About the Cakery
          </button>
            </Link>
      <Link className="navLink" to="/contact">
        <button className="btn">
          Contact Us
          </button>
            </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            <button className="btn">
            Login / Register
            </button>
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <LogOutButton />
          </>
        )}

        
      </div>
    </div>
  );
}

export default Nav;
