import { getPercentageByTwoNumbers } from "../../utils";
import GrayButton from "../GrayButton";
import ProgressBar from "../ProgressBar";
import Thumb from "../Thumb";
import { CardContainer, ThumbStyled } from "./Card.styles";

function Card(props) {
  const { vote } = props;

  const renderPositiveThumb = () => (
    <ThumbStyled
      type="thumbs-up"
      onClick={props.handlerpositiveVote}
      checked={vote.positiveVoteSelected}
    />
  );

  const renderNegativeThumb = () => (
    <ThumbStyled
      type="thumbs-down"
      onClick={props.handlerNegativeVote}
      checked={vote.negativeVoteSelected}
    />
  );

  const renderProgressBar = () => (
    <ProgressBar
      winPercentage={`${getPercentageByTwoNumbers(
        vote.votes.positive,
        vote.votes.positive + vote.votes.negative
      )}%`}
      lostPercentage={`${getPercentageByTwoNumbers(
        vote.votes.negative,
        vote.votes.positive + vote.votes.negative
      )}%`}
    />
  );

  const renderGrayButton = () => (
    <GrayButton
      disabled={
        !vote.positiveVoteSelected &&
        !vote.negativeVoteSelected &&
        !vote.isVoteFinished
      }
      onClick={props.voteNow}
    >
      {vote.isVoteFinished ? "Vote again" : "Vote now"}
    </GrayButton>
  );

  const renderThumbWinner = () =>
    vote.votes.positive >= vote.votes.negative ? (
      <Thumb type="thumbs-up" />
    ) : (
      <Thumb type="thumbs-down" />
    );

  return (
    <CardContainer>
      {renderThumbWinner()}
      <div>
        <div>
          <h1>{vote.name}</h1>
          <p>{vote.description}</p>
        </div>
        <div>
          24 moths for vote
          {!vote.isVoteFinished && (
            <div>
              {renderPositiveThumb()}
              {renderNegativeThumb()}
            </div>
          )}
          {renderGrayButton()}
        </div>
      </div>
      {renderProgressBar()}
    </CardContainer>
  );
}

export default Card;
