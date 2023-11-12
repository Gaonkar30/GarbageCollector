import React, { useState, useEffect } from "react";
import "./AddGarbage.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CloseIcon from '@mui/icons-material/Close';
function AddGarbage() {
  
  const [cartCount, setCartCount] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setCartVisible(true);
    } else {
      setCartVisible(false);
    }
  }, [cartCount]);

  const handleTrashClick = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleOrderDetails = () => {
    setIsExpanded((prev) => !prev);
    document.getElementById("hello").style.display="block";
    document.getElementById("hello").style.marginTop="-20em";
   
  };

  const handleOutsideClick = (e) => {
    if (isExpanded) {
      const orderDetails = document.querySelector('.orderDetails');
      if (orderDetails && !orderDetails.contains(e.target)) {
        setIsExpanded(false);
      }
    }
  };
  const DecreaseBags=()=>{
    setCartCount((prevCount) => prevCount - 1);
  }
  const handleCloseClick=()=>[
    document.getElementById("hello").style.display="none",
  
  ]
  const PlaceRequest=()=>{
    // redirect to 
    alert("OrderPlaced")
  }
  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  ;
  return (
    <div className="addingstuff" id="adder">
      <div className="addButton">
        <button className="addgarbge">
          <a onClick={handleTrashClick}>
            <img src={require("./garbagecan.png")}></img>
          </a>
        </button>
        {cartVisible && (
          <div id="cart" className={`orderButton ${isExpanded ? 'expanded' : ''}`} onClick={toggleOrderDetails}>
            <div id="cart-icon">
              <ShoppingBasketIcon id="icony" />
            </div>
            <div id="cart-count">{cartCount}</div>
          </div>
        )}
      </div>

      <div /*className="orderDetails"*/ id="hello" className={`orderDetails ${isExpanded ? 'expanded' : ''}`}>
        <div className="header">
          <h3>Order Summary:</h3>
          <h5 onClick={DecreaseBags}> Undo </h5>
        </div>
        <div className="body">
          <h4>Garbage Collection Requested:</h4>
          <h2>{cartCount} bags</h2>
        </div>
        <div className="footer">
          <h3 onClick={PlaceRequest}>Place Request</h3>
          <CloseIcon className="close" onClick={handleCloseClick}/>
        </div>
      </div>
    </div>
  );
}

export default AddGarbage;
