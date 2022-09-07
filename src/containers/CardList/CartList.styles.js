import styled from "styled-components";

const gridStyles = () => `display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-gap: 31px;
`;

export const CardListContainer = styled.div`
  ${(props) => (props.typeChooseView === "grid" ? gridStyles() : null)}
`;
