import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function CartTable({ item, setItemToEdit }) {
    const cart = useSelector(store => store.cartReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    // State to store the total price
    const [total, setTotal] = useState(0);

    // Calculate the total price and update the state
    const calculateTotal = () => {
        const newTotal = cart.reduce((total, cakebite) => {
            return total + cakebite.price;
        }, 0).toFixed(2);
        setTotal(newTotal);
    };

    // Recalculate total whenever cart changes
    useEffect(() => {
        calculateTotal();
    }, [cart]);

    // --------- DELETE BUTTON -------- //
    const deleteButton = (cakebite) => {

        Swal.fire({
            title: "You're about to obliterate this item from your list!!",
            text: "You won't be able to undo this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#04bb99",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, obliterate it from my shopping list!"
          }).then((result) => {
            if (result.isConfirmed) {
            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: cakebite
            });
              Swal.fire({
                title: "Obliterated!!",
                text: "Your item has been obliterated from your shopping list!",
                icon: "success"
              });
            }
          }).catch(err => {
            alert('Error Deleting Item')
            console.log(err);
        });
    }
        // const postData = {
        //     cartItem: cart.id
        // };
        // dispatch({
        //     type: 'REMOVE_FROM_CART',
        //     payload: postData
        // });
    

    // --------- EDIT BUTTON -------- //
    const editCakebiteItem = () => {
        setItemToEdit(item);
    };



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {/* <th>Name:</th>
                        <th>Quantity:</th>
                        <th>Price:</th> */}
                    </tr>
                </thead>
                <tbody>
                    {cart.map((cakebite, index) => {
                        return (
                            <tr key={cakebite.id}>
                                <td><img className="cakebiteImage"
                                    src={cakebite.image ? cakebite.image : ""}
                                    alt={cakebite.image} /></td>
                                    <br />
                                <td><h4>Flavor:</h4> {cakebite.flavor}
                                    <h4>Quantity:</h4> {cakebite.quantity} 
                                    <h4>Price:</h4> ${cakebite.price.toFixed(2)}
                                    </td>
                                    <button className="btn" onClick={() => editCakebiteItem(cakebite.id)}>Edit</button>
                                    <button className="btn" onClick={() => deleteButton(index)}>Delete</button>

                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="total">
                <h2>TOTAL: ${total}</h2>
            </div>
        </div>
    )
}

export default CartTable;
