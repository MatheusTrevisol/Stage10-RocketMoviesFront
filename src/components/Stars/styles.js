import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;

  gap: 6px;

  color: ${({ theme }) => theme.COLORS.PINK_200};
`;