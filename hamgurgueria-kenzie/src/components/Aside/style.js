import styled from "styled-components";

const Container = styled.aside`
  margin-top: 15px;
  width: 90%;
  height: 400px;
  font-family: var(--font-family-df);

  .title {
    padding-left: 10px;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 4px 4px 0 0;
    background-color: var(--color-primary);
    color: var(--color-grey-1);
  }

  & > ul {
    width: 100%;
    height: 80%;
  }
`;

export default Container;
