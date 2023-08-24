import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  
  width: 100%;
  height: 11.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 6.4rem;
  padding: 2.4rem 12.3rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  div {
    > input {    
      padding-left: 2.4rem;
    }
  }
  
  > a {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK_200};
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);    
  }

  #profile {
    display: flex;
    
    > div {
      display: flex;
      flex-direction: column;    
      justify-content: center;
      align-items: flex-end;
      flex-shrink: 0;
      margin-right: 9px;

      > span {
        align-self: end;
        font-size: 1.4rem;
        font-weight: 700;
        font-family: Roboto Slab, sans-serif;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }

      > button {
        font-size: 1.4rem;
        font-weight: 400;
        font-family: Roboto Slab, sans-serif;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        background: none;
        border: none;
      }
    }
  }
`;

export const Profile = styled(Link)`
  display: flex;
  
  height: 6.8rem;

  img {
    width: 6.4rem;
    height: 6.4rem;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 35px;    
  }
`;