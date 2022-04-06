import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <FilterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        
        </FilterProvider>
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
