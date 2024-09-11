import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import CartTable from "./CartTable";

function Cart() {
    const user = useSelector(store => store.user);
    // const cartTotal = useSelector(store => store.cartTotal);
    // const cart = useSelector(store => store.cart);
    const history = useHistory();
    const dispatch = useDispatch();

    const cartItems = useSelector(store => store.cartReducer);
    // const formattedDate = specificDate.toISOString().split('T')[0];
    const specificDate = new Date();
    
    const handleCart = () => {
     
        const postData = {
            date: specificDate,
            user_id: user.id,
            isDone: false,
            cartItems: cartItems,
        };
        console.log('POST data IN Cart.jsx', postData);
        // yield axios.post('/api/cart')
            dispatch({
                type: 'ORDER_IS_SENT',
                payload: postData
            })

        // history.push('/');
    }

    return (
        <div>
            <figure>
            <h2>Checkout:</h2>
            </figure>
            <div className="showCustomerInfo">
                <figure>
                <h3>Customer Information:</h3>
                {user.first_name}
                <br />
                {/* {user.last_name} */}
                <br />
                {/* {user.username} */}
                <br />
                </figure>
            </div>
            <figure>
            <div>
                <CartTable />
            </div>
            </figure>
            <br />
            <figure>
            <div className="totalCart">
                <button className="btn" onClick={handleCart}>
                    Place Order
                </button>
            </div>
            </figure>
        </div>
    )
}

export default Cart;