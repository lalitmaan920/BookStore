import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="mt-4 my-3">
      <div className="card bg-base-100 w-100 shadow-sm hover:scale-105 duration-200">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>
           {item.title}
          </p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline hover:bg-info duration-200 rounded-full border-[2px]">${item.price}</div>
            <div className="cursor-pointer px-3 py-1 rounded-full hover:bg-pink-500 duration-200  border-[2px] ">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
