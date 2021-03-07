import _ from 'underscore';

import { CardContentType, cardContentTypes, ICardInformation, CardInformation, CardState } from './constants';

export function generateGameCardInformation(cards: ICardInformation[]) {
    let counter = 1;
    const mappedCards = cards.map(card => {
        const newValues = [{id: counter, gid: counter, content: card.content, image: card.image ?? undefined,  state: CardState.UNMATCHED}, {id: counter + 1, gid: counter, content: card.content, image: card.image ?? undefined, state: CardState.UNMATCHED}];
        counter += 2;
        return newValues;
    });
    return _.flatten(mappedCards);
}

export function checkSelectedCardsEquality(firstSelectedCard: CardInformation, secondSelectedCard: CardInformation) {
    return firstSelectedCard.gid === secondSelectedCard.gid && firstSelectedCard.id !== secondSelectedCard.id;
}

export function isValidCardContentType(cardType: string | CardContentType): cardType is CardContentType {
    return !!cardType && cardContentTypes.includes(cardType);
}
