import GrayButton from "../GrayButton";
import ProgressBar from "../ProgressBar";
import Thumb from "../Thumb";
import { CardContainer, ThumbStyled } from "./Card.styles";

function Card(props) {
  return (
    <CardContainer>
      <div>
        <Thumb type="thumbs-up" />
        <div>
          <h1>{props.celebrityName}</h1>
          <p>{props.celebrityDescription}</p>
        </div>
        <div>
          {props.descriptionVote}
          <ThumbStyled
            type="thumbs-up"
            onClick={props.handlerpositiveVote}
            checked={props.positiveVoteSelected}
          />{" "}
          <ThumbStyled
            type="thumbs-down"
            onClick={props.handlerNegativeVote}
            checked={props.negativeVoteSelected}
          />
          <GrayButton
            disabled={
              !props.positiveVoteSelected && !props.negativeVoteSelected
            }
            onClick={props.voteNow}
          >
            Vote now
          </GrayButton>
        </div>
      </div>
      <ProgressBar
        winPercentage={props.winPercentage}
        lostPercentage={props.lostPercentage}
      />
    </CardContainer>
  );
}

export default Card;
