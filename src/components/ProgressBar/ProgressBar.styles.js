import styled from "styled-components";
import Thumb from "../Thumb";

const ProgressBarCommonContainer = () => `
  display: flex;
  align-items: center;
`;

export const ProgressBarContainer = styled.div`
  height: ${(props) => (props.height ? props.height : "46px")};
  display: flex;
`;

export const ProgressBarWinContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "0%")};
  background-color: rgba(var(--color-green-positive), 0.8);
  ${ProgressBarCommonContainer()};
`;

export const ProgressBarLostContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "0%")};
  background-color: rgba(var(--color-yellow-negative), 0.8);
  ${ProgressBarCommonContainer()};
`;

export const ProgressBarText = styled.span`
  color: white;
  font-weight: 500;
  font-size: 20px;
`;

export const ThumbStyled = styled(Thumb)`
  width: 40px;
  height: 46px;
  padding: 8px;
  margin-right: 8px;
  background-color: transparent;
`;
