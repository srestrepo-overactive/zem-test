import styled from "styled-components";
import Thumb from "../Thumb";

export const CardContainer = styled.div`
  border: 1px solid black;
  margin-bottom: 20px;
  background-color: gray;
`;

export const ThumbStyled = styled(Thumb)`
  border: ${(props) => (props.checked ? "3px solid white" : "none")};
`;
