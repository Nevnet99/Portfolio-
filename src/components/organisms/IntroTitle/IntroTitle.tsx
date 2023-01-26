import { Subtitle, Title } from "./IntroTitle.styled";

function IntroTitle({ children }) {
  return <div>{children}</div>;
}

IntroTitle.Title = Title;
IntroTitle.Subtitle = Subtitle;

export default IntroTitle;
