import React, {useState} from "react";

function Item({ name, category }) {

const [addToCart, setAddToCart] = useState(false)
const notAdded = addToCart ? "Add to Cart" :"Remove From Cart"  
const carted = addToCart ? "in-cart" :  "" 

  return (
    <li className={carted}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=> setAddToCart(!addToCart)}>{notAdded}</button>
    </li>
  );
}

export default Item;
