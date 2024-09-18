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
        <h2 className="greeting2">
          <u>Shop Cakebites!</u>
        </h2>
        <p><u>Starting at $34.99</u></p>
        <br />
        <tbody>
        <section className="outerdiv">
          {cakeBites.map((singleCakeBite) => (
            <div  key={singleCakeBite.id}>
              <h3 className="greeting2">{singleCakeBite.flavor}</h3>
              <img
                className="cakebiteImage"
                onClick={() => handleOpenModal(singleCakeBite)}
                src={singleCakeBite.image}
                alt={singleCakeBite.flavor}
              />
            </div>
          ))}
        </section>
        </tbody>
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

