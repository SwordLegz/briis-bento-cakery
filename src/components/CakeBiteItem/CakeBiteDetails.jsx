import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './CakeBiteDetails.css';
import Swal from "sweetalert2";


function CakeBiteDetails({getCakeBite, cakeBite}) {
    const history = useHistory();
    const dispatch = useDispatch();
    // 1. useSelector to get the shopReducer data
    const shopReducer = useSelector(store => store.shopReducer)
    const user = useSelector(store => store.user)
    let { id } = useParams();
    let cakeBiteId = Number(id);
    const [selectedQuantity, setSelectedQuantity] = useState(25);
    const [adjustedPrice, setAdjustedPrice] = useState(34.99);


    // --------- FIND THE CAKEBITE ITEM BASED ON THE ID ---------//
    let cakeBiteItem = shopReducer.find(item => item.id === cakeBiteId) || {};
    

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

        // if (selectedQuantity === 25) {
        //     newPrice = basePrice;
        // } else if (selectedQuantity === 50) {
        //     newPrice = basePrice + 24.99;
        // } else if (selectedQuantity === 75) {
        //     newPrice = basePrice + 54.98;
        // } else if (selectedQuantity === 100) {
        //     newPrice = basePrice + 84.97;
        // } else {
        //     newPrice = basePrice;
        // }

        setAdjustedPrice(newPrice);
    }, [selectedQuantity]);

    const handleChange = (event) => {
        // setSelectedQuantity(event.target.value);
        const newQuantity = Number(event.target.value);
        setSelectedQuantity(newQuantity);
    }
// ---------- END PRICE ADJUSTOR BASED ON QUANTITY SELECTED ---------- //


    // ---------- SENDS ITEMS TO CART ---------- //
    const addToCartButton = () => {
        // let quantity = getRadioValue();
        let cakebiteToAdd = {
            user_id: user.id,
            flavor_id: cakeBiteItem.id,
            flavor: cakeBiteItem.flavor,
            quantity: selectedQuantity,
            image: cakeBiteItem.image,
            price: adjustedPrice.toFixed(2)
        };
        console.log('Sending to CART from cakebitedetails.jsx:', cakebiteToAdd);
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${selectedQuantity} ${cakeBiteItem.flavor} cakebites have been added to your cart!!`,
            showConfirmButton: false,
            timer: 2000
          }).then(() => {
            dispatch({
                type: 'ADD_CAKE_TO_CART',
                payload: cakebiteToAdd
            }

                // {
                // type: 'ADD_ORDER_TO_CART',
                // payload: [cakebiteToAdd, adjustedPrice]
        // }
        );
    })
    }

    
    // ---------- END SENDS ITEMS TO CART ---------- //


// ---------- NEW GO TO CART BUTTON ---------- //
    const goToCartButton = () => {
        history.push('/cart');
    
    }
    // ---------- END BACK TO SHOP BUTTON ---------- //


// ---------- NEW BACK TO SHOP BUTTON ---------- //
    const backToShopButton = () => {
        history.push('/shop');
    }
// ---------- END BACK TO SHOP BUTTON ---------- //



    // ---------- FOR QUANTITY INPUT CHANGES ---------- //
    // const getRadioValue = () => {
    //     let ele = document.getElementsByName('method');
    //     console.log('radioVALUE in CakeBiteDetails.jsx:', ele)
    //     for (let i = 0; i < ele.length; i++) {
    //         if (ele[i].checked) {
    //         return ele[i].value
    //     }}
    //     return '';
    // }
    // ---------- END QUANTITY INPUT CHANGES ---------- //


    // ---------- RETURN THE STUFF---------- //

    return (
        <>
        <div>
            <figure>
            <h1>{cakeBiteItem.flavor}</h1>
            <img className="cakebiteImage"
                 src={cakeBiteItem.image || ""}
                 alt={cakeBiteItem.flavor} />
            <br />
            <h2>Price: ${adjustedPrice.toFixed(2)} </h2>
            <p>{cakeBiteItem.description}</p>
            </figure>

            <figure>
            <div className='method'>
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
                    </div>
                    </figure>
            <figure>
                 <button className="btn"
                        onClick={addToCartButton}>
                            Add to Cart
                </button> 
            </figure>
            
            <figure>
                <button className="btn"
                        onClick={backToShopButton}>
                            Back to Shop
                </button>
            <figure />
                <button className="btn"
                        onClick={goToCartButton}>
                            Go To Cart
                </button>
            </figure>
            
            
        </div>
        </>
    );
}
// ---------- RETURN THE STUFF---------- //

export default CakeBiteDetails;

// -------------- OLD CODE, MIGHT WORK LATER?? -------------- //


    // ---------- REMOVE FROM CART?? ---------- //

     // const removeFromCart = () => {
    //     let cartTotaltoRemove = cakeBiteItem.flavor;
    //     let cakebiteToRemove = cakeBiteItem.id;

    //     dispatch({
    //         type: 'REMOVE_CART_TOTAL',
    //         payload: cartTotaltoRemove
    //     })
    //     dispatch({
    //         type: 'REMOVE_FROM_CART',
    //         payload: cakebiteToRemove
    //     })
    //     setButtonDecision(true);
    // }

    // }
    // ---------- END QUANTITY INPUT CHANGES ---------- //

    // ---------- PRICE ADJUSTOR BASED ON QUANTITY SELECTED ---------- //
    
        
    // }
    // }