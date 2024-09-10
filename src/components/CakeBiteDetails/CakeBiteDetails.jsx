import React from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './CakeBiteDetails.css';
// import Modal from "../Modal/Modal";
// import './App.css';


function CakeBiteDetails({getCakeBite, cakeBite}) {
    const history = useHistory();
    const dispatch = useDispatch();
    let params = useParams();
    let cakeBiteId = Number(params.id)
    // let cart = useSelector(store)
    // const [buttonDecision, setButtonDecision] = useState(true);
    // const [userFirstName, setUserFirstName] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState('');

    // 1. useSelector to get the shopReducer data
    const shopReducer = useSelector(store => store.shopReducer)

    // 2. Get the data out of this reducer for the one cakebite we want to render.
    //    * Loop through the reducer and find the object whose id matches the
    //      cakeBiteId we got from the useParams friend.
    let cakeBiteItem = {}
    
    // Loop through shopReducer:
    for (let item of shopReducer) {
        // IF current thing's ID matches cakeBiteId:
        if (item.id === cakeBiteId) {
            // Set cakeBiteItem equal to current thing:
            cakeBiteItem = item
        }
    }

   
   
    // ---------- BACK TO SHOP BUTTON ---------- //
    const backToShop = () => {
        history.push('/shop');
        dispatch({
            type: 'BACK_TO_SHOP',
            payload: {}
        });
    }
    // ---------- END BACK TO SHOP BUTTON ---------- //

    // ---------- FOR QUANTITY INPUT CHANGES ---------- //
    const getRadioValue = () => {
        let ele = document.getElementsByName('method');
        console.log(ele)
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
            return ele[i].value
        }}
        return '';
    }

    // const handleChange = (event) => {
    //     // setSelectedQuantity(event.target.value);
    //     const newQuantity = Number(event.target.value);
    //     setSelectedQuantity(newQuantity);
    //     adjustPrice(newQuantity);
    // }
    // ---------- END QUANTITY INPUT CHANGES ---------- //

    // ---------- PRICE ADJUSTOR BASED ON QUANTITY SELECTED ---------- //
    const priceAdjustor = () => {
        // define base price //
        const basePrice = 34.99;
        // State to store selected quantity and adjusted price //
    const [adjustedPrice, setAdjustedPrice] = useState(basePrice);
    // function to adjust price based on selected quantity //
    const adjustPrice = (quantity) => {
        let newPrice;

        // Use if-else or switch to adjust the price based on quantity //
        if (quantity === 25) {
            newPrice = basePrice;
        } else if (quantity === 50) {
            newPrice = basePrice += 24.99;
        } else if (quantity === 75) {
            newPrice = basePrice += 54.98;
        } else if (quantity === 100) {
            newPrice = basePrice += 84.97;
        } else {
            newPrice = basePrice;
        }
        setAdjustedPrice(newPrice);
    }
    }
    const handleChange = (event) => {
        // setSelectedQuantity(event.target.value);
        const newQuantity = Number(event.target.value);
        setSelectedQuantity(newQuantity);
        adjustPrice(newQuantity);
    }
    // ---------- PRICE ADJUSTOR BASED ON QUANTITY SELECTED ---------- //

    // ---------- SENDS ITEMS TO CART ---------- //
    const addToCart = () => {
        let quantity = getRadioValue();
        // let cartTotaltoAdd = cakeBiteItem.id;
        let cakebiteToAdd = {id: cakeBiteItem.id, flavor: cakeBiteItem.flavor, quantity: quantity}

        dispatch({
            type: 'ADD_ORDER_TO_CART',
            payload: [cakebiteToAdd]
        })
        // setButtonDecision(false);
    }
    // ---------- END SENDS ITEMS TO CART ---------- //

   


    return (
        <>
        <button className="back-to-shop"
        onClick={backToShop}>
            Back to Shop
        </button>
        {/* <form onSubmit={handleSubmit}> */}
        <div>
            <figure>
            <h1>{cakeBiteItem.flavor}</h1>
            <img className="cakebiteImage" src={cakeBiteItem.image ? cakeBiteItem.image : ""} />
            <br />
            <h2>Price: {priceAdjustor} </h2>
            <h3>Description:</h3>
            <p>{cakeBiteItem.description}</p>
            </figure>
            <div className='method'>
                <h3>Quantity:</h3>
                        <input type="radio"
                               id="quantity" 
                               name="method" 
                               value={selectedQuantity} 
                            //    checked={selectedQuantity === '25'} 
                               onChange={handleChange} />
                        <label htmlFor="method1">25</label><br></br>
                        <input type="radio" 
                               id="method2" 
                               name="method" 
                               value={selectedQuantity} 
                            //    checked={selectedQuantity === '50'}
                               onChange={handleChange} />
                        <label htmlFor="method2">50</label><br></br>
                        <input type="radio" 
                               id="method3"
                               name="method" 
                               value={selectedQuantity}
                            //    checked={selectedQuantity === '75'} 
                               onChange={handleChange} />
                        <label htmlFor="method3">75</label><br></br>
                        <input type="radio"
                               id="method4"
                               name="method" 
                               value={selectedQuantity}
                            //    checked={selectedQuantity === '100'} 
                               onChange={handleChange} />
                        <label htmlFor="method4">100</label><br></br>
                    </div>
            <figure>
                {/* {buttonDecision ? */}
                 <button className="addToCart"
                        onClick={addToCart}>Add to Cart</button> 
                        {/* : <button onClick={removeFromCart}>Remove From Cart</button>} */}
            </figure>
            
        </div>
        {/* </form> */}
        </>
    )

    
};
// }

export default CakeBiteDetails;

// -------------- OLD CODE, MIGHT WORK LATER?? -------------- //

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