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
    const { image } = allCards[id];
    const imageURI = require(`../assets/images/${image}.jpg`);
    return (
        <Card className={classes['Card--matched']}>
            <CardContent>
                {image && <img alt="" src={imageURI.default}/>}
            </CardContent>
        </Card>
    )
}
