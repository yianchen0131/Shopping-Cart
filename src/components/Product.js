import React from "react";
import PropTypes from "prop-types";

const Product = ({ products, addProduct }) => {
  return (
    <div className="Product">
      <output> {products.name} </output>
      <output> (${products.price}) </output>

      <button onClick={() => addProduct(products)}> +</button>
    </div>
  );
};

Product.prototype = {
  products: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};
export default Product;
