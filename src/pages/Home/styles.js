import styled from 'styled-components';

export const Container = styled.div`  
  display: grid;
  width: 100%;
  height: 100vh;

  grid-template-rows: 11.7rem auto;
  grid-template-areas: 
  "header"
  "content"
  ;

  background-color: ${({ theme  }) => theme.COLORS.BACKGROUND_700};

  > main {
    width: 100%;
    grid-area: content;

    max-width: 113.7rem;
    margin: 0 auto;

    > header {
    grid-area: header;

    > a {
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
    }
  }

    > #headerSeparator {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 4rem;
      margin-bottom: 4rem;

      > h2 {
        color: ${({ theme  }) => theme.COLORS.WHITE};
        font-family: Roboto Slab;
        font-size: 3.2rem;
        font-weight: 400;
      }
    }

    > section {
      width: 100%;
      max-height: calc(100vh - 30rem);
      overflow-y: scroll;
      padding-right: 8px;

      #movieTagContainer {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;       
      }
    } 

    > section::-webkit-scrollbar {
      width: 8px;
      background: transparent;
    }

    > section::-webkit-scrollbar-track {
      background: transparent
    }

    > section::-webkit-scrollbar-thumb {
      cursor: pointer;
      background: ${({ theme }) => theme.COLORS.PINK_200};
      border-radius: 9999px;
      border: 4px solid transparent
    }
  }
`;