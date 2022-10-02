import styled from "styled-components";

const Container = styled.main`
  margin-top: 15px;
  width: 90%;
  height: 100%;

  & > ul {
    height: 100%;
    width: 100%;
    display: flex;
    overflow-x: auto;
  }

  & ul li {
    margin: 5px;
    height: 200px;
    min-width: 220px;
    background-color: var(--color-grey-2);
  }
`;

export default Container;
