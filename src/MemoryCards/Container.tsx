import React from 'react';

import { Container } from '@material-ui/core';

import { useMemoryGameContext } from './state';
import { MemoryCardGrid } from './components/MemoryCardGrid';

export const MemoryCardsContainer: React.FC = () => {
    const { allCards } = useMemoryGameContext();
    return (
        <Container maxWidth='md'>
            <MemoryCardGrid cards={Object.values(allCards)} />
        </Container>
    )
}

