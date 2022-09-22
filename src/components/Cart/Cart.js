import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart } = useContext(AppContext);
  console.log(cart);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <input />
          <input />
          <input />
        </div>
        <div className={styles.left}>
          <div className={styles.productContainer}>
            {cart.map((product) => {
              return (
                <div className={styles.product}>
                  <div className={styles.imageContainer}>
                    <img src={product.image} />
                  </div>
                  <div className={styles.contentContainer}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <div className={styles.values}>
                      <div className={styles.amount}>
                        <button>-</button>1<button>+</button>
                      </div>
                      <div className={styles.cost}>${product.price}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
