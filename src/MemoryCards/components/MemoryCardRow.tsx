import React from 'react';

import { Grid } from '@material-ui/core';

import { MemoryCard } from './MemoryCard';

export const MemoryCardRow: React.FC = () => {
    return (
        <Grid container item xs={12} spacing={1}>
            <Grid item xs={4}>
                <MemoryCard uid={1} gid={1} />
            </Grid>
            <Grid item xs={4}>
                <MemoryCard uid={2} gid={1} />
            </Grid>
            <Grid item xs={4}>
                <MemoryCard uid={3} gid={1} />
            </Grid>
        </Grid>
    )
}
