import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";
import { useAuth } from "../../hooks/useAuth";

function Header() {
  const { toggleModal } = useModal();
  const { currentUser, logout } = useAuth();
  return (
    <header className={`py-5 ${styles.header}`}>
      <h1>Buscador de Bebidas</h1>
      {currentUser && (
        <>
          <p>{currentUser.name}</p>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ cursor: "pointer" }}
            onClick={toggleModal}
          />
          <button onClick={logout}>Salir</button>
        </>
      )}
    </header>
  );
}

export default Header;
