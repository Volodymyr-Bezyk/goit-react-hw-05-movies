import styled from 'styled-components';

export const ListWrap = styled.div``;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: top;
  padding: ${p => p.theme.space[3]}px;
  gap: 15px;
`;

export const ListItem = styled.li`
  border-radius: ${p => p.theme.radii.med};
  overflow: hidden;
  position: relative;
  transition: box-shadow 300ms ease-in-out;

  :hover,
  :focus {
    box-shadow: 1px 1px 27px 4px ${p => p.theme.colors.hoverText};
  }
`;
