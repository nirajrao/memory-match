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
    const { image } = allCards[id];

    const imageURI = require(`../assets/images/${image}.jpg`);

    return (
        <Card className={classes['Card--selected']} onClick={() => {
            allCards[id].state = CardState.UNMATCHED;
            setAllCards(allCards);
            setSelectedCardIds(_.without(selectedCardIds, id));

            }}>
            {image && <img className={classes.Image}  alt="" src={imageURI.default}/>}
        </Card>
    )
}
