import React, { Component } from "react";

import ProductsList from "./Products-list";
import Cart from "./Cart";

class App extends Component {
  render() {
    return (
      <div>
        <ProductsList />
        <hr />
        <Cart />
      </div>
    );
  }
}

export default App;
