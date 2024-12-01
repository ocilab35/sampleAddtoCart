import { products } from "../products";
import React from 'react';

function Pak() {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>

          <h2 className=" bg-slate-600 text-blue-500 ">{product.name}</h2>
          <p className="  text-xl">{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
          <img src={product.image} alt="" />
        </div>
      ))}
    </>
  );
}

export default Pak;
