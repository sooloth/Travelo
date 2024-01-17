import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../Assets/right-arrow.png";
export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
      <img src={arrow} alt="" />
    </ToTop>
  );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1rem;
  right: 1rem;
  img {
    height: 1rem;
  }
  border-radius: 1rem;
  background-color: #1900ff39;
  padding: 0.5rem;
`;
