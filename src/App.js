import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './page/Main';
import Board from './page/Board';
import Community from './page/Community';
import Download from './page/Download';
import QAndA from './page/QandA';
import Board_Info from './page/Board_Info';


function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route path="/Board" component={Board} />
          <Switch>
          <Route path="/BoardInfo/:index" component={Board_Info} />
          <Route path="/Community" component={Community} />
          </Switch>
          <Route path="/Download" component={Download} />
          <Route path="/QandA" component={QAndA} />
        </BrowserRouter>
    </div>
  );
}

export default App;
