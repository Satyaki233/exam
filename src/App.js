import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import logo from './logo.svg';
import Home from './components/Home'
import About from './components/About'
import Upload from './components/Upload'

import './App.css';
import GiveTest from './components/GiveTest';
import MakeTest from './components/MakeTest';
import Test from './components/Test';
import Paper from './components/Paper';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/upload' exact component={Upload}/>
        <Route path='/GiveTest' exact component={GiveTest}/>
        <Route path='/MakeTest' exact component={MakeTest}/>
        <Route path='/Test' exact component={Test}/>
        <Route path='/Paper' exact component={Paper}/>
      </Switch> 
     
     </BrowserRouter>
    </div>
  );
}

export default App;
