import React from 'react';
import _ from 'underscore';

import { Card, CardContent } from '@material-ui/core';

import { CardState } from '../constants';
import { useMemoryGameContext } from '../state';

import classes from './MemoryCard.module.sass';

interface Props {
    id: number;
}

export const MatchingCard: React.FC<Props> = (props) => {
    const { id } = props;
    const { allCards, setAllCards, selectedCardIds, setSelectedCardIds } = useMemoryGameContext();
    const { content } = allCards[id];
    return (
        <Card className={classes['Card--selected']} onClick={() => {
            allCards[id].state = CardState.UNMATCHED;
            setAllCards(allCards);
            setSelectedCardIds(_.without(selectedCardIds, id));

            }}>
            <CardContent>
                <h1>{content}</h1>
            </CardContent>
        </Card>
    )
}
