import React from 'react';
import _ from 'underscore';

import { MemoryCardsContainer } from './MemoryCards/MemoryCardsContainer';

import { generateGameCardInformation } from './MemoryCards/utils';
import { MemoryGameProvider } from './MemoryCards/state';

export const App = () => {
    const cards = [ {content: 'hi'}, {content: 'bye'}, {content: 'cya'}];
    const gameCardInformation = _.shuffle(generateGameCardInformation(cards));
    return (
        <>
            <MemoryGameProvider gameCardInformation={gameCardInformation}>
                <MemoryCardsContainer />
            </MemoryGameProvider>
        </>
    )
}
