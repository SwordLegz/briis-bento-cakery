import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './CakeBiteDetails.css';
// import Modal from "../Modal/Modal";
// import './App.css';


function CakeBiteDetails({getCakeBite, cakeBite}) {
    const history = useHistory();
    const dispatch = useDispatch();
    let { id } = useParams();
    let cakeBiteId = Number(id);
    
    const [selectedQuantity, setSelectedQuantity] = useState(25);
    const [adjustedPrice, setAdjustedPrice] = useState(34.99);
    // 1. useSelector to get the shopReducer data
    const shopReducer = useSelector(store => store.shopReducer)


    // --------- FIND THE CAKEBITE ITEM BASED ON THE ID ---------//
    let cakeBiteItem = shopReducer.find(item => item.id === cakeBiteId) || {};
    

    // ---------- PRICE ADJUSTOR BASED ON QUANTITY SELECTED ---------- //
    useEffect(() => {
        const basePrice = 34.99;
        let newPrice;

        if (selectedQuantity === 25) {
            newPrice = basePrice;
        } else if (selectedQuantity === 50) {
            newPrice = basePrice + 24.99;
        } else if (selectedQuantity === 75) {
            newPrice = basePrice + 54.98;
        } else if (selectedQuantity === 100) {
            newPrice = basePrice + 84.97;
        } else {
            newPrice = basePrice;
        }

        setAdjustedPrice(newPrice);
    }, [selectedQuantity]);

    const handleChange = (event) => {
        // setSelectedQuantity(event.target.value);
        const newQuantity = Number(event.target.value);
        setSelectedQuantity(newQuantity);
    }
// ---------- END PRICE ADJUSTOR BASED ON QUANTITY SELECTED ---------- //


    // ---------- BACK TO SHOP BUTTON ---------- //
    const backToShop = () => {
        history.push('/shop');
        dispatch({
            type: 'BACK_TO_SHOP',
            payload: {}
        });
    }
    // ---------- END BACK TO SHOP BUTTON ---------- //


    // ---------- SENDS ITEMS TO CART ---------- //
    const addToCart = () => {
        let quantity = getRadioValue();
        let cakebiteToAdd = {id: cakeBiteItem.id, flavor: cakeBiteItem.flavor, quantity: selectedQuantity, image: cakeBiteItem.image, price: adjustedPrice};

        dispatch({
            type: 'ADD_ORDER_TO_CART',
            payload: [cakebiteToAdd, adjustedPrice]
        })
    }
    // ---------- END SENDS ITEMS TO CART ---------- //


    // ---------- FOR QUANTITY INPUT CHANGES ---------- //
    const getRadioValue = () => {
        let ele = document.getElementsByName('method');
        console.log('radioVALUE in CakeBiteDetails.jsx:', ele)
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
            return ele[i].value
        }}
        return '';
    }
    // ---------- END QUANTITY INPUT CHANGES ---------- //


    // ---------- RETURN THE STUFF---------- //

    return (
        <>
        <button className="back-to-shop"
        onClick={backToShop}>
            Back to Shop
        </button>

        <div>
            <figure>
            <h1>{cakeBiteItem.flavor}</h1>
            <img className="cakebiteImage"
                 src={cakeBiteItem.image ? cakeBiteItem.image : ""}
                 alt={cakeBiteItem.flavor} />
            <br />
            <h2>Price: ${adjustedPrice.toFixed(2)} </h2>
            <h3>Description:</h3>
            <p>{cakeBiteItem.description}</p>
            </figure>
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
            <figure>
                 <button className="addToCart"
                        onClick={addToCart}>Add to Cart</button> 
            </figure>
            
        </div>
        </>
    );
}
// ---------- RETURN THE STUFF---------- //

export default CakeBiteDetails;

// -------------- OLD CODE, MIGHT WORK LATER?? -------------- //


    // // Loop through shopReducer:
    // for (let item of shopReducer) {
    //     // IF current thing's ID matches cakeBiteId:
    //     if (item.id === cakeBiteId) {
    //         // Set cakeBiteItem equal to current thing:
    //         cakeBiteItem = item
    //     }
    // }

// useEffect(() => {
    //     dispatch({
    //         type: 'CAKEBITE_DETAILS',
    //         payload: {
    //             cakebite: cakebiteId
    //         }
    //     })
    // }, []);
    //  const cardClicked = (cakebite) => {
    //     console.log('CAKE CARD CLICKED silly goose!', cakebite);
    //     setIsOpen(true)

    //     setModalContent(cakebite)
    //     dispatch({
    //         type: 'CAKEBITE_DETAILS',
    //         payload: {
    //             cakebite: cakebite.id
    //         }
    //     })
    //  }


    // return (
    //     <Modal
    //         className="modalPopup"
    //         open={isOpen}
    //         onClose={() => setIsOpen(false)}
    //         modalContent={modalContent}>
    //         <cakeBiteItem
    //             key={cakebite.id}
    //             cakebite={cakebite}
    //             cardClicked={cardClicked}
    //             />

    //         <h2>{cakeBiteItem.flavor}</h2>
    //         <img src={cakeBiteItem.image}/>
    //         <div>
    //             <p>{cakeBiteItem.description}</p>
    //         </div>

    //     </Modal>

    // )

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