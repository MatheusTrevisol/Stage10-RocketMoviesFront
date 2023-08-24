import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.8rem 0 1.8rem 1.6rem;
    
    font-family: Roboto Slab;
    font-size: 1.4rem;
    font-weight: 400;

    border: 0;
    border-radius: 10px;
    
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

  }

  > svg {
    margin-left: 1.6rem;
    margin-right: 1.6rem;
  }
`;