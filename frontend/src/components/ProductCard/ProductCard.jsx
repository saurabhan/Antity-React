import React from 'react'

const ProductCard = (product) => {
  return (
    <div>
        <div key={product.id}>
              <a href={product.href} className="relative">
                <div className="relative w-full h-72  overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover transition-all ease-linear delay-75 hover:scale-105 "
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute top-0 h-72  p-4 flex items-end justify-end overflow-hidden">
                  <p className="relative text-lg font-semibold text-white">{product.price}</p>
                </div>
              </a>
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href={product.href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to Wishlist
                </a>
                <a
                  href={product.href}
                  className="relative flex bg-gray-900 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-100 hover:bg-gray-700"
                >
                  Add to Cart
                </a>
              </div>
            </div>
    </div>
  )
}

export default ProductCard
