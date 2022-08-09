import React from "react";
import "./App.css";
import hero from "./images/hero-img.svg";
import product1 from "./images/products/men/product1.jpg";

export default function App() {
  return (
    <div className="container mx-auto p-5">
      {/* Start Main navigation */}
      <div className="md:flex md:flex-row md:justify-between text-center">
        <div className="flex flex-row justify-center">
          <div className="bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg"></div>
          <h1 className="text-3xl text-gray-600 ml-2">Logo</h1>
        </div>
        <div className="mt-2">
          <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
            Shop
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
            Contact
          </a>
          <a
            href="#"
            className="bg-purple-600 text-gray-50 hover:bg-purple-700 p-4 px-3 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart (0)
          </a>
        </div>
      </div>
      {/* End Main navigation */}

      {/* Start Hero section */}
      <div className="md:flex md:flex-row mt-20">
        <div className="md:w-2/5 flex flex-col justify-center items-center">
          <h2 className="font-serif text-4xl text-gray-600 mb-4 text-center md:text-left md:self-start">
            Some catchy title here
          </h2>
          <p className="uppercase text-gray-600 tracking-wide text-center md:text-left md:self-start">
            Our brrand tagline goes here.
          </p>
          <p className="uppercase text-gray-600 tracking-wide text-center md:text-left md:self-start">
            Our brand motto goes here.
          </p>
          <a
            href="#"
            className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gry-50 uppercase text-xl md:self-start my-5"
          >
            Shop Now
          </a>
        </div>
        <div className="md:w-3/5">
          <img src={hero} className="w-full" />
        </div>
      </div>
      {/* End Hero section */}

      {/* Start Men's section */}
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl">Men's Collection</h2>
          <a href="#" className="text-xl flex flex-row">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
        <div className="grid grid-flow-row grid-cols-4 gap-10">
          <div className="shadow-lg rounded-lg">
            <a href="#">
              <img src={product1} className="rounded-tl-lg rounded-tr-lg" />
            </a>
            <div className="p-5">
              <h3>
                <a href="#">Men's T-Shirt</a>
              </h3>
              <div className="flex flex-row my-3">
                <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
                <div className="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
                <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
                <div className="bg-red-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
                <div className="bg-green-700 h-5 w-5 rounded-full shadow-md mr-2"></div>
              </div>
              <div className="flex flex-row my-3">
                <div className="border-2 border-gray-300 text-gray-400 rounded-md text-sx px-2 py-1 mr-2">
                  XL
                </div>
                <div className="border-2 border-gray-300 text-gray-400 rounded-md text-sx px-2 py-1 mr-2">
                  XXL
                </div>
                <div className="border-2 border-gray-300 text-gray-400 rounded-md text-sx px-2 py-1 mr-2">
                  L
                </div>
                <div className="border-2 border-gray-300 text-gray-400 rounded-md text-sx px-2 py-1 mr-2">
                  M
                </div>
                <div className="border-2 border-gray-300 text-gray-400 rounded-md text-sx px-2 py-1 mr-2">
                  S
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <a
                  href="#"
                  className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-4 text-gry-50 flex flex-row hover:from-red-600 hover:to-pink-600 text-xm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a>
                <a
                  href="#"
                  className="bg-purple-600 rounded-full py-4 px-4 text-gry-50 flex flex-row hover:bg-purple-700 text-xm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Men's section */}
    </div>
  );
}
