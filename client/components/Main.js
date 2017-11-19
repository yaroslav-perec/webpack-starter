import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TestPage from '../pages/TestPage';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/test' component={TestPage}/>
      </Switch>
    </main>
);

export default Main;
