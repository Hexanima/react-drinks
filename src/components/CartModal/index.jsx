import styles from "./CartModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";

function CartModal() {
  const { isOpen, toggleModal } = useModal();
  const {
    cart,
    addToCart,
    removeOneFromCart,
    removeAllFromCart,
    clearCart,
    handleToggleCart,
  } = useCart();

  const cartList = cart.cartItems.map((cartItem) => (
    <article className={styles.card} key={cartItem.idDrink}>
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
  ));

  return (
    isOpen && (
      <div className={styles.modalBg}>
        <div className={styles.modal}>
          <FontAwesomeIcon
            icon={faXmarkCircle}
            className={styles.icon}
            onClick={toggleModal}
          />
          <h2>Mi carrito</h2>
          <section className={styles.modalBody}>
            <div className={styles.modalDrinkListContainer}>
              {cartList.length > 0 ? (
                cartList
              ) : (
                <p>No hay bebidas en tu carrito</p>
              )}
            </div>
            <aside>
              <p>Subtotal: XXXXX</p>
              <p>Total: ${cart.cartItems.reduce((result, drink) => result + drink.price * drink.quantity, 0)}</p>
              <div className={styles.btnContainer}>
                <button className={styles.clearCart} onClick={clearCart}>
                  Vaciar carrito
                </button>
                <button className={styles.confirmOrder}>
                  Confirmar compra
                </button>
              </div>
            </aside>
          </section>
        </div>
      </div>
    )
  );
}

export default CartModal;
