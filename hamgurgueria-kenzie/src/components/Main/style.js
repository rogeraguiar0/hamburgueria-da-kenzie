import styled from "styled-components";

export const Container = styled.main`
  margin-top: 15px;
  width: 90%;
  height: 100%;

  & > ul {
    height: fit-content;
    width: 100%;
    display: flex;
    overflow-x: auto;
  }
`;

export const Card = styled.li`
  margin: 5px;
  height: 200px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid var(--color-grey-2);
  border-radius: 4px;
  background-color: var(--color-grey-1);
  font-family: var(--font-family-df);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-2);

  & > img {
    max-height: 100%;
  }
`;
export const DescriptionContainer = styled.div`
  padding: 5px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NotFound = styled.div`
  font-family: var(--font-family-df);
`;
