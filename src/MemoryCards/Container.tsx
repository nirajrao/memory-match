import React from 'react';

import { Container } from '@material-ui/core';

import { MemoryCardGrid } from './components/MemoryCardGrid';
import { MemoryGameProvider } from './state';

export const MemoryCardsContainer: React.FC = () => {
    return (
        <MemoryGameProvider>
            <Container maxWidth='md'>
                <MemoryCardGrid />
            </Container>
        </MemoryGameProvider>
    )
}

