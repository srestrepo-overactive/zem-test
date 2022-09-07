import { useEffect, useState } from "react";
import Card from "../../components/Card/index";
import { useSelector } from "react-redux";
import { useGetCelebrities } from "../../utils/customHooks/celebrities/useGetCelebrities";
import { CardListContainer } from "./CartList.styles";
const data = require("../../models/celebrities/index.json");

function CardList() {
  const isLoadingServer = false;
  const typeChooseView = useSelector((state) => state.chooseView.type);
  const [dataServer, setDataServer] = useState([]);
  useEffect(() => {
    setDataServer(data.data);
  }, []);

  // const { dataServer, isLoadingServer, setDataServer } = useGetCelebrities(
  //   "https://snes4alom3.execute-api.us-east-1.amazonaws.com/get-celebrities"
  // );

  const handlerVotes = (vote, positiveVote, negativeVote) => {
    const newState = dataServer.map((obj) => {
      if (obj.id === vote.id) {
        return {
          ...obj,
          positiveVoteSelected: positiveVote,
          negativeVoteSelected: negativeVote,
        };
      }

      return obj;
    });

    setDataServer(newState);
  };

  const restartOrAddVote = (obj) => {
    const newVotes = {
      positive: obj.positiveVoteSelected
        ? obj.isVoteFinished
          ? obj.votes.positive - 1
          : obj.votes.positive + 1
        : obj.votes.positive,
      negative: obj.negativeVoteSelected
        ? obj.isVoteFinished
          ? obj.votes.negative - 1
          : obj.votes.negative + 1
        : obj.votes.negative,
    };
    return newVotes;
  };

  const voteNow = (vote) => {
    const newState = dataServer.map((obj) => {
      if (obj.id === vote.id) {
        return {
          ...obj,
          votes: restartOrAddVote(obj),
          isVoteFinished: !obj.isVoteFinished,
        };
      }

      return obj;
    });

    setDataServer(newState);
  };

  const renderCards = () => (
    <CardListContainer typeChooseView={typeChooseView}>
      {dataServer.map((elem) => (
        <Card
          key={elem.name}
          vote={elem}
          handlerpositiveVote={() => handlerVotes(elem, true, false)}
          handlerNegativeVote={() => handlerVotes(elem, false, true)}
          typeChooseView={typeChooseView}
          voteNow={() => voteNow(elem)}
        />
      ))}
    </CardListContainer>
  );
  return <div>{isLoadingServer ? <p>Loading</p> : renderCards()}</div>;
}

export default CardList;
