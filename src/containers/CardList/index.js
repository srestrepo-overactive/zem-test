import { useState } from "react";
import Card from "../../components/Card/index";
import { getPercentageByTwoNumbers } from "../../utils/index";

const dataServer = [
  {
    id: "1",
    name: "Kanye West",
    description:
      "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
    category: "entertainment",
    picture: "kanye.png",
    lastUpdated: "2020-03-10T23:08:57.892Z",
    votes: {
      positive: 23,
      negative: 36,
    },
  },
  {
    id: "2",
    name: "Mark Zuckerberg",
    description:
      "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
    category: "business",
    picture: "mark.png",
    lastUpdated: "2021-02-14T23:10:19.134Z",
    votes: {
      positive: 418,
      negative: 324,
    },
  },
  {
    id: "3",
    name: "Cristina Fernández de Kirchner",
    description:
      "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
    category: "politics",
    picture: "cristina.png",
    lastUpdated: "2020-12-10T23:41:07.120Z",
    votes: {
      positive: 45,
      negative: 97,
    },
  },
  {
    id: "4",
    name: "Malala Yousafzai",
    description:
      "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
    category: "politics",
    picture: "malala.png",
    lastUpdated: "2020-12-10T23:41:07.120Z",
    votes: {
      positive: 18,
      negative: 3,
    },
  },
  {
    id: "5",
    name: "Elon Musk",
    description:
      "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
    category: "business",
    picture: "elon.png",
    lastUpdated: "2020-12-20T23:43:38.041Z",
    votes: {
      positive: 1237,
      negative: 894,
    },
  },
  {
    id: "6",
    name: "Greta Thumberg",
    description:
      "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
    category: "environment",
    picture: "greta.png",
    lastUpdated: "2021-02-26T23:44:50.326Z",
    votes: {
      positive: 118,
      negative: 45,
    },
  },
];

function CardList() {
  const handlerVotes = (vote, positiveVote, negativeVote) => {
    const newState = dataCopy.map((obj) => {
      // 👇️ if id equals 2, update country property
      if (obj.id === vote.id) {
        return {
          ...obj,
          positiveVoteSelected: positiveVote,
          negativeVoteSelected: negativeVote,
        };
      }

      // 👇️ otherwise return object as is
      return obj;
    });

    setDataCopy(newState);
  };

  const [dataCopy, setDataCopy] = useState(
    dataServer.map((elem) => ({
      ...elem,
      positiveVoteSelected: false,
      negativeVoteSelected: false,
    }))
  );

  return (
    <div>
      {dataCopy.map((elem) => (
        <Card
          key={elem.name}
          celebrityName={elem.name}
          celebrityDescription={elem.description}
          winPercentage={`${getPercentageByTwoNumbers(
            elem.votes.positive,
            elem.votes.positive + elem.votes.negative
          )}%`}
          lostPercentage={`${getPercentageByTwoNumbers(
            elem.votes.negative,
            elem.votes.positive + elem.votes.negative
          )}%`}
          handlerpositiveVote={() => handlerVotes(elem, true, false)}
          handlerNegativeVote={() => handlerVotes(elem, false, true)}
          positiveVoteSelected={elem.positiveVoteSelected}
          negativeVoteSelected={elem.negativeVoteSelected}
          voteNow={() => alert("vote now")}
        />
      ))}
    </div>
  );
}

export default CardList;
