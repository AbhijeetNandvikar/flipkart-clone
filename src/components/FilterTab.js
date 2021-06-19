import React from "react";
import {
  categories,
  top_wear_subCategory,
  bottom_wear_subCategory,
  ethnic_wear_subCategory,
  brandArray,
} from "./MainApp";
const FilterTab = (props) => {
  const [state, setstate] = React.useState(props.rawList);

  const [selectedBrands, setSelectedBrands] = React.useState(brandArray);
  const [category, setCategory] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [size, setSize] = React.useState("");
  const filterFunction = (data) => {
    let oldData = [...props.rawList];
    //filter for brand
    if (category !== "") {
      oldData = oldData?.filter((item) => {
        if (item.category !== category) return false;
        else return true;
      });
    }

    oldData = oldData?.filter((item) => {
      if (selectedBrands.includes(item.brandName)) return true;
      else return false;
    });

    if (gender !== "") {
      oldData = oldData?.filter((item) => {
        if (item.gender === gender) return true;
        else return false;
      });
    }

    if (size !== "") {
      oldData = oldData?.filter((item) => {
        if (item.size === size) return true;
        else return false;
      });
    }

    let newData = [...oldData];
    setstate(newData !== undefined ? newData : []);
  };

  React.useEffect(() => {
    filterFunction();
  }, [category, selectedBrands, gender, size]);
  React.useEffect(() => {
    props.handleProductList(state);
  }, [state]);

  const renderCategorySelect = (data) => {
    return (
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="bg-white w-full"
      >
        <option defaultValue value="">
          Choose
        </option>
        {categories.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    );
  };
  //   const handleBrandFilter = (brandArray) => {
  //     let data = [...state];
  //     let newProductList = data.filter((item) => {
  //       if (brandArray.includes(item.brandName)) return true;
  //       else return false;
  //     });
  //     setstate(newProductList);
  //   };

  const renderBrandSelect = () => {
    return brandArray.map((brand) => {
      return (
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              let brandArray = [...selectedBrands];
              if (e.target.checked) {
                brandArray = [...selectedBrands, brand];
              } else {
                brandArray = brandArray.filter((name) => name !== brand);
              }
              setSelectedBrands(brandArray);
              filterFunction();
            }}
            value={brand}
            checked={selectedBrands.includes(brand)}
            id={`#${brand}`}
            className="mr-3"
          />
          <label htmlFor={`#${brand}`}>{brand}</label>
        </div>
      );
    });
  };

  const renderGenderSelect = () => {
    return (
      <select
        className="bg-white w-full"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Both</option>
        <option value="male">Male</option>
        <option option="female">female</option>
      </select>
    );
  };

  const renderSizeSelect = () => {
    return (
      <select
        className="bg-white w-full"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <option value="">none</option>
        <option option="xs">XS</option>
        <option value="s">Small</option>
        <option option="m">Medium</option>
        <option option="lg">Large</option>
        <option option="xl">XL</option>
      </select>
    );
  };

  const handleSort = (type) => {
    let data = [...state];
    let newData = data.sort((a, b) => {
      let p1 = parseInt(a.price);
      let p2 = parseInt(b.price);
      console.log(p1, p2);
      if (type === "lowToHigh") return p1 - p2;
      else return p2 - p1;
    });
    console.log(newData);
    setstate(newData);
  };
  return (
    <div className="col-span-3 bg-white w-full h-full flex flex-col rounded-lg p-4 ">
      <h4 className="font-bold">Category</h4>
      <div className="mb-5">{renderCategorySelect()}</div>
      <h4 className="font-bold">Gender</h4>
      <div className="mb-5">{renderGenderSelect()}</div>
      <h4 className="font-bold">Size</h4>
      <div className="mb-5">{renderSizeSelect()}</div>
      <div className="mb-5">
        <select
          className="bg-white w-full"
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value={"lowToHigh"}>low to high</option>
          <option value={"highToLow"}>high to low</option>
        </select>
      </div>
      <h4 className="font-bold">Brand</h4>
      <div className="mb-5">{renderBrandSelect()}</div>

      <button
        className="p-3 border border-blue-600 font-semibold rounded"
        onClick={() => {
          setCategory("");
          setGender("");
          setSize("");
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterTab;
