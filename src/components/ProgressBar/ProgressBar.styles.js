import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  height: ${(props) => (props.height ? props.height : "24px")};
  display: flex;
`;

export const ProgressBarWinContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "0%")};
  background-color: rgba(var(--color-green-positive), 0.8);
`;

export const ProgressBarLostContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "0%")};
  background-color: rgba(var(--color-yellow-negative), 0.8);
`;
