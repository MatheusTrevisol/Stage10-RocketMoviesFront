import styled from 'styled-components';

export const Container = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.7rem 3.2rem;
  gap: 8px;
  
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.PINK_200};

  font-size: 1.6rem;
  font-weight: 400;
  font-family: Roboto Slab;

  border-radius: 10px;
`;