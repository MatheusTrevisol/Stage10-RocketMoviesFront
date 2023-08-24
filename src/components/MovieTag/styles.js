import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  
  padding: 3.2rem;
  gap: 15px;
  
  border-radius: 16px;
  border: none;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  > h3 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2.4rem;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-family: roboto;
    font-size: 1.6rem;
    font-weight: 400;

    margin-bottom: 5px;

    /*limitar o p a ter 2 linhas */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > #tagsContainer {
    display: flex;
    width: 100%;
    gap: 8px;
  }
`;