import { createContext, useContext, useState, useEffect } from "react";
import { commerce } from "../utils/commerce";
import { products } from "../db/productslist";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart ] = useState({})
    const [addItem, setAddItem ] = useState()
    const [deleteItem, setDeleteItem ] = useState()
    

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }


    const addToCart = async (productID, quantity) =>{
        const item = await commerce.cart.add(productID, quantity)
        setCart(item.cart)
    }

    const removeFromCart = (product) => {
        console.log('Removed from Cart', product)
    }

    const changeQuantity = (product) => {
        console.log('quantity changed')
    }

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

    return(
        <CartContext.Provider
        value={{
            cart,
            products,
            addToCart,
            removeFromCart,
            handleUpdateCartQty,
            handleRemoveFromCart,
            changeQuantity
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartProvider }