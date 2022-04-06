import React from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/navbar/Navbar';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
    const {addToCart,} = useCart()
  const { wishlist, removeFromWishlist } = useWishlist()
  return (
      <div>
          <Navbar/>
      <main className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold">Wishlist</h1>
      <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {wishlist.map((product) => (
              <div >
              <div >
              <div >
                    <a href="#" className="relative">
                      <div className="relative w-full h-72  overflow-hidden">
                        <img
                          src={product.image.url}
                          alt={product.name}
                          className="w-full h-full object-center object-cover transition-all ease-linear delay-75 hover:scale-105 "
                        />
                      </div>
                      <div className="relative mt-4">
                        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">{product.name}</p>
                      </div>
                      <div className="absolute top-0 h-72  p-4 flex items-end justify-end overflow-hidden">
                        <p className="relative text-lg font-semibold text-white">{product.price.formatted_with_symbol}</p>
                      </div>
                    </a>
                    <div className="mt-6 flex flex-col gap-4">
                      <button
                        onClick={() => {removeFromWishlist(product.id)}}
                        href="#"
                        className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                      >
                        Remove from Wishlist
                      </button>
                      <button
                        onClick={() => {addToCart(product.id, 1)}}
                        href="#"
                        className="relative flex bg-gray-900 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-100 hover:bg-gray-700"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
              </div>
          </div>
          ))}
        
      </div>
      </div>
      </main>
      <Footer/>
      </div>
  )}
export default Wishlist
