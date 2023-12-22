import styled from "styled-components";

const StyledBox = styled.div`
  display: grid;
  width: 600px;
  height: 83rem;
  border: 1px solid black;
  background-color: var(--color-darkest);
  // position: absoulte;
  // margin-left: 450px;
`;

export function Box({ children }) {
  return <StyledBox>{children}</StyledBox>;
}
