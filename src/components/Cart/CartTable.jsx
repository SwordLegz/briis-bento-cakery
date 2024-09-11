import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function CartTable() {
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
                    {cart.map((cakebite) => {
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



// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";

// function CartTable() {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const cart = useSelector(store => store.cartReducer);
//     // STATE TO STORE THE INDIVIDUAL PRICES //
//     const [prices, setPrices] = useState([]);
//     // CALCULATE THE TOTAL PRICE //
//     const calculateTotal = () => {
//         return prices.reduce((total, price) => total + price, 0).toFixed(2);
//     };

//     useEffect(() => {
//         const newPrices = cart.map(cakebite => cakebite.price * cakebite.quantity);
//         setPrices(newPrices);
//     }, [cart]);

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th></th>
//                     <th>Name:</th>
//                     <th>Quantity:</th>
//                     <th>Price:</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {cart.map((cakebite) => {
//                     return (
//                         <tr key={cakebite.id}>
                            
//                             <td><img className="cakebiteImage"
//                                     src={cakebite.image ? cakebite.image : ""}
//                                     alt={cakebite.image}/></td>
//                             <td>{cakebite.flavor}</td>
//                             <td>{cakebite.quantity}</td>
//                             <td>${cakebite.price.toFixed(2)}</td>
//                         </tr>
//                     )
//                 })}
//             </tbody>

//             <div className="total">
//                 <h2>TOTAL: ${calculateTotal()}</h2>
//             </div>

//         </table>
//     )
// }

// export default CartTable;