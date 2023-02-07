import { Wrapper } from "./SectionTitle.styles";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => <Wrapper>{title}</Wrapper>;

export default SectionTitle;
