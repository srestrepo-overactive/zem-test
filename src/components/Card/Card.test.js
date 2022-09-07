import { render, screen } from '@testing-library/react';
import Card from '.';

describe(`CardList`, () => {
  const renderCard = (vote) => (
    <Card
      vote={vote}
      handlerpositiveVote={() => {}}
      handlerNegativeVote={() => {}}
      typeChooseView={'list'}
      voteNow={() => {}}
    />
  );

  const defaultVoteObject = () => ({
    name: 'The name',
    description: 'Description',
    votes: {
      positive: 40,
      negative: 20
    }
  });

  test(`It should show 'The name'`, () => {
    render(renderCard(defaultVoteObject()));
    const element = screen.getByText(/The name/i);
    expect(element).toBeInTheDocument();
  });

  test(`it should show 'Thank you for your vote!'
  when the vote is finished`, () => {
    const vote = {
      name: 'The name',
      description: 'Description',
      votes: {
        positive: 40,
        negative: 20
      },
      isVoteFinished: true
    };
    render(renderCard(vote));
    const element = screen.getByText(/Thank you for your vote!/i);
    expect(element).toBeInTheDocument();
  });

  test(`it should show 'Your opinion is important!'
  when the vote is not finished`, () => {
    const vote = {
      name: 'The name',
      description: 'Description',
      votes: {
        positive: 40,
        negative: 20
      },
      isVoteFinished: false
    };
    render(renderCard(vote));
    const element = screen.getByText(/Your opinion is important!/i);
    expect(element).toBeInTheDocument();
  });

  test(`it should show 'Vote now'
  when the vote is not finished`, () => {
    render(renderCard(defaultVoteObject()));
    const element = screen.getByText(/Vote now/i);
    expect(element).toBeInTheDocument();
  });
});
