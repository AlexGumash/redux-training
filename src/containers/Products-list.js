import React from "react";
import {connect} from "react-redux";

import products from "../api/products.json";
import Product from "../components/Products-item.js";

class ProductsList extends React.Component {
  render() {
    return (
      <div>
        {products.map((product, index) => {
          return (
            <Product
              id={product.id}
              key={product.id}
              name={product.name}
              price={product.price}
              available={product.available - this.props.itemsInCart.cartItems[index].count}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    itemsInCart: state
  };
}

export default connect(mapStateToProps)(ProductsList);
