import styles from "./CartModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";
import CartCard from "./components/CartCard";

function CartModal() {
  const { isOpen, toggleModal } = useModal();
  const { cart, clearCart, confirmPurchase, orderTotal } = useCart();

  const cartList = cart.cartItems.map((cartItem) => (
    <CartCard key={cartItem.idDrink} cartItem={cartItem} />
  ));

  if (isOpen) {
    return (
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
              <p>Total: ${orderTotal}</p>
              <div className={styles.btnContainer}>
                <button className={styles.clearCart} onClick={clearCart}>
                  Vaciar carrito
                </button>
                <button
                  className={styles.confirmOrder}
                  onClick={confirmPurchase}
                >
                  Confirmar compra
                </button>
              </div>
            </aside>
          </section>
        </div>
      </div>
    );
  }
}

export default CartModal;
