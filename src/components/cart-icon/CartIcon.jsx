import React, { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import "./CartIcon.scss";

import { CartContext } from "../../context/cartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
