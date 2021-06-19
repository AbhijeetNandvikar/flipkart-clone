import React from "react";

const ProductCard = (props) => {
  return (
    <div
      style={{ height: "400px" }}
      className="flex flex-col shadow-sm rounded-sm lg:w-80 sm:w-64"
    >
      <img
        src={props.data?.imageUrl}
        alt={props.data.productName}
        className="object-cover overflow-hidden"
      />
      <div className="flex flex-col px-2">
        <div className="font-bold text-gray-500">{props.data.brandName}</div>
        <div className="whitespace-nowrap overflow-hidden">
          {props.data.productName}
        </div>
        <div>
          <span>₹ {props.data.price}</span>
          <span
            className="text-gray-400 ml-4"
            style={{ textDecoration: "line-through" }}
          >
            ₹ {props.data.mrp}
          </span>
          <span className="text-green-600 ml-5">
            {props.data.discount} % Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
