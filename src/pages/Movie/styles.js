import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  main {
    display: flex;
    flex-direction: column;
    max-width: 113.7rem;
    margin: 4rem auto 0;

    > button {
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      margin-bottom: 2.4rem;
      gap: 8px;

      font-size: 1.6rem;
      font-family: Roboto Slab;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.PINK_200};

      background: none;
      border: none;
    }

    > div::-webkit-scrollbar {
      width: 8px;
      background: transparent;
    }

    > div::-webkit-scrollbar-track {
      background: transparent
    }

    > div::-webkit-scrollbar-thumb {
      cursor: pointer;
      background: ${({ theme }) => theme.COLORS.PINK_200};
      border-radius: 9999px;
      border: 4px solid transparent
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 30rem);

  padding-right: 2.4rem;
  
  overflow-y: auto;

  > #movieNameRating {
    display: flex;
    align-items: center;

    margin-bottom: 2.4rem;
    gap: 1.9rem;

    > h1 {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-family: Roboto Slab;
      font-size: 3.6rem;
      font-weight: 500;
    }

    svg {
      width: 23px;
      height: 23px;
    }
  }

  > #movieAuthorDate {
    display: flex;
    align-items: center;

    margin-bottom: 4rem;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};;
    text-align: justify;
    font-family: Roboto Slab;
    font-size: 1.6rem;
    font-weight: 400;

    > img {
      width: 16px;
      height: 16px;

      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK_200};
    }
  }

  > #movieTags {
    display: flex;
    align-items: center;

    margin-bottom: 4rem;
    gap: 8px;

    > span {
      background-color: #282124;
      padding: .8rem 1.6rem;
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};;
    text-align: justify;
    font-family: Roboto Slab;
    font-size: 1.6rem;
    font-weight: 400;

  }
`;