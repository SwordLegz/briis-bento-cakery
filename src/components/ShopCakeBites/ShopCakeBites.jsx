import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


// 1. When this component loads, call a Saga function that will
//    get the data from the cakebites table.
// 2. The Saga function that does this, will then store the
//    cakebites data in a reducer.
// 3. In this component, need to obtain the cakebites data from
//    the reducer.
// 4. Down in this component's return, need to map through the
//    array of cakebites objects (the data we got out of redux).


function ShopCakeBites({getFlavor, flavor}) {
        const dispatch = useDispatch()

        useEffect(() => {
            // Yell at a Saga fuction here!
            // AKA: Step 1.
            dispatch({type: 'FETCH_CAKEBITES'})
        }, [])

        const cakeBites = useSelector(store => store.shopReducer)
        // AKA: Step 3.

        const handleClickedImg = (id) => {
            console.log('CAKEBITE ID is:', id);
            dispatch({
                type: 'GET_CAKEBITE',
                payload: id
            })
            history.pushState('/shop/${id}');
        }

        return (
            <div>
                <h2>Some Cakebites!</h2>
                <section className="cakebites">
                {/* Step 4: Something like: */}

                   {cakeBites.map((oneCakeBiteObject) => {
                        return (
                            <div key={oneCakeBiteObject.id}>
                                <h3>{oneCakeBiteObject.flavor}</h3>
                                <img onClick={() => {handleClickedImg(oneCakeBiteObject.id)}}
                                     src={oneCakeBiteObject.image}
                                     alt={oneCakeBiteObject.flavor}/>

                            </div>
                        )
                    })}
                </section>
            </div>
        )
}

export default ShopCakeBites;