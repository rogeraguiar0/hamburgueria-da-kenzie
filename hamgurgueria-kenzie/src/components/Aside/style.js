import styled from "styled-components";

export const Container = styled.aside`
  margin-top: 15px;
  width: 90%;
  height: 260px;
  font-family: var(--font-family-df);

  .title {
    padding-left: 10px;
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 4px 4px 0 0;
    background-color: var(--color-primary);
    color: var(--color-grey-1);
    font-size: var(--text-size-body);
  }

  & > ul {
    width: 100%;
    height: 65%;
    background-color: var(--color-grey-1);
    overflow-y: auto;
  }

  @media (min-width: 768px) {
    width: 250px;
  }
`;

export const Card = styled.li`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .content {
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .content img {
    width: 50px;
    background-color: var(--color-grey-2);
  }
  .content h4 {
    font-size: var(--text-size-body);
  }
  .content span {
    color: var(--color-grey-3);
    font-size: var(--text-size-caption);
  }

  button {
    margin-right: 5px;
    border: none;
    background-color: transparent;
    color: var(--color-grey-3);
    font-size: var(--text-size-caption);
    cursor: pointer;
  }
`;

export const Empty = styled.div`
  padding-top: 30px;
  width: 100%;
  height: 80%;
  background-color: var(--color-grey-1);
  text-align: center;

  & > h3 {
    font-size: var(--text-size-body);
  }

  & > p {
    font-size: var(--text-size-caption);
  }
`;
