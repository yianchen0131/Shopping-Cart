import React, { useState } from "react";
import PropTypes from "prop-types";
import ShoppingCart from "../components/ShoppingCart";
import ProductList from "../components/ProductList";

const ShoppingPage = () => {
  //"products" is the state variable in ShoppingPage (a prop of ProductList)
  const [products, setProducts] = useState([
    { name: "Olive Oil", price: 12 },
    { name: "Butter", price: 5 },
    { name: "Yogurt", price: 10 },
  ]);

  //"total" is the state variable in ShoppingPage that is a prop for ShoppingCart
  //   const [total, setTotal] = useState(0);

  //"productsInCart" is the state variable in ShoppingPage that is a prop for ShoppingCart
  const [productsInCart, setProductsInCart] = useState(new Map());

  function addProduct(product) {
    //To keep it immutable
    const newProductsInCart = new Map(productsInCart);

    let currentQty = newProductsInCart.get(product.name);

    if (currentQty === undefined) {
      //I haven't added the product yet
      currentQty = { product: product, qty: 0 };
    }
    currentQty.qty += 1;
    newProductsInCart.set(product.name, currentQty);
    setProductsInCart(newProductsInCart);
  }

  return (
    <div className="ShoppingPage">
      <div style={{ display: "flex" }}>
        <div style={{ width: "60%" }}>
          <ProductList
            products={products}
            addProduct={addProduct}
          ></ProductList>
        </div>
        <div style={{ width: "40%" }}>
          <ShoppingCart productsInCart={productsInCart}></ShoppingCart>
        </div>
      </div>
    </div>
  );
};
ShoppingPage.propTypes = {};
export default ShoppingPage;
