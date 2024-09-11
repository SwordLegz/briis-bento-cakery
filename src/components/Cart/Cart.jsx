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
            <h2>Checkout:</h2>
            <div className="showCustomerInfo">
                <h3>Customer Information:</h3>
                {user.first_name}
                <br />
                {user.last_name}
                <br />
                {user.username}
                <br />
            </div>
            <div>

            </div>
            <div>
                <CartTable />
            </div>
            <br />
            <div className="totalCart">
                Total: 
                <button className="checkout" onClick={handleCart}>
                    Place Order
                </button>
            </div>
        </div>
    )
}

export default Cart;