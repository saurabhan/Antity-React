import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import { Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import OrderComplete from "./pages/OrderComplete";
import ProtectedRoute from "./components/navbar/ProtectedRoute";
import Checkout from "./pages/Checkout";

function App() {
 

  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  )
}

export default App;
