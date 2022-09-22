import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import styles from "./Products.module.css";

const Products = ({ products }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.products}>
          {products?.map((product) => {
            return <Product product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;

const Product = ({ product }) => {
  const { dispatch, favourites, products, cart } = useContext(AppContext);
  const [fav, setFav] = useState(false);
  const navigate = useNavigate();

  const singleProduct = (Id) => {
    navigate(`/${Id}`);
  };

  const favs = (favId) => {
    // let test = favourites.find((fav) => {
    //   return fav.id === favId;
    // });
    // if (test) {
    //   return;
    // }

    if (fav === false) {
      dispatch({
        type: "FAVOURITE",
        payload: products.find((item) => item.id === favId),
      });
      setFav(true);
    } else {
      dispatch({
        type: "NOTFAV",
        payload: favId,
      });
      setFav(false);
    }
  };

  const addToCart = (proId) => {
    if (
      cart.find((item) => {
        return item.id === proId;
      })
    ) {
      return;
    }
    dispatch({
      type: "CART",
      payload: products.find((product) => product.id === proId),
    });
  };
  console.log(favourites);
  return (
    <div key={product.id} className={styles.product}>
      <div className={styles.overlay}>
        <div onClick={() => favs(product.id)} className={styles.wishList}>
          <i
            style={{ color: fav ? "red" : "black" }}
            className="fa fa-light fa-heart"
          ></i>
        </div>
        <div onClick={() => singleProduct(product.id)} className={styles.visit}>
          <i className="fa fa-solid fa-eye"></i>
        </div>
        <div onClick={() => addToCart(product.id)} className={styles.visit}>
          <i className="fa fa-solid fa-cart-shopping"></i>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={product.image} />
      </div>
      <div className={styles.title}>{product.title.slice(0, 10)}</div>
      <p className={styles.description}>{product.description.slice(0, 150)}</p>
      {/* <div className={styles.footer}>
        <button onClick={} className={styles.btns}>
          Add to cart.
        </button>
      </div> */}
    </div>
  );
};
