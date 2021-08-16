import React, { useContext } from "react";
import ItemContext from "../store/ItemContext";

const CartItem = (props) => {
  const context = useContext(ItemContext);
  return (
    <p className="cart-item">
      Item:
      <strong> {props.item.title}</strong> - price{" "}
      <strong className={props.item.discountedPrice && "discount"}>
        {props.item.price} eur
      </strong>
      {props.item.discountedPrice && (
        <strong> {props.item.discountedPrice} eur</strong>
      )}
      <span> Discount: {context.discount}%</span>
      <button onClick={context.onApplyDiscount}>Apply discount to all</button>
      <button onClick={() => context.onApplyDiscountSingle(props.item.id)}>
        aplly single discount
      </button>
    </p>
  );
};

export default CartItem;
