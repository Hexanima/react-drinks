import styles from "./CartModal.module.css";

function CartModal() {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <i>x</i>
        <h2>Mi carrito</h2>
        <section className={styles.modalBody}>
            <div className={styles.modalDrinkListContainer}>
                <article>
                    <img src="" alt="" />
                    <span>Nombre</span>
                    <span>Precio</span>
                    <div className={styles.counter}>
                        <button>-</button>
                        <span>Cantidad</span>
                        <button>+</button>
                    </div>
                </article>
            </div>
            <aside>

            </aside>
        </section>
      </div>
    </div>
  );
}