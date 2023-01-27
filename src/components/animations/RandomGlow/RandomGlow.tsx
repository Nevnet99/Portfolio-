import { useState } from "react";
import { Wrapper } from "./RandomGlow.styled";

// randomly change the color of the text and back to white

const RandomGlow = ({ children }) => {
  const [color, setColor] = useState("white");

  setInterval(() => {
    const newColor = color === "white" ? "hotpink" : "white";
    setColor(newColor);
  }, Math.floor(Math.random() * 10000));

  return (
    <Wrapper
      initial={{ color: color === "white" ? "hotpink" : "white" }}
      animate={{
        color,
      }}
      transition={{
        damping: 30,
        duration: 1.6,
        ease: [0.5, 0, 0.1, 1],
        restDelta: 0.001,
        stiffness: 100,
        repeat: Infinity,
        delay: 5,
      }}
    >
      {children}
    </Wrapper>
  );
};

export default RandomGlow;
