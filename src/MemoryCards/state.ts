import { useEffect, useState } from 'react';

import constate from 'constate';

import { CardInformation, CardState } from './constants';
import { checkSelectedCardsEquality } from './utils';

interface Props {
    gameCardInformation: CardInformation[];
}

function useMemoryGameState(props: Props) {
    const { gameCardInformation } = props;
    console.log(gameCardInformation);
    const mappedGameCardInformation: {[id: number] : CardInformation} = {}

    gameCardInformation.forEach((card) => mappedGameCardInformation[card.id] = card)
    const [isGameFinished, setIsGameFinished] = useState<boolean>(false);

    const [allCards, setAllCards] = useState<{[id: number] : CardInformation}>(
        mappedGameCardInformation
    )

    const [selectedCardIds, setSelectedCardIds] = useState<number[]>([]);
    const [matchedCardIds, setMatchedCardIds] = useState<number[]>([]);

    useEffect(() => {
        function checkForMatch() {
            const [firstId, secondId] = selectedCardIds;
            const firstSelectedCard = allCards[firstId];
            const secondSelectedCard = allCards[secondId];
            if (checkSelectedCardsEquality(firstSelectedCard, secondSelectedCard)) {
                allCards[firstId].state = CardState.MATCHED;
                allCards[secondId].state = CardState.MATCHED;
                const newMatchedCardIds = [...matchedCardIds, firstId, secondId]
                setMatchedCardIds(newMatchedCardIds);
                setAllCards(allCards);
                if (newMatchedCardIds.length === gameCardInformation.length) {
                    setIsGameFinished(true);
                }
            } else {
                allCards[firstId].state = CardState.UNMATCHED;
                allCards[secondId].state = CardState.UNMATCHED;
                setAllCards(allCards);
            }
            setSelectedCardIds([]);
        }
        if (selectedCardIds.length === 2) {
            const timer = setTimeout(() => {
                checkForMatch();
            }, 1000);
            return () => {
                clearTimeout(timer);
            }
        }
    }, [matchedCardIds, selectedCardIds, allCards, gameCardInformation])


    return { allCards, setAllCards, selectedCardIds, setSelectedCardIds, gameCardInformation, matchedCardIds, setMatchedCardIds, isGameFinished, setIsGameFinished };
}

export const [MemoryGameProvider, useMemoryGameContext] = constate(useMemoryGameState);
