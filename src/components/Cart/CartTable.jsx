import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function CartTable() {
    const cart = useSelector(store => store.cartReducer);
    // console.log('cart:', cart);
    
    // console.log(typeof cart)
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <table>
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>Image:</th>
                    <th>Quantity:</th>
                    <th>Total Price:</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((cakebite) => {
                    return (
                        <tr key={cakebite.id}>
                            <td>{cakebite.flavor}</td>
                            <td><img className="cakebiteImage"
                                    src={cakebite.image ? cakebite.image : ""}
                                    alt={cakebite.image}/></td>
                            <td>{cakebite.quantity}</td>
                            <td>{cakebite.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default CartTable;