import styled from 'styled-components';

export const SubTitle = styled.h3`
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes[4]}px;
  text-align: center;
`;

export const ListItem = styled.li`
  display: block;
  padding: ${p => p.theme.space[2]}px;
`;
