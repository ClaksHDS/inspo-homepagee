import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import styled from "styled-components";

const Time = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const date = moment().format("ddd Do MMM, h:mm a");
      setCurrentDate(date);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Wrapper>
      <p>{currentDate}</p>
    </Wrapper>
  );
};

export default Time;

const Wrapper = styled.div`
  background: var(--backgroundColor);
  border-radius: var(--borderRadius);
  padding: 0rem 1rem;
  height: 4rem;
  max-width: 14rem;
  margin-top: 0;
  text-align: center;
  display: grid;
  place-items: center;
  box-shadow: var(--shadow-2);
`;
