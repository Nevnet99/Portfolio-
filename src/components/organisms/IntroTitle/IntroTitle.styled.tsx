import styled from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => theme.typography("large-title")}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => theme.typography("tertiary-title")}
`;
