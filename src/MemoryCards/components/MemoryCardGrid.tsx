import React from 'react';

import { Grid } from '@material-ui/core';

import { MemoryCard } from './MemoryCard';

interface Props {
    idList: number[];
}

export const MemoryCardGrid: React.FC<Props> = (props) => {
    const { idList } = props;
    return (
        <Grid container spacing={2}>
            {idList.map(id=> (
                <Grid key={id} item xs={3}>
                    <MemoryCard id={id} />
                </Grid>
            ))}
        </Grid>
    )
}

