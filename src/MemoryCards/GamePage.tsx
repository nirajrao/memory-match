import React from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, Container } from '@material-ui/core';

import { MetricsSection } from './MetricsSection';
import { MemoryCardGrid } from './components/MemoryCardGrid';
import { Spacer } from '../components/Spacer';
import { useMemoryGameContext } from './state';

interface Props {
    gameCardIds: number[];
}

export const GamePage: React.FC<Props> = (props) => {
    const { gameCardIds } = props;
    const history = useHistory();
    const { isGameFinished } = useMemoryGameContext();

    if (isGameFinished) {
        history.push('/success');
    }

    return (
        <Container maxWidth='xl'>
            <Spacer height={32} />
            <Grid container spacing={6}>
                <Grid item xs={10}>
                    <MemoryCardGrid idList={gameCardIds} />
                </Grid>
                <Grid item xs={2}>
                    <MetricsSection />
                </Grid>
            </Grid>
        </Container>
    )
};

