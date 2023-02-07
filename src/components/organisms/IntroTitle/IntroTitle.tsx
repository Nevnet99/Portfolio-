import { ReactNode } from "react";
import { Subtitle, Title, Video, Wrapper } from "./IntroTitle.styled";

const IntroTitle = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

IntroTitle.Title = Title;
IntroTitle.Subtitle = Subtitle;
IntroTitle.Video = Video;

export default IntroTitle;
