import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from '@material-ui/core';

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
        <Container maxWidth='md'>
            <Spacer height={32} />
            <MemoryCardGrid idList={gameCardIds} />
        </Container>
    )
};

