import React from "react";

const CartItem = (props) => {
  return (
    <div>
      <h6>
        Item: {props.item.title} - price {props.item.price} eur{" "}
      </h6>
    </div>
  );
};

export default CartItem;
