import React from 'react';
import _ from 'underscore';

import { useHistory } from 'react-router-dom';

import { Container } from '@material-ui/core';

import { useMemoryGameContext } from './state';
import { MemoryCardGrid } from './components/MemoryCardGrid';

export const MemoryCardsContainer: React.FC = () => {
    const history = useHistory();
    const { gameCardInformation, matchedCardIds, allCards } = useMemoryGameContext();

    // TODO: Show a Celebration Animation when the game is complete.
    if (Object.values(allCards).length === matchedCardIds.length) {
        history.push('/');
    }

    return (
        <Container maxWidth='md'>
            <MemoryCardGrid idList={_.pluck(Object.values(gameCardInformation), 'id')} />
        </Container>
    )
}

