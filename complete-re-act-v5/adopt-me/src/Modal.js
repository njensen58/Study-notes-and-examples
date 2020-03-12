import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  // useRef makes sure that the element I create is the same throughout the life
  // of the application.  The .current does not reset/change between re-renders.
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

// We return a div in createPortal in this instance because the instructor's
// css was made for a div, that's all.
// We're not trapping focus here, which is an accessibility no-no. That is why
// modals are less preferred lately.

export default Modal;
