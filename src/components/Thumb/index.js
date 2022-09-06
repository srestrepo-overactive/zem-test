import { ThumbButton, ThumbImg } from "./Thumb.styles";

function Thumb(props) {
  return (
    <ThumbButton
      aria-label={props.type}
      type={props.type}
      onClick={props.onClick}
      className={props.className}
    >
      <ThumbImg src={`assets/img/${props.type}.svg`} alt={props.type} />
    </ThumbButton>
  );
}

export default Thumb;
