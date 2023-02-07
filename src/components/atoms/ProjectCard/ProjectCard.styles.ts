import { motion } from "framer-motion";
import styled from "styled-components";

// change div to be more semantic where possible
export const Wrapper = styled(motion.article)`
  position: relative;
  width: 100%;
`;

export const Img = styled(motion.img)`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  bottom: ${({ theme }) => theme.spacing(80)};
  left: -${({ theme }) => theme.spacing(60)};
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => theme.minBp("tablet")} {
    position: absolute;
    flex-direction: row;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.3px);
    -webkit-backdrop-filter: blur(7.3px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: ${({ theme }) => theme.spacing(40)};
    border-radius: ${({ theme }) => theme.radius("sm")};
    text-decoration: none;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography("body-title")};
  text-transform: uppercase;
  text-decoration: none;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography("body-sub")};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const Type = styled.p`
  ${({ theme }) => theme.typography("body-small")};
  text-transform: uppercase;
`;
