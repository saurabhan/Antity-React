import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


const FeaturedProducts = () => {
  const { products } = useCart();

  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Our Favorites</h2>
        <a href="/products/cat/all" className="hidden text-sm font-semibold text-gray-900 hover:text-gray-700 sm:block">
          Browse all favorites<span > &rarr;</span>
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
        {products.slice(0,3).map((product) => (
          <div key={product.id} className="group relative">
            <div className="w-full h-96 overflow-hidden transition-all ease-in-out delay-75 group-hover:scale-105 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
              <img
                src={product.image.url}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">
              <Link to={`products/${product.id}`}>
                <span className="absolute inset-0" />
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.price.formatted_with_symbol}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <a href='/products/cat/all' className="block text-sm font-semibold text-gray-600 hover:text-gray-500">
          Browse all favorites<span > &rarr;</span>
        </a>
      </div>
    </div>
  </div>
    );
};

export default FeaturedProducts;
