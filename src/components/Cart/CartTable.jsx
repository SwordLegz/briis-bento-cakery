import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function CartTable() {
    const cart = useSelector(store => store.cartReducer[0]);
    const dispatch = useDispatch();
    const history = useHistory();

    // STATE TO STORE TOTAL PRICE //
    // const [total, setTotal] = useState(0);

    // CALCULATES TOTAL PRICE & UPDATES STATE //
    // const calculateTotal = () => {
    //     const newTotal = cart.reduce((total, cakebite) => {
    //         return total + cakebite.price;
    //     }, 0).toFixed(2);
    //     setTotal(newTotal);
    // };

    // RECALCULATES TOTAL WHENEVER CART CHANGES //
    // useEffect(() => {
    //     calculateTotal();
    // }, [cart]);

    // --------- DELETE BUTTON -------- //
    const deleteButton = (cakebite) => {

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
                payload: cakebite
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
    // --------- END DELETE BUTTON -------- //
    

    // --------- EDIT BUTTON -------- //
    const editCakebiteItem = (cakebiteToEdit) => {
        console.log('Editting itemmmm', cakebiteToEdit);

        Swal.fire({
            title: "Editing",
            text: "Edit Foo'!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#04bb99",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, obliterate it from my cart!"
          }).then((result) => {
            if (result.isConfirmed) {
            dispatch({
                type: 'EDIT_CAKEBITE_IN_CART',
                payload: cakebiteToEdit
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
    };
    // --------- END EDIT BUTTON -------- //    


    return (
        <div>
            {/* <table>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((cakebite) => {
                        return (
                            <tr key={cakebite.id}>
                                <td><img className="cakebiteImage"
                                    src={cakebite.image ? cakebite.image : ""}
                                    alt={cakebite.image} /></td>
                                    <br />
                                <td><h4>Flavor:</h4> {cakebite.flavor}
                                    <h4>Quantity:</h4> {cakebite.quantity} 
                                    {/* <h4>Price:</h4> ${cakebite.price.toFixed(2)} */}
                                    {/* </td>
                                    
                                    <button className="btn" onClick={() => editCakebiteItem(cakebite)}>Edit</button>
                                    <button className="btn" onClick={() => deleteButton(cakebite.id)}>Delete</button> */}

                            {/* </tr>
                        )
                    })}
                </tbody>
            </table> */}

            {/* <div className="total">
                <h2>TOTAL: ${total}</h2>
            </div> */}
        </div>
    )
}

export default CartTable;
