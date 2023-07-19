import { useCart } from "../../../hooks/useCart";
import styles from "./CartCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"

function CartCard({cartItem}) {
  const {
    addToCart,
    removeOneFromCart,
    removeAllFromCart,
  } = useCart();
  return (
    <article className={styles.card}>
      <img src={cartItem.strDrinkThumb} alt="" />
      <span>{cartItem.strDrink.substring(0, 10)}</span>
      <span>${cartItem.price * cartItem.quantity}</span>
      <div className={styles.counter}>
        <button
          onClick={() => {
            removeOneFromCart(cartItem.idDrink);
          }}
        >
          -
        </button>

        <span>{cartItem.quantity}</span>
        <button onClick={() => addToCart(cartItem)}>+</button>
      </div>
      <FontAwesomeIcon
        icon={faTrash}
        className={styles.iconTrash}
        onClick={() => removeAllFromCart(cartItem.idDrink)}
      />
    </article>
  );
}

CartCard.propTypes = {
    cartItem: PropTypes.object.isRequired
}

export default CartCard;
