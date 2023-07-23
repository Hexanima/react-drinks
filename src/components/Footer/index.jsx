import styles from "./Footer.module.css";
import { getRandomInArray } from "../../utils/math.utils";

function Footer() {
  const phrasesArray = [
    "Elige tu veneno",
    "La mejor comision 19",
    "React Drinks",
    "Agitado pero no revuelto",
  ];

  return (
    <footer className={`py-5 ${styles.footer}`}>
      <small>"{getRandomInArray(phrasesArray)}"</small>
    </footer>
  );
}

export default Footer;
