import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { AppContext } from "../../context/AppContext";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const { favourites, cart } = useContext(AppContext);
  const navigate = useNavigate();
  const [ham, setHam] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          className={styles.left}
        >
          <h2>Ecom</h2>
          <div className={styles.logo}>
            <i className="fa fa-duotone fa-ship"></i>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.inputContainer}>
            <input placeholder="search product" />
            <i className="fa fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className={styles.right} id={ham ? styles.hidden : ""}>
          <div className={styles.icon}>
            <div className={styles.count}>{favourites.length}</div>
            <NavLink style={navlinkStyles} to="/favourite">
              <h3>Favourites</h3>
            </NavLink>
            <i style={{ color: "red" }} className="fa fa-duotone fa-heart"></i>
          </div>
          <div className={styles.icon}>
            <div className={styles.count}>{cart.length}</div>
            <NavLink style={navlinkStyles} to="/cart">
              <h3>Cart</h3>
            </NavLink>
            <i className="fa fa-solid fa-cart-shopping"></i>
          </div>
        </div>
        <div onClick={() => setHam(!ham)} className={styles.hamburger}>
          <i className="fa fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const navlinkStyles = ({ isActive }) => {
  return {
    textDecoration: isActive ? "underline" : "none",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 10px",
    color: isActive ? "white" : "",
  };
};
