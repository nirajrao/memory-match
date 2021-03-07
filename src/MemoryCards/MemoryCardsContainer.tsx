import React from 'react';
import _ from 'underscore';

import { useParams } from 'react-router-dom';

import { generateGameCardInformation, isValidCardContentType } from './utils';
import { MemoryGameProvider } from './state';
import { GamePage } from './GamePage';
import data from './assets/data.json';

interface RouteProps {
    cardType: string;
}

export const MemoryCardsContainer: React.FC = () => {
    const { cardType } = useParams<RouteProps>();

    if (!isValidCardContentType(cardType)) {
        return null;
    }

    const cardContent = data[cardType];

    const gameCardInformation = _.shuffle(generateGameCardInformation(cardContent));

    const gameCardIds = _.pluck(Object.values(gameCardInformation), 'id');

    return (
        <MemoryGameProvider gameCardInformation={gameCardInformation}>
            <GamePage gameCardIds={gameCardIds} />
        </MemoryGameProvider>
    )
}

