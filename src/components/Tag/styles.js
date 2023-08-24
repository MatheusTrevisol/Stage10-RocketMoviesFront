import styled from 'styled-components';

export const Container = styled.span`
  padding: .5rem 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  color: ${({ theme }) => theme.COLORS.GRAY_200};
  text-align: center;
  font-family: Roboto;
  font-size: 1.2rem;
  font-weight: 400;

  border-radius: 8px;
`;