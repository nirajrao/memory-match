import React from 'react';
import _ from 'underscore';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import { MainMenuContainer } from './MainMenu/MainMenuContainer';
import { MemoryCardsContainer } from './MemoryCards/MemoryCardsContainer';

import { generateGameCardInformation } from './MemoryCards/utils';
import { MemoryGameProvider } from './MemoryCards/state';

export const App = () => {
    const cards = [ {content: 'hi'}, {content: 'bye'}, {content: 'cya'}];
    const gameCardInformation = _.shuffle(generateGameCardInformation(cards));
    return (
        <Router>
            <Switch>
                <Route path="/game">
                    <MemoryGameProvider gameCardInformation={gameCardInformation}>
                        <MemoryCardsContainer />
                    </MemoryGameProvider>
                </Route>
                <Route path="/">
                    <MainMenuContainer />
                </Route>
            </Switch>
        </Router>
    )
}
