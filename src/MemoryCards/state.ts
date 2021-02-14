import { useState } from 'react';
import constate from 'constate';


function useMemoryGameState() {
    const [selectedCards, setSelectedCards] = useState<[]>([]);
    return { selectedCards, setSelectedCards };
}

export const [MemoryGameProvider, useMemoryGameContext] = constate(useMemoryGameState);
