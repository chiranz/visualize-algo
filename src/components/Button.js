import styled, { css } from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;
  padding: 7px 15px;
  border-radius: 5px;
  margin: 0 0.5rem;
  background: blue;
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background: white;
    color: blue;
  }
  ${props =>
    props.secondary &&
    css`
      background: red;
      color: white;
      &:hover {
        background: white;
        color: red;
      }
    `}

  ${props =>
    props.disabled &&
    css`
      background: grey;
      color: white;
      cursor: not-allowed;
      &:hover {
        background: grey;
        color: white;
      }
    `}
`;
