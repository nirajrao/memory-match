import _ from 'underscore';

import { ICardInformation, CardInformation, CardState } from './constants';

export function generateGameCardInformation(cards: ICardInformation[]) {
    let counter = 1;
    const mappedCards = cards.map(card => {
        const newValues = [{id: counter, gid: counter, content: card.content, state: CardState.UNMATCHED}, {id: counter + 1, gid: counter, content: card.content, state: CardState.UNMATCHED}];
        counter += 2;
        return newValues;
    });
    return _.flatten(mappedCards);
}

export function checkSelectedCardsEquality(firstSelectedCard: CardInformation, secondSelectedCard: CardInformation) {
    return firstSelectedCard.gid === secondSelectedCard.gid && firstSelectedCard.id !== secondSelectedCard.id;
}
