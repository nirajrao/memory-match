import React from 'react';

import { Grid } from '@material-ui/core';

import { CardInformation } from '../constants';
import { MemoryCard } from './MemoryCard';

interface Props {
    cards: CardInformation[];
}

export const MemoryCardGrid: React.FC<Props> = (props) => {
    const { cards } = props;
    return (
        <Grid container spacing={1}>
            {cards.map(cardInformation => (
                <Grid key={cardInformation.uid} item xs={4}>
                    <MemoryCard cardInformation={cardInformation} />
                </Grid>
            ))}
        </Grid>
    )
}

