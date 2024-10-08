import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './CakeBiteDetails.css';
import Swal from "sweetalert2";


function CakeBiteDetails({ cakeBite, onClose}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const [selectedQuantity, setSelectedQuantity] = useState(25);
    const [adjustedPrice, setAdjustedPrice] = useState(34.99);

    // --------- FIND THE CAKEBITE ITEM BASED ON THE ID ---------//
    // let cakeBiteItem = shopReducer.find(item => item.id === cakeBiteId) || {};


    // ---------- PRICE ADJUSTOR BASED ON QUANTITY SELECTED ---------- //
    useEffect(() => {
        const basePrice = 34.99;
        let newPrice;

        switch (selectedQuantity) {
            case 25: newPrice = basePrice; break;
            case 50: newPrice = basePrice + 24.99; break;
            case 75: newPrice = basePrice + 54.98; break;
            case 100: newPrice = basePrice + 84.97; break;
            default: newPrice = basePrice;
        }

        setAdjustedPrice(newPrice);
    }, [selectedQuantity]);

    const handleChange = (event) => {
        const newQuantity = Number(event.target.value);
        setSelectedQuantity(newQuantity);
    }
// ---------- END PRICE ADJUSTOR BASED ON QUANTITY SELECTED ---------- //

    // ---------- ALLERGY SELECTOR  ---------- //





    // ---------- SENDS ITEMS TO CART ---------- //
    const addToCartButton = () => {
        // let quantity = getRadioValue();
        let cakebiteToAdd = {
            user_id: user.id,
            flavor_id: cakeBite.id,
            flavor: cakeBite.flavor,
            quantity: selectedQuantity,
            image: cakeBite.image,
            price: adjustedPrice.toFixed(2)
        };
        console.log('Sending to CART from cakebitedetails.jsx:', cakebiteToAdd);
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${selectedQuantity} ${cakeBite.flavor} cakebites have been added to your cart!!`,
            showConfirmButton: false,
            timer: 2000
          }).then(() => {
            dispatch({
                type: 'ADD_CAKE_TO_CART',
                payload: cakebiteToAdd
            }
        );
    })
    }
    // ---------- END SENDS ITEMS TO CART ---------- //


    // ---------- GO TO CART BUTTON ---------- //
    const goToCartButton = () => {
        history.push('/cart');
    }
    // ---------- END BACK TO SHOP BUTTON ---------- //


    // ---------- RETURN THE STUFF---------- //
    return (
        <>
        <div className="cakebite-details">
            <button className="modal-close" onClick={onClose}>X</button>
                <figure>
                <tbody>
                    <td></td>
                    <h1 className="greeting2">{cakeBite.flavor}</h1>
                        <img className="cakebite-image"
                             src={cakeBite.image || ""}
                             alt={cakeBite.flavor} />
                    <br />
                   
                
                    <td>
                    <h3>Quantity:</h3>
                            <input type="radio"
                                   id="quantity25" 
                                   name="method" 
                                   value={25} 
                                   checked={selectedQuantity === 25} 
                                   onChange={handleChange} />
                            <label htmlFor="quantity25">25</label><br></br>
                            <input type="radio" 
                                   id="quantity50" 
                                   name="method" 
                                   value={50} 
                                   checked={selectedQuantity === 50}
                                   onChange={handleChange} />
                            <label htmlFor="quantity50">50</label><br></br>
                            <input type="radio" 
                                   id="quantity75"
                                   name="method" 
                                   value={75}
                                   checked={selectedQuantity === 75} 
                                   onChange={handleChange} />
                            <label htmlFor="quantity75">75</label><br></br>
                            <input type="radio"
                                   id="quantity100"
                                   name="method" 
                                   value={100}
                                   checked={selectedQuantity === 100} 
                                   onChange={handleChange} />
                            <label htmlFor="quantity100">100</label><br></br>

                            {/* <label htmlFor="dairyFree">
                                <input type="checkbox" 
                                       name="eggFree" 
                                       id="eggFree" />Egg Free
                            </label> */}
                {/* </div> */}
                
                </td>
                </tbody>
            </figure>

            <tbody>
                <td>
                <p className="description">{cakeBite.description}</p>
                </td>
            </tbody>

            <figure>
                <tbody>
                 <td>
                 <button className="modal-btn"
                        onClick={addToCartButton}>
                            Add to Cart
                </button> 
                <button className="modal-btn"
                        onClick={goToCartButton}>
                            Go to Cart
                </button> 
                </td>
                    <td>
                        <h2 className="price">Price: ${adjustedPrice.toFixed(2)}</h2>
                    </td>
                </tbody>
            </figure>
        </div>
        </>
    );
}
// ---------- RETURN THE STUFF---------- //

export default CakeBiteDetails;

// -------------- OLD CODE, MIGHT WORK LATER?? -------------- //
