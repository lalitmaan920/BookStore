import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="md:w-10/12">
      <div className="card bg-base-100 shadow-md hover:scale-105 duration-200 transition-transform max-w-sm mx-auto">
        <figure className="overflow-hidden rounded-t-lg">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg sm:text-xl font-semibold justify-between items-center">
            {item.name}
            <span className="badge badge-secondary text-xs">{item.category}</span>
          </h2>
          <p className="text-sm text-gray-600 mt-2">{item.title}</p>

          <div className="card-actions flex items-center justify-between w-full mt-4">
            <span className="badge badge-outline hover:bg-info duration-200 rounded-full border-2 text-sm p-2">
              ${item.price}
            </span>
            <button className="cursor-pointer px-4 py-2 text-sm bg-pink-500 hover:bg-pink-600 text-white rounded-full border-2 transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
