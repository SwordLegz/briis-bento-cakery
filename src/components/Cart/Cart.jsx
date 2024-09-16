import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";


function Cart() {
    const user = useSelector(store => store.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const [editItem, setEditItem] = useState();
    const [selectedQuantity, setSelectedQuantity] = useState(25);
    const [adjustedPrice, setAdjustedPrice] = useState(34.99);
    // 

    // ------ USE SELECTOR FINDS CART REDUCER DATA BASED ON THE ID ------//
    const cartItems = useSelector(store => store.cartReducer);
    cartItems.sort(function(a, b) { 
        return a.id - b.id  ||  a.name.localeCompare(b.name);
      });
    const specificDate = new Date();
    console.log('Cart items in Cart.jsx:', cartItems);

    // --------- USE EFFECTS --------- //
    useEffect(() => {
        console.log('Fetching cart items');
        dispatch({
            type: 'POPULATE_CART'
        })
    }, [dispatch])

    useEffect(() => {
        console.log('Cart items updated:', cartItems);
        calculateTotal();
    }, [cartItems]);

    // --------- ADJUSTS DATE STAMP FOR DATABASE --------- //
    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    // --------- CALCULATES TOTAL CART BASED ON QUANTITIES SELECTED --------- //
    const calculateTotal = () => {
        if (cartItems.length > 0) {
        const newTotal = cartItems.reduce((total, cakebite) => {
            const price = cakebite.price;
            console.log('price', price)
            return total + price;
        }, 0).toFixed(2);
        setTotal(newTotal);
        }
    };
    

    // --------- EDIT BUTTON --------- //
    const handleChange = (event) => {
        const newQuantity = Number(event.target.value);
        setSelectedQuantity(newQuantity);
        // Update adjusted price based on new quantity
        const basePrice = 34.99;
        let newPrice;
        
        switch (newQuantity) {
            case 25: newPrice = basePrice; break;
            case 50: newPrice = basePrice + 24.99; break;
            case 75: newPrice = basePrice + 54.98; break;
            case 100: newPrice = basePrice + 84.97; break;
            default: newPrice = basePrice;
        }
        
        setAdjustedPrice(newPrice);
    };

    const editButton = (cakebite) => {
        setEditItem(cakebite);
        setSelectedQuantity(cakebite.quantity);
        handleChange({ target: { value: cakebite.quantity } });
    };

    const handleSave = async () => {
        if (editItem) {
        const updatedItem = { ...editItem, quantity: selectedQuantity, price: adjustedPrice };
        console.log('Saving item:', updatedItem);
        
            dispatch({
                type: 'EDIT_ITEM_REQUEST',
                payload: updatedItem
            });
            setEditItem(null);
        }
    };

    const handleCancel = () => {
        setEditItem(null);
        setSelectedQuantity(25);
        setAdjustedPrice(34.99);
    };

    // --------- END EDIT BUTTON --------- //


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
    // --------- END DELETE BUTTON --------- //

    
    // --------- SENDS ORDER TO ORDERS/ORDER_ITEMS DB ---------//
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
                    // text: "If you'd like to make changes to your order, you can do so through your profile!",
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
                            {cartItems && cartItems.length > 0 ? cartItems.map((cakebite) => (
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
                                        
                                    {editItem && editItem.id === cakebite.id ? (
                                        <div>
                                            <h3>Edit Item</h3>
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="quantity25"
                                                    name="quantity"
                                                    value={25}
                                                    checked={selectedQuantity === 25}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="quantity25">25</label><br />
                                                <input
                                                    type="radio"
                                                    id="quantity50"
                                                    name="quantity"
                                                    value={50}
                                                    checked={selectedQuantity === 50}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="quantity50">50</label><br />
                                                <input
                                                    type="radio"
                                                    id="quantity75"
                                                    name="quantity"
                                                    value={75}
                                                    checked={selectedQuantity === 75}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="quantity75">75</label><br />
                                                <input
                                                    type="radio"
                                                    id="quantity100"
                                                    name="quantity"
                                                    value={100}
                                                    checked={selectedQuantity === 100}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="quantity100">100</label><br />
                                            </div>
                                            
                                            <h4>Adjusted Price: ${adjustedPrice.toFixed(2)}</h4>
                                            <button className="btn" onClick={handleSave}>Save Changes</button>
                                            <button className="btn" onClick={handleCancel}>Cancel</button>
                                        </div>
                                        ) : (
                                            <div>
                                                <button className="btn" onClick={() => editButton(cakebite)}>Edit</button>
                                                <button className="btn" onClick={() => deleteButton(cakebite.id)}>Delete</button>
                                            </div>
                                    )}
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

