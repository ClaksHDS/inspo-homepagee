import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import styled from "styled-components";

const Time = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = moment().format("ddd Do MMM, h:mm a");
    setCurrentDate(date);
  }, []);
  return (
    <Wrapper>
      <div className='time-container'>
        <p>{currentDate}</p>
      </div>
    </Wrapper>
  );
};

export default Time;

const Wrapper = styled.div`
  background: var(--backgroundColor);
  border-radius: var(--borderRadius);
  margin: 1rem;
  max-width: 12rem;
  p {
    padding-left: 1rem;
  }
`;
