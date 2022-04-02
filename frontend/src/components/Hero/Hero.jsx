import React from "react";


const Hero = () => {
  return (
    <div className="h-screen bg-[url('https://images.unsplash.com/photo-1610437819764-b4d4e8d6e468')] bg-cover bg-bottom z-10 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative pt-72 text-center flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Summer styles are finally here
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            This Year, Get the best summer styles which are comfortable and luxurious.
          </p>
        </div>
        <div>
          <div className="mt-10">
            <a
              href="/products"
              className="inline-block text-center bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-700 transition ease-in-out"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;