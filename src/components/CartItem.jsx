import React, { useContext } from "react";
import ItemContext from "../store/ItemContext";

const CartItem = (props) => {
  const context = useContext(ItemContext);
  return (
    <p className="cart-item">
      Item:
      <strong> {props.item.title}</strong> - price{" "}
      <strong> {props.item.price} eur </strong>
      <span> Discount: {context}%</span>
    </p>
  );
};

export default CartItem;
