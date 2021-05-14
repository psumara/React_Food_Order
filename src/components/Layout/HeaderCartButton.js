import CartIcon from "../Cart/CartIcon";
import CartContex from "../../store/cart-contex";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContex);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
