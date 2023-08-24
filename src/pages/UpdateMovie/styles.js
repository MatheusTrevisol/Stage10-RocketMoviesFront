import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > main {
    max-width: 113.7rem;
    margin: 4rem auto 0;

    button {
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 8px;

      font-family: Roboto Slab;
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.PINK_200};

      background: none;
      border: none;
    }

    > form::-webkit-scrollbar {
      width: 8px;
      background: transparent;
    }

    > form::-webkit-scrollbar-track {
      background: transparent
    }

    > form::-webkit-scrollbar-thumb {
      cursor: pointer;
      background: ${({ theme }) => theme.COLORS.PINK_200};
      border-radius: 9999px;
      border: 4px solid transparent
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: calc(100vh - 25rem);
  
  display: flex;
  flex-direction: column;
  
  
  padding-right: 1.6rem;
  overflow-y: auto;

  > section {
    display: flex;
    flex-direction: column;

    gap: 4rem;
    margin-top: 2.4rem;

    > #inputDivSeparator {
      display: flex;
      gap: 4rem;
  
      input {
        font-size: 1.6rem;
        font-family: Roboto;
        font-weight: 400;
      }
    }

    > textarea {
      width: 100%;
      height: 27.4rem;

      padding: 1.9rem 1.6rem;

      border-radius: 10px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 1.6rem;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-family: Roboto;
        font-size: 1.6rem;
        font-weight: 400;
      }
    }

    #highlighterDiv {
      h4 {
        color: ${({ theme }) => theme.COLORS.GRAY_400};
        font-family: Roboto Slab;
        font-size: 2rem;
        font-weight: 400;

        margin-bottom: 2.4rem;
      }
    }

    #markersItemsDiv {
      display: flex;
      flex-wrap: wrap;
      gap: 2.4rem;
      padding: 1.6rem;
      
      background: #0D0C0F;
    }

    #buttonsDivSeparator {
      width: 100%;
      display: flex;

      gap: 4rem;

      > button {
        width: 100%;

        background-color: ${({ theme }) => theme.COLORS.PINK_200};

        color: ${({ theme }) => theme.COLORS.GRAY_700};
        text-align: center;
        font-family: Roboto Slab;
        font-size: 1.6rem;
        font-weight: 500;

        border-radius: 10px;
      }

      .otherButtonColor {
        color: ${({ theme }) => theme.COLORS.PINK_200};
        background: #0D0C0F;
      }
    }
  } 
`;