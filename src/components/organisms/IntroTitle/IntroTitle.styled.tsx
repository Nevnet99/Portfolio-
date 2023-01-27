import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Title = styled(motion.h1)`
  ${({ theme }) => theme.typography("large-title")}
  mix-blend-mode: multiply;
  background: ${({ theme }) => theme.colors.background};
`;

export const Subtitle = styled.h2`
  ${({ theme }) => theme.typography("tertiary-title")}
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  max-height: 102px;
  object-fit: cover;
  width: 100%;

  ${({ theme }) => theme.minBp("tablet")} {
    max-height: 198px;
  }

  ${({ theme }) => theme.minBp("desktop")} {
    max-height: 360px;
  }
`;
