import React from "react";

const Hero = () => {
  return (
    <div className="flex items-end h-screen  bg-cover bg-bottom z-10 pb-10  lg:pb-20 ">
      <img className="h-96 w-96 " src="./public/assets/antity-hero-resize.jpg" alt="" />
      <div className=" text-center flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Summer styles are finally here
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            This Year, Get the best summer styles which are comfortable and
            luxurious.
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
