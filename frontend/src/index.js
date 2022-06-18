import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";


import { AuthProvider } from "./context/auth-context";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <CartProvider>
      <WishlistProvider>
        <FilterProvider>
          <BrowserRouter>
              <App />
           
          </BrowserRouter>
        </FilterProvider>
      </WishlistProvider>
    </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
