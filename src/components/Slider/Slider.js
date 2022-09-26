import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./Slider.module.css";

const Slider = ({ sliderIndex,products }) => {
  // const { products } = useContext(AppContext);
  const [index, setIndex] = useState(sliderIndex);
  const { image } = products[index];
  const checkValidIndex = (index) => {
    if (index > products.length - 1) {
      return 0;
    } else if (index < 0) {
      return products.length - 1;
    }
    return index;
  };
  const handleSlideLeft = () => {
    setIndex((ind) => {
      let validIndex = ind - 1;
      return checkValidIndex(validIndex);
    });
  };
  const handleSlideRight = () => {
    setIndex((ind) => {
      let validIndex = ind + 1;
      return checkValidIndex(validIndex);
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.images}>
            <img src={image} />
          </div>
          <div className={styles.btns}>
            <div onClick={handleSlideLeft} className={styles.icon}>
              <i className="fa fa-solid fa-arrow-left"></i>
            </div>
            <div onClick={handleSlideRight} className={styles.icon}>
              <i className="fa fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
