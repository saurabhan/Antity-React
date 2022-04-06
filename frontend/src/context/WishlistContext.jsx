import { createContext, useContext, useEffect, useState } from "react";
import { commerce } from "../utils/commerce";

const WishlistContext = createContext()
const useWishlist = () => useContext(WishlistContext)

const WishlistProvider = ({children}) =>{

    const [ wishlist, setWishlist ] = useState([]);


    const addToWishlist = (product, id) =>{
        console.log('addedtowishlist', product)
        const index = wishlist.filter(e => e.id === id).length > 0
        if(index){
            console.log("Product already exist in wishlist")
        }
        else{
            setWishlist([...wishlist, product])
        }
    }

    const removeFromWishlist = (product) =>{
        console.log('removed from wishlist', product)
        const filteredArray = wishlist.filter(e => e.id !== product)
        setWishlist(filteredArray)
    }

    return (
        <WishlistContext.Provider
        value={{
            wishlist,
            addToWishlist,
            removeFromWishlist
        }}>
            {children}
        </WishlistContext.Provider>
    )
}

export { useWishlist, WishlistProvider}