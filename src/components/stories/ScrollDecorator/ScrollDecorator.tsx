import { ScrollHeightBlock } from "./ScrollDecorator.styled";

const ScrollDecorator = ({ children }) => {
  return (
    <>
      {children}
      <ScrollHeightBlock />
    </>
  );
};

export default ScrollDecorator;
