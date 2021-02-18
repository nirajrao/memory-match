import React from 'react';

import { Card, CardContent } from '@material-ui/core';

import { useMemoryGameContext } from '../state';

import classes from './MemoryCard.module.sass';

interface Props {
    id: number;
}

export const MatchedCard: React.FC<Props> = (props) => {
    const { id } = props;
    const { allCards } = useMemoryGameContext();
    const { content } = allCards[id];
    return (
        <Card className={classes.Card}>
            <CardContent>
                <h1>{content}</h1>
            </CardContent>
        </Card>
    )
}
