import { useState } from "react";
import {
  CheckIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { products } from "../db/productslist";

const reviews = { average: 4, totalCount: 1624 };


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductInfo() {

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={products[1].imageSrc}
              alt={products[1].imageAlt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {products[1].name}
            </h1>
          </div>

          <section className="mt-4">
            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                {products[1].price}
              </p>

              <div className="ml-4 pl-4 border-l border-gray-300">
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {reviews.totalCount} reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{products[1].description}</p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon
                className="flex-shrink-0 w-5 h-5 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                In stock and ready to ship
              </p>
            </div>
          </section>
        </div>
        <div className="mt-6 flex flex-col gap-4">
                <a
                  href={products[1].href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to Wishlist
                </a>
                <a
                  href={products[1].href}
                  className="relative flex bg-gray-900 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-100 hover:bg-gray-700"
                >
                  Add to Cart
                </a>
              </div>
      </div>
      
    </div>
  );
}
