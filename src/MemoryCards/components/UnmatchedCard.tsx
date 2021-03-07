import React from 'react';

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
    return (
        <Card className={classes.Card} onClick={() => {
            // We don't want to reveal more than 2 cards at a time.
            if (selectedCardIds.length < 2) {
                allCards[id].state = CardState.MATCHING;
                setAllCards(allCards)
                setSelectedCardIds([...selectedCardIds, id]);
            }
        }}>
            <CardContent>
                <h1>?</h1>
            </CardContent>
        </Card>
    )
}
