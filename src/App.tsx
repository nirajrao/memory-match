import React from 'react';

import { MemoryCardsContainer } from './MemoryCards/Container';

import { MemoryGameProvider } from './MemoryCards/state';

export const App = () => {
    return (
        <>
            <MemoryGameProvider>
                <MemoryCardsContainer />
            </MemoryGameProvider>
        </>
    )
}
