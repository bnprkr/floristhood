import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id={styles.modal}>
      <div id={styles.modalBackground} onClick={onClose} />
      <div id={styles.modalContent}>{children}</div>
    </div>,
    modalNode
  );
}
