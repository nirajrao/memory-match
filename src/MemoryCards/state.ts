import { useEffect, useState } from 'react';

import constate from 'constate';

import { CardInformation, CardState } from './constants';
import { checkSelectedCardsEquality } from './utils';

interface Props {
    gameCardInformation: CardInformation[];
}

function useMemoryGameState(props: Props) {
    const { gameCardInformation } = props;
    const mappedGameCardInformation: {[id: number] : CardInformation} = {}

    gameCardInformation.forEach((card) => mappedGameCardInformation[card.id] = card)

    const [allCards, setAllCards] = useState<{[id: number] : CardInformation}>(
        mappedGameCardInformation
    )

    const [selectedCardIds, setSelectedCardIds] = useState<number[]>([]);

    useEffect(() => {
        if (selectedCardIds.length === 2) {
            const [firstId, secondId] = selectedCardIds;
            const firstSelectedCard = allCards[firstId];
            const secondSelectedCard = allCards[secondId];
            if (checkSelectedCardsEquality(firstSelectedCard, secondSelectedCard)) {
                allCards[firstId].state = CardState.MATCHED;
                allCards[secondId].state = CardState.MATCHED;
                setAllCards(allCards);
            } else {
                allCards[firstId].state = CardState.UNMATCHED;
                allCards[secondId].state = CardState.UNMATCHED;
                setAllCards(allCards);
            }
            setSelectedCardIds([]);
        }
    }, [selectedCardIds, allCards])

    return { allCards, setAllCards, selectedCardIds, setSelectedCardIds, gameCardInformation };
}

export const [MemoryGameProvider, useMemoryGameContext] = constate(useMemoryGameState);
