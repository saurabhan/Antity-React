import { createContext, useContext,  useState } from "react";


const WishlistContext = createContext()
const useWishlist = () => useContext(WishlistContext)

const WishlistProvider = ({children}) =>{

    const [ wishlist, setWishlist ] = useState([]);


    const addToWishlist = (product, id) =>{
        const index = wishlist.filter(e => e.id === id).length > 0
        if(index){
            return
        }
        else{
            setWishlist([...wishlist, product])
        }
    }

    const removeFromWishlist = (product) =>{
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