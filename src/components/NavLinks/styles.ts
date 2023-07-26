import styled, { css } from 'styled-components';

export const NLink = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;