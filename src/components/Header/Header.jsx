import React from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LogOutButton from "../LogOutButton/LogOutButton";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((store) => store.user);


  return (
    <div>
      <div>
        <header className="header">
          Brii's Bento Cakery
          <div className="button">
            {/* If no user is logged in, show these links */}
            {!user.id && (
              // If there's no user, show login/registration links
              <Link className="navLink" to="/login">
                <button className="btn">Login / Register</button>
              </Link>
            )}

            {/* If a user is logged in, show these links */}
            {user.id && (
              <Link className="navLink" to="/home">
                <LogOutButton />
              </Link>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
