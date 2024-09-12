import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import CartTable from "./CartTable";
import Swal from "sweetalert2";


function Cart() {
    const user = useSelector(store => store.user);
    const history = useHistory();
    const dispatch = useDispatch();

    const cartItems = useSelector(store => store.cartReducer);
    // const formattedDate = specificDate.toISOString().split('T')[0];
    const specificDate = new Date();
    
    const handleCart = () => {
     
        Swal.fire({
            title: "Send Order?",
            text: "You are about to submit your order!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Wait, don't send order yet!",
            confirmButtonText: "Yes, send my order plz!"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'ORDER_IS_SENT',
                payload: postData
                });
                Swal.fire({
                    title: "Thankiezzz!",
                    text: "If you'd like to make changes to your order, you can do so through your profile!",
                    imageUrl: "../images/octopus.jpeg",
                    imageWidth: 400,
                    imageHeight: 400,
                    // imageAlt: "Custom image"
                  });
                  history.push('/');
            }
          }).catch(error => {
            alert('ERRORRR sending ORDER in Cart.jsx:', error);
          });

    // THIS IS THE DATA BEING SENT TO THE DATABASE //
        const postData = {
            date: specificDate,
            user_id: user.id,
            isDone: false,
            cartItems: cartItems,
        };
        console.log('POST data IN Cart.jsx', postData);

        
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