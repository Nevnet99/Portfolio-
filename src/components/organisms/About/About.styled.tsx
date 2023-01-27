import styled from "styled-components";

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.spacing(300)} 0;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: ${({ theme }) => theme.spacing(50)};

  ${({ theme }) => theme.minBp("tablet")} {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 50%;
`;

export const Content = styled.p`
  ${({ theme: { typography } }) => typography("body-text")}
`;
