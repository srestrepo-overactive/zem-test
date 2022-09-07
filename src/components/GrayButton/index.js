import { GrayButtonStyled } from "./GrayButton.styles";

function GrayButton(props) {
  return (
    <GrayButtonStyled {...props} onClick={props.onClick}>
      {props.children}
    </GrayButtonStyled>
  );
}

export default GrayButton;
