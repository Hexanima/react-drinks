import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`py-5 ${styles.header}`}>
      <h1>Buscador de Bebidas</h1>
    </header>
  );
}

export default Header;
