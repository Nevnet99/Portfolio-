import styled from "styled-components";

// change div to be more semantic where possible
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(100)};
  text-transform: uppercase;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(100)};
`;
