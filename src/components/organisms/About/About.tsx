import { Content, Image, Wrapper } from "./About.styled";

const About = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

About.Image = Image;
About.Content = Content;

export default About;
