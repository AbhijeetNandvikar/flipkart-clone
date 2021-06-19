import React from "react";

const NavigationBar = () => {
  return (
    <div className="bg-blue-700 p-3 items-center fixed w-full flex text-white lg:px-80">
      <div className="mr-auto flex items-center">
        <img
          className="w-100 h-6 mr-8"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
        />
        <input className="rounded-sm text-black p-2 hidden lg:block" />
      </div>
      <button className="text-blue-600 bg-white px-4 rounded-sm mr-4">
        Login
      </button>
      <button className="font-bold mr-4">More</button>
      <button className="font-bold">Cart</button>
    </div>
  );
};

export default NavigationBar;
