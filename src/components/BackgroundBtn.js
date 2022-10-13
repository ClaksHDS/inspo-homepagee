import React from "react";
import { useDispatch } from "react-redux";
import { nextBackground, prevBackground } from "../features/Images/imagesSlice";
/* React Icons */
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
/* Styles */
import Wrapper from "../assets/wrappers/imageButtons";

const BackgroundBtn = () => {
  const dispatch = useDispatch();

  const nextImage = () => {
    dispatch(nextBackground());
  };
  const prevImage = () => {
    dispatch(prevBackground());
  };
  return (
    <Wrapper>
      <div>
        <button
          type='button'
          aria-label='show previous background image'
          className='prev-btn'
          onClick={prevImage}
        >
          <BsArrowLeftCircle className='icon-btn' />
        </button>
        <button
          type='button'
          aria-label='show next background image'
          className='next-btn'
          onClick={nextImage}
        >
          <BsArrowRightCircle className='icon-btn' />
        </button>
      </div>
    </Wrapper>
  );
};

export default BackgroundBtn;
