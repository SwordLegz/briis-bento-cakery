import React from 'react';
import './Header.css';
import Cart from '../Cart/Cart';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {

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
        <div>
            <div>
                <header className="header">Brii's Bento Cakery
                    
                    
                    
                    <button className="btn"
                            onClick={goToCart}>Cart</button>


                </header>
            </div>
            
    </div>
    )
  }
  
  export default Header;