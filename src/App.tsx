import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import { MainMenuContainer } from './MainMenu/MainMenuContainer';
import { MemoryCardsContainer } from './MemoryCards/MemoryCardsContainer';
import { Success } from './Success/Success';

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/game/:cardType">
                    <MemoryCardsContainer />
                </Route>
                <Route path="/success">
                    <Success />
                </Route>
                <Route path="/">
                    <MainMenuContainer />
                </Route>
            </Switch>
        </Router>
    )
}
