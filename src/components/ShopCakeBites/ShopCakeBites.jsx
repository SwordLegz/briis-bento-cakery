import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function ShopCakeBites({getFlavor, flavor}) {
    const [buttonDecision, setButtonDecision] = useState(true)
    const dispatch = useDispatch();

    let cart = useSelector(store => store.cart)
    let buttonAction = true;
    let decidedButton;

        const addToCart = () => {
            let cartTotalToAdd = flavor.name;
            let cakeBiteToAdd = {id: flavor.id, flavor: flavor.flavor, quantity: 1}
            
            dispatchEvent({
                type: 'ADD_TO_CART',
                payload: cakeBiteToAdd
            })
            dispatchEvent({
                type: 'ADD_TO_CART',
                payload: cakeBiteToAdd
            })
            setButtonDecision(false);
        }

        const removeFromCart = () => {
            let cakeBiteToRemove = flavor.id
            let cartTotalToRemove = flavor.name
            
            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: cakeBiteToRemove
            })

            dispatch({
                type: 'REMOVE_CART_TOTAL',
                payload: cartTotalToRemove
            })
            setButtonDecision(true);
        }

        return (
            <div id="cakebite-item">
                <img id="cakebite-img" src={flavor.image} />
                <h3>{flavor.name}</h3>
                <p className="flavor-desc">{flavor.description}</p>
                {buttonDecision ? <button onClick={addToCart}>Add to Cart</button> : <button onClick={removeFromCart}>Remove from Cart</button>}
            </div>
        )
}

export default ShopCakeBites;