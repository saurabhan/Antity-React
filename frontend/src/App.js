import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </div>
  )
}

export default App;
