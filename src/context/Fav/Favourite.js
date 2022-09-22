import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import styles from "./Favourite.module.css";

const Favourite = () => {
  const { favourites, dispatch, cart } = useContext(AppContext);
  const moveToCart = (productId) => {
    dispatch({
      type: "FAV_TO_CART",
      payload: favourites.find((favourite) => favourite.id === productId),
    });
  };

  const deleteItem = (productId) => {
    dispatch({ type: "DELETE", payload: { loc: "Fav", productId: productId } });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {favourites.length < 1 && (
          <div>
            <h1>No items present in favourites.</h1>
          </div>
        )}
        {favourites.length > 0 && (
          <div className={styles.productContainer}>
            {favourites.map((favourite) => {
              return (
                <div className={styles.product}>
                  <div className={styles.image}>
                    <img src={favourite.image} />
                  </div>
                  <div className={styles.content}>
                    <h2 className={styles.title}>
                      {favourite.title.slice(0, 10)}
                    </h2>

                    <button
                      className={styles.btns}
                      onClick={() => moveToCart(favourite.id)}
                    >
                      Add to cart
                    </button>
                  </div>
                  <div
                    onClick={() => deleteItem(favourite.id)}
                    className={styles.delete}
                  >
                    <i className="fa fa-solid fa-trash"></i>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourite;
