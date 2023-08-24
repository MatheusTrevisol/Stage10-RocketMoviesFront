import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 14.4rem;

  background-color: rgba(255, 133, 155, 0.05);

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-left: 14.4rem;

    font-size: 1.6rem;
    font-family: Roboto Slab;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PINK_200};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 34rem;

  margin: 0 auto;
  gap: 8px;

  .whiteText {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
 
  > div:nth-child(3){
    margin-bottom: 1.6rem;
  }

  > button {
    margin-top: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: center;
    font-size: 1.6rem;
    font-family: Roboto Slab;
    font-weight: 500;
  }
`;

export const Avatar = styled.div`
  height: 19.3rem;
  width: 19.3rem;
  position: relative;
  margin: -9.4rem auto 6.4rem;

  > img {
    height: 19.3rem;
    width: 19.3rem;
    border-radius: 50%;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;

    position: absolute;
    bottom: 4px;
    right: 10px;

    background-color: ${({ theme }) => theme.COLORS.PINK_200};
    border-radius: 50%;
    
    > svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }

    > input {
      display: none;
    }
  }
`;