import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Nav() {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
    const history = useHistory();

    const goToCart = () => {
        history.push('/cart');
        dispatch({
            type: 'GO_TO_CART',
            payload: {}
        });
    }

  return (
    <div className="nav">
  <br />
      <Link className="navLink" to="/">
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

      <Link className="navLink" to="/cart">
        <button className="btn"
             onClick={goToCart}>Cart</button>
      </Link>
            
      <div>
        {/* If no user is logged in, show these links */}
        {/* {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            <button className="btn">
            Login / Register
            </button>
          </Link>
        )} */}
        

        {/* If a user is logged in, show these links */}
        {/* {user.id && (
          <Link className="navLink" to="/home">
            <LogOutButton />
          </Link>
        )} */}

        
      </div>
    </div>
  );
}

export default Nav;
