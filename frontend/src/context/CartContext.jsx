import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { commerce } from "../utils/commerce";
import { products } from "../db/productslist";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [fullfilledCart, setFullfilledCart] = useState();
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingDetails, setShippingDetails] = useState();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const emptyCart = async () => {
    setFullfilledCart(cart);
    await commerce.cart.empty();
    setCart({});
  };

  const handleDetails = async (details) => {
    setShippingDetails(details);
  };

  const addToCart = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productID, quantity) => {
    const item = await commerce.cart.update(productID, { quantity });

    setCart(item.cart);
  };

  const handleRemoveFromCart = async (productID) => {
    const item = await commerce.cart.remove(productID);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const generateToken = async () => {
    if (cart.line_items.length) {
      await commerce.checkout
        .generateToken(cart.id, { type: "cart" })
        .then((token) => setCheckoutToken(token))
        .catch((error) => console.log("Error Generating Token", error));
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        shippingDetails,
        handleDetails,
        fullfilledCart,
        checkoutToken,
        generateToken,
        products,
        emptyCart,
        addToCart,

        handleUpdateCartQty,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
