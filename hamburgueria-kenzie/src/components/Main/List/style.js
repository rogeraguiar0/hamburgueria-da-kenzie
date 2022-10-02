import styled from "styled-components";

export const Container = styled.ul`
  height: fit-content;
  width: 100%;
  display: flex;
  overflow-x: auto;

  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
`;
