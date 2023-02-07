import { IProject } from "@models/Project";
import { useState } from "react";
import {
  Content,
  Description,
  Img,
  Title,
  Type,
  Wrapper,
} from "./ProjectCard.styles";

const animationVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
  notHover: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ProjectCard = ({ image, title, description, type }: IProject) => {
  const [hover, setHover] = useState(false);

  return (
    <Wrapper
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {image && (
        <Img
          variants={animationVariants}
          animate={hover ? "hover" : "notHover"}
          src={image}
          alt=""
        />
      )}
      <Content>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {type && <Type>{type}</Type>}
      </Content>
    </Wrapper>
  );
};

ProjectCard.defaultProps = {
  image: null,
  description: null,
  type: null,
};

export default ProjectCard;
