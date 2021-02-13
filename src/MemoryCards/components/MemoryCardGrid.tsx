import React from 'react';

import { Grid } from '@material-ui/core';

import { MemoryCardRow } from './MemoryCardRow';

export const MemoryCardGrid: React.FC = () => {
    return (
        <Grid container spacing={1}>
            <MemoryCardRow />
            <MemoryCardRow />
            <MemoryCardRow />
            <MemoryCardRow />
        </Grid>
    )
}

