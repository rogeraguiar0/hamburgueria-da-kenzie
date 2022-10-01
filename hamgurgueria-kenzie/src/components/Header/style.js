import styled from "styled-components";

const Container = styled.header`
  height: 130px;
  width: 100%;
  background-color: var(--color-grey-2);

  & > div {
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }

  img {
    padding-top: 10px;
  }

  @media (min-width: 768px) {
    & {
      height: 70px;
    }

    & > div {
      flex-direction: row;
    }

    img {
      padding: 0;
    }
  }
`;

export default Container;
