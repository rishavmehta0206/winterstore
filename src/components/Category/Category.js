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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {categories?.map((category, index) => {
          return (
            <div
              onClick={() => handleCategory(category)}
              className={styles.category}
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
