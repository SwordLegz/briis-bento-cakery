import React from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
// import Modal from "../Modal/Modal";
// import CakeBiteDetails from "../CakeBitedetails/CakeBiteDetails";
// import './App.css';

const CakeBiteDetails = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let params = useParams();
    let cakeBiteId = Number(params.id)

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
    
    // const cakeBiteItem = useSelector((store) => store.currentCakeBite);
    // const cakebite = useSelector(store => store.currentCakeBite);
    // const [modalContent,setModalContent] = useState('');
    // const [isOpen, setIsOpen] = useState('');

    const backToShop = () => {
        history.push('/');
        dispatch({
            type: 'BACK_TO_SHOP',
            payload: {}
        });
    }

    return (
        <>
        <button className="back-to-shop"
        onClick={backToShop}>
            Back to Shop
        </button>
        <div>
            <figure>
            <h1>{cakeBiteItem.flavor}</h1>
            <img src={cakeBiteItem.image ? cakeBiteItem.image : ""} />
            <h3>Description:</h3>
            <p>{cakeBiteItem.description}</p>
            </figure>
        </div>
        </>
    )

    
};

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