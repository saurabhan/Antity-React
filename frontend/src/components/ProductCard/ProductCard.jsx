import React from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'


const ProductCard = (product) => {
  const {addToCart, removeFromCart} = useCart()
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const { id, image, name, price, description } = product;
  return (
    <div>
        <div>
              <a href="#" className="relative">
                <div className="relative w-full h-72  overflow-hidden">
                  <img
                    src={image.url}
                    alt={name}
                    className="w-full h-full object-center object-cover transition-all ease-linear delay-75 hover:scale-105 "
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{name}</p>
                </div>
                <div className="absolute top-0 h-72  p-4 flex items-end justify-end overflow-hidden">
                  <p className="relative text-lg font-semibold text-white">{price.formatted_with_symbol}</p>
                </div>
              </a>
              <div className="mt-6 flex flex-col gap-4">
                <button
                  onClick={() => {addToWishlist(product, id)}}
                  href="#"
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to Wishlist
                </button>
              
                <button
                  onClick={() => {addToCart(id, 1)}}
                  href="#"
                  className="relative flex bg-gray-900 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-100 hover:bg-gray-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
    </div>
  )
}

export default ProductCard
