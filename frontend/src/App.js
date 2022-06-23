import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import Login from "./pages/Login";
import OrderComplete from "./pages/OrderComplete";
import ProtectedRoute from "./components/navbar/ProtectedRoute";
import Checkout from "./pages/Checkout";
import { useLayoutEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {

 
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 

  return (
    <div>
      <Toaster/>
      <Navbar />
      <Wrapper>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/cat/" element={<Products/>}/>
        <Route path="/products/cat/:cat" element={<Products/>}/>
        <Route path="/products/:productId" element={<ProductInfo/>}/>
        <Route path="/order/:orderId" element={<OrderComplete/>}/>
        <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/wishlist" element={<ProtectedRoute>
          <Wishlist/>
          </ProtectedRoute>
          }/>
      </Routes>
      </Wrapper>

      <Footer />
    </div>
  )
}

export default App;
