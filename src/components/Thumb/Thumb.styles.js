import styled from "styled-components";

export const ThumbButton = styled.button`
  padding: 0;
  border: 0;
  background-color: ${(props) =>
    props.type === "thumbs-down" ? "rgba(var(--color-yellow-negative), .8)" : " rgba(var(--color-green-positive), .8)"};
`;

export const ThumbImg = styled.img`
  width: 100%;
  height: 100%;
`;
