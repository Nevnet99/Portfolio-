import { Subtitle, Title, Video, Wrapper } from "./IntroTitle.styled";

function IntroTitle({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

IntroTitle.Title = Title;
IntroTitle.Subtitle = Subtitle;
IntroTitle.Video = Video;

export default IntroTitle;
