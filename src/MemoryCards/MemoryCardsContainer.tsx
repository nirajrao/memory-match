import React from 'react';
import _ from 'underscore';

import { Container } from '@material-ui/core';

import { useMemoryGameContext } from './state';
import { MemoryCardGrid } from './components/MemoryCardGrid';

export const MemoryCardsContainer: React.FC = () => {
    const { gameCardInformation } = useMemoryGameContext();
    return (
        <Container maxWidth='md'>
            <MemoryCardGrid idList={_.pluck(Object.values(gameCardInformation), 'id')} />
        </Container>
    )
}

