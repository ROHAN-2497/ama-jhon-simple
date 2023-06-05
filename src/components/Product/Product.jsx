import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (product) => {
  const { name, seller, price, img, ratings } = product.product;
  const handleAddToCart = product.handleAddToCart;

  return (
    <div className="product">
      {}
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">Ultraboost 22 Shoes: {name}</h6>
        <p className="product-price">Price: ${price} </p>
        <p className="product-seller">Manufecture:{seller}</p>
        <p className="product-rating">Rating: {ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product.product)}
        className="btn-cart"
      >
        Add to Cart 
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
