// Example use case https://www.youtube.com/watch?v=1rTaNzjGOek

import React, { useEffect, useState } from "react";
import { useInterval } from "react-use";
import styled, { keyframes } from "styled-components";

export default function TextAnimation() {
  const reactArray = "cats".split("");
  const swiftArray = "Dogs".split("");
  const [items, setItems] = useState(reactArray);
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);

  useInterval(
    () => {
      setItems(reactArray);
      setCount(count + 1);
      if (count == 1) {
        setCount(0);
        setItems(swiftArray);
      }
    },
    play ? 6000 : null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(swiftArray);
      setPlay(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      {items.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </Wrapper>
  );
}

const animation = keyframes`
0% { opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); }
25% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotatez(0deg); filter: blur (0px); }
75% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
100% { opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur (10px);}`;

const Wrapper = styled.span`
  display: inline-block;

  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
  span:nth-child(4) {
    animation-delay: 0.5s;
  }
`;
