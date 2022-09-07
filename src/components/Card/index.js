import { getPercentageByTwoNumbers } from "../../utils";
import GrayButton from "../GrayButton";
import ProgressBar from "../ProgressBar";
import {
  CardActions,
  CardBodyContainer,
  CardContainer,
  CardLeftSide,
  CardRightSide,
  CardText,
  CardThumbsContainer,
  ContainerInfoVote,
  StyledThumbWinner,
  ThumbStyled,
} from "./Card.styles";

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
      <StyledThumbWinner type="thumbs-up" />
    ) : (
      <StyledThumbWinner type="thumbs-down" />
    );

  const renderText = () => (
    <CardText>
      <h1>{vote.name}</h1>
      <p>{vote.description}</p>
    </CardText>
  );

  const renderThumbs = () =>
    !vote.isVoteFinished && (
      <CardThumbsContainer>
        {renderPositiveThumb()}
        {renderNegativeThumb()}
      </CardThumbsContainer>
    );

  const renderInfoVote = () => (
    <ContainerInfoVote>
      {vote.isVoteFinished ? (
        <span>Thank you for your vote!</span>
      ) : (
        <span>Your opinion is important!</span>
      )}
    </ContainerInfoVote>
  );

  return (
    <CardContainer>
      <CardBodyContainer>
        <CardLeftSide>
          {renderThumbWinner()}
          {renderText()}
        </CardLeftSide>
        <CardRightSide>
          {renderInfoVote()}
          <CardActions>
            {renderThumbs()}
            {renderGrayButton()}
          </CardActions>
        </CardRightSide>
      </CardBodyContainer>
      {renderProgressBar()}
    </CardContainer>
  );
}

export default Card;
