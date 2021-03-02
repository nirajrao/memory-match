import React from 'react';

import { CardState } from '../constants';
import { UnmatchedCard } from './UnmatchedCard';
import { MatchedCard } from './MatchedCard';
import { MatchingCard } from './MatchingCard';
import { useMemoryGameContext } from '../state';

interface Props {
    id: number;
}

export const MemoryCard: React.FC<Props> = (props) => {
    const { id } = props;
    const { allCards } = useMemoryGameContext();

    const { state } = allCards[id];

    if (state === CardState.MATCHED) {
        return <MatchedCard id={id} />
    } else if (state === CardState.MATCHING) {
        return <MatchingCard id={id} />
    } else {
        return <UnmatchedCard id={id} />
    }
}
