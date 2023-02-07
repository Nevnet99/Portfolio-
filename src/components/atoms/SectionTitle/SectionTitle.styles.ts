import styled from "styled-components";

export const Wrapper = styled.h2`
  ${({ theme }) => theme.typography("secondary-title")};
  text-align: center;
`;
