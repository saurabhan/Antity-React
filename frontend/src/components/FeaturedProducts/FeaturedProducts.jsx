import React from "react";

const products = [
  {
    id: 1,
    name: 'Pink Basic Hoodie',
    price: 'RS 2000',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib',
    imageAlt: "Women Clothing",
  },
  {
    id: 1,
    name: 'Pink Basic Hoodie',
    price: 'RS 2000',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib',
    imageAlt: "Women Clothing",
  },
  {
    id: 1,
    name: 'Pink Basic Hoodie',
    price: 'RS 2000',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib',
    imageAlt: "Women Clothing",
  },]


const FeaturedProducts = () => {
  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Our Favorites</h2>
        <a href="/products" className="hidden text-sm font-semibold text-gray-900 hover:text-gray-700 sm:block">
          Browse all favorites<span > &rarr;</span>
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="w-full h-96 overflow-hidden transition-all ease-in-out delay-75 group-hover:scale-105 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">
              <a href={product.href}>
                <span className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <a href='/products' className="block text-sm font-semibold text-gray-600 hover:text-gray-500">
          Browse all favorites<span > &rarr;</span>
        </a>
      </div>
    </div>
  </div>
    );
};

export default FeaturedProducts;
