import React from "react";
import "./Product.css";

const Product = (product) => {
  const { name, seller, price, img, ratings } = product.product

  console.log(product);
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">Ultraboost 22 Shoes: {name}</h6>
        <p className="product-price">Price: ${price} </p>
        <p className="product-seller">Manufecture:{seller}</p>
        <p className="product-rating">Rating: {ratings}</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
