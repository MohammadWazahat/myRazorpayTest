import React from "react";

const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <div>
      <div>
        i m payCard
        <img src={img} alt="hello" style={{ color: "red", height: "300px" }} />
        <div>₹{amount}</div>
        <button onClick={() => checkoutHandler(amount)}>Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
