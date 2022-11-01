import styled from 'styled-components';

export const Backdrop = styled.div`
  position: relative;
  /* display: flex;
  justify-content: center; */
  /* align-items: center; */
  padding: ${p => p.theme.space[2]}px;
  height: ${p => p.theme.sizes.h.full};
  background-color: ${p => p.theme.colors.backdrop};
`;

export const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  width: 100px;
  height: 35px;
  border-radius: ${p => p.theme.radii.med};
  background-color: ${p => p.theme.colors.btnBg};
  color: ${p => p.theme.colors.textP};
  border-color: ${p => p.theme.colors.textP};
  transition: background-color 400ms ease-in-out;
  cursor: pointer;

  :hover {
    background-color: ${p => p.theme.colors.btnHover};
  }
`;

export const BtnText = styled.span`
  margin-left: ${p => p.theme.space[2]}px;
`;
