import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  //   console.log(props.productList);
  const renderProducts = (list) => {
    if (Array.isArray(list))
      return list.map((item) => {
        return <ProductCard data={item} />;
      });
  };
  const displayProducts = React.useMemo(
    () => renderProducts(props.productList),
    [props]
  );
  return (
    <div className="py-6 col-span-9 gap-y-6 bg-white w-full h-full rounded-lg grid grid-flow-row grid-cols-2	justify-items-center">
      {displayProducts}
    </div>
  );
};

export default ProductList;
