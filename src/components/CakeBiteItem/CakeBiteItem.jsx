import React from "react";
import { useState, useHistory, useParams } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
// import CakeBiteItem from "../CakeBiteItem/CakeBiteDetails";
// import './App.css';

const CakeBiteDetails = (params) => {
    const history = useHistory();
    const dispatch = useDispatch();
    let id = useParams();
    const cakeBiteItem = useSelector((store) => store.currentCakeBite);
    let cakebiteId = id.id;
    const cakebite = useSelector(store => store.currentCakeBite);
    const [modalContent,setModalContent] = useState('');
    const [isOpen, setIsOpen] = useState('');

    useEffect(() => {
        dispatch({
            type: 'CAKEBITE_DETAILS',
            payload: {
                cakebite: cakebiteId
            }
        })
    }, []);
     const cardClicked = (cakebite) => {
        console.log('CAKE CARD CLICKED silly goose!', cakebite);
        setIsOpen(true)

        setModalContent(cakebite)
        dispatch({
            type: 'CAKEBITE_DETAILS',
            payload: {
                cakebite: cakebite.id
            }
        })
     }


    return (
        <Modal
            className="modalPopup"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            modalContent={modalContent}>
            <cakeBiteItem
                key={cakebite.id}
                cakebite={cakebite}
                cardClicked={cardClicked}
                />

            <h2>{cakeBiteItem.flavor}</h2>
            <img src={cakeBiteItem.image}/>
            <div>
                <p>{cakeBiteItem.description}</p>
            </div>

        </Modal>

    )
};

export default CakeBiteDetails;