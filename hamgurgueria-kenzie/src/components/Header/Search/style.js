import styled from "styled-components";

const SearchBar = styled.form`
  padding: 6px;
  width: 90%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--color-grey-2);
  border-radius: 8px;
  background-color: var(--color-grey-1);

  input {
    padding-left: 8px;
    height: 90%;
    font-size: var(--text-size-body);
  }

  input::placeholder {
    color: var(--color-grey-2);
  }

  @media (min-width: 768px) {
    & {
      width: fit-content;
      max-width: 365px;
    }
  }
`;

export default SearchBar;
