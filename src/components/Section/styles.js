import styled from 'styled-components';

export const Container = styled.section`
  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.6rem;
    font-weight: 500;
  }
`;