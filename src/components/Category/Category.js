import React, { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./Category.module.css";

const Category = ({ handleCategory }) => {
  const { products } = useContext(AppContext);

  let individualItems = [
    "all",
    ...new Set(products?.map((ele) => ele.category)),
  ];

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    setCategories(individualItems);
  }, [products]);

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      {categories?.map((category, index) => {
        return (
          <div
            key={index}
            onClick={() => handleCategory(category)}
            style={{
              padding: "10px",
              cursor: "pointer",
              border: "1px solid black",
            }}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
