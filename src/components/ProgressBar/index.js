import {
  ProgressBarContainer,
  ProgressBarLostContainer,
  ProgressBarText,
  ProgressBarWinContainer,
  ThumbStyled,
} from "./ProgressBar.styles";

function ProgressBar(props) {
  return (
    <ProgressBarContainer>
      <ProgressBarWinContainer width={props.winPercentage}>
        <ThumbStyled type="thumbs-up" />
        <ProgressBarText>{props.winPercentage}</ProgressBarText>
      </ProgressBarWinContainer>
      <ProgressBarLostContainer width={props.lostPercentage}>
        <ThumbStyled type="thumbs-down" />
        <ProgressBarText>{props.lostPercentage}</ProgressBarText>
      </ProgressBarLostContainer>
    </ProgressBarContainer>
  );
}

export default ProgressBar;
