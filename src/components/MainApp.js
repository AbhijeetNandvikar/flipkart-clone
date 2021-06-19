import React, { useContext, useEffect, useState } from "react";
import { globalStore } from "./UserContext";
import { Route, Switch, useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import FilterTab from "./FilterTab";
import ProductList from "./ProductList";
// import data from "../ecommerceData.json";

export const brandArray = [
  "US POLO",
  "Nike",
  "JACK & JONES",
  "Raymonds",
  "Addidas",
  "Roadster",
  "Peter England",
  "zinc london",
  "trend arrest",
  "Zara",
];

export const top_wear_subCategory = ["tshirt", "shirt", "top"];

export const bottom_wear_subCategory = ["shorts", "trousers", "jeans"];

export const ethnic_wear_subCategory = ["kurta", "sherwani"];

export const categories = ["top_wear", "bottom_wear", "ethnic_wear"];

const MainApp = () => {
  const { auth } = useContext(globalStore);
  const [rawList, setRawList] = useState(null);
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    fetch("./ecommerceData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRawList(data);
        setProductList(data);
      });
  }, []);

  const handleProductList = (data) => {
    setProductList(data);
  };

  return (
    <div>
      <NavigationBar />
      <div className="w-full min-h-screen pt-20  bg-gray-100">
        <div className="grid grid-cols-12 lg:w-2/3 mx-auto md:w-10/12 sm:w-100 h-full gap-4">
          {rawList !== null ? (
            <>
              <FilterTab
                rawList={rawList}
                handleProductList={handleProductList}
              />
              <ProductList productList={productList} />
            </>
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainApp;
