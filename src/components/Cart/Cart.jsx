import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Cart() {
    const customerInfo = useSelector(store => store.customerInfo);
    const cartTotal = useSelecto(store => store.cartTotal);
    const cart = useSelector(store => store.cart);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCart = () => {
        let allCakeBites = cart.map((cakebites) => (
            {id: cakebites.id, flavor: flavor}
        ))
        const postData = {
            user_first_name: customerInfo.first_name,
            user_last_name: customerInfo.last_name,
            email: customerInfo.username,
            total: cartTotal,
            cakebites: allCakeBites
        };
        console.log('POST DATA IN CART', postData);
        // yield axios.post('/api/cakebite')
        //     dispatch({
        //         type: 'SET_CAKEBITE',
        //         payload: postData
        //     })

        dispatch(checkoutRequest(postData));
        dispatch(emptyCart());
        dispatch(clearCartTotal());

        history.push('/');
    }

    return (
        <div>
            <h2>Checkout:</h2>
            <div className="showCustomerInfo">
                {user_first_name}
                {user_last_name}
                {email}
            </div>
            <div>
                For {user_first_name}
            </div>
            <div>
                <CartTable />
            </div>
            <div className="totalCart">
                Total: {cartTotal}
                <button className="checkout" onClick={handleCart}>
                    Place Order
                </button>
            </div>
        </div>
    )
}

export default Cart;