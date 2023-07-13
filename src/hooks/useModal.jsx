//Esto lo haria directamente desde el useCart pero weno
import { useState } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return {isOpen, toggleModal};
}

export default useModal;
