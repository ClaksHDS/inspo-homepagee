import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/error.png";
/* Style */
import Wrapper from "../assets/wrappers/error";

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='page not found' />
        <h3>Page not found</h3>
        <p>We can't find the page you're looking for.</p>
        <Link to='/' className='btn-link'>
          home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
