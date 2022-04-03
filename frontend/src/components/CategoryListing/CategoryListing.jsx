import React from 'react'

const CategoryListing = () => {
  return (
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                Shop by Category
              </h2>
              <a href="/products" className="hidden text-sm font-semibold text-gray-900 hover:text-gray-700 sm:block">
                Browse all categories<span > &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group aspect-w-2 aspect-h-1 shadow-md overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib"
                  alt="Women Clothing"
                  className="object-center object-cover transition-all ease-in-out delay-75 group-hover:scale-105"
                />
                <div  className="bg-gradient-to-b from-transparent to-black opacity-50" />
                <div className="p-6 flex items-end">
                  <div >
                    <h3 className="font-semibold text-white">
                      <a href="/women">
                        <span className="absolute inset-0" />
                        Women Clothing
                      </a>
                    </h3>
                    <p  className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 shadow-md overflow-hidden sm:relative sm:aspect-none sm:h-full">
                <img
                  src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib"
                  alt="Men Clothing"
                  className="object-center object-cover transition-all ease-in-out delay-75 group-hover:scale-105 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                />
                <div
                  
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="/men">
                        <span className="absolute inset-0" />
                        Men Clothing
                      </a>
                    </h3>
                    <p  className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 shadow-md overflow-hidden sm:relative sm:aspect-none sm:h-full">
                <img
                  src="https://images.unsplash.com/photo-1596944924591-1e64760c2be8?ixlib"
                  alt="Jewellery"
                  className="object-center object-cover transition-all ease-in-out delay-75 group-hover:scale-105 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                />
                <div
                  
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="/jewellery">
                        <span className="absolute inset-0" />
                        Jewellery
                      </a>
                    </h3>
                    <p  className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <a href="/products" className="block text-sm font-semibold text-gray-900 hover:text-gray-700">
                Browse all categories<span > &rarr;</span>
              </a>
            </div>
          </div>
    </div>
  )
}

export default CategoryListing
