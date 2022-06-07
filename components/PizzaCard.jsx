import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import React, { useState } from 'react';

const PizzaCard = () => {
  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(250);
  const increase = () => {
    setCounter(counter => counter + 1);
    if (counter >= 1) {
      increase2();
    }

  };

  const increase2 = () => {
    setPrice(price => price + 250);
  }
  const decrease2 = () => {
    setPrice(price => price - 250);
  }

  const decrease = () => {
    setCounter(counter => counter - 1);
   
      decrease2();
    
  };

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h3 className={styles.count}>{counter}</h3>
        <Image src="/assets/pizza.png" alt="" width="500" height="500" />
        <h1 className={styles.title} ><button className={styles.btn} onClick={increase}>+</button>FIORI DI ZUCCA<button className={styles.btn} onClick={decrease}>-</button></h1>
        <h4 className={styles.price}>₹{price}/-</h4>
        {/* <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
      </div>
    </div>
  );
};

export default PizzaCard;
