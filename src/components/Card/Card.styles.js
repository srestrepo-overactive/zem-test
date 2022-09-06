import styled from "styled-components";
import Thumb from "../Thumb/index";

export const CardContainer = styled.div`
  border: 1px solid black;
  margin-bottom: 20px;
  background-color: gray;
`;

export const ThumbStyled = styled(Thumb)`
  &:focus {
    border: 3px solid white;
  }
`;
