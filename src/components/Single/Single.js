import React, { useContext, useEffect, useMemo, useState } from "react";
import styles from "./Single.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(AppContext);
  let item = useMemo(() => {
    return products.find((product) => {
      return product.id == id;
    });
  }, [id]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.product}>
          <div className={styles.left}>
            <div className={styles.image}>
              <img src={item.image} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>{item.title}</div>
            <div style={{ display: "flex" }}>
              <span>Price:</span>
              <div className={styles.cost}>${item.price}</div>
            </div>
            <div className={styles.buttons}>
              <button>Add to cart.</button>
              <button onClick={() => navigate("/")}>Home.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
