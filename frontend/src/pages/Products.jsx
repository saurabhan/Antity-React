import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { useFilter } from "../context/FilterContext";


function Products() {
  
  const { filteredProducts, sortProducts, sortCat, sortRating} = useFilter()
  
  return (
    <div>
      <main className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Products
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Checkout out the latest Products
          </p>
        </div>

        <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <button
              type="button"
              className="inline-flex items-center lg:hidden"
            >
              <span className="text-sm font-medium text-gray-700">Filters</span>
            </button>

            <div className="hidden lg:block">
              <h1 className="font-bold">Price</h1>
              <div className="flex flex-col">

              <label class="inline-flex items-center mt-3">
                <input type="radio" class=" h-5 w-5 text-gray-600" value='desc' name='sort' onClick={(e) => sortProducts(e.target.value)}/><span class="ml-2 text-gray-700">high to low</span>
              </label>
              <label class="inline-flex items-center mt-3">
                <input type="radio" class=" h-5 w-5 text-gray-600" value='asc' name='sort' onClick={(e) => sortProducts(e.target.value)}/><span class="ml-2 text-gray-700">low to high</span>
              </label>
              </div>
              <div className='flex flex-col mt-5'>
                <h1 className="font-bold">Category</h1>
              <label class="inline-flex items-center mt-3">
                <input type="checkbox" class=" h-5 w-5 text-gray-600" value='women' onChange={(e) => sortCat(e.target.value)}/><span class="ml-2 text-gray-700" >Women</span>
              </label>
              <label class="inline-flex items-center mt-3">
                <input type="checkbox" class=" h-5 w-5 text-gray-600" value='men' onChange={(e) => sortCat(e.target.value)}/><span class="ml-2 text-gray-700" >Men</span>
              </label>
              <label class="inline-flex items-center mt-3">
                <input type="checkbox" class=" h-5 w-5 text-gray-600" value='jewellery' onChange={(e) => sortCat(e.target.value)}/><span class="ml-2 text-gray-700" >Jewellery</span>
              </label>
              </div>
              <div className="mt-5">
                <h1 className="font-bold">Ratings</h1>
              <label class="inline-flex items-center mt-3">
              <span class="mr-2 text-gray-700">0</span>
                <input onChange={(e) => sortRating(e.target.value)} type="range" class=" h-5 w-full" min="0"
    max="5" /><span class="ml-2 text-gray-700">5</span>
              </label>
              </div>
            </div>
          </aside>
          <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Products;
