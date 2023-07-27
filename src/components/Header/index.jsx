import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faArrowRightFromBracket,
} from "@fortawesome/free-regular-svg-icons";
import useModal from "../../hooks/useModal";
import { useAuth } from "../../hooks/useAuth";
import { Typography } from "@mui/material";

function Header() {
  const { toggleModal } = useModal();
  const { currentUser, logout } = useAuth();
  return (
    <header className={`py-5 ${styles.header}`}>
      <h1>La boutique de las bebidas</h1>
      {currentUser && (
        <>
          <div className={`${styles.headerButton}`}>
            <span>{currentUser.name}</span>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ cursor: "pointer" }}
              onClick={toggleModal}
            />
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              style={{ cursor: "pointer" }}
              onClick={logout}
            />
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
