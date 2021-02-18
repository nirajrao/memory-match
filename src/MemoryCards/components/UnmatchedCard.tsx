import React from 'react';
import _ from 'underscore';

import { Card, CardContent } from '@material-ui/core';

import { CardState } from '../constants';
import { useMemoryGameContext } from '../state';
import classes from './MemoryCard.module.sass';

interface Props {
    id: number;
}

export const UnmatchedCard: React.FC<Props> = (props) => {
    const { id } = props;
    const { allCards, setAllCards, selectedCardIds, setSelectedCardIds } = useMemoryGameContext();
    const { state, content } = allCards[id];
    return (
        <Card className={state === CardState.MATCHING ? classes['Card--selected']: classes.Card} onClick={() => {
            switch (state) {
                case CardState.UNMATCHED:
                    allCards[id].state = CardState.MATCHING;
                    setAllCards(allCards)
                    setSelectedCardIds([...selectedCardIds, id]);
                    break;
                case CardState.MATCHING:
                    allCards[id].state = CardState.UNMATCHED;
                    setAllCards(allCards);
                    setSelectedCardIds(_.without(selectedCardIds, id));
                    break;
            }
        }}>
            <CardContent>
                <h1>{content}</h1>
            </CardContent>
        </Card>
    )
}
