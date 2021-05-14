import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemFrom from "./MealItemForm";
import CartContex from "../../../store/cart-contex";

const MealItem = (props) => {
  const cartCtx = useContext(CartContex);

  const price = `${props.price.toFixed(2)} zł`;

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemFrom onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
