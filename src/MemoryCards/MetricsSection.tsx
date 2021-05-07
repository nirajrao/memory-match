import React from 'react';

import { Typography } from '@material-ui/core';

import { useMemoryGameContext } from './state';


export const MetricsSection: React.FC = () => {
    const { numberOfIncorrectPairs } = useMemoryGameContext();
    return (
        <>
            <Typography variant="h5"># of incorrect pairs: {numberOfIncorrectPairs}</Typography>
        </>
    )
}
