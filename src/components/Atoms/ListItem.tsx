import styled from 'styled-components';

export const ListItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 2rem;
  }

  a {
    color: #000000;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
  }
`;
