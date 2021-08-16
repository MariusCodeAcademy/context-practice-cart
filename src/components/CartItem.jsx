import React from "react";

const CartItem = (props) => {
  return (
    <p className="cart-item">
      Item:
      <strong> {props.item.title}</strong> - price{" "}
      <strong> {props.item.price} eur</strong>
    </p>
  );
};

export default CartItem;
