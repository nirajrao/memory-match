import { useEffect, useState } from 'react';
import _ from 'underscore';
import constate from 'constate';

import { CardInformation, CardState } from './constants';

function useMemoryGameState() {
    const [allCards, setAllCards] = useState<{[uid: number] : CardInformation}>({
        1: { uid: 1, gid: 1, state: CardState.UNMATCHED },
        2: { uid: 2, gid: 1, state: CardState.UNMATCHED },
        3: { uid: 3, gid: 2, state: CardState.UNMATCHED },
        4: { uid: 4, gid: 2, state: CardState.UNMATCHED },
        5: { uid: 5, gid: 3, state: CardState.UNMATCHED },
        6: { uid: 6, gid: 3, state: CardState.UNMATCHED },
    })

    const [selectedCards, setSelectedCards] = useState<CardInformation[] | [CardInformation] | [CardInformation, CardInformation]>([]);
    const [matchedCards, setMatchedCards] = useState<Set<number>>(new Set([]));


    useEffect(() => {
        const modifiedCards = { ...allCards };
        if (_.size(selectedCards) === 2) {
            const uidList = _.pluck(selectedCards, 'uid');
            const gidList = _.pluck(selectedCards, 'gid');

            if (_.size(_.uniq(uidList)) === 2 && _.size(_.uniq(gidList)) === 1) {
                setMatchedCards(new Set([...matchedCards, ...uidList]));
                _.each(uidList, function(uid) { modifiedCards[uid] = { ...modifiedCards[uid], state: CardState.MATCHED}})
                setAllCards({ ...modifiedCards });
            }
            setSelectedCards([]);
        }
    }, [allCards, setAllCards, matchedCards, selectedCards])

    return { allCards, setAllCards, selectedCards, setSelectedCards, matchedCards };
}

export const [MemoryGameProvider, useMemoryGameContext] = constate(useMemoryGameState);
