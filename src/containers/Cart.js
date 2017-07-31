import React from "react";
import { connect } from "react-redux";
import store from "../reducers/root-reducer.js";

class Cart extends React.Component {
  removeFromCart(index, props) {
    if (this.props.itemsInCart.cartItems[index].count > 0) {
      store.dispatch({
        type: "REMOVE_ITEM",
        data: this.props.itemsInCart.cartItems[index].name
      });
      store.dispatch({ type: "FIND_TOTAL", data: store.getState().cartItems });
    }
  }
  render() {
    return (
      <div>
        Your Cart:
        {this.props.itemsInCart.cartItems.map((item, index) => {
          if (item.count > 0) {
            return (
              <div key={index}>
                {item.name} x{item.count} - &#36;{item.total}
                <button
                  id={item.index}
                  type="button"
                  onClick={() => this.removeFromCart(index)}
                >
                  Remove item
                </button>
              </div>
            );
          }
        })}
        <hr />
        Total: &#36;{this.props.itemsInCart.total.total} -{" "}
        {this.props.itemsInCart.total.countOfItems} items
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    itemsInCart: state
  };
}

export default connect(mapStateToProps)(Cart);
