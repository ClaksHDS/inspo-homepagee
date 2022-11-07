import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../features/randomFact/quoteSlice";
/* Styles */
import Wrapper from "../assets/wrappers/modal";

const Modal = () => {
  const dispatch = useDispatch();
  const { isQuoteOpen } = useSelector((store) => store.quote);
  const toggle = () => {
    dispatch(toggleModal());
  };

  return (
    <Wrapper>
      <aside>
        <button
          type='button'
          aria-label='show a quote'
          className='toggle-btn'
          onClick={toggle}
        >
          {`${!isQuoteOpen ? "Read quote" : "hide quote"}`}
        </button>
      </aside>
    </Wrapper>
  );
};

export default Modal;
