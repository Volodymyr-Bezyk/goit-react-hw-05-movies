import styled from 'styled-components';

export const ActorImg = styled.img`
  display: block;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const TextBold = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
