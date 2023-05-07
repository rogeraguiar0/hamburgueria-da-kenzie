import styled from "styled-components";

export const Container = styled.li`
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

  & > h4 {
    font-size: var(--text-size-heading);
  }

  & > p {
    color: var(--color-grey-3);
    font-size: var(--text-size-body);
  }

  & > span {
    color: var(--color-primary);
    font-size: var(--text-size-caption);
  }
`;
