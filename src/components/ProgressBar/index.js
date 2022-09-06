import {
  ProgressBarContainer,
  ProgressBarLostContainer,
  ProgressBarWinContainer,
} from "./ProgressBar.styles";

function ProgressBar(props) {
  return (
    <ProgressBarContainer>
      <ProgressBarWinContainer width={props.winPercentage} />
      <ProgressBarLostContainer width={props.lostPercentage} />
    </ProgressBarContainer>
  );
}

export default ProgressBar;
