import React from 'react';
import _ from 'underscore';

import { Card, CardContent } from '@material-ui/core';

import { CardInformation, CardState } from '../constants';
import { useMemoryGameContext } from '../state';
import classes from './MemoryCard.module.sass';

interface Props {
    cardInformation: CardInformation;
}

export const UnmatchedCard: React.FC<Props> = (props) => {
    const { cardInformation: { uid, gid, state } } = props;
    const { allCards, setAllCards, selectedCards, setSelectedCards } = useMemoryGameContext();
    let modifiedCards;
    return (
        <Card className={state === CardState.MATCHING ? classes['Card--selected']: classes.Card} onClick={() => {
            switch (state) {
                case CardState.UNMATCHED:
                    modifiedCards = { ...allCards };
                    const matchingCardInformation = { uid, gid ,state: CardState.MATCHING }
                    modifiedCards[uid] = matchingCardInformation;
                    setAllCards({ ...modifiedCards })
                    setSelectedCards([...selectedCards, matchingCardInformation]);
                    break;
                case CardState.MATCHING:
                    modifiedCards = { ...allCards };
                    const unmatchedCardInformation = { uid, gid ,state: CardState.UNMATCHED };
                    modifiedCards[uid] = unmatchedCardInformation;
                    setAllCards({ ...modifiedCards })
                    setSelectedCards(_.without(selectedCards, unmatchedCardInformation));
                    break;
            }
        }}>
            <CardContent>
                <h1>1</h1>
            </CardContent>
        </Card>
    )
}
