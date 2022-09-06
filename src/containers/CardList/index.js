import { useEffect, useState } from "react";
import Card from "../../components/Card/index";

function CardList() {
  const [dataServer, setDataServer] = useState([]);
  const [isLoadingServer, setIsloadingServer] = useState(false);

  useEffect(() => {
    fetch(
      "https://snes4alom3.execute-api.us-east-1.amazonaws.com/get-celebrities"
    )
      .then((response) => {
        setIsloadingServer(true);
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((result) => {
        setDataServer(result.Items);
        setIsloadingServer(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloadingServer(false);
      });
  }, []);

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

  const renderCards = () =>
    dataServer.map((elem) => (
      <Card
        key={elem.name}
        vote={elem}
        handlerpositiveVote={() => handlerVotes(elem, true, false)}
        handlerNegativeVote={() => handlerVotes(elem, false, true)}
        voteNow={() => voteNow(elem)}
      />
    ));

  return <div>{isLoadingServer ? <p>Loading</p> : renderCards()}</div>;
}

export default CardList;
