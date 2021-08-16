import React, { useContext } from "react";
import ItemContext from "../store/ItemContext";

const CartItem = (props) => {
  const context = useContext(ItemContext);
  return (
    <p className="cart-item">
      Item:
      <strong> {props.item.title}</strong> - price{" "}
      <strong> {props.item.price} eur </strong>
      <span> Discount: {context.discount}%</span>
      <button onClick={context.onApplyDiscount}>Apply discount to all</button>
    </p>
  );
};

export default CartItem;
