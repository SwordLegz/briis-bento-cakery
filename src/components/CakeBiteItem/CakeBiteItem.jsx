import React from "react";
import { useState, useHistory, useParams } from "react";
import { useDispatch, useSelector } from "react-redux";
// import './App.css';

const CakeBiteDetails = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const cakeBiteItem = useSelector((store) => store.currentCakeBite);


    return (
        <>
        <figure>
            <h2>{cakeBiteItem.flavor}</h2>
            <img src={cakeBiteItem ? cakeBiteItem.image : ""}/>
            <p>{cakeBiteItem.description}</p>
        </figure></>

    )
};

export default CakeBiteDetails;