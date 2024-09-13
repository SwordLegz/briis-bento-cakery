import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
// import CartTable from "./CartTable";
import { useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function Cart() {
    const user = useSelector(store => store.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    // const cart = useSelector(store => store.cartReducer[0]);
    // USE SELECTOR GETS CART REDUCER DATA
    // const cartReducer = useSelector(store => store.cartReducer);
    const cartItems = useSelector(store => store.cartReducer);
    const specificDate = new Date();
    // const formattedDate = specificDate.toISOString().split('T')[0];
console.log('Current cart state in cart.jsx:', useSelector(store => store.cartReducer));
    // let { id } = useParams();
    // let cakeBiteId = Number(id);
    // const [total, setTotal] = useState(0);
    console.log('Cart items in Cart.jsx:', cartItems);

    const calculateTotal = () => {
        if (cartItems.length > 0) {
        const newTotal = cartItems[0].reduce((total, cakebite) => {
            const price = cakebite.price;
            console.log('price', price)
            return total + price;
        }, 0).toFixed(2);
        setTotal(newTotal);
    }
        console.log(total)

        // const newTotal = cartItems.reduce((total, cakebite) => {
        //     return total + cakebite.price * cakebite.quantity;
        // }, 0).toFixed(2);
        // setTotal(newTotal);
    };

    useEffect(() => {
        calculateTotal();
    }, [cartItems]);

    useEffect(()=>{
        dispatch({type: 'POPULATE_CART'})
    },[])

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    // --------- FIND THE CART ITEM BASED ON THE ID ---------//
    // let cartItem = cartReducer.find(item => item.id === cakeBiteId) || {};


    // --------- DELETE BUTTON --------- //

    const deleteButton = (cakebiteId) => {

        Swal.fire({
            title: "You're about to obliterate this item from your cart!!",
            text: "You won't be able to undo this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#04bb99",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, obliterate it from my cart!"
          }).then((result) => {
            if (result.isConfirmed) {
            dispatch({
                type: 'REMOVE_ITEM_FROM_CART',
                payload: cakebiteId
            });
              Swal.fire({
                title: "Obliterated!!",
                text: "Your item has been obliterated from your cart!",
                icon: "success"
              });
            }
          }).catch(err => {
            alert('Error Deleting Item')
            console.log(err);
        });
    }


    

    const handleCart = () => {

        // THIS IS THE DATA BEING SENT TO THE DATABASE //
        const postData = {
            date: formatDate(specificDate),
            user_id: user.id,
            pending: false,
            cartItems: cartItems,
        };
        console.log('POST data IN Cart.jsx', postData);
     
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
                {/* <CartTable  /> */}
                <div className="total">
                <h2>TOTAL: ${total}</h2>
            </div>
                <table>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                            {cartItems && cartItems.length > 0 ? cartItems[0].map((cakebite) => (
                                <tr key={cakebite.id}>
                                    <td>
                                        <img className="cakebiteImage"
                                            src={cakebite.image || ""}
                                            alt={cakebite.flavor} />
                                    </td>
                                    <td>
                                        <h4>Flavor:</h4> {cakebite.flavor}
                                        <h4>Quantity:</h4> {cakebite.quantity}
                                        <h4>Price:</h4> ${parseFloat(cakebite.price).toFixed(2)}
                                    </td>
                                    <td>
                                        <button className="btn" onClick={() => deleteButton(cakebite.id)}>Delete</button>
                                    </td>
                                </tr>
                            )) : <tr><td colSpan="3">No items in the cart.</td></tr>}
                        </tbody>
            </table>

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


// ---------- OLD DELETE FUNCTION ----------- //

    // const deleteButton = ()  => {
    //     let cakeBiteToDelete = {flavor_id: cartItem.id, flavor: cartItem.flavor, image: cartItem.image}
    
    //     Swal.fire({
    //         title: "Delete from cart?",
    //         text: "ou are about to delete these from your cart!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         cancelButtonText: "Wait, don't delete!",
    //         confirmButtonText: "Yes, delete plz!"
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //             dispatch({
    //                 type: 'DELETE_ITEM_FROM_CART',
    //             payload: postData
    //             });
    //             // Swal.fire({
    //             //     title: "Thankiezzz!",
    //             //     text: "If you'd like to make changes to your order, you can do so through your profile!",
    //             //     imageUrl: "../images/octopus.jpeg",
    //             //     imageWidth: 400,
    //             //     imageHeight: 400,
    //             //   });
    //             //   history.push('/');
    //         }
    //       }).catch(error => {
    //         alert('ERRORRR sending ORDER in Cart.jsx:', error);
    //       });
    // }
