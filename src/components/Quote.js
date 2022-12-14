import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuote } from "../features/randomFact/quoteSlice";
import { Loading } from "../components";
/* Styles */
import Wrapper from "../assets/wrappers/quote";

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, author, isLoading, isQuoteOpen } = useSelector(
    (store) => store.quote
  );

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <aside className={`${isQuoteOpen ? "modal show-modal" : "modal"}`}>
        <div className='quote-details'>
          <p>
            <span>" {quote} "</span> - {author}
          </p>
          <br />
          <a
            href='https://theysaidso.com'
            title='Powered by quotes from theysaidso.com'
            className='quote-reference'
            rel='noopener'
          >
            They Said So®
          </a>
        </div>
      </aside>
    </Wrapper>
  );
};

export default Quote;
