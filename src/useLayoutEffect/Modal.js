import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const StyledQuesButton = styled.button`
  border-radius: 50%;
  border: 1px solid;
  &:hover {
    cursor: pointer;
  }
`;

const Modal = () => {
  const [show, setShow] = useState(false);
  const buttonRef = useRef();
  const modalRef = useRef();

  //  If you use useEffect here you will see a flash in the initial position bcz useEffect is asynchronous it renders afer the DOM is
  //  painted where useLayoutEffect will run before the painting (measurement related manipulations)
  useLayoutEffect(() => {
    if (buttonRef.current == null || modalRef.current == null) return;
    const { bottom } = buttonRef.current.getBoundingClientRect();
    modalRef.current.style.top = `${bottom + 70}px`;
  }, [show]);

  return (
    <>
      <StyledQuesButton
        ref={buttonRef}
        onClick={() => setShow((prev) => !prev)}
      >
        ?
      </StyledQuesButton>
      {show &&
        ReactDOM.createPortal(
          <div style={{ position: "absolute" }} ref={modalRef}>
            Information message
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
