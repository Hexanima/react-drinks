//Esto lo haria directamente desde el useCart pero weno
import { useContext } from "react";
import { ModalContext } from "../context/ModalProvider";

function useModal() {
  return useContext(ModalContext);
}

export default useModal;
