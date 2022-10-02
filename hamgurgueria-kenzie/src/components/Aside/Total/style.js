import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  width: 100%;
  border-top: 1px solid var(--color-grey-2);

  & > div {
    margin-bottom: 20px;
    padding: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  & > div p {
    font-weight: bold;
  }

  & > div span {
    color: var(--color-grey-3);
  }
`;

export default Container;
