import styled from "styled-components";

export const Wrapper = styled.nav<{ hasScrolled: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.3px);
  -webkit-backdrop-filter: blur(5.3px);
  z-index: 200;
  display: flex;
  justify-content: space-between;
  ${({ hasScrolled }) => hasScrolled && `background: rgba(0,0, 0, 0.21);`};
  transition: 0.4s ease-in-out background;
  padding: 0 ${({ theme: { spacing } }) => spacing(20)};

  ${({ theme }) => theme.minBp("tablet")} {
    padding: 0 ${({ theme: { spacing } }) => spacing(100)};
  }

  ${({ theme }) => theme.minBp("desktop")} {
    padding: 0 ${({ theme: { spacing } }) => spacing(120)};
  }
`;

export const Logo = styled.h2`
  display: flex;
  place-items: center;
  ${({ theme }) => theme.typography("body-sub")};
`;

export const Buttons = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(20)};
`;

export const ButtonWrapper = styled.li``;
