import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Fact = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <span style='z-index:50;font-size:0.9em; font-weight: bold;'>
        <img
          src='https://theysaidso.com/branding/theysaidso.png'
          height='20'
          width='20'
          alt='theysaidso.com'
        />
        <a
          href='https://theysaidso.com'
          title='Powered by quotes from theysaidso.com'
          style='color: #ccc; margin-left: 4px; vertical-align: middle;'
        >
          They Said So®
        </a>
      </span> */}
    </div>
  );
};

export default Fact;
