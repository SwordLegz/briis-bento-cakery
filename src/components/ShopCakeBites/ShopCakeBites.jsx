// ShopCakeBites.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import CakeBiteDetails from "../CakeBiteItem/CakeBiteDetails";
import './ShopCakeBites.css';

function ShopCakeBites() {
  const dispatch = useDispatch();
  const [selectedCakeBite, setSelectedCakeBite] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cakeBites = useSelector(store => store.shopReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_CAKEBITES' });
  }, [dispatch]);

  const handleOpenModal = (cakeBite) => {
    setSelectedCakeBite(cakeBite);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCakeBite(null);
  };

  return (
    <div>
      <figure>
        <h2>Shop Cakebites!</h2>
        <h4>Starting at $34.99</h4>
        <section className="cakebites">
          {cakeBites.map((singleCakeBite) => (
            <div key={singleCakeBite.id}>
              <h3>{singleCakeBite.flavor}</h3>
              <img
                className="cakebiteImage"
                onClick={() => handleOpenModal(singleCakeBite)}
                src={singleCakeBite.image}
                alt={singleCakeBite.flavor}
              />
            </div>
          ))}
        </section>
      </figure>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cakeBite={selectedCakeBite}
      />
    </div>
  );
}

export default ShopCakeBites;



// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import Modal from "../Modal/Modal";
// import CakeBiteDetails from "../CakeBiteItem/CakeBiteDetails";
// import './ShopCakeBites.css';



// function ShopCakeBites({getFlavor, flavor}) {
//         const dispatch = useDispatch()
//         const cakeBites = useSelector(store => store.shopReducer)
//         const [selectedItem, setSelectedItem] = useState();
//         const [isModalOpen, setIsModalOpen] = useState();


//         useEffect(() => {
//             dispatch({type: 'FETCH_CAKEBITES'})
//         }, [dispatch])

//         const handleOpenModal = (item) => {
//             setSelectedItem(item);
//             setIsModalOpen(true);
//           };
        
//           const handleCloseModal = () => {
//             setIsModalOpen(false);
//             setSelectedItem(null);
//           };

        

//         // const handleClickedImg = (id) => {
//         //     console.log('CAKEBITE ID is:', id);
//         //     history.push(`/shop/${id}`);
//         // }

//         return (
//             <div>
//                 <figure>
//                 <h2>Shop Cakebites!</h2>
//                 <section className="cakebites">
            
//                    {cakeBites.map((singleCakeBite) => {
//                         return (
//                             <div key={singleCakeBite.id}>
//                                 <h3>{singleCakeBite.flavor}</h3>
//                                 <img className="cakebiteImage" 
//                                     //  onClick={() => {handleClickedImg(singleCakeBite.id)}}
//                                     onClick={() => handleOpenModal(singleCakeBite)}
//                                      src={singleCakeBite.image}
//                                      alt={singleCakeBite.flavor}/>

//                             </div>
//                         )
//                     })}
//                 </section>
//                 </figure>

//                 <Modal 
//                     isOpen={setIsModalOpen}
//                     onClose={handleCloseModal}
//                     item={setSelectedItem} />
//             </div>
//         )
// }

// export default ShopCakeBites;