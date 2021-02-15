import React from 'react';

import { CardInformation, CardState } from '../constants';
import { UnmatchedCard } from './UnmatchedCard';
import { MatchedCard } from './MatchedCard';

interface Props {
    cardInformation: CardInformation;
}

export const MemoryCard: React.FC<Props> = (props) => {
    const { cardInformation, cardInformation: { state } } = props;

    if (state === CardState.MATCHED) {
        return <MatchedCard />
    }

    return <UnmatchedCard cardInformation={cardInformation} />
}
