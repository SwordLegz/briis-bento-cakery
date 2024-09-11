import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";
// import CakeBiteDetails from "../CakeBiteItem/CakeBiteDetails";
import './ShopCakeBites.css';



function ShopCakeBites({getFlavor, flavor}) {
        const dispatch = useDispatch()
        const history = useHistory()

        useEffect(() => {
            dispatch({type: 'FETCH_CAKEBITES'})
        }, [])

        const cakeBites = useSelector(store => store.shopReducer)

        const handleClickedImg = (id) => {
            console.log('CAKEBITE ID is:', id);
            history.push(`/shop/${id}`);
        }

        return (
            <div>
                <figure>
                <h2>Shop Cakebites!</h2>
                <section className="cakebites">
            
                   {cakeBites.map((singleCakeBite) => {
                        return (
                            <div key={singleCakeBite.id}>
                                <h3>{singleCakeBite.flavor}</h3>
                                <img className="cakebiteImage" onClick={() => {handleClickedImg(singleCakeBite.id)}}
                                     src={singleCakeBite.image}
                                     alt={singleCakeBite.flavor}/>

                            </div>
                        )
                    })}
                </section>
                </figure>
            </div>
        )
}

export default ShopCakeBites;