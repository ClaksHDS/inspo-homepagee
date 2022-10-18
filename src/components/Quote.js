import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuote } from "../features/randomFact/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, author, isLoading } = useSelector((store) => store.quote);

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);
  return (
    <div>
      <h5>{quote}</h5>
      <p>{author}</p>
      <span>
        <img
          src='https://theysaidso.com/branding/theysaidso.png'
          height='20'
          width='20'
          alt='theysaidso.com'
        />
        <a
          href='https://theysaidso.com'
          title='Powered by quotes from theysaidso.com'
        >
          They Said So®
        </a>
      </span>
    </div>
  );
};

export default Quote;
