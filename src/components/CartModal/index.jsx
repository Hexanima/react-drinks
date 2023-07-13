import styles from "./CartModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";

function CartModal() {
  const {isOpen, toggleModal} = useModal();
  return (
    isOpen && <div className={styles.modalBg} onClick={toggleModal}>
      <div className={styles.modal}>
        <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toggleModal} />
        <h2>Mi carrito</h2>
        <section className={styles.modalBody}>
          <div className={styles.modalDrinkListContainer}>
            <article className={styles.card}>
              <img
                src="https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg"
                alt=""
              />
              <span>Nombre</span>
              <span>Precio</span>
              <div className={styles.counter}>
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
              <FontAwesomeIcon icon={faTrash} className={styles.iconTrash} />
            </article>
          </div>
          <aside>
            <p>Subtotal: XXXXX</p>
            <p>Total: XXXXX</p>
            <div className={styles.btnContainer}>
              <button className={styles.clearCart}>Vaciar carrito</button>
              <button className={styles.confirmOrder}>Confirmar compra</button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default CartModal;
