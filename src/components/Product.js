import React from "react";
export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name}></img>
      <h3 className="text-center m5 pname">{product.name}</h3>
      <div className="text-center red m5">
        <strong>₹{product.price}</strong>
      </div>
      <div>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
