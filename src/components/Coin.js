import React from "react";

function Coin({ name, icon, rank, price, symbol, priceBtc }) {
  return (
    <div className="coin">
      <h1> Name: {name}</h1>
      <img src={icon} />
      <h2>rank: {rank}</h2>
      <h3> Price: {price}</h3>
      <h4> Symbol: {symbol}</h4>
      <h5>priceBtc: {priceBtc}</h5>
    </div>
  );
}

export default Coin;