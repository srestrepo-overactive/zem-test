import styled from "styled-components";
import Thumb from "../Thumb";

const commonStylesThumb = () => `width: 40px;
height: 40px;
padding: 8px;`;

export const CardContainer = styled.div`
  border: 1px solid black;
  margin-bottom: 20px;
  background-color: gray;
`;

export const ThumbStyled = styled(Thumb)`
  border: ${(props) => (props.checked ? "3px solid white" : "none")};
  ${commonStylesThumb()}
  cursor: pointer;
`;

export const StyledThumbWinner = styled(Thumb)`
  ${commonStylesThumb()}
`;

export const CardBodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardLeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const CardText = styled.div`
  width: 80%;
  h1 {
    color: white;
  }
  p {
    color: white;
  }
`;

export const CardRightSide = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  padding-top: 30px;
`;

export const CardActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardThumbsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContainerInfoVote = styled.div`
  span {
    color: white;
    font-weight: 500;
  }
`;
