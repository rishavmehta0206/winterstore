import React, { useContext, useEffect, useState } from "react";
import Category from "../components/Category/Category";
import Products from "../components/Products/Products";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { dispatch, products } = useContext(AppContext);
  const [menuItems, setMenuItems] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: null,
        });
        const json = await response.json();
        setMenuItems(json);
        dispatch({ type: "PRODUCTS", payload: json });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleCategory = (value = null) => {
    if (value === "all") {
      setMenuItems(products);
      return;
    }
    let newProducts = products?.filter((product) => {
      return product.category === value;
    });
    setMenuItems(newProducts);
  };

  return (
    <div>
      <Category handleCategory={handleCategory} />
      <Products products={menuItems} />
    </div>
  );
};

export default Home;
