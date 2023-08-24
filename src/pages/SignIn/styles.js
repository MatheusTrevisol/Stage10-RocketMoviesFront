import styled from 'styled-components';
import backgroundImg from '../../assets/signIn.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 23.5rem 16.3rem 0 13.4rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_200};
    font-family: Roboto Slab;
    font-size: 4.8rem;
    font-weight: 700;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.GRAY_50};
    font-family: Roboto Slab;
    font-size: 1.4rem;
    font-weight: 400;

    margin-bottom: 4.8rem;
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;
    font-family: Roboto Slab;
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 4.8rem;
  }

  > #inputDivSeparator {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-bottom: 2.4rem;
  }

  > button {
    width: 100%;

    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: center;
    font-family: Roboto Slab;
    font-size: 1.6rem;
    font-weight: 500;

    margin-bottom: 4.2rem;
  }

  > a {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.PINK_200};
    text-align: center;
    font-family: Roboto Slab;
    font-size: 1.6rem;
    font-weight: 400;
  }
`

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.4;
`