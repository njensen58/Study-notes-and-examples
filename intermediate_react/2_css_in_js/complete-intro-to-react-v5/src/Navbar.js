import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors.js";

const spin = keyframes`
  to { 
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  const [speed, setSpeed] = useState(1)
  return (
    <header
      css={css`
        background-color: ${colors.primary};
        padding: 15px;

        &:hover {
          background-color: ${colors.dark};
        }
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: ${speed}s ${spin} linear infinite;

          &:hover {
            animation: ${speed}s ${spin} linear infinite reverse;
          }
        `}
      >
        🐶
      </span>
      <button onClick={() => setSpeed(s => s > .10 ? s - .1 : .01)}>Spin the dog faster!</button>
    </header>
  );
};

export default NavBar;
