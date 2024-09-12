import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


import AboutPage from '../AboutPage/AboutPage';
import Events from '../Events/Events';
import Contact from '../Contact/Contact';
import ShopCakeBites from '../ShopCakeBites/ShopCakeBites';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import CakeBiteDetails from '../CakeBiteItem/CakeBiteDetails';
// import Modal from '../Modal/Modal';

import './App.css';
import RegisterForm from '../RegisterForm/RegisterForm';


function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  // const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    
    <Router>
      <div>
        
        <Header />
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:5173/about will show the about page. */}
          
          <Route
          exact path='/'>
            <LandingPage />
          </Route>

          // CANNOT ACCESS UNLESS LOGGED IN //
          <Route exact path="/home">
          {user.id ? <Home /> : <LandingPage />}
          </Route>
          // END //

          <Route exact path="/shop">
            <ShopCakeBites />
          </Route>
          
          
          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/events">
            <Events />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        

          {/* For protected routes, the view could show one of 
            several things on the same route.
            Visiting localhost:5173/home will show the UserPage 
            if the user is logged in.
            If the user is not logged in, the ProtectedRoute will
             show the LoginPage (component).
            Even though it seems like they are different pages, 
            the user is always on localhost:5173/user */}
          
          // logged in shows UserPage else shows LoginPage
          <ProtectedRoute exact path="/home">
            <Home />
          </ProtectedRoute>

          // logged in shows InfoPage else shows LoginPage
          <ProtectedRoute exact path="/cart">
            <Cart />
          </ProtectedRoute>

          // logged in shows InfoPage else shows LoginPage
          <ProtectedRoute exact path="/shop/:id">
            <CakeBiteDetails />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /home page
              <Redirect to="/home" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route exact path="/registration">
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /home page
              <Redirect to="/home" />
              :
              // Otherwise, show the registration page
              <RegisterForm />
            }
          </Route>

          <Route
            exact
            path="/home">
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /home page
              <Redirect to="/home" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
