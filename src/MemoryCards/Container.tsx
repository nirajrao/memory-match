import React from 'react';

import { Container } from '@material-ui/core';

import { MemoryCardGrid } from './components/MemoryCardGrid';

export const MemoryCardsContainer: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <MemoryCardGrid />
        </Container>
    )
}

