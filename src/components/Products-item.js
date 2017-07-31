import React from "react";
import PropTypes from "prop-types";
import store from "../reducers/root-reducer.js";

class Product extends React.Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     available: props.available
  //   };
  // }
  addToCart(name) {
    // const { available } = this.state;

    if (this.props.available > 0) {
      store.dispatch({ type: "MAKE_CART", data: name });
      store.dispatch({ type: "FIND_TOTAL", data: store.getState().cartItems });

      // this.setState({
      //   available:
      //     this.props.available - store.getState().cartItems[this.props.id].count
      // });
    }
  }
  render() {
    // const { available } = this.state;
    return (
      <div className="product">
        {this.props.name} - &#36;{this.props.price} available:{this.props.available}
        <button type="button" onClick={e => this.addToCart(this.props.name)}>
          Add to cart
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  available: PropTypes.number.isRequired
};

export default Product;
